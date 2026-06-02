import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

export function WhatIsArchi() {
  const { isRTL } = useLanguage();
  const [hoveredPanel, setHoveredPanel] = useState<null | 'business' | 'dev'>(null);

  const panels = [
    {
      id: 'business' as const,
      num: '01',
      icon: Brain,
      role: isRTL ? 'العقل المفكر' : 'THE BRAIN',
      name: isRTL ? 'أركي بيزنس' : 'Archi Business',
      tagline: isRTL ? 'يسأل، يفهم،\nيبني الخارطة.' : 'Interviews.\nUnderstands.\nBlueprints.',
    },
    {
      id: 'dev' as const,
      num: '02',
      icon: Cpu,
      role: isRTL ? 'المحرك التنفيذي' : 'THE MUSCLE',
      name: isRTL ? 'أركي ديف' : 'Archi Dev',
      tagline: isRTL ? 'يأخذ الخارطة،\nيبني التطبيق.' : 'Takes the blueprint.\nBuilds the product.',
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative w-full bg-[#f5f4f2] border-t border-[#d1cfc9] overflow-hidden"
    >
      {/* ── Top Label Row ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111111]/50">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          {isRTL ? 'ما هي منظومة أركي؟' : 'What is Archi?'}
        </div>
        <p className="hidden md:block text-[11px] font-mono text-[#111111]/30 tracking-widest uppercase">
          {isRTL ? 'نظامان — منظومة واحدة' : 'Two engines — one system'}
        </p>
      </div>

      {/* ── Headline ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 pb-14">
        <h2
          className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-[300] text-[#111111] leading-[1.02] tracking-[-0.03em]"
          style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
        >
          {isRTL ? (
            <>
              محرك مزدوج.<br />
              <span className="text-[#38bdf8]">فكر</span> ثم <span className="text-[#38bdf8]">ابنِ</span>.
            </>
          ) : (
            <>
              A bimodal engine.<br />
              <span className="text-[#38bdf8]">Think</span> then <span className="text-[#38bdf8]">build</span>.
            </>
          )}
        </h2>
      </div>

      {/* ── Two Compact Panels ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 py-8 flex items-center justify-between border-t border-[#d1cfc9]">
        <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {panels.map((panel) => {
              const isHovered = hoveredPanel === panel.id;
              const Icon = panel.icon;

              return (
                <motion.div
                  key={panel.id}
                  onHoverStart={() => setHoveredPanel(panel.id)}
                  onHoverEnd={() => setHoveredPanel(null)}
                  className="relative flex flex-col justify-between min-h-[300px] md:min-h-[340px] p-8 md:p-10 overflow-hidden cursor-default border border-[#d1cfc9] rounded-2xl"
                  style={{ background: '#f5f4f2' }}
                >
                  {/* Sliding dark background */}
                  <motion.div
                    className="absolute inset-0 bg-[#111111] pointer-events-none rounded-2xl"
                    animate={{ scaleY: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'bottom' }}
                  />

                  {/* Top row: number + icon */}
                  <div className="relative z-10 flex items-start justify-between">
                    <motion.span
                      animate={{ color: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(17,17,17,0.25)' }}
                      transition={{ duration: 0.3 }}
                      className="text-[11px] font-mono tracking-widest"
                    >
                      {panel.num}
                    </motion.span>

                    <motion.div
                      animate={{
                        backgroundColor: isHovered ? 'rgba(56,189,248,0.12)' : 'rgba(17,17,17,0.06)',
                        borderColor: isHovered ? 'rgba(56,189,248,0.35)' : 'rgba(17,17,17,0.12)',
                        color: isHovered ? '#38bdf8' : '#111111',
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full border flex items-center justify-center"
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </motion.div>
                  </div>

                  {/* Bottom: role tag + name + tagline */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <motion.span
                      animate={{ color: isHovered ? '#38bdf8' : 'rgba(17,17,17,0.4)' }}
                      transition={{ duration: 0.3 }}
                      className="text-[10px] font-mono tracking-[0.22em] uppercase font-semibold"
                    >
                      {panel.role}
                    </motion.span>

                    <motion.h3
                      animate={{ color: isHovered ? '#ffffff' : '#111111' }}
                      transition={{ duration: 0.3 }}
                      className="text-[2rem] sm:text-[2.4rem] md:text-[2.2rem] lg:text-[2.6rem] font-[300] leading-[1.05] tracking-[-0.02em]"
                      style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
                    >
                      {panel.name}
                    </motion.h3>

                    <motion.div
                      animate={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.12)' : '#d1cfc9' }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-px"
                    />

                    <motion.p
                      animate={{ color: isHovered ? 'rgba(255,255,255,0.5)' : '#94a3b8' }}
                      transition={{ duration: 0.3 }}
                      className="text-[13px] font-light leading-[1.7] whitespace-pre-line"
                      style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
                    >
                      {panel.tagline}
                    </motion.p>

                    <motion.div
                      animate={{
                        color: isHovered ? '#38bdf8' : 'rgba(17,17,17,0.2)',
                        x: isHovered ? (isRTL ? -5 : 5) : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {isRTL ? (
                        <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom Caption Row ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 py-8 flex items-center justify-between border-t border-[#d1cfc9]">
        <p
          className="text-[12px] font-light text-[#111111]/40 leading-relaxed"
          style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
        >
          {isRTL
            ? 'منظومة مغلقة وخاصة — تمتلكها شركة ريوان حصرياً.'
            : 'A private, closed-loop system — exclusively owned by Rewan Company.'}
        </p>

        {/* Animated pulse dots */}
        <div className="hidden md:flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
