import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  useSpring,
} from 'motion/react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  accentBg: string;
  form: React.ReactNode;
}

// ─── The SVG path shared between the track and the animated fill ──────────────
// Starts top-right, zigzags to bottom-left through 4 checkpoints
const PATH_D =
  'M 780,60 C 780,160 200,200 200,320 C 200,440 780,480 780,600 C 780,720 200,760 200,880 C 200,1000 780,1040 780,1140';

// Y positions of each checkpoint along the SVG viewBox (0 → 1200 height)
const CHECKPOINT_Y = [320, 600, 880, 1140];
// X positions for the node dots (alternating sides)
const CHECKPOINT_X = [200, 780, 200, 780];

// ─── Form Components ──────────────────────────────────────────────────────────

function PromptForm() {
  const [input, setInput] = useState('');
  const [tags] = useState(['Build a SaaS dashboard', 'Create a mobile app', 'Launch an e-commerce site', 'Design an AI chatbot']);
  const [active, setActive] = useState(false);
  const [sent, setSent] = useState(false);

  const handleTag = (tag: string) => setInput(tag);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setActive(true);
    setTimeout(() => { setSent(true); setActive(false); }, 1800);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">What do you want to build?</p>
      <div className={`relative flex items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-sm transition-all duration-300 ${active ? 'border-sky-400 ring-2 ring-sky-100' : 'border-slate-200'}`}>
        <span className="text-slate-400 text-sm">›</span>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Describe your idea…"
          className="flex-1 bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
        />
        {active && (
          <motion.div
            className="absolute right-3 flex gap-0.5 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[0, 0.15, 0.3].map(d => (
              <motion.span
                key={d}
                className="w-1 h-1 rounded-full bg-sky-400"
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, delay: d }}
              />
            ))}
          </motion.div>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <motion.button
            key={tag}
            onClick={() => handleTag(tag)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-[11px] font-medium text-sky-600 bg-sky-50 border border-sky-100 rounded-full px-3 py-1 hover:bg-sky-100 transition-colors"
          >
            {tag}
          </motion.button>
        ))}
      </div>
      <motion.button
        onClick={handleGenerate}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-2.5 rounded-xl bg-[#111] text-white text-[13px] font-semibold tracking-wide shadow hover:bg-slate-800 transition-colors"
      >
        {sent ? '✓ Idea captured — generating blueprint…' : active ? 'Thinking…' : 'Generate with Archi →'}
      </motion.button>
    </div>
  );
}

function StackForm() {
  const [selected, setSelected] = useState<Record<string, string>>({ frontend: '', database: '', auth: '' });

  const groups = [
    { key: 'frontend', label: 'Frontend', options: ['Next.js', 'Vite + React', 'Nuxt'] },
    { key: 'database', label: 'Database', options: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { key: 'auth', label: 'Auth', options: ['Clerk', 'Auth0', 'Magic Link'] },
  ];

  const toggle = (key: string, val: string) =>
    setSelected(s => ({ ...s, [key]: s[key] === val ? '' : val }));

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Configure your stack</p>
      {groups.map(g => (
        <div key={g.key}>
          <p className="text-[11px] text-slate-400 mb-1.5 font-medium">{g.label}</p>
          <div className="flex gap-2 flex-wrap">
            {g.options.map(opt => {
              const isActive = selected[g.key] === opt;
              return (
                <motion.button
                  key={opt}
                  onClick={() => toggle(g.key, opt)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`text-[12px] font-medium rounded-lg px-3 py-1.5 border transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-100'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300'
                  }`}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
      {Object.values(selected).every(Boolean) && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12px] text-emerald-600 font-semibold flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Stack locked in. Archi is scaffolding your project…
        </motion.div>
      )}
    </div>
  );
}

function ConsoleForm() {
  const lines = [
    '> Cloning Archi template…         ✓',
    '> Installing dependencies…        ✓',
    '> Configuring environment…        ✓',
    '> Running database migrations…    ✓',
    '> Build successful in 4.2s        ✓',
  ];
  const [visible, setVisible] = useState(0);
  const [copied, setCopied] = useState(false);
  const apiKey = 'archi_live_sk_xK92…mN4T';

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), 600);
    return () => clearTimeout(t);
  }, [visible]);

  const copy = () => {
    navigator.clipboard.writeText(apiKey).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Build console</p>
      <div className="bg-[#0f172a] rounded-xl p-4 font-mono text-[11px] leading-relaxed min-h-[100px] space-y-0.5">
        {lines.slice(0, visible).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-emerald-400"
          >
            {line}
          </motion.div>
        ))}
        {visible < lines.length && (
          <motion.span
            className="inline-block w-[6px] h-[13px] bg-sky-400 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        )}
      </div>
      {visible >= lines.length && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5"
        >
          <div>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">API Key</p>
            <p className="font-mono text-[12px] text-slate-700 tracking-tight">{apiKey}</p>
          </div>
          <motion.button
            onClick={copy}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

function LaunchForm() {
  const [on, setOn] = useState(false);
  const [celebrated, setCelebrated] = useState(false);

  const handleToggle = () => {
    setOn(v => !v);
    if (!on) {
      setCelebrated(true);
      setTimeout(() => setCelebrated(false), 2400);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Deploy to production</p>
      <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm">
        <div>
          <p className="text-[13px] font-semibold text-slate-800">Production environment</p>
          <p className="text-[11px] text-slate-400 mt-0.5">{on ? 'Live — all systems operational' : 'Staged — ready to deploy'}</p>
        </div>
        <motion.button
          onClick={handleToggle}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${on ? 'bg-emerald-500' : 'bg-slate-200'}`}
        >
          <motion.span
            className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow"
            animate={{ x: on ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {celebrated && (
          <motion.div
            key="celebrate"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-100 px-5 py-4 text-center"
          >
            <motion.p
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 0.5 }}
              className="text-2xl mb-1"
            >
              🚀
            </motion.p>
            <p className="text-[13px] font-bold text-emerald-700">You're live!</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Archi deployed your app in seconds.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {on && !celebrated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-3 gap-2"
        >
          {[
            { label: 'Uptime', value: '99.9%', color: 'text-emerald-600' },
            { label: 'Response', value: '48ms', color: 'text-sky-600' },
            { label: 'Requests', value: '1.2k/s', color: 'text-violet-600' },
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-slate-100 rounded-xl p-3 text-center shadow-sm">
              <p className={`text-[15px] font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ─── Step Data ────────────────────────────────────────────────────────────────

const STEPS: Step[] = [
  {
    id: 1,
    label: '01',
    title: 'The Spark',
    subtitle: 'Capture your vision',
    description: 'Describe your product idea in plain language. Archi understands context, intent, and scope — no technical jargon required.',
    color: '#0ea5e9',
    accentBg: 'from-sky-50 to-white',
    form: <PromptForm />,
  },
  {
    id: 2,
    label: '02',
    title: 'The Blueprint',
    subtitle: 'Configure your stack',
    description: 'Choose your preferred technologies. Archi adapts to your choices and intelligently fills the gaps with best-in-class defaults.',
    color: '#8b5cf6',
    accentBg: 'from-violet-50 to-white',
    form: <StackForm />,
  },
  {
    id: 3,
    label: '03',
    title: 'The Build',
    subtitle: 'Watch it compile',
    description: 'Archi scaffolds your entire codebase, runs migrations, installs dependencies, and hands you your secret keys — all in seconds.',
    color: '#10b981',
    accentBg: 'from-emerald-50 to-white',
    form: <ConsoleForm />,
  },
  {
    id: 4,
    label: '04',
    title: 'The Launch',
    subtitle: 'Go live instantly',
    description: 'Deploy to production with a single toggle. Archi handles CDN configuration, SSL, and monitoring from day one.',
    color: '#f59e0b',
    accentBg: 'from-amber-50 to-white',
    form: <LaunchForm />,
  },
];

// ─── SVG Winding Track ────────────────────────────────────────────────────────

function WindingTrack({ progress }: { progress: any }) {
  const pathLength = useSpring(progress, { stiffness: 80, damping: 20 });

  return (
    <svg
      viewBox="0 0 980 1200"
      className="w-full h-full"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="winding-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="33%" stopColor="#8b5cf6" />
          <stop offset="66%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background track */}
      <path
        d={PATH_D}
        stroke="#e2e8f0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Filled progress track */}
      <motion.path
        d={PATH_D}
        stroke="url(#winding-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
        filter="url(#glow)"
      />

      {/* Checkpoint nodes */}
      {STEPS.map((step, i) => {
        const cx = CHECKPOINT_X[i];
        const cy = CHECKPOINT_Y[i];
        return (
          <g key={step.id}>
            {/* Outer ring (always visible) */}
            <circle cx={cx} cy={cy} r="18" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            {/* Inner filled dot */}
            <motion.circle
              cx={cx}
              cy={cy}
              r="10"
              fill={step.color}
              style={{
                opacity: useTransform(progress, [i / 4 - 0.05, i / 4 + 0.05], [0.25, 1]),
                scale: useTransform(progress, [i / 4 - 0.05, i / 4 + 0.08], [0.6, 1]),
              }}
            />
            {/* Step number */}
            <text
              x={cx}
              y={cy + 4}
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="white"
              fontFamily="monospace"
            >
              {String(step.id).padStart(2, '0')}
            </text>
          </g>
        );
      })}

      {/* Animated glowing dot at the frontier */}
      <motion.circle r="5" fill="white" filter="url(#glow)">
        <animateMotion dur="0s" fill="freeze">
          <mpath xlinkHref="#winding-path-ref" />
        </animateMotion>
      </motion.circle>
    </svg>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function WindingProgressSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll 0→1 to step 0→3
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * STEPS.length), STEPS.length - 1);
    setActiveStep(idx < 0 ? 0 : idx);
  });

  const step = STEPS[activeStep];

  // Card side: checkpoints alternate left / right
  // Checkpoints 0,2 are at x=200 (left-ish), 1,3 at x=780 (right-ish)
  const cardOnRight = activeStep % 2 === 1;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#fafafa]"
      style={{ height: `${STEPS.length * 120}vh` }}
      id="winding-progress"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

        {/* ── Section header ── */}
        <div className="pt-10 pb-4 px-6 md:px-16 text-center">
          <motion.p
            key="eyebrow"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-500 mb-2"
          >
            How Archi Works
          </motion.p>
          <h2
            className="text-[2.1rem] md:text-[3rem] font-light text-[#111] leading-tight tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            From <span className="text-sky-500">{"{"}</span>Prompt<span className="text-sky-500">{"}"}</span> to Production
          </h2>
        </div>

        {/* ── Main two-column layout ── */}
        <div className="flex-1 flex items-stretch max-w-[1300px] w-full mx-auto px-4 md:px-12 pb-10 gap-8 overflow-hidden">

          {/* ─ Left Column: SVG Track ─ */}
          <div className="relative flex-shrink-0 w-[180px] md:w-[260px] lg:w-[340px] flex items-center justify-center">
            <WindingTrack progress={scrollYProgress} />
          </div>

          {/* ─ Right Column: Active Step Card ─ */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                {/* Progress indicators */}
                <div className="flex items-center gap-2 mb-8">
                  {STEPS.map((s, i) => (
                    <motion.div
                      key={s.id}
                      className="h-[3px] rounded-full transition-all duration-500"
                      animate={{
                        width: i === activeStep ? 32 : 12,
                        backgroundColor: i <= activeStep ? s.color : '#e2e8f0',
                      }}
                    />
                  ))}
                  <span className="ml-2 text-[11px] font-semibold text-slate-400 tabular-nums">
                    {activeStep + 1} / {STEPS.length}
                  </span>
                </div>

                {/* Step label + title */}
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                      style={{ color: step.color, backgroundColor: step.color + '18' }}
                    >
                      Step {step.label}
                    </span>
                    <span className="text-[12px] text-slate-400 font-medium">{step.subtitle}</span>
                  </div>
                  <h3
                    className="text-[2rem] md:text-[2.6rem] font-light text-[#111] leading-tight tracking-tight"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-slate-500 leading-[1.65] max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Interactive form card */}
                <motion.div
                  className={`relative bg-gradient-to-br ${step.accentBg} border border-slate-100 rounded-2xl p-5 shadow-sm max-w-[480px]`}
                  style={{ boxShadow: `0 2px 24px 0 ${step.color}14` }}
                  layoutId="form-card"
                >
                  {/* Accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}44)` }}
                  />
                  {step.form}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <AnimatePresence>
          {activeStep < STEPS.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
            >
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-400">Scroll to continue</p>
              <motion.div
                className="w-[1px] h-6 bg-gradient-to-b from-slate-300 to-transparent"
                animate={{ scaleY: [0, 1, 0], originY: 0 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
