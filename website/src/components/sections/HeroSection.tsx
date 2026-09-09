import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Badge from '../ui/Badge';
import EmailForm from '../ui/EmailForm';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50 px-4 py-24"
      aria-label="Hero"
    >
      {/* ── AI Aurora Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary aurora — teal */}
        <div className="aurora-blob absolute top-[-10%] left-1/2 -translate-x-[30%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.22) 0%, rgba(6,182,212,0.10) 50%, transparent 80%)' }}
        />
        {/* Secondary aurora — indigo */}
        <div className="aurora-blob-slow absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)' }}
        />
        {/* Tertiary aurora — bottom */}
        <div className="aurora-blob absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)', animationDelay: '4s' }}
        />

        {/* Neural dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-6">

        {/* AI system badge */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <Badge text="The Caregiver-First Architecture" />
          {/* AI chip row */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-950/10 border border-teal-500/20 text-teal-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse inline-block" />
              Instant Photo Import
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse inline-block" style={{ animationDelay: '0.5s' }} />
              Zero-Touch Protocol
            </span>
          </div>
        </motion.div>

        {/* Headline — gradient shimmer on key phrase */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight"
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
        >
          Your grandparent never has to{' '}
          <span className="relative inline-block">
            <span className="ai-gradient-text">open this app.</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
        >
          You manage the health records remotely. They interact solely through a passive lock-screen notification.{' '}
          <strong className="text-slate-700 font-semibold">No menus, no learning curve, no friction.</strong>
        </motion.p>

        {/* Form */}
        <motion.div
          className="flex flex-col items-center gap-4 w-full"
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}
        >
          <EmailForm variant="light" id="hero-email-form" />
        </motion.div>

        {/* Trust markers */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500"
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
        >
          {[
            { icon: '🔒', label: 'Your data stays private' },
            { icon: '⚡', label: 'No typing — just a photo' },
            { icon: '👨‍👩‍👧', label: 'Unlimited family members' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span>{item.icon}</span>
              <span className="font-medium text-slate-600">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-6 bg-slate-300"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
