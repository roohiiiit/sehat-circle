import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function ProactiveLayer() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" aria-labelledby="proactive-heading">
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-3xl" />
        {/* Neural dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(45,212,191,0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Horizontal scan line on dark bg */}
        <div
          className="absolute left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.15), transparent)', top: '30%', animation: 'aurora-slow 8s ease-in-out infinite' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-400">Never runs out</p>
          </div>
          <h2 id="proactive-heading" className="text-3xl md:text-4xl font-bold text-white">
            We notice before you do.
          </h2>
        </motion.div>

        {/* Featured highlight block */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative"
        >
          {/* Animated border glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-2xl bg-gradient-to-r from-teal-500/40 via-teal-600/20 to-transparent animate-pulse"
            style={{ animationDuration: '3s' }}
          />

          <div className="relative bg-slate-800/80 backdrop-blur rounded-2xl border-l-4 border-teal-500 p-8 lg:p-12 glow-card">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Main quote */}
              <div className="flex-1">
                <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-light">
                  "Most health apps only tell you what{' '}
                  <em className="text-white font-medium not-italic">already happened</em>. Sehat Circle{' '}
                  <strong className="text-teal-400 font-semibold">keeps track of Appacha's daily doses</strong> and warns you days before a prescription runs empty, so you never have to scramble for a last-minute refill."
                </p>
              </div>

              {/* Sub-points */}
              <div className="flex flex-col gap-4 lg:w-64 shrink-0">
                {[
                  {
                    icon: '📉',
                    title: 'Running Low',
                    body: 'We track how many pills are left and alert you before they run out.',
                  },
                  {
                    icon: '🗓️',
                    title: 'Next Visit Reminder',
                    body: "Get notified exactly when it's time to schedule the next doctor's appointment.",
                  },
                ].map((point) => (
                  <div key={point.title} className="flex gap-3 p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                    <span className="text-xl shrink-0 mt-0.5">{point.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-teal-300 mb-0.5">{point.title}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: 'Unlimited', label: 'Family members per account' },
            { value: '0',     label: 'App interactions for elders' },
            { value: '100%',  label: 'Remote management' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl sm:text-4xl font-extrabold ai-gradient-text"
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
