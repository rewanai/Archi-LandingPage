import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';

// ─── Data ─────────────────────────────────────────────────────────────────────

const techGroups = [
  {
    labelKey: 'techstack.group1.label',
    techs: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Supabase'],
  },
  {
    labelKey: 'techstack.group2.label',
    techs: ['Node.js', 'Python', 'Go', 'Java', 'Laravel', 'PHP', 'Oracle APEX'],
  },
  {
    labelKey: 'techstack.group3.label',
    techs: ['Express 5', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Kubernetes'],
  },
  {
    labelKey: 'techstack.group4.label',
    techs: ['React Native', 'Flutter', 'OpenAI', 'LangChain', 'Playwright', 'CI/CD'],
  },
];

// Warm canvas badge accents (resting)
const accentCycle = [
  'border-[#d1cfc9] bg-white/80 text-[#111111]',
  'border-[#d1cfc9] bg-white/80 text-[#111111]',
  'border-[#d1cfc9] bg-white/80 text-[#111111]',
  'border-[#d1cfc9] bg-white/80 text-[#111111]',
];

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

// ─── Counter hook — resets & re-fires on every inView change ──────────────────
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

// ─── TechBadge ────────────────────────────────────────────────────────────────
function TechBadge({ label, isActive }: { label: string; isActive: boolean; key?: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isActive ? (
        <motion.span
          key="active"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-[#38bdf8] text-[11px] sm:text-[12px] font-medium tracking-wide whitespace-nowrap cursor-default"
        >
          {label}
        </motion.span>
      ) : (
        <motion.span
          key="resting"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#d1cfc9] bg-white/80 text-[#111111] text-[11px] sm:text-[12px] font-medium tracking-wide whitespace-nowrap cursor-default hover:scale-[1.04] transition-transform duration-200"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

// ─── StatCardItem ─────────────────────────────────────────────────────────────
function StatCardItem({ card, delay }: { card: StatCard; delay: number; key?: string }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // once: false → animation re-fires every time the section scrolls into view
  const inView = useInView(ref, { once: false, margin: '-40px' });
  const count = useCounter(card.target, inView, 1500);

  const isActive = hovered;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-default p-7 flex flex-col items-center text-center gap-3 border border-[#d1cfc9]"
      style={{ backgroundColor: '#f5f4f2' }}
    >
      {/* Dark slide-up background — scales up from bottom */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl bg-[#111111] origin-bottom pointer-events-none"
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Content — always above background layer */}
      <div className="relative z-10 flex flex-col items-center gap-3 w-full">

        {/* Counter */}
        <div className="text-[2.6rem] sm:text-[3rem] font-[700] leading-none tracking-tight tabular-nums transition-colors duration-300"
          style={{ color: isActive ? '#ffffff' : '#111111' }}
        >
          {count}
          <span style={{ color: '#38bdf8' }}>{t(card.accentKey)}</span>
        </div>

        {/* Title */}
        <p
          className="text-[11px] uppercase tracking-[0.18em] font-semibold leading-snug transition-colors duration-300"
          style={{ color: isActive ? 'rgba(255,255,255,0.7)' : '#64748b' }}
        >
          {t(card.titleKey)}
        </p>

        {/* Divider */}
        <div
          className="w-8 h-px transition-colors duration-300"
          style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : '#d1cfc9' }}
        />

        {/* Description */}
        <p
          className="text-[12px] sm:text-[13px] leading-[1.75] font-light transition-colors duration-300"
          style={{ color: isActive ? 'rgba(255,255,255,0.55)' : '#64748b' }}
        >
          {t(card.descKey)}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function TechStackSection() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Track any card hover to switch all badges to active mode
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-28"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-12 items-center">

        {/* ── Left Column: Copy + CTA ── */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center">

          {/* Section Icon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="w-9 h-8 flex items-center justify-center overflow-hidden mb-5 self-start ms-0 me-auto"
          >
            <img src="/src/assets/images/tech-icon.png" alt="Tech Stack Icon" className="w-full h-full object-cover" />
          </motion.div>

          {/* Main title */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.2rem] sm:text-[3.5rem] md:text-[4.2rem] font-[300] text-[#111111] leading-[1.05] tracking-[-0.025em] mb-6"
            style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
          >
            {isRTL
              ? <><span className="text-[#38bdf8]">هل سئمت</span> من شرح فكرة تطبيقك للذكاء الاصطناعي؟</>
              : <><span className="text-[#38bdf8]">Tired</span> of Explaining Your App Idea{' '}<span className="text-slate-400 font-[200]">to AI?</span></>}
          </motion.h2>

          {/* One-liner description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="text-slate-500 text-[14px] md:text-[15px] font-light leading-[1.75] mb-10 max-w-[460px]"
            style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
          >
            {isRTL
              ? 'الأدوات العادية تخمن أفكارك وتنتج أكواداً مكسورة، بينما تقوم Archi بهندسة وتأمين فكرتك أولاً لتسليمك نظاماً متكاملاً خلال ساعات.'
              : 'Standard AI tools guess your logic and break your code — Archi engineers your idea first to deliver flawless software in days.'}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.28, ease: 'easeOut' }}
          >
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#38bdf8' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300"
              style={{ backgroundColor: '#111111', color: '#ffffff' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#ffffff'; }}
            >
              {isRTL ? 'اكتشف كيف نعمل' : 'Learn How It Works'}
              {/* Arrow icon */}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={isRTL ? 'M19 12H5m7-7l-7 7 7 7' : 'M5 12h14m-7-7l7 7-7 7'} />
              </svg>
            </motion.button>
          </motion.div>

        </div>


        {/* ── Right Column: 2×2 Stat Cards ── */}
        <div className="w-full lg:w-[48%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statCards.map((card, i) => (
              <StatCardItem key={card.titleKey} card={card} delay={i * 0.08} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
