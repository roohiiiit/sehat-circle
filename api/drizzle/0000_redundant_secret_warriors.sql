CREATE TABLE `waitlist_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`referral_code` text NOT NULL,
	`referred_by` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `waitlist_users_email_unique` ON `waitlist_users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `waitlist_users_referral_code_unique` ON `waitlist_users` (`referral_code`);