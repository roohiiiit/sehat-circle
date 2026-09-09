import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import PhoneMockup from '../ui/PhoneMockup';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

interface PhoneBlockProps {
  variant: 'manager' | 'elder';
  direction: 'left' | 'right';
  delay: number;
  label: string;
  sublabel: string;
  explanation: string;
}

function PhoneBlock({ variant, direction, delay, label, sublabel, explanation }: PhoneBlockProps) {
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay } },
  };

  const isManager = variant === 'manager';
  const bullets = isManager
    ? ['Just photograph the prescription — we read it for you', 'Monitor real-time adherence streaks', 'Manage unlimited family members']
    : ['Zero application navigation required', 'OS-level, high-contrast lock-screen only', 'Single tap registers the dosage'];

  return (
    <div className={`flex flex-col ${direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
      {/* Phone */}
      <motion.div
        variants={slideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="shrink-0"
      >
        <PhoneMockup variant={variant} />
      </motion.div>

      {/* Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        transition={{ delay: delay + 0.15 }}
        className="flex flex-col gap-4 max-w-lg text-center lg:text-left"
      >
        <div className={`inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border ${
          isManager
            ? 'bg-teal-50 text-teal-700 border-teal-200'
            : 'bg-slate-100 text-slate-600 border-slate-200'
        }`}>
          {isManager ? '📊' : '🔒'} {label}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">{sublabel}</h3>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{explanation}</p>

        <ul className="space-y-2">
          {bullets.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-sm text-slate-600 justify-center lg:justify-start">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                isManager ? 'bg-teal-100 text-teal-700' : 'bg-slate-200 text-slate-600'
              }`}>✓</span>
              {feat}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function InterfaceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      aria-labelledby="showcase-heading"
    >
      {/* Parallax background blobs */}
      <motion.div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-teal-50/80 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-slate-100/80 blur-3xl" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3">Interface Design</p>
          <h2 id="showcase-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Two Users. Two Distinct Interfaces.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            One platform, architected around the completely different needs of the person managing care and the person receiving it.
          </p>
        </motion.div>

        {/* Phone blocks */}
        <div className="flex flex-col gap-24 lg:gap-32">
          <PhoneBlock
            variant="manager"
            direction="left"
            delay={0}
            label="For the Caregiver"
            sublabel="The Manager Hub"
            explanation="Complete control. Upload prescriptions via OCR, monitor adherence streaks in real-time, and manage multi-morbidity schedules for up to 5 family members from a single dashboard."
          />
          <PhoneBlock
            variant="elder"
            direction="right"
            delay={0}
            label="For the Elder"
            sublabel="The Zero-Touch Node"
            explanation="Zero navigation. The system bypasses application menus entirely, delivering a high-contrast, OS-level notification. A single tap registers the dosage."
          />
        </div>
      </div>
    </section>
  );
}
