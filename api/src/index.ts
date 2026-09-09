import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';
import { Resend } from 'resend';
import { waitlistUsers } from './db/schema';

type Bindings = {
  DB: D1Database;
  RESEND_API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Apply CORS middleware globally to accept cross-origin requests
app.use('/api/*', cors());

// Define regex for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildWelcomeEmail(email: string, referralCode: string): string {
  const referralLink = `https://sehatcircle.com/?ref=${referralCode}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Sehat Circle</title>
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a6b4a,#0f9b6a);padding:40px 40px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:-0.5px;">Sehat Circle</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">The Caregiver-First Health Platform</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;color:#ffffff;font-size:22px;font-weight:600;">You're on the list 🎉</h2>
              <p style="margin:0 0 24px;color:#a0a0a0;font-size:15px;line-height:1.6;">
                Thank you for joining the Sehat Circle waitlist. We're building the easiest way to manage your family's health remotely — your elder never has to open an app.
              </p>
              <p style="margin:0 0 8px;color:#a0a0a0;font-size:14px;">Your personal referral code:</p>
              <!-- Referral Code Box -->
              <div style="background:#0f0f0f;border:1px solid #2a2a2a;border-radius:10px;padding:20px;text-align:center;margin-bottom:24px;">
                <span style="font-size:32px;font-weight:700;letter-spacing:6px;color:#0f9b6a;font-family:monospace;">${referralCode}</span>
              </div>
              <p style="margin:0 0 24px;color:#a0a0a0;font-size:14px;line-height:1.6;">
                Share your referral link to move up the waitlist:
              </p>
              <!-- Referral Link Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#0f9b6a;border-radius:8px;">
                    <a href="${referralLink}" style="display:inline-block;padding:12px 28px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Share your link →</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;color:#606060;font-size:13px;line-height:1.6;">
                Or copy: <span style="color:#a0a0a0;">${referralLink}</span>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #2a2a2a;padding:24px 40px;text-align:center;">
              <p style="margin:0;color:#505050;font-size:12px;">
                You're receiving this because you signed up at sehatcircle.com<br/>
                © 2026 Sehat Circle · <a href="mailto:info@kochicode.online" style="color:#505050;">info@kochicode.online</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

app.post('/api/waitlist', async (c) => {
  try {
    const body = await c.req.json();
    const { email, referred_by } = body;

    if (!email || !emailRegex.test(email)) {
      return c.json({ error: 'Invalid email address provided.' }, 400);
    }

    const db = drizzle(c.env.DB);

    // Verify if email already exists
    const existingUser = await db
      .select()
      .from(waitlistUsers)
      .where(eq(waitlistUsers.email, email))
      .get();

    if (existingUser) {
      return c.json({ error: 'This email is already on the waitlist.' }, 409);
    }

    // Generate unique 6-character alphanumeric referral code
    const referralCode = nanoid(6);

    // Insert into DB
    await db.insert(waitlistUsers).values({
      email,
      referralCode,
      referredBy: referred_by || null,
    });

    // Send welcome email via Resend (non-blocking — don't fail signup if email fails)
    try {
      const resend = new Resend(c.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Sehat Circle <info@kochicode.online>',
        to: email,
        subject: "You're on the Sehat Circle waitlist 🎉",
        html: buildWelcomeEmail(email, referralCode),
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the request — the user is still on the waitlist
    }

    return c.json(
      {
        message: 'Successfully joined the waitlist!',
        referral_code: referralCode,
      },
      201
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return c.json({ error: 'Internal server error.' }, 500);
  }
});

export default app;

