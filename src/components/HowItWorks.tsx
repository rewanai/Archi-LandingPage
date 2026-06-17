import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import Grainient from './Grainient';
import { useLanguage } from '../i18n';

export function HowItWorks() {
   const containerRef = useRef<HTMLDivElement>(null);
   const [isMobile, setIsMobile] = useState(false);
   const [activeStep, setActiveStep] = useState(0);
   const { t, isRTL } = useLanguage();

   const getFileIcon = (type: 'ts' | 'react' | 'sql') => {
      if (type === 'react') {
         return (
            <svg className="w-3.5 h-3.5 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
               <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
               <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
               <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
               <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
         );
      }
      if (type === 'sql') {
         return (
            <svg className="w-3.5 h-3.5 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
         );
      }
      return (
         <div className="bg-[#3178c6] text-white flex items-center justify-center text-[7px] font-bold rounded-sm w-3.5 h-3.5 shrink-0 font-sans leading-none">
            TS
         </div>
      );
   };

   const [activeFileIndex, setActiveFileIndex] = useState(0);
   const compilingFiles = [
      { name: "server.ts", path: "src/server.ts", action: "Edited" as const, added: 15, deleted: 2, type: "ts" as const },
      { name: "schema.ts", path: "src/database/schema.ts", action: "Created" as const, added: 180, deleted: 0, type: "ts" as const },
      { name: "jwt.ts", path: "src/auth/jwt.ts", action: "Created" as const, added: 95, deleted: 0, type: "ts" as const },
      { name: "Chatbot.tsx", path: "src/components/Chatbot.tsx", action: "Created" as const, added: 328, deleted: 68, type: "react" as const },
      { name: "api.ts", path: "src/routes/api.ts", action: "Edited" as const, added: 42, deleted: 12, type: "ts" as const },
      { name: "error.ts", path: "src/middleware/error.ts", action: "Created" as const, added: 60, deleted: 0, type: "ts" as const },
      { name: "excelParser.ts", path: "src/utils/excelParser.ts", action: "Created" as const, added: 210, deleted: 5, type: "ts" as const },
      { name: "migration.sql", path: "supabase/migration.sql", action: "Created" as const, added: 500, deleted: 0, type: "sql" as const }
   ];

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveFileIndex((prev) => (prev + 1) % compilingFiles.length);
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile, { passive: true });
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest < 0.45) {
         setActiveStep(0);
      } else if (latest < 0.72) {
         setActiveStep(1);
      } else {
         setActiveStep(2);
      }
   });

   const titleTopMobile = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "12%"]);
   const titleTopDesktop = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "50%"]);

   const titleLeftMobile = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "6%"]);
   const titleLeftDesktop = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "10%"]);

   const titleRightMobile = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "6%"]);
   const titleRightDesktop = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "10%"]);

   const titleXMobile = useTransform(scrollYProgress, [0.08, 0.20], ["-50%", "0%"]);
   const titleXDesktop = useTransform(scrollYProgress, [0.08, 0.20], ["-50%", "0%"]);

   const titleXMobileRTL = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "0%"]);
   const titleXDesktopRTL = useTransform(scrollYProgress, [0.08, 0.20], ["50%", "0%"]);

   const titleYMobile = useTransform(scrollYProgress, [0.08, 0.20], ["-50%", "0%"]);
   const titleYDesktop = useTransform(scrollYProgress, [0.08, 0.20], ["-50%", "-50%"]);

   const titleScale = useTransform(scrollYProgress, [0.08, 0.20], [1, 0.85]);

   const cardsOpacity = useTransform(scrollYProgress, [0.08, 0.20, 1.0], [0, 1, 1]);
   const indicatorOpacity = useTransform(scrollYProgress, [0.10, 0.22, 1.0], [0, 1, 1]);

   const stories = [
      { role: t('hiw.stories.c1Role'), want: t('hiw.stories.c1Want'), benefit: t('hiw.stories.c1Benefit'), tag: t('hiw.stories.c1Tag') },
      { role: t('hiw.stories.c2Role'), want: t('hiw.stories.c2Want'), benefit: t('hiw.stories.c2Benefit'), tag: t('hiw.stories.c2Tag') },
      { role: t('hiw.stories.c3Role'), want: t('hiw.stories.c3Want'), benefit: t('hiw.stories.c3Benefit'), tag: t('hiw.stories.c3Tag') },
      { role: t('hiw.stories.c4Role'), want: t('hiw.stories.c4Want'), benefit: t('hiw.stories.c4Benefit'), tag: t('hiw.stories.c4Tag') },
      { role: t('hiw.stories.c5Role'), want: t('hiw.stories.c5Want'), benefit: t('hiw.stories.c5Benefit'), tag: t('hiw.stories.c5Tag') },
      { role: t('hiw.stories.c6Role'), want: t('hiw.stories.c6Want'), benefit: t('hiw.stories.c6Benefit'), tag: t('hiw.stories.c6Tag') }
   ];

   return (
      <section ref={containerRef} className="relative w-full h-[500vh] bg-[#ffffff] z-30 rounded-t-3xl md:rounded-t-[3rem] ">
         <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">

            {/* Title */}
            <motion.div
               style={{
                  top: isMobile ? titleTopMobile : titleTopDesktop,
                  ...(isRTL
                     ? {
                        right: isMobile ? titleRightMobile : titleRightDesktop,
                        left: 'auto',
                        x: isMobile ? titleXMobileRTL : titleXDesktopRTL,
                     }
                     : {
                        left: isMobile ? titleLeftMobile : titleLeftDesktop,
                        x: isMobile ? titleXMobile : titleXDesktop,
                     }),
                  y: isMobile ? titleYMobile : titleYDesktop,
                  scale: titleScale
               }}
               className={`absolute w-full max-w-[600px] px-6 md:px-0 z-10 pointer-events-none ${isRTL ? 'text-right' : ''}`}
            >
               <div className="text-[#38bdf8] text-[14px] md:text-[18px] font-semibold mb-3 md:mb-5">{t('hiw.label')}</div>
               <h2 className="text-[2.75rem] sm:text-[4rem] md:text-[5rem] font-medium leading-[1.05] tracking-tight">
                  <span className="text-slate-300 block">{t('hiw.three')}</span>
                  <span className="text-[#111] block">{t('hiw.then')}<span className="text-[#38bdf8] italic font-normal" style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}>{t('hiw.runs')}</span></span>
               </h2>
            </motion.div>

            {/* Cards Wrapper - Masterfully balanced structural overlay */}
            <motion.div
               style={{ opacity: cardsOpacity, pointerEvents: 'auto' }}
               className={`absolute top-[57%] -translate-y-1/2 z-20 ${isMobile ? 'left-[5%] w-[90%]' : isRTL ? 'right-[45%] left-auto w-[42%]' : 'left-[45%] w-[42%]'}`}
            >
               <AnimatePresence mode="wait">
                  {/* STEP 0: THE SMART INTERVIEW (THE ANALYST) */}
                  {activeStep === 0 && (
                     <motion.div
                        key="analyst-hiw"
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full relative flex flex-col gap-6 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 rounded-xl origin-center"
                     >
                        <div>
                           <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-2 tracking-tight font-sans antialiased">
                              {t('hiw.phase01.title')}
                           </h3>
                           <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans font-normal max-w-[95%] tracking-tight">
                              {t('hiw.phase01.desc')}
                           </p>
                        </div>

                        {/* Immersive Window Frame Wrapper */}
                        <div className="w-full aspect-[4/3] min-h-[340px] md:min-h-[390px] rounded-3xl shadow-xl overflow-hidden flex items-end p-4 relative font-sans">
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
                           <div className="absolute inset-0 bg-black/15 z-5" />

                           {/* Floating OS Window Frame (Analyst Dark Theme) */}
                           <div className="dark relative z-10 w-[94%] h-[90%] mx-auto mb-3 bg-[#141416] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#262428] p-2.5 md:p-3 select-none text-zinc-200">
                              {/* Dashboard Header Bar */}
                              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 shrink-0">
                                 <div className="flex flex-col text-start">
                                    <span className="font-bold text-zinc-100 text-[10.5px] md:text-[12px] leading-tight">{t('hiw.analyst.title')}</span>
                                    <span className="text-[8.5px] text-zinc-400 font-medium">{t('hiw.analyst.project')}</span>
                                 </div>
                                 <button className="flex items-center gap-1 px-2.5 py-0.5 border border-red-500/20 text-red-400 rounded-full text-[8px] md:text-[9px] font-medium bg-red-500/5 hover:bg-red-500/10 transition-colors shrink-0">
                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3" />
                                    </svg>
                                    {t('hiw.analyst.restart')}
                                 </button>
                              </div>

                              {/* Split Content Area (Grid) */}
                              <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 flex-1 min-h-0">
                                 {/* Left Panel: Chat Interface */}
                                 <div className="md:col-span-3 flex flex-col bg-[#141416]/50 border border-zinc-800/60 rounded-lg overflow-hidden shadow-sm h-full min-h-0">
                                    {/* Chat Header */}
                                    <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-zinc-800 bg-[#161619] shrink-0">
                                       <div className="flex items-center gap-1.5 min-w-0">
                                          <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-800">
                                             <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                             </svg>
                                          </div>
                                          <div className="flex flex-col text-start min-w-0">
                                             <span className="font-semibold text-[8.5px] text-zinc-200 truncate leading-none mb-0.5">{t('hiw.analyst.botName')}</span>
                                             <div className="flex items-center gap-1 leading-none">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                                                <span className="text-[7px] text-emerald-500 font-semibold truncate">{t('hiw.analyst.status')}</span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Chat Messages Log */}
                                    <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5 flex flex-col text-[9px] md:text-[10px] min-h-0">
                                       {/* Archi Message */}
                                       <div className="flex items-start gap-2 max-w-[90%] self-start text-start">
                                          <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
                                             <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                             </svg>
                                          </div>
                                          <div className="bg-zinc-800 text-zinc-200 border border-zinc-700/60 rounded-2xl rounded-ss-none px-2.5 py-1.5 shadow-sm leading-relaxed">
                                             {t('hiw.analyst.botHello')}
                                          </div>
                                       </div>

                                       {/* User Message */}
                                       <div className="flex items-start gap-2 max-w-[90%] self-end text-start flex-row-reverse">
                                          <div className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-sm">
                                             <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                             </svg>
                                          </div>
                                          <div className="bg-[#13233c] text-sky-100 border border-sky-500/15 rounded-2xl rounded-se-none px-2.5 py-1.5 shadow-sm leading-relaxed text-start flex-1 text-start">
                                             {t('hiw.analyst.userStep')}
                                          </div>
                                       </div>
                                    </div>

                                    {/* Chat Inputs */}
                                    <div className="p-2 border-t border-zinc-800 bg-[#121214] shrink-0 space-y-1.5">
                                       <div className="flex items-center justify-between text-[7px] md:text-[8px] text-zinc-500">
                                          <span className="text-start truncate max-w-[70%]">{t('hiw.analyst.inputNote')}</span>
                                          <button className="flex items-center gap-1 px-2 py-0.5 border border-sky-500/20 bg-sky-500/10 text-sky-400 rounded-full hover:bg-sky-500/20 shrink-0 font-medium transition-colors">
                                             <svg className="w-2.5 h-2.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                             </svg>
                                             {t('hiw.analyst.autoGen')}
                                          </button>
                                       </div>
                                       <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full p-1">
                                          <input 
                                             type="text" 
                                             disabled 
                                             placeholder={t('hiw.analyst.placeholder')} 
                                             className="bg-transparent border-none text-[8.5px] md:text-[9.5px] text-zinc-500 placeholder-zinc-500 flex-1 px-2 focus:outline-none text-start"
                                          />
                                          <button className="bg-sky-500 text-black rounded-full px-3 py-1 font-semibold text-[8px] md:text-[9px] flex items-center gap-1 shrink-0">
                                             <span>{t('hiw.analyst.send')}</span>
                                             <svg className="w-2.5 h-2.5 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                             </svg>
                                          </button>
                                       </div>
                                    </div>
                                 </div>

                                 {/* Right Panel: Live Backlog */}
                                 <div className="md:col-span-2 flex flex-col bg-[#141416]/50 border border-zinc-800/60 rounded-lg p-2 md:p-2.5 shadow-sm h-full min-h-0">
                                    {/* Backlog Header */}
                                    <div className="flex items-center justify-between mb-2 shrink-0">
                                       <div className="flex items-center gap-1 min-w-0">
                                          <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                          </svg>
                                          <span className="font-bold text-[9.5px] md:text-[10px] text-zinc-200 truncate">{t('hiw.analyst.backlog')}</span>
                                       </div>
                                       <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[7px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                          <svg className="w-2 h-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3" />
                                          </svg>
                                          {t('hiw.analyst.autoSync')}
                                       </span>
                                    </div>

                                    {/* Backlog Cards List */}
                                    <div className="flex-1 overflow-y-auto space-y-1.5 text-[8.5px] md:text-[9px] min-h-0 pr-0.5">
                                       {/* Item 1 (Expanded) */}
                                       <div className="bg-[#18181b] border border-zinc-800 rounded-md p-2 shadow-xs space-y-1.5 text-start">
                                          <div className="flex items-center justify-between gap-1">
                                             <div className="flex items-center gap-1 min-w-0">
                                                <svg className="w-3.5 h-3.5 text-zinc-550 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                </svg>
                                                <span className="font-semibold text-zinc-100 truncate">{t('hiw.analyst.item1Title')}</span>
                                             </div>
                                             <div className="flex items-center gap-1 shrink-0">
                                                <span className="px-1.5 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 text-[7.5px] font-semibold border border-sky-500/20">{t('hiw.analyst.item1Features')}</span>
                                                <svg className="w-3 h-3 text-zinc-505" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                                </svg>
                                             </div>
                                          </div>
                                          <p className="text-zinc-400 text-[8px] font-normal leading-normal">{t('hiw.analyst.item1Desc')}</p>

                                          {/* Sub Features */}
                                          <div className="space-y-1 pl-2 border-l border-sky-500/30 text-start">
                                             <div className="flex flex-col border-b border-zinc-800 pb-1">
                                                <span className="font-medium text-zinc-200">{t('hiw.analyst.sub1Title')}</span>
                                                <span className="text-[7.5px] text-zinc-550 truncate leading-none mt-0.5">{t('hiw.analyst.sub1Story')}</span>
                                             </div>
                                             <div className="flex flex-col">
                                                <span className="font-medium text-zinc-200">{t('hiw.analyst.sub2Title')}</span>
                                                <span className="text-[7.5px] text-zinc-550 truncate leading-none mt-0.5">{t('hiw.analyst.sub2Story')}</span>
                                             </div>
                                          </div>
                                       </div>

                                       {/* Item 2 */}
                                       <div className="bg-[#18181b] border border-zinc-800 rounded-md p-2 shadow-xs flex items-center justify-between text-start">
                                          <span className="font-semibold text-zinc-300">{t('hiw.analyst.item2Title')}</span>
                                          <div className="flex items-center gap-1">
                                             <span className="px-1.5 py-0.5 rounded-sm bg-zinc-800 text-zinc-500 text-[7.5px] border border-zinc-800">{t('hiw.analyst.item2Features')}</span>
                                             <svg className="w-3 h-3 text-zinc-450" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                             </svg>
                                          </div>
                                       </div>

                                       {/* Item 3 */}
                                       <div className="bg-[#18181b] border border-zinc-800 rounded-md p-2 shadow-xs flex items-center justify-between text-start">
                                          <span className="font-semibold text-zinc-300">{t('hiw.analyst.item3Title')}</span>
                                          <div className="flex items-center gap-1">
                                             <span className="px-1.5 py-0.5 rounded-sm bg-zinc-800 text-zinc-500 text-[7.5px] border border-zinc-800">{t('hiw.analyst.item3Features')}</span>
                                             <svg className="w-3 h-3 text-zinc-550" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                             </svg>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {/* STEP 1: ONE-CLICK BREAKDOWN (USER STORIES) */}
                  {activeStep === 1 && (
                     <motion.div
                        key="stories-hiw"
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full relative flex flex-col gap-6 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 rounded-xl origin-center"
                     >
                        <div>
                           <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-2 tracking-tight font-sans antialiased">
                              {t('hiw.phase02.title')}
                           </h3>
                           <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans font-normal max-w-[95%] tracking-tight">
                              {t('hiw.phase02.desc')}
                           </p>
                        </div>

                        {/* Immersive Window Frame Wrapper */}
                        <div className="w-full aspect-[4/3] min-h-[340px] md:min-h-[390px] rounded-3xl shadow-xl overflow-hidden flex items-end p-4 relative font-sans">
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
                           <div className="absolute inset-0 bg-black/15 z-5" />

                           {/* Floating OS Window Frame (User Stories Dark Theme) */}
                           <div className="dark relative z-10 w-[94%] h-[90%] mx-auto mb-3 bg-[#141416] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#262428] p-3 select-none text-zinc-200">
                              {/* Header bar */}
                              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 shrink-0">
                                 <div className="flex flex-col text-start">
                                    <span className="font-bold text-zinc-100 text-[11px] md:text-[12px] leading-tight">{t('hiw.stories.title')}</span>
                                    <span className="text-[8.5px] text-zinc-400 font-medium">{t('hiw.stories.project')}</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 shrink-0">
                                    <button className="flex items-center gap-1 px-2.5 py-1.5 border border-sky-500/20 text-sky-400 bg-sky-500/10 rounded-full text-[8.5px] font-semibold hover:bg-sky-500/20 transition-all shrink-0">
                                       ← {t('hiw.stories.back')}
                                    </button>
                                    <button className="flex items-center gap-1 px-3 py-1.5 bg-sky-500 text-black rounded-full text-[8.5px] font-bold hover:bg-sky-400 transition-all shrink-0">
                                       + {t('hiw.stories.add')}
                                    </button>
                                 </div>
                              </div>

                              {/* Stories Canvas Scroll area */}
                              <div className="flex-1 overflow-y-auto min-h-0 w-full pr-0.5">
                                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 p-0.5">
                                    {stories.map((story, i) => (
                                       <div
                                          key={i}
                                          className="bg-[#151518]/90 border border-zinc-800 rounded-xl p-2.5 shadow-sm flex flex-col justify-between aspect-[1.35] min-h-[95px] transition-all hover:border-sky-500/30"
                                       >
                                          {/* Top Action Group */}
                                          <div className="flex items-center justify-between gap-1.5 border-b border-zinc-800 pb-1.5 mb-2 shrink-0">
                                             <div className="inline-flex items-center gap-0.5 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded px-1 text-[7.5px] font-bold">
                                                <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span>3</span>
                                             </div>
                                             <div className="flex items-center gap-0.5 scale-90">
                                                <div className="bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                   </svg>
                                                </div>
                                                <div className="bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                   </svg>
                                                </div>
                                                <div className="bg-amber-500/5 text-amber-400/80 border border-amber-500/10 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                   </svg>
                                                </div>
                                                <div className="bg-red-500/10 text-red-400 border border-red-500/20 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 1116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </div>

                                          {/* Text Content */}
                                          <div className="flex-1 space-y-1 text-start">
                                             <span className="text-[7px] text-zinc-500 font-semibold block leading-none">{story.role}</span>
                                             <span className="text-[7.5px] md:text-[8.5px] text-zinc-100 font-bold block leading-snug">{story.want}</span>
                                             <span className="text-[7px] text-zinc-400 font-normal block leading-snug">{story.benefit}</span>
                                          </div>

                                          {/* Tag Bar & Badge */}
                                          <div className="flex items-center justify-between border-t border-zinc-800 pt-1.5 mt-2 shrink-0">
                                             <span className="inline-flex items-center gap-0.5 bg-zinc-800 text-zinc-300 rounded px-1.5 py-0.5 text-[6.5px] font-semibold border border-zinc-700/60 truncate max-w-[70%]">
                                                <svg className="w-2.5 h-2.5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="truncate">{story.tag}</span>
                                             </span>
                                             <span className="px-1 py-0.5 rounded bg-[#1c2e36]/35 border border-sky-500/20 text-sky-400 font-bold text-[6px] shrink-0 leading-none">{t('hiw.stories.new')}</span>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {/* STEP 2: AUTONOMOUS COMPILATION */}
                  {activeStep === 2 && (
                     <motion.div
                        key="compilation-hiw"
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full relative flex flex-col gap-6 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 rounded-xl origin-center"
                     >
                        <div>
                           <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-2 tracking-tight font-sans antialiased">
                              {t('hiw.phase03.title')}
                           </h3>
                           <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans font-normal max-w-[95%] tracking-tight">
                              {t('hiw.phase03.desc')}<span className="text-zinc-900 font-semibold">{t('hiw.phase03.brand')}</span>{t('hiw.phase03.descEnd')}
                           </p>
                        </div>

                        {/* Immersive Window Frame Wrapper */}
                        <div className="w-full aspect-[4/3] min-h-[340px] md:min-h-[390px] rounded-3xl shadow-xl overflow-hidden flex items-end p-4 relative font-sans">
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
                           <div className="absolute inset-0 bg-black/15 z-5" />

                           {/* Floating OS Window Frame (IDE Dark Theme) */}
                           <div className="dark relative z-10 w-[94%] h-[90%] mx-auto mb-3 bg-[#141416] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-800 select-none text-zinc-200">
                              
                              {/* Style tag for CSS animations (like progress bar) */}
                              <style dangerouslySetInnerHTML={{__html: `
                                 @keyframes progress-run-hiw {
                                    0% { width: 0%; }
                                    105% { width: 100%; }
                                 }
                                 .animate-progress-run-hiw {
                                    animation: progress-run-hiw 1s linear infinite;
                                 }
                              `}} />

                              {/* IDE Top Bar Header */}
                              <div className="h-8 border-b border-zinc-800 bg-[#121214] flex items-center justify-between px-3 text-[10px] text-zinc-450 shrink-0 font-sans">
                                 {/* Window Controls */}
                                 <div className="flex items-center gap-1.5 w-16">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/20"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/20"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/20"></span>
                                 </div>

                                 {/* Search Bar */}
                                 <div className="w-48 sm:w-56 h-5.5 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-between px-2 text-[9px] text-zinc-555 cursor-text transition-colors">
                                    <div className="flex items-center gap-1">
                                       <svg className="w-2.5 h-2.5 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                       </svg>
                                       <span className="font-medium text-zinc-505">Search ArchiTest</span>
                                    </div>
                                    <span className="text-[7.5px] bg-zinc-800 border border-zinc-700 text-zinc-400 rounded px-1 scale-90">Ctrl+K</span>
                                 </div>

                                 {/* Action Items */}
                                 <div className="flex items-center gap-2 w-24 justify-end">
                                    <button className="flex items-center gap-1 px-1.5 py-0.5 border border-zinc-800 bg-zinc-900 rounded text-[8.5px] font-medium text-zinc-300 hover:bg-zinc-800 transition-all cursor-pointer leading-none">
                                       <svg className="w-2.5 h-2.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                       </svg>
                                       <span>Copy path</span>
                                    </button>
                                 </div>
                              </div>

                              {/* Main Workspace Body */}
                              <div className="flex-1 flex overflow-hidden min-h-0 relative">
                                 
                                 {/* Center Editor Panel */}
                                 <div className="flex-1 flex flex-col bg-[#151518] overflow-hidden min-w-0 relative">
                                    
                                    {/* Editor Tab Header */}
                                    <div className="h-7 border-b border-zinc-800 bg-[#121214] flex items-center justify-between shrink-0 select-none font-sans px-1.5">
                                       <div className="flex items-center h-full">
                                          <div className="bg-[#151518] h-full border-r border-zinc-800 border-t-2 border-t-sky-400 text-zinc-200 text-[8.5px] font-semibold px-3 flex items-center gap-1.5 relative top-[0.5px]">
                                             <span>QA Platform Business Requirements</span>
                                             <button className="text-zinc-505 hover:text-zinc-350 scale-90">×</button>
                                          </div>
                                       </div>
                                       <div className="flex items-center gap-1 text-zinc-555 px-1">
                                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                                          <button className="text-zinc-505 hover:text-zinc-300">
                                             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM14 10a2 2 0 11-4 0 2 2 0 014 0zM22 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                             </svg>
                                          </button>
                                       </div>
                                    </div>
                                    {/* Editor Document Content */}
                                    <div className="flex-1 overflow-y-auto no-scrollbar p-4 font-sans text-start select-text leading-relaxed text-zinc-300" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                       <div className="text-[12px] font-bold text-zinc-100 border-b border-[#27272a] pb-1.5 mb-2.5" style={{ borderBottomColor: '#27272a' }}>
                                          {t('hiw.compilation.title')}
                                       </div>

                                       {/* Paths & Description List */}
                                       <div className="space-y-1.5 mb-4 text-[9.5px]">
                                          <div className="flex items-start gap-4 py-0.5 border-b border-[#27272a]" style={{ borderBottomColor: '#27272a' }}>
                                             <span className="font-mono text-sky-400 font-bold shrink-0 min-w-[110px]">/dashboard/tests</span>
                                             <span className="text-zinc-400 font-medium">CRUD test cases with step definition, description, convert to bug</span>
                                          </div>
                                          <div className="flex items-start gap-4 py-0.5 border-b border-[#27272a]" style={{ borderBottomColor: '#27272a' }}>
                                             <span className="font-mono text-sky-400 font-bold shrink-0 min-w-[110px]">/dashboard/bugs</span>
                                             <span className="text-zinc-400 font-medium">CRUD bugs with severity/status/environment</span>
                                          </div>
                                          <div className="flex items-start gap-4 py-0.5 border-b border-[#27272a]" style={{ borderBottomColor: '#27272a' }}>
                                             <span className="font-mono text-sky-400 font-bold shrink-0 min-w-[110px]">/dashboard/tasks</span>
                                             <span className="text-zinc-400 font-medium">Daily task checklist with recurring option</span>
                                          </div>
                                          <div className="flex items-start gap-4 py-0.5 border-b border-[#27272a]" style={{ borderBottomColor: '#27272a' }}>
                                             <span className="font-mono text-sky-400 font-bold shrink-0 min-w-[110px]">/dashboard/settings</span>
                                             <span className="text-zinc-400 font-medium">Light/Dark theme toggle + English/Arabic RTL toggle</span>
                                          </div>
                                       </div>

                                       {/* Tech details */}
                                       <div className="text-[9.5px] mb-3">
                                          <div className="font-bold text-zinc-100 text-[10px] mb-1">Backend (Express 5 + TypeScript)</div>
                                          <ul className="list-disc pl-4 space-y-0.5 text-zinc-400 text-start">
                                             <li>REST API at <span className="font-mono text-sky-400">/api/tests</span>, <span className="font-mono text-sky-400">/api/bugs</span>, <span className="font-mono text-sky-400">/api/tasks</span></li>
                                             <li>Auth middleware (JWT from Supabase)</li>
                                             <li>Health check at <span className="font-mono text-sky-400">/api/health</span></li>
                                          </ul>
                                       </div>

                                       {/* Getting started */}
                                       <div className="text-[9.5px]">
                                          <div className="font-bold text-zinc-100 text-[10px] mb-1">To Start</div>
                                          <ol className="list-decimal pl-4 space-y-0.5 text-zinc-400 font-mono text-[9px] text-start">
                                             <li>Create a Supabase project, run <span className="text-emerald-600">supabase/migration.sql</span></li>
                                             <li>Set Supabase credentials in <span className="text-zinc-400">frontend/.env.local</span> and <span className="text-zinc-400">backend/.env</span></li>
                                             <li>npm run dev from root (runs both apps)</li>
                                          </ol>
                                       </div>
                                    </div>

                                    {/* IDE Bottom Chat & Integrated Live Compilation Log Section */}
                                    <div className="border-t border-zinc-800 bg-[#121214] flex flex-col p-2.5 gap-2 relative z-10 shrink-0 select-none text-start font-sans">
                                       
                                       {/* Git Diff Compilation Log Header */}
                                       <div className="flex items-center justify-between border-b border-[#27272a] pb-1.5 px-1 font-sans text-[8.5px] text-zinc-400" style={{ borderBottomColor: '#27272a' }}>
                                          <div className="flex items-center gap-1 text-zinc-350 font-semibold cursor-pointer">
                                             <span>1 file changed</span>
                                             <span className="flex gap-1 ml-1.5 font-bold">
                                                <span className="text-emerald-600">+{compilingFiles[activeFileIndex].added}</span>
                                                <span className="text-red-500">-{compilingFiles[activeFileIndex].deleted}</span>
                                             </span>
                                             <span className="text-zinc-400 ml-1">▼</span>
                                          </div>
                                          <button className="flex items-center gap-1.5 px-2 py-0.5 border border-zinc-800 bg-[#18181b] hover:bg-zinc-800 rounded text-[8.5px] font-semibold text-zinc-300 transition-all cursor-pointer leading-none">
                                             <svg className="w-2.5 h-2.5 text-zinc-555" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                             </svg>
                                             <span>Review</span>
                                          </button>
                                       </div>

                                       {/* File updates live looping list (3 items) */}
                                       <div className="space-y-1.5 px-1 font-sans text-[8.5px]">
                                          
                                          {/* File 1 & 2: Completed */}
                                          {[
                                             compilingFiles[(activeFileIndex - 2 + compilingFiles.length) % compilingFiles.length],
                                             compilingFiles[(activeFileIndex - 1 + compilingFiles.length) % compilingFiles.length]
                                          ].map((file, idx) => (
                                             <div key={idx} className="flex items-center justify-between text-zinc-400 py-0.5 border-b border-zinc-800/50">
                                                <div className="flex items-center gap-2 text-start">
                                                   <span className="text-[7.5px] uppercase tracking-wider text-zinc-500 font-semibold min-w-[38px]">{file.action === 'Created' ? 'Created' : 'Edited'}</span>
                                                   {getFileIcon(file.type)}
                                                   <span className="font-semibold text-zinc-350 truncate">{file.name}</span>
                                                   <span className="text-[7.5px] text-zinc-400 font-mono truncate max-w-[120px]">{file.path}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 font-bold shrink-0 text-start">
                                                   <span className="text-emerald-600/80">+{file.added}</span>
                                                   {file.deleted > 0 && <span className="text-red-500/80">-{file.deleted}</span>}
                                                </div>
                                             </div>
                                          ))}

                                          {/* File 3: Live Compiling Active File */}
                                          {(() => {
                                             const activeFile = compilingFiles[activeFileIndex];
                                             return (
                                                <div className="flex items-center justify-between py-0.5 text-zinc-200 border-b border-zinc-800 font-bold bg-sky-950/20 rounded px-1 -mx-1 border-l-2 border-l-sky-500 animate-[pulse_1s_infinite]">
                                                   <div className="flex items-center gap-2 text-start">
                                                      <span className="text-[7.5px] uppercase tracking-wider text-sky-400 font-bold min-w-[38px] flex items-center gap-0.5">
                                                         <svg className="w-2.5 h-2.5 animate-spin shrink-0 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3" />
                                                         </svg>
                                                         <span>LIVE</span>
                                                      </span>
                                                      {getFileIcon(activeFile.type)}
                                                      <span className="text-zinc-100">{activeFile.name}</span>
                                                      <span className="text-[7.5px] text-zinc-450 font-mono truncate max-w-[120px]">{activeFile.path}</span>
                                                   </div>
                                                   <div className="flex items-center gap-1.5 shrink-0 font-extrabold text-[9px] text-start">
                                                      <span className="text-emerald-600">+{activeFile.added}</span>
                                                      {activeFile.deleted > 0 && <span className="text-red-500">-{activeFile.deleted}</span>}
                                                   </div>
                                                </div>
                                             );
                                          })()}
                                       </div>

                                       {/* Chat Input row */}
                                       <div className="relative flex items-center bg-[#151518] border border-zinc-800 rounded-md shadow-sm px-2 gap-1.5 h-7 mt-1 overflow-hidden">
                                          <button className="text-zinc-555 hover:text-zinc-350 cursor-pointer shrink-0">
                                             <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.013 21.013a5.25 5.25 0 01-7.424-7.424l9.83-9.83a3.75 3.75 0 015.304 5.304l-7.905 7.905a2.25 2.25 0 01-3.182-3.182l7.905-7.905a.75.75 0 011.06 1.06l-7.905 7.905a.75.75 0 001.06 1.06l7.905-7.905a2.25 2.25 0 00-3.182-3.182l-7.905 7.905a3.75 3.75 0 005.304 5.304l9.83-9.83a5.25 5.25 0 00-7.424 7.424l-2.013 2.013" />
                                             </svg>
                                          </button>
                                          <span className="text-[9.5px] text-zinc-500 text-start flex-1 select-none pointer-events-none truncate">
                                             {t('hiw.compilation.askAnything')}
                                          </span>
                                          <button className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                                             <svg className="w-2.5 h-2.5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                             </svg>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </motion.div>

            {/* Right side indicators (desktop only) */}
            <motion.div style={{ opacity: indicatorOpacity }} className={`absolute top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center text-[12px] font-medium font-mono uppercase tracking-widest gap-2 z-10 pointer-events-none ${isRTL ? 'left-[5%]' : 'right-[5%]'}`}>
               <div className="py-2 transition-colors duration-300" style={{ color: activeStep === 0 ? "#38bdf8" : "#94a3b8" }}>{t('hiw.step1')}</div>
               <div className="w-[1px] h-8 bg-slate-200"></div>
               <div className="py-2 transition-colors duration-300" style={{ color: activeStep === 1 ? "#38bdf8" : "#94a3b8" }}>{t('hiw.step2')}</div>
               <div className="w-[1px] h-8 bg-slate-200"></div>
               <div className="py-2 transition-colors duration-300" style={{ color: activeStep === 2 ? "#38bdf8" : "#94a3b8" }}>{t('hiw.step3')}</div>
            </motion.div>
         </div>
      </section>
   );
}