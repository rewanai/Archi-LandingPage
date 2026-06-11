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

              {/* Interactive Mockup 1: Smart Scoping AI Brief Form */}
              <div className="relative z-10 w-[94%] mx-auto mb-3 h-[280px] bg-[#141416] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#262428] text-start" dir={isRTL ? 'rtl' : 'ltr'}>
                {/* Form Header */}
                <div className="px-4 py-2.5 bg-[#1a1a1c] border-b border-[#262428] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span className="text-[9px] font-medium text-slate-200">
                      {isRTL ? "نموذج متطلبات المشروع" : "Project Specification Form"}
                    </span>
                  </div>
                  <span className="text-[7.5px] font-mono text-[#8A8A93]">{isRTL ? "خطوة ١ من ٣" : "Step 1 of 3"}</span>
                </div>

                {/* Form fields area */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-4 pb-8 space-y-3.5">
                  
                  {/* Field 1: Project Idea & Platform */}
                  <div>
                    <label className="text-[#8A8A93] block text-[7.5px] uppercase font-semibold tracking-wider mb-1">
                      {isRTL ? "فكرة المشروع والمنصة" : "Project Idea & Platform"}
                    </label>
                    <div className="bg-[#1D1D20] border border-[#262428] p-2 rounded-lg text-[#EBEBEF] shadow-2xs flex items-center justify-between text-[10px]">
                      <span className="font-light truncate">
                        {isRTL ? "منصة لربط العملاء بمحلات الورد وتجهيز الهدايا" : "Platform connecting customers with flower & gift shops"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    </div>
                  </div>

                  {/* Field 2: Target Audience */}
                  <div>
                    <label className="text-[#8A8A93] block text-[7.5px] uppercase font-semibold tracking-wider mb-1">
                      {isRTL ? "الفئة المستهدفة" : "Target Audience"}
                    </label>
                    <div className="bg-[#1D1D20] border border-[#262428] p-2 rounded-lg text-[#EBEBEF] shadow-2xs flex items-center justify-between text-[10px]">
                      <span className="font-light truncate">
                        {isRTL ? "الباحثون عن هدايا وتوصيل مجدول في المناسبات" : "People seeking scheduled delivery for special occasions"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    </div>
                  </div>

                  {/* Field 3: Vision & Differentiation (Active input state) */}
                  <div>
                    <label className="text-[#8A8A93] block text-[7.5px] uppercase font-semibold tracking-wider mb-1">
                      {isRTL ? "رؤية المشروع والتميز" : "Vision & Differentiation"}
                    </label>
                    <div className="bg-[#1D1D20] border border-[#38bdf8] p-2 rounded-lg text-[#EBEBEF] shadow-2xs flex items-center justify-between text-[10px] ring-1 ring-[#38bdf8]/20">
                      <span className="font-light truncate flex items-center gap-0.5">
                        {isRTL ? "تجربة إهداء سريعة، خرائط مباشرة وتكامل مع المتاجر المحلية" : "Seamless gifting, live tracking & local shop partnerships"}
                        <span className="w-[1px] h-3 bg-[#38bdf8] animate-pulse shrink-0" />
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
                    </div>
                  </div>

                  {/* Field 4: Key Features */}
                  <div>
                    <label className="text-[#8A8A93] block text-[7.5px] uppercase font-semibold tracking-wider mb-1">
                      {isRTL ? "الميزات الأساسية" : "Key Features"}
                    </label>
                    <div className="bg-[#1D1D20] border border-[#262428] p-2 rounded-lg text-[#EBEBEF] shadow-2xs flex items-center justify-between text-[10px]">
                      <span className="font-light truncate">
                        {isRTL ? "بوابة الدفع الإلكتروني، خرائط جوجل، نظام التنبيهات" : "Digital checkout, Google Maps routing, notification hub"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    </div>
                  </div>

                  {/* Field 5: Project Objective */}
                  <div>
                    <label className="text-[#8A8A93] block text-[7.5px] uppercase font-semibold tracking-wider mb-1">
                      {isRTL ? "هدف المشروع" : "Project Objective"}
                    </label>
                    <div className="bg-[#1D1D20] border border-[#262428] p-2 rounded-lg text-[#EBEBEF] shadow-2xs flex items-center justify-between text-[10px]">
                      <span className="font-light truncate">
                        {isRTL ? "تمكين المتاجر المحلية وتسهيل عملية تبادل الهدايا" : "Empower local florists and scale specialized gifting"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    </div>
                  </div>

                </div>

                {/* Form Footer / Submit Button */}
                <div className="p-3 border-t border-[#ffffff08] bg-[#141416] mt-auto shrink-0 flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5 text-[8px] font-mono text-[#8A8A93] text-start">
                    <span>{isRTL ? "الحالة: مكتمل" : "STATUS: READY"}</span>
                    <span>100% VALIDATED</span>
                  </div>
                  <button className="bg-[#38bdf8] text-black text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-[#38bdf8]/90 transition-all cursor-pointer">
                    <span>{isRTL ? "تحليل الفكرة" : "Analyze Idea"}</span>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
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
              <div className="relative z-10 w-[94%] mx-auto mb-3 h-[280px] bg-[#141416] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#262428] text-start" dir={isRTL ? 'rtl' : 'ltr'}>
                {/* Backlog Header */}
                <div className="px-4 py-2.5 bg-[#1a1a1c] border-b border-[#262428] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[9px] font-medium text-slate-200">
                      {isRTL ? "تخطيط المهام وقصص المستخدمين" : "User Story & Feature Backlog"}
                    </span>
                  </div>
                  <span className="text-[7.5px] font-mono text-[#8A8A93]">{isRTL ? "خطوة ٢ من ٣" : "Step 2 of 3"}</span>
                </div>

                {/* Backlog content area */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col justify-center">
                  <div className="bg-[#1D1D20] border border-white/5 rounded-xl p-4 shadow-sm transition-all cursor-pointer group flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-[#262428] border border-[#ffffff08] text-[#EBEBEF] text-[9px] font-medium rounded-md">
                            {t('itp.m2.tag1')}
                          </span>
                          <span className="text-[#8A8A93] text-[9px] font-mono">ARC-104</span>
                        </div>
                        {/* Selector indicator */}
                        <div className="w-3.5 h-3.5 rounded-full border border-[#38bdf8]/40 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                        </div>
                      </div>
                      
                      {/* User Story category label */}
                      <span className="text-[#38bdf8] text-[8.5px] font-bold tracking-wider uppercase block mb-1">
                        {isRTL ? "قصة المستخدم — USER STORY" : "USER STORY"}
                      </span>
                      
                      <h4 className="text-[12px] font-light text-white leading-relaxed mb-4">
                        {t('itp.m2.title')}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-2.5 text-[9px] text-[#8A8A93] font-medium">
                      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#262428] border border-[#ffffff08] rounded-md text-[#EBEBEF]">
                        <svg className="w-3.5 h-3.5 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        {t('itp.m2.tag3')}
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#262428] border border-[#ffffff08] rounded-md text-[#EBEBEF]">
                        <svg className="w-3.5 h-3.5 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                        {t('itp.m2.tag2')}
                      </div>
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
              <div className="relative z-10 w-[94%] mx-auto mb-3 h-[280px] bg-[#141416] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#262428] text-start" dir={isRTL ? 'rtl' : 'ltr'}>
                {/* Header */}
                <div className="px-4 py-2.5 bg-[#1a1a1c] border-b border-[#262428] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span className="text-[9px] font-medium text-slate-200">
                      {t('itp.m3.header')}
                    </span>
                  </div>
                  <span className="text-[7.5px] font-mono text-[#8A8A93]">{isRTL ? "خطوة ٣ من ٣" : "Step 3 of 3"}</span>
                </div>
                
                {/* Task List */}
                <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto no-scrollbar bg-[#141416]">
                  
                  {/* Dropdown 1 (Pending) */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-350 text-[11px] font-semibold">
                      <svg className="w-3 h-3 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      <span>{t('itp.m3.pending')}</span>
                    </div>
                    {/* Active Task (White border) */}
                    <div className="ml-5 flex items-center gap-3 bg-[#1D1D20] border border-white/10 rounded-lg px-3 py-2 shadow-sm">
                      <svg className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" /></svg>
                      <span className="text-[#EBEBEF] text-[11px] font-light leading-normal">{t('itp.m3.active_task')}</span>
                    </div>
                  </div>

                  {/* Dropdown 2 (Completed) */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-350 text-[11px] font-semibold">
                      <svg className="w-3 h-3 text-[#8A8A93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      <span>{t('itp.m3.completed')}</span>
                    </div>
                    <div className="ml-5 flex flex-col gap-1.5">
                      {/* Completed Task 1 */}
                      <div className="flex items-center gap-3 rounded-lg px-3 py-1.5 hover:bg-[#1D1D20]/50 transition-colors border border-transparent">
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[10.5px] font-light text-[#8A8A93] line-through decoration-[#5E5E66]">{t('itp.m3.done1')}</span>
                      </div>
                      {/* Completed Task 2 */}
                      <div className="flex items-center gap-3 rounded-lg px-3 py-1.5 hover:bg-[#1D1D20]/50 transition-colors border border-transparent">
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[10.5px] font-light text-[#8A8A93] line-through decoration-[#5E5E66]">{t('itp.m3.done2')}</span>
                      </div>
                      {/* Completed Task 3 */}
                      <div className="flex items-center gap-3 rounded-lg px-3 py-1.5 hover:bg-[#1D1D20]/50 transition-colors border border-transparent">
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-[10.5px] font-light text-[#8A8A93] line-through decoration-[#5E5E66]">{t('itp.m3.done3')}</span>
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
