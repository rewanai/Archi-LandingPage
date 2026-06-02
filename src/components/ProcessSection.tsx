import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { useLanguage } from '../i18n';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Step 2: Circle shrinks to normal size
  const circleScale = useTransform(scrollYProgress, [0, 0.15], [3.5, 1]);
  // Optionally border color or opacity can change to make it clear

  // Step 3: Text inside changes
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [0, 0, -20, -20]);
  const text1Pointer = useTransform(scrollYProgress, [0, 0.25, 0.3], ["auto", "auto", "none"]);

  const text2Opacity = useTransform(scrollYProgress, [0, 0.35, 0.45, 1], [0, 0, 1, 1]);
  const text2Y = useTransform(scrollYProgress, [0, 0.35, 0.45, 1], [20, 20, 0, 0]);
  const text2Pointer = useTransform(scrollYProgress, [0, 0.35, 0.45], ["none", "none", "auto"]);

  // Step 4: UI elements appear on left side
  const leftOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const leftY = useTransform(scrollYProgress, [0.5, 0.65], [60, 0]);
  const leftScale = useTransform(scrollYProgress, [0.5, 0.65], [0.8, 1]);

  // Step 5: UI elements appear on right side
  const rightOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const rightY = useTransform(scrollYProgress, [0.7, 0.85], [60, 0]);
  const rightScale = useTransform(scrollYProgress, [0.7, 0.85], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] z-20">
      <div className="sticky top-0 h-[100dvh] w-full bg-[#f5f4f2] text-[#111111] flex items-center justify-center shadow-[0_-20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

        {/* Concentric Circles */}
        <motion.div
          style={{ scale: circleScale, willChange: "transform" }}
          className="absolute w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-[#38bdf8]/30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-[#38bdf8]/15" />
        </motion.div>

        {/* Center Text */}
        <div className="relative z-10 flex items-center justify-center text-center">
          <motion.div style={{ opacity: text1Opacity, y: text1Y, pointerEvents: text1Pointer as any, position: 'absolute', willChange: "transform, opacity" }} className="flex items-center justify-center w-full min-w-[max-content]">
            <h2 className="text-[2.2rem] sm:text-[4.5rem] md:text-[5.5rem] font-normal tracking-tight leading-[1] italic" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
              {t('process.text1.line1')} <br /> {t('process.text1.line2')}
            </h2>
          </motion.div>
          <motion.div style={{ opacity: text2Opacity, y: text2Y, pointerEvents: text2Pointer as any, position: 'absolute', willChange: "transform, opacity" }} className="flex items-center justify-center w-full min-w-[max-content]">
            <h2 className="text-[2.2rem] sm:text-[4.5rem] md:text-[5.5rem] font-normal tracking-tight leading-[1.1] italic" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
              {/* Line 1 */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] inline-block pt-4 pb-1 -mt-3 not-italic" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
                {"{"}{t('process.text2.archi')}{"}"}
              </span>
              <br />

              {/* Line 2 */}
              {t('process.text2.line2')}
              <br />

              {/* Line 3 */}
              {t('process.text2.line3')}
            </h2>
          </motion.div>
        </div>

        {/* UI Elements - Left Side */}
        <motion.div style={{ opacity: leftOpacity, y: leftY, scale: leftScale, willChange: "transform, opacity" }} className="absolute inset-0 pointer-events-none flex items-center justify-center w-full h-full max-w-[1300px] mx-auto">

          {/* SCREEN 1: Enterprise Logistics Console — Top Left (Replaced with p1.png) */}
          <div className="absolute top-[8%] left-[2%] md:top-[10%] md:left-[5%] lg:left-[6%] w-[280px] md:w-[340px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.55] sm:scale-100 origin-top-left hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500">
            <img src={p1} alt="Process 1" className="w-full h-auto object-cover" />
          </div>

          {/* SCREEN 3: Mobile Banking App — Bottom Left (Replaced with p4.png) */}
          <div className="absolute bottom-[6%] left-[3%] md:bottom-[8%] md:left-[6%] lg:left-[8%] w-[160px] md:w-[190px] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.6] sm:scale-100 origin-bottom-left hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-500">
            <img src={p4} alt="Process 4" className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        {/* UI Elements - Right Side */}
        <motion.div style={{ opacity: rightOpacity, y: rightY, scale: rightScale, willChange: "transform, opacity" }} className="absolute inset-0 pointer-events-none flex items-center justify-center w-full h-full max-w-[1300px] mx-auto">

          {/* SCREEN 3: Web3 Dev Infrastructure Hero — Top Right (Replaced with p2.png) */}
          <div className="absolute top-[8%] right-[2%] md:top-[10%] md:right-[5%] lg:right-[6%] w-[280px] md:w-[340px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.55] sm:scale-100 origin-top-right hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-500">
            <img src={p2} alt="Process 2" className="w-full h-auto object-cover" />
          </div>

          {/* SCREEN 4: Government Cloud ERP — Bottom Right (Replaced with p3.png) */}
          <div className="absolute bottom-[6%] right-[2%] md:bottom-[8%] md:right-[5%] lg:right-[6%] w-[280px] md:w-[340px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.55] sm:scale-100 origin-bottom-right hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.10)] transition-all duration-500">
            <img src={p3} alt="Process 3" className="w-full h-auto object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}


