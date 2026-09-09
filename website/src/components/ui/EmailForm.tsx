import { type FormEvent, useState } from 'react';

interface EmailFormProps {
  variant?: 'light' | 'dark';
  id?: string;
}

export default function EmailForm({ variant = 'light', id = 'email-form' }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.rohitf2007.workers.dev/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setReferralCode(data.referral_code);
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col gap-2 p-4 rounded-xl border text-sm font-medium ${
        variant === 'dark'
          ? 'bg-teal-900/30 border-teal-500/40 text-teal-300'
          : 'bg-teal-50 border-teal-200 text-teal-700'
      }`}>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">You're on the list! We'll be in touch soon.</span>
        </div>
        <div className="mt-2 p-3 bg-white/10 rounded-lg border border-teal-500/20">
          <p className="text-xs opacity-80 mb-1">Your referral code:</p>
          <p className="text-lg font-mono tracking-widest font-bold">{referralCode}</p>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          aria-label="Email address"
          className={`flex-1 px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-teal-500/30 ${
            variant === 'dark'
              ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-teal-500'
              : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-teal-400'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-teal-700/20 active:scale-95 whitespace-nowrap cursor-pointer ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
        >
          {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
      )}
      <p className={`text-xs ${variant === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
        Priority access for early beta testers.
      </p>
    </form>
  );
}
