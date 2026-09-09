import type { PhoneMockupVariant } from '../../types';

interface PhoneMockupProps {
  variant: PhoneMockupVariant;
}

function ManagerHubScreen() {
  return (
    <div className="flex flex-col h-full bg-slate-900 text-white">
      {/* Scan beam animation */}
      <div className="scan-beam" aria-hidden="true" />

      {/* Status bar */}
      <div className="flex justify-between items-center px-4 pt-3 pb-1 text-[10px] text-slate-400">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-teal-400 animate-pulse" />
          Sehat Circle
        </span>
        <span>●●●</span>
      </div>

      {/* Header */}
      <div className="px-4 py-2 border-b border-slate-700/60">
        <div className="flex items-center gap-1.5 mb-0.5">
          <p className="text-[10px] text-teal-400 font-semibold uppercase tracking-widest">Caregiver Hub</p>
          {/* AI active chip */}
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300">
            AI ✦
          </span>
        </div>
        <p className="text-sm font-bold">Family Health Overview</p>
      </div>

      {/* Adherence streak */}
      <div className="px-4 py-2">
        <p className="text-[9px] text-slate-400 uppercase tracking-widest mb-1.5">Adherence Streak — 7 days</p>
        <div className="flex gap-1">
          {[100, 100, 83, 100, 67, 100, 100].map((pct, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full rounded-sm overflow-hidden bg-slate-700" style={{ height: 24 }}>
                <div
                  className="w-full rounded-sm transition-all"
                  style={{
                    height: `${pct}%`,
                    marginTop: `${100 - pct}%`,
                    backgroundColor: pct === 100 ? '#2dd4bf' : pct >= 80 ? '#0d9488' : '#f59e0b',
                    boxShadow: pct === 100 ? '0 0 6px rgba(45,212,191,0.6)' : 'none',
                  }}
                />
              </div>
              <span className="text-[7px] text-slate-500">{['M','T','W','T','F','S','S'][i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Family members */}
      <div className="px-4 py-1.5">
        <p className="text-[9px] text-slate-400 uppercase tracking-widest mb-1.5">Family Members</p>
        <div className="space-y-1.5">
          {[
            { name: 'Amma',   meds: 3, done: 3, color: '#2dd4bf' },
            { name: 'Appacha', meds: 4, done: 3, color: '#f59e0b' },
            { name: 'Ammachi', meds: 2, done: 2, color: '#2dd4bf' },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-2 bg-slate-800 rounded-lg px-2 py-1.5"
              style={{ boxShadow: m.done === m.meds ? '0 0 8px rgba(45,212,191,0.15)' : 'none' }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-slate-900"
                style={{ backgroundColor: m.color, boxShadow: `0 0 8px ${m.color}80` }}
              >
                {m.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold">{m.name}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: m.meds }).map((_, i) => (
                    <div key={i} className="w-3 h-1 rounded-full"
                      style={{
                        backgroundColor: i < m.done ? m.color : '#334155',
                        boxShadow: i < m.done ? `0 0 4px ${m.color}80` : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[9px] font-semibold" style={{ color: m.color }}>{m.done}/{m.meds}</span>
            </div>
          ))}
        </div>
      </div>

      {/* OCR Scan button — glowing */}
      <div className="mt-auto px-4 pb-3">
        <button
          className="w-full py-2 rounded-xl text-white text-[10px] font-bold tracking-wide flex items-center justify-center gap-1.5"
          style={{
            background: 'linear-gradient(90deg, #0d9488, #06b6d4)',
            boxShadow: '0 0 16px rgba(13,148,136,0.5)',
          }}
        >
          <span>📷</span> Scan Prescription
        </button>
      </div>

      {/* Bottom nav */}
      <div className="flex justify-around items-center px-4 py-2 border-t border-slate-700/60">
        {['🏠','💊','👨‍👩‍👧','📊'].map((icon, i) => (
          <span key={i} className={`text-base ${i === 0 ? 'opacity-100' : 'opacity-30'}`}>{icon}</span>
        ))}
      </div>
    </div>
  );
}

function ElderScreen() {
  return (
    <div className="flex flex-col h-full bg-slate-800 text-white relative">
      {/* Ambient AI glow behind the notification */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(45,212,191,0.08) 0%, transparent 70%)' }}
      />

      {/* Lock-screen top */}
      <div className="flex flex-col items-center pt-8 pb-4">
        <p className="text-4xl font-thin tracking-widest text-white/90">9:41</p>
        <p className="text-[10px] text-white/50 mt-1">Wednesday, 13 August</p>
      </div>

      {/* Notification card — glowing border */}
      <div
        className="mx-3 rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(45,212,191,0.25)',
          boxShadow: '0 0 24px rgba(45,212,191,0.15)',
        }}
      >
        {/* App badge */}
        <div className="flex items-center gap-2 px-3 pt-3 pb-1.5">
          <div className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold text-slate-900"
            style={{ background: 'linear-gradient(135deg, #2dd4bf, #06b6d4)', boxShadow: '0 0 8px rgba(45,212,191,0.5)' }}
          >S</div>
          <p className="text-[10px] text-white/60 font-medium">Sehat Circle · Now</p>
        </div>

        {/* Message */}
        <div className="px-3 pb-3">
          <p className="text-sm font-bold text-white leading-snug">Time for your evening dose</p>
          <p className="text-[11px] text-white/60 mt-0.5">Metformin 500mg · Lisinopril 10mg</p>

          {/* CTA — gradient button */}
          <button
            className="mt-3 w-full py-2.5 rounded-xl text-slate-900 text-xs font-bold tracking-wide"
            style={{ background: 'linear-gradient(90deg, #2dd4bf, #06b6d4)', boxShadow: '0 0 16px rgba(45,212,191,0.4)' }}
          >
            ✓ Mark as Taken
          </button>
        </div>
      </div>

      {/* AI indicator */}
      <div className="flex items-center justify-center mt-4 gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
        <p className="text-[10px] text-white/30">AI-routed · Caregiver notified</p>
      </div>

      {/* Lock-screen bottom */}
      <div className="mt-auto flex justify-between items-center px-6 py-4">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base">📷</div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base">🔦</div>
      </div>
    </div>
  );
}

export default function PhoneMockup({ variant }: PhoneMockupProps) {
  const isManager = variant === 'manager';
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[3rem] blur-2xl scale-110"
        style={{
          background: isManager
            ? 'radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
        }}
      />
      {/* Shell */}
      <div
        className="relative w-56 h-[480px] sm:w-64 sm:h-[540px] rounded-[2.8rem] border-4 shadow-2xl overflow-hidden"
        style={{
          borderColor: isManager ? '#1e293b' : '#1e293b',
          backgroundColor: isManager ? '#0f172a' : '#1e293b',
          boxShadow: isManager
            ? '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(45,212,191,0.1)'
            : '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.15)',
        }}
        role="img"
        aria-label={isManager ? 'Manager Hub dashboard interface' : 'Elder zero-touch lock-screen interface'}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-2xl z-10"
          style={{ backgroundColor: isManager ? '#0f172a' : '#1e293b' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 pt-5">
          {isManager ? <ManagerHubScreen /> : <ElderScreen />}
        </div>
      </div>
    </div>
  );
}
