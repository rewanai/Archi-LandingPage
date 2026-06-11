import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../i18n';
import techIcon from '../assets/images/tech-icon.png';

// ─── Stat card data ───────────────────────────────────────────────────────────

interface StatCard {
  target: number;
  accentKey: string;
  titleKey: string;
  descKey: string;
}

const statCards: StatCard[] = [
  { target: 95, accentKey: 'techstack.stat1.accent', titleKey: 'techstack.stat1.title', descKey: 'techstack.stat1.desc' },
  { target: 720, accentKey: 'techstack.stat2.accent', titleKey: 'techstack.stat2.title', descKey: 'techstack.stat2.desc' },
  { target: 14, accentKey: 'techstack.stat3.accent', titleKey: 'techstack.stat3.title', descKey: 'techstack.stat3.desc' },
  { target: 100, accentKey: 'techstack.stat4.accent', titleKey: 'techstack.stat4.title', descKey: 'techstack.stat4.desc' },
];

// ─── Easing helper ────────────────────────────────────────────────────────────
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, inView: boolean, duration = 1500) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    if (!inView) {
      setDisplay(0);
      return;
    }

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      if (progress < 0.82) {
        setDisplay(Math.floor(Math.random() * (target + 1)));
      } else {
        setDisplay(Math.round(easedProgress * target));
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [inView, target, duration]);

  return display;
}

// ─── SchematicDiagram Component ───────────────────────────────────────────────
export const SchematicDiagram: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [activeOutputIndex, setActiveOutputIndex] = useState(0);

  // Dynamic scaling hook to adapt the schematic completely to screens without clipping
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mobile = width < 768;
      setIsMobile(mobile);

      if (mobile) {
        const parentWidth = Math.min(360, width);
        const padding = 16;
        const targetWidth = width - padding;
        const newScale = Math.min(1.0, targetWidth / 360);
        setScale(newScale);
      } else {
        const parentWidth = Math.min(1200, width);
        const padding = width < 1024 ? 32 : 48;
        const targetWidth = parentWidth - padding;
        const scaleW = targetWidth / 800;

        // Compact design: cap scale at 1.0 to preserve native sizes, ensuring it remains small and readable
        const newScale = Math.min(1.0, scaleW);
        setScale(newScale);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cycle active highlight state for mobile output grid
  React.useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveOutputIndex((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Labels structure representing software nodes (shifted coordinates to eliminate wasted vertical spacing)
  const labels = [
    { id: 'customer', textKey: 'schematic.customer', x: 180, y: 30 },
    { id: 'code', textKey: 'schematic.code', x: 620, y: 30 },
    { id: 'bug', textKey: 'schematic.bug', x: 150, y: 210 },
    { id: 'issues', textKey: 'schematic.issues', x: 270, y: 210 },
    { id: 'ticket', textKey: 'schematic.ticket', x: 530, y: 210 },
    { id: 'pr', textKey: 'schematic.pr', x: 650, y: 210 },
  ];

  // Particle path animations representing data packets flowing
  const dataPackets = [
    { id: 'tp-l', path: 'M 400 65 L 400 50 L 350 30 L 75 30', delay: 0 },
    { id: 'tp-r', path: 'M 400 65 L 400 50 L 450 30 L 725 30', delay: 1.5 },
    { id: 'bm-l', path: 'M 400 175 L 400 190 L 350 210 L 75 210', delay: 0.75 },
    { id: 'bm-r', path: 'M 400 175 L 400 190 L 450 210 L 725 210', delay: 2.2 },
  ];

  if (isMobile) {
    // Mobile schematic layout with central processor and vertical flow
    const mobileOutputs = [
      { id: 'code', textKey: 'schematic.code', x: 90, y: 340 },
      { id: 'bug', textKey: 'schematic.bug', x: 270, y: 340 },
      { id: 'issues', textKey: 'schematic.issues', x: 90, y: 420 },
      { id: 'ticket', textKey: 'schematic.ticket', x: 270, y: 420 },
      { id: 'pr', textKey: 'schematic.pr', x: 180, y: 500 },
    ];

    // Mobile path based on active output index
    const getMobileActivePath = (index: number) => {
      const out = mobileOutputs[index];
      return `M 180 240 L 180 ${out.y} L ${out.x} ${out.y}`;
    };

    return (
      <div
        ref={containerRef}
        className="w-full flex items-center justify-center select-none overflow-hidden py-4"
        style={{ height: `${560 * scale}px` }}
        id="schematic-container-mobile"
        dir="ltr"
      >
        <div
          className="relative w-[360px] h-[560px] shrink-0 transition-transform duration-300"
          style={{ transform: `scale(${scale})` }}
        >
          {/* Mobile SVG Circuit Wires */}
          <svg viewBox="0 0 360 560" className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <filter id="soft-glow-mobile" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Circuit background lines */}
            <g stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1.2" fill="none">
              {/* Top input to processor */}
              <path d="M 180 70 L 180 140" />

              {/* Main vertical trunk */}
              <path d="M 180 240 L 180 500" />

              {/* Horizontal branches for output pairs */}
              <path d="M 90 340 L 270 340" />
              <path d="M 90 420 L 270 420" />
            </g>

            {/* Static square nodes for tech feel */}
            <rect x="177" y="67" width="6" height="6" fill="#1c1917" rx="1" />
            <rect x="87" y="337" width="6" height="6" fill="#1c1917" rx="1" />
            <rect x="267" y="337" width="6" height="6" fill="#1c1917" rx="1" />
            <rect x="87" y="417" width="6" height="6" fill="#1c1917" rx="1" />
            <rect x="267" y="417" width="6" height="6" fill="#1c1917" rx="1" />
            <rect x="177" y="497" width="6" height="6" fill="#1c1917" rx="1" />

            {/* Dynamic data flow particles */}
            {/* Input to Processor flow */}
            <circle r="2" fill="#38bdf8">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path="M 180 70 L 180 140"
              />
            </circle>

            {/* Processor to active Output flow */}
            <path id="mobile-active-path" d={getMobileActivePath(activeOutputIndex)} fill="none" stroke="none" />
            <circle r="2.5" fill="#38bdf8" filter="url(#soft-glow-mobile)">
              <animateMotion dur="1.5s" repeatCount="indefinite">
                <mpath href="#mobile-active-path" />
              </animateMotion>
            </circle>
          </svg>

          {/* 1. Input Pill (Business Idea) */}
          <div
            className="absolute left-[180px] top-[40px] z-30"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="flex items-center justify-center h-8 px-4 bg-zinc-900 border border-zinc-900 text-[#f4f1eb] text-[11px] font-mono tracking-wider rounded-full shadow-md whitespace-nowrap">
              {t('schematic.customer')}
            </div>
          </div>

          {/* 2. Central Processor Box (ARCHI.A1) */}
          <div
            className="absolute left-[180px] top-[190px] w-[120px] h-[120px] flex items-center justify-center z-20"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            {/* Dotted border frame */}
            <motion.div 
              className="absolute inset-[-10px] border border-dashed border-[#38bdf8]/20 rounded-[1.8rem] pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Concentric second outline */}
            <motion.div 
              className="absolute inset-[-4px] border border-[#38bdf8]/10 rounded-[1.5rem] pointer-events-none"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
            />

            {/* Ripple waves for constant pulsing telemetry aura */}
            <motion.div
              className="absolute inset-0 border border-[#38bdf8]/30 rounded-[1.2rem] pointer-events-none"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 1.35],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute inset-0 border border-[#38bdf8]/30 rounded-[1.2rem] pointer-events-none"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 1.35],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.25
              }}
            />

            {/* Main Processor Body */}
            <motion.div 
              className="w-full h-full bg-white border border-[#38bdf8]/20 rounded-[1.2rem] flex flex-col items-center justify-center p-3 relative"
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 15px rgba(56,189,248,0.08), 0 0 0 1px rgba(56,189,248,0.15)",
                  "0 0 25px rgba(56,189,248,0.22), 0 0 0 2px rgba(56,189,248,0.25)",
                  "0 0 15px rgba(56,189,248,0.08), 0 0 0 1px rgba(56,189,248,0.15)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="animate-[spin_8s_linear_infinite] mb-1">
                <svg viewBox="0 0 100 100" className="w-[42px] h-[42px] text-zinc-900 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <g fill="currentColor">
                    <rect x="41" y="16" width="18" height="68" rx="9" />
                    <rect x="16" y="41" width="68" height="18" rx="9" />
                    <rect x="29" y="29" width="42" height="42" rx="10" />
                  </g>
                  <circle cx="50" cy="50" r="10" fill="#ffffff" />
                </svg>
              </div>
              <div className="text-[8px] font-mono tracking-widest text-[#38bdf8]">
                ARCHI.A1
              </div>
            </motion.div>
          </div>

          {/* 3. Output Grid (6 Capsules) */}
          {mobileOutputs.map((lbl, idx) => {
            const isActive = activeOutputIndex === idx;
            return (
              <button
                key={lbl.id}
                className={`absolute flex items-center justify-center h-8 px-3.5 min-w-[125px] rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 z-30 border whitespace-nowrap ${isActive
                  ? 'bg-zinc-900 border-zinc-900 text-[#f4f1eb] shadow-md shadow-zinc-900/15 scale-[1.04]'
                  : 'bg-white/95 border-[#38bdf8]/20 text-slate-800 backdrop-blur-[2px] shadow-[0_2px_8px_rgba(56,189,248,0.02)]'
                  }`}
                style={{
                  left: `${lbl.x}px`,
                  top: `${lbl.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => setActiveOutputIndex(idx)}
                id={`pill-mobile-${lbl.id}`}
              >
                {t(lbl.textKey)}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center select-none overflow-hidden"
      style={{ height: `${240 * scale}px` }}
      id="schematic-container"
      dir="ltr"
    >
      <div
        className="relative w-[800px] h-[240px] shrink-0 transition-transform duration-300"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Schematic Circuit Lines (drawn beautifully in SVG) */}
        <svg viewBox="0 0 800 240" className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            {/* Soft shadow for connecting pins */}
            <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dynamic circuit wires */}
          <g stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1.2" fill="none">
            {/* Top center split to Customer and Code */}
            <path d="M 400 65 L 400 50 M 400 50 L 350 30 L 75 30" />
            <path d="M 400 50 L 450 30 L 725 30" />

            {/* Bottom center split to Issues and Code labels */}
            <path d="M 400 175 L 400 190 M 400 190 L 350 210 L 75 210" />
            <path d="M 400 190 L 450 210 L 725 210" />
          </g>

          {/* Animating Data Particles flowing through the pipeline */}
          {dataPackets.map((pkt) => (
            <path
              key={pkt.id}
              d={pkt.path}
              fill="none"
              stroke="transparent"
              strokeWidth="10"
              className="pointer-events-none"
            >
              {/* Invisible path to trace animate motion */}
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin={`${pkt.delay}s`}
                path={pkt.path}
              >
                <mpath href={`#${pkt.id}-path`} />
              </animateMotion>
            </path>
          ))}

          {/* Let's draw real SVG motion nodes for animated telemetry */}
          <g fill="none" stroke="none">
            {dataPackets.map((pkt) => (
              <path key={`${pkt.id}-real-path`} id={`${pkt.id}-path`} d={pkt.path} />
            ))}
          </g>

          {/* Light-red/Orange pulse particles traveling in circuit */}
          {dataPackets.map((pkt) => (
            <circle key={`dot-${pkt.id}`} r="2.5" fill="#38bdf8" className="opacity-85">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${pkt.delay}s`}>
                <mpath href={`#${pkt.id}-path`} />
              </animateMotion>
            </circle>
          ))}

          {/* 1. Static Square Nodes exactly in accordance with image */}
          {/* Top Left nodes */}
          <rect x="347" y="27" width="6" height="6" fill="#1c1917" rx="1" />
          <rect x="72" y="27" width="6" height="6" fill="#1c1917" rx="1" />

          {/* Top Right nodes */}
          <rect x="722" y="27" width="6" height="6" fill="#1c1917" rx="1" />
          <rect x="447" y="27" width="6" height="6" fill="#1c1917" rx="1" />

          {/* Bottom Left nodes */}
          <rect x="347" y="207" width="6" height="6" fill="#1c1917" rx="1" />
          <rect x="72" y="207" width="6" height="6" fill="#1c1917" rx="1" />

          {/* Bottom Right nodes */}
          <rect x="722" y="207" width="6" height="6" fill="#1c1917" rx="1" />
          <rect x="447" y="207" width="6" height="6" fill="#1c1917" rx="1" />
        </svg>

        {/* Central White Textured Card holding the processor Logo */}
        <div
          className="absolute left-[345px] top-[65px] w-[110px] h-[110px] flex items-center justify-center z-20"
          id="central-processor-anchor"
        >
          {/* Outermost concentric frame with fine dotted outline */}
          <motion.div 
            className="absolute inset-[-8px] border border-dashed border-[#38bdf8]/20 rounded-[1.2rem] pointer-events-none"
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Second square wireframe */}
          <motion.div 
            className="absolute inset-[-4px] border border-[#38bdf8]/10 rounded-[1rem] pointer-events-none"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          />

          {/* Ripple waves for constant pulsing telemetry aura */}
          <motion.div
            className="absolute inset-0 border border-[#38bdf8]/30 rounded-[0.8rem] pointer-events-none"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.35],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 border border-[#38bdf8]/30 rounded-[0.8rem] pointer-events-none"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.35],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.25
            }}
          />

          {/* Central Rounded Box Container */}
          <motion.div
            className="w-full h-full bg-white border border-[#38bdf8]/20 rounded-[0.8rem] flex items-center justify-center p-3 relative group cursor-pointer"
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 15px rgba(56,189,248,0.08), 0 0 0 1px rgba(56,189,248,0.15)",
                "0 0 25px rgba(56,189,248,0.22), 0 0 0 2px rgba(56,189,248,0.25)",
                "0 0 15px rgba(56,189,248,0.08), 0 0 0 1px rgba(56,189,248,0.15)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ '--bg-card-color': '#ffffff' } as React.CSSProperties}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {/* Fine internal shadow layer */}
            <div className="absolute inset-0.5 rounded-[0.7rem] border border-white/60 pointer-events-none" />

            {/* Solid elegant PlayerZero clover cross logo */}
            <div className="transition-transform duration-700 ease-out group-hover:rotate-90">
              <svg viewBox="0 0 100 100" className="w-[44px] h-[44px] text-zinc-900 fill-current" xmlns="http://www.w3.org/2000/svg">
                {/* Visual rendering of the clover-like cross */}
                <g fill="currentColor">
                  {/* Cardinal pill arms */}
                  <rect x="41" y="16" width="18" height="68" rx="9" />
                  <rect x="16" y="41" width="68" height="18" rx="9" />
                  {/* Center squircle core */}
                  <rect x="29" y="29" width="42" height="42" rx="10" />
                </g>
                {/* Central hollow circle matching container background */}
                <circle cx="50" cy="50" r="10" fill="#ffffff" />
              </svg>
            </div>

            {/* Little sub-details for craft look */}
            <div className="absolute bottom-1 text-[7px] font-mono tracking-widest text-[#38bdf8]/60">
              ARCHI.A1
            </div>
          </motion.div>
        </div>

        {/* Interactive Text Label Capsules (Pill Elements matching exact location) */}
        {labels.map((lbl) => {
          const isLabelHovered = hoveredNode === lbl.id;
          return (
            <button
              key={lbl.id}
              className={`absolute flex items-center justify-center h-[25px] px-3.5 min-w-[85px] rounded-full text-[9.5px] font-mono tracking-wider transition-all duration-300 z-30 border whitespace-nowrap ${isLabelHovered
                ? 'bg-zinc-900 border-zinc-900 text-[#f4f1eb] shadow-md shadow-zinc-900/10 -translate-y-[1px]'
                : 'bg-white/90 border-[#38bdf8]/20 text-slate-800 backdrop-blur-[2px] hover:border-[#38bdf8] hover:text-[#38bdf8] shadow-[0_2px_8px_rgba(56,189,248,0.03)]'
                }`}
              style={{
                left: `${lbl.x}px`,
                top: `${lbl.y}px`,
                transform: `translate(-50%, -50%) ${isLabelHovered ? 'scale(1.05)' : ''}`,
              }}
              onMouseEnter={() => setHoveredNode(lbl.id)}
              onMouseLeave={() => setHoveredNode(null)}
              id={`pill-${lbl.id}`}
            >
              {t(lbl.textKey)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ─── StatItem Component ───────────────────────────────────────────────────────
const StatItem: React.FC<{ card: StatCard; delay: number; sectionRef: any }> = ({ card, delay, sectionRef }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: '-40px' });
  const count = useCounter(card.target, inView, 1500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center gap-1.5 px-4 group py-2"
    >
      {/* Number Counter */}
      <div className="text-[1.5rem] sm:text-[1.8rem] font-semibold leading-none tracking-tight tabular-nums text-zinc-900 group-hover:scale-[1.03] transition-transform duration-300">
        {count}
        <span className="text-[#38bdf8]">{t(card.accentKey)}</span>
      </div>

      {/* Title */}
      <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium leading-relaxed max-w-[200px]">
        {t(card.titleKey)}
      </p>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function TechStackSection() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className="w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center gap-[50px]">

        {/* ── Top Section: Title & Description ── */}
        <div className="w-full flex flex-col items-center text-center max-w-[750px]">
          {/* Section Icon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="w-9 h-8 flex items-center justify-center overflow-hidden mb-[10px]"
          >
            <img src={techIcon} alt="Tech Stack Icon" className="w-full h-full object-cover" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-[300] text-[#111111] leading-[1.1] tracking-[-0.025em] mb-0 text-center"
            style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
          >
            {isRTL
              ? <><span className="text-[#38bdf8]">دورة تطوير</span> مشروعك البرمجي في مكان واحد</>
              : <>Your Complete <span className="text-[#38bdf8]">Development Lifecycle</span>, <span className="text-slate-400 font-[200]">Automated</span></>}
          </motion.h2>
        </div>

        {/* ── Middle Section: Schematic Diagram ── */}
        <div className="w-full flex justify-center">
          <SchematicDiagram />
        </div>

        {/* ── Bottom Section: Horizontal Stats Row ── */}
        <div className="w-full max-w-[1200px] mx-auto pt-[10px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center">
            {statCards.map((card, i) => (
              <StatItem key={card.titleKey} card={card} delay={i * 0.08} sectionRef={sectionRef} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
