import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import Grainient from './Grainient';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';

const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

export function IdeaToProduction() {
  const { t, isRTL } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full max-w-[1400px] 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-24 sm:py-32 overflow-hidden bg-[#FFFFFF]">
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mb-14 sm:mb-20 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h2 className="text-[2.75rem] sm:text-[4rem] lg:text-[5rem] font-light text-[#111111] leading-[1.05] tracking-tight" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
            {isRTL ? (
              <>
                من الفكرة إلى <span className="text-[#38bdf8]">{"{"}</span>الإنتاج<span className="text-[#38bdf8]">{"}"}</span>
              </>
            ) : (
              <>
                From Idea to <span className="text-[#38bdf8]">{"{"}</span>Production<span className="text-[#38bdf8]">{"}"}</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* 3 Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Card 1: Idea */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                {/* Icon Placeholder: To use your own image, uncomment the <img> tag and set the src path */}
                <div className="w-7 h-7  flex items-center justify-center overflow-hidden">
                  <img src={icon1} alt="Idea Icon" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[24px] font-medium text-slate-900 leading-none" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
                  {t('itp.card1.title')}
                </h3>
              </div>
              <p className="text-slate-500 text-[13px] sm:text-[14px] leading-[1.6] font-medium min-h-[64px]">
                {t('itp.card1.desc')}
              </p>
            </div>

            {/* Visual Container */}
            <div
              className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-xl p-4 flex items-end"
            >
              <Grainient
                color1="#4b7984"
                color2="#45474a"
                color3="#8b8491"
                timeSpeed={0.75}
                colorBalance={0.0}
                warpStrength={0.45}
                warpFrequency={5.0}
                warpSpeed={2.0}
                warpAmplitude={50.0}
                blendAngle={0.0}
                blendSoftness={0.05}
                rotationAmount={500.0}
                noiseScale={2.0}
                grainAmount={0.1}
                grainScale={2.0}
                grainAnimated={false}
                contrast={1.5}
                gamma={1.0}
                saturation={1.0}
                centerX={0.0}
                centerY={0.0}
                zoom={0.9}
                className="absolute inset-0 z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Interactive Mockup 1: Socratic AI (Linear Theme) */}
              <div className="relative z-10 w-[94%] mx-auto mb-3 h-[280px] bg-[#141416] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#262428]">
                {/* Chat area */}
                <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-4 py-3 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-[#1D1D20] text-[#EBEBEF] text-[12px] px-3 py-2 rounded-xl rounded-tr-sm max-w-[85%] border border-[#262428] leading-relaxed shadow-sm">
                      {t('itp.m1.user_msg')}
                    </div>
                  </div>
                  {/* AI message */}
                  <div className="flex justify-start gap-2.5 items-start">
                    <div className="w-6 h-6 rounded-md bg-[#262428] flex items-center justify-center flex-shrink-0 border border-[#ffffff08]">
                      <svg className="w-3 h-3 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div className="bg-transparent text-[#8A8A93] text-[12px] pt-0.5 max-w-[85%] leading-relaxed">
                      <span className="text-[#EBEBEF] font-medium block mb-0.5">Archi AI</span>
                      <span>{t('itp.m1.ai_msg')}</span>
                    </div>
                  </div>
                </div>
                
                {/* Interactive Element */}
                <div className="p-3 pt-2.5 flex flex-col gap-2 border-t border-[#ffffff08] bg-[#141416] mt-auto shrink-0">
                  {/* Recommended Questions */}
                  <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1D1D20] text-[#EBEBEF] rounded-md text-[10px] font-medium hover:bg-[#262428] transition-colors border border-[#262428] cursor-pointer whitespace-nowrap shrink-0">
                      <svg className="w-3 h-3 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg> {t('itp.m1.action1')}
                    </button>
                    <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1D1D20] text-[#EBEBEF] rounded-md text-[10px] font-medium hover:bg-[#262428] transition-colors border border-[#262428] cursor-pointer whitespace-nowrap shrink-0">
                      <svg className="w-3 h-3 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg> {t('itp.m1.action2')}
                    </button>
                  </div>
                  {/* Input Field */}
                  <div className="relative">
                    <input type="text" placeholder={t('itp.m1.placeholder')} className="w-full bg-[#0d0c0e] border border-[#262428] text-[#EBEBEF] text-[12px] rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:border-[#ffffff40] placeholder-[#8A8A93]" readOnly />
                    <button className="absolute right-1 top-1 w-6 h-6 flex items-center justify-center bg-[#262428] hover:bg-[#3f3c42] rounded-md transition-colors cursor-pointer">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Plan */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                {/* Icon Placeholder: To use your own image, uncomment the <img> tag and set the src path */}
                <div className="w-7 h-7  flex items-center justify-center overflow-hidden">
                  <img src={icon2} alt="Idea Icon" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[24px] font-medium text-slate-900 leading-none" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
                  {t('itp.card2.title')}
                </h3>
              </div>
              <p className="text-slate-500 text-[13px] sm:text-[14px] leading-[1.6] font-medium min-h-[64px]">
                {t('itp.card2.desc')}
              </p>
            </div>

            {/* Visual Container */}
            <div
              className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-xl p-4 flex items-end"
            >
              <Grainient
                color1="#4b7984"
                color2="#45474a"
                color3="#8b8491"
                timeSpeed={0.75}
                colorBalance={0.0}
                warpStrength={0.45}
                warpFrequency={5.0}
                warpSpeed={2.0}
                warpAmplitude={50.0}
                blendAngle={0.0}
                blendSoftness={0.05}
                rotationAmount={500.0}
                noiseScale={2.0}
                grainAmount={0.1}
                grainScale={2.0}
                grainAnimated={false}
                contrast={1.5}
                gamma={1.0}
                saturation={1.0}
                centerX={0.0}
                centerY={0.0}
                zoom={0.9}
                className="absolute inset-0 z-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Interactive Mockup 2: Automated Feature Backlog (Linear Theme) */}
              <div className="relative z-10 w-[94%] mx-auto mb-3 h-[280px] bg-[#141416] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#262428] justify-center p-6">
                <div className="bg-[#1D1D20] border border-white/30 rounded-xl p-5 shadow-sm transition-all cursor-pointer group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[#8A8A93] text-[12px] font-medium tracking-wide">ARC-104</span>
                        <svg className="w-3 h-3 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        <span className="px-2 py-1 bg-[#262428] border border-[#ffffff08] text-[#EBEBEF] text-[10px] font-medium rounded-md flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EBEBEF]"></span> {t('itp.m2.tag1')}
                        </span>
                      </div>
                      {/* Linear Todo icon */}
                      <svg className="w-4 h-4 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /></svg>
                    </div>
                    <h4 className="text-[14px] font-medium text-white leading-[1.6] mb-5">
                      {t('itp.m2.title')}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#8A8A93] font-medium">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#262428] border border-[#ffffff08] rounded-md text-[#EBEBEF]">
                      <svg className="w-3.5 h-3.5 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                      {t('itp.m2.tag2')}
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#262428] border border-[#ffffff08] rounded-md text-[#EBEBEF]">
                      <svg className="w-3.5 h-3.5 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                      {t('itp.m2.tag3')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Ship */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                {/* Icon Placeholder: To use your own image, uncomment the <img> tag and set the src path */}
                <div className="w-7 h-7  flex items-center justify-center overflow-hidden">
                  <img src={icon3} alt="Idea Icon" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[24px] font-medium text-slate-900 leading-none" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>
                  {t('itp.card3.title')}
                </h3>
              </div>
              <p className="text-slate-500 text-[13px] sm:text-[14px] leading-[1.6] font-medium min-h-[64px]">
                {t('itp.card3.desc')}
              </p>
            </div>

            {/* Visual Container */}
            <div
              className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-xl p-4 flex items-end"
            >
              <Grainient
                color1="#4b7984"
                color2="#45474a"
                color3="#8b8491"
                timeSpeed={0.75}
                colorBalance={0.0}
                warpStrength={0.45}
                warpFrequency={5.0}
                warpSpeed={2.0}
                warpAmplitude={50.0}
                blendAngle={0.0}
                blendSoftness={0.05}
                rotationAmount={500.0}
                noiseScale={2.0}
                grainAmount={0.1}
                grainScale={2.0}
                grainAnimated={false}
                contrast={1.5}
                gamma={1.0}
                saturation={1.0}
                centerX={0.0}
                centerY={0.0}
                zoom={0.9}
                className="absolute inset-0 z-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Interactive Mockup 3: Archi Dev Progress (Linear Theme) */}
              <div className="relative z-10 w-[94%] mx-auto mb-3 h-[280px] bg-[#141416] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#262428]">
                {/* Header */}
                <div className="bg-[#141416] border-b border-[#262428] px-4 py-3 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                    <span className="text-[13px] font-medium text-white tracking-wide">{t('itp.m3.header')}</span>
                  </div>
                </div>
                
                {/* Task List */}
                <div className="flex-1 p-5 flex flex-col gap-6 overflow-y-auto bg-[#141416] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  
                  {/* Dropdown 1 (Pending) */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      <span className="text-[12px] font-medium text-white">{t('itp.m3.pending')}</span>
                    </div>
                    {/* Active Task (White border) */}
                    <div className="ml-5 flex items-center gap-3 bg-[#1D1D20] border border-white/40 rounded-lg px-3 py-2.5 shadow-sm">
                      <svg className="w-4 h-4 text-[#8A8A93] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /></svg>
                      <span className="text-[#EBEBEF] text-[12px] font-medium">{t('itp.m3.active_task')}</span>
                    </div>
                  </div>

                  {/* Dropdown 2 (Completed) */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      <span className="text-[12px] font-medium text-white">{t('itp.m3.completed')}</span>
                    </div>
                    <div className="ml-5 flex flex-col gap-1.5">
                      {/* Completed Task 1 */}
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#1D1D20] transition-colors border border-transparent">
                        <svg className="w-4 h-4 text-[#5E5E66] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[12px] font-medium text-[#5E5E66] line-through decoration-[#5E5E66]">{t('itp.m3.done1')}</span>
                      </div>
                      {/* Completed Task 2 */}
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#1D1D20] transition-colors border border-transparent">
                        <svg className="w-4 h-4 text-[#5E5E66] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[12px] font-medium text-[#5E5E66] line-through decoration-[#5E5E66]">{t('itp.m3.done2')}</span>
                      </div>
                      {/* Completed Task 3 */}
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#1D1D20] transition-colors border border-transparent">
                        <svg className="w-4 h-4 text-[#5E5E66] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[12px] font-medium text-[#5E5E66] line-through decoration-[#5E5E66]">{t('itp.m3.done3')}</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section >
  );
}
