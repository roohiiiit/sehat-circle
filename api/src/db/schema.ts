import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const waitlistUsers = sqliteTable('waitlist_users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  referralCode: text('referral_code').notNull().unique(),
  referredBy: text('referred_by'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
