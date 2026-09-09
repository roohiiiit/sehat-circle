import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ComparisonRowData } from '../../types';

const ROWS: ComparisonRowData[] = [
  {
    feature: 'Family Access',
    traditional: 'Every family member needs their own login and has to manage their own profile.',
    sehatCircle: 'One manager runs everything. Elderly members never create an account.',
  },
  {
    feature: 'Usability',
    traditional: 'Makes parents figure out confusing menus and pop-ups.',
    sehatCircle: 'Zero app navigation. Just a lock-screen nudge.',
  },
  {
    feature: 'Data Entry',
    traditional: 'You have to type out every medication and schedule by hand.',
    sehatCircle: 'Just upload a photo of the prescription. We do the rest.',
  },
  {
    feature: 'Inventory',
    traditional: "You have to remember to check if they're running low.",
    sehatCircle: 'We count the doses and warn you before they run out.',
  },
  {
    feature: 'Trust & Privacy',
    traditional: 'Asks for dozens of device permissions with unclear data use.',
    sehatCircle: 'Asks for only what the scan feature actually needs.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function ComparisonGrid() {
  return (
    <section className="py-24 bg-white" aria-labelledby="comparison-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3">
            Market Analysis
          </p>
          <h2
            id="comparison-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Traditional Health Platforms Fail.
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Every mainstream health app was designed for patients who are already digitally
            fluent. Sehat Circle was designed for the family managing care on their behalf.
          </p>
        </motion.div>

        {/* Table card */}
        <motion.div
          className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]" role="table">
              <thead>
                <tr className="bg-slate-900">
                  <th
                    scope="col"
                    className="px-4 py-4 sm:px-6 text-left text-xs font-semibold uppercase tracking-widest text-slate-400 w-32"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 sm:px-6 text-left text-xs font-semibold uppercase tracking-widest text-red-400"
                  >
                    Traditional Health Apps
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 sm:px-6 text-left"
                    style={{ background: 'linear-gradient(135deg, rgba(13,148,136,0.15), rgba(6,182,212,0.08))' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-widest ai-gradient-text">
                        Sehat Circle
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 whitespace-nowrap">
                        ✦ AI
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ROWS.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                  >
                    <td className="px-4 py-5 sm:px-6 align-top">
                      <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 bg-teal-50 px-2 py-1 rounded-md whitespace-nowrap">
                        {row.feature}
                      </span>
                    </td>
                    <td className="px-4 py-5 sm:px-6 align-top">
                      <div className="flex items-start gap-2">
                        <span
                          className="mt-0.5 shrink-0 text-red-400 font-bold text-base leading-none"
                          aria-label="Negative"
                        >
                          ✗
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {row.traditional}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-5 sm:px-6 align-top">
                      <div className="flex items-start gap-2">
                        <span
                          className="mt-0.5 shrink-0 text-teal-500 font-bold text-base leading-none"
                          aria-label="Positive"
                        >
                          ✓
                        </span>
                        <p className="text-sm text-slate-800 font-medium leading-relaxed">
                          {row.sehatCircle}
                        </p>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
