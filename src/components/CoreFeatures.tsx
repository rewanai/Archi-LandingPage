import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';
import { DarkArchiDevMockup } from './DarkArchiDevMockup';

export function CoreFeatures() {
   const { t, isRTL } = useLanguage();

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

   const [activeFileIndex, setActiveFileIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveFileIndex((prev) => (prev + 1) % compilingFiles.length);
      }, 1000);
      return () => clearInterval(interval);
   }, []);

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

   const stories = [
      { role: t('hiw.stories.c1Role'), want: t('hiw.stories.c1Want'), benefit: t('hiw.stories.c1Benefit'), tag: t('hiw.stories.c1Tag') },
      { role: t('hiw.stories.c2Role'), want: t('hiw.stories.c2Want'), benefit: t('hiw.stories.c2Benefit'), tag: t('hiw.stories.c2Tag') },
      { role: t('hiw.stories.c3Role'), want: t('hiw.stories.c3Want'), benefit: t('hiw.stories.c3Benefit'), tag: t('hiw.stories.c3Tag') },
      { role: t('hiw.stories.c4Role'), want: t('hiw.stories.c4Want'), benefit: t('hiw.stories.c4Benefit'), tag: t('hiw.stories.c4Tag') },
      { role: t('hiw.stories.c5Role'), want: t('hiw.stories.c5Want'), benefit: t('hiw.stories.c5Benefit'), tag: t('hiw.stories.c5Tag') },
      { role: t('hiw.stories.c6Role'), want: t('hiw.stories.c6Want'), benefit: t('hiw.stories.c6Benefit'), tag: t('hiw.stories.c6Tag') }
   ];

   const tabs = [
      t('hiw.form.title'),
      t('hiw.analyst.title'),
      t('hiw.stories.title'),
      t('hiw.design.title'),
      t('hiw.phase03.title')
   ];
   const [activeTab, setActiveTab] = useState(tabs[0]);
   const [dots, setDots] = useState('');

   useEffect(() => {
      const interval = setInterval(() => {
         setDots((d) => (d.length >= 3 ? '' : d + '.'));
      }, 500);
      return () => clearInterval(interval);
   }, []);

   return (
      <section
         dir={isRTL ? 'rtl' : 'ltr'}
         className="relative w-full py-24 md:py-32 bg-[#1b1918] z-20 rounded-t-3xl md:rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] mt-[-40px] text-white"
      >
         <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16">

            {/* Header */}
            <div className="mb-14">
               {/* Category Tag — matches site-wide pattern */}
               <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-8 text-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  {t('core.badge')}
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end text-start">
                  <div className="lg:col-span-7">
                     <h2
                        className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] font-[300] text-white leading-[1.05] tracking-[-0.025em]"
                        style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
                     >
                        {isRTL ? (
                           <>
                              من التخطيط إلى <span className="text-[#38bdf8]">{"{الكود}"}</span>.
                           </>
                        ) : (
                           <>
                              From Scoping to <span className="text-[#38bdf8]">{"{Code}"}</span>.
                           </>
                        )}{' '}
                        <span className="text-white/30 font-[200]">{t('core.h2.line2')}</span>
                     </h2>
                  </div>
                  <div className="lg:col-span-5">
                     <p
                        className="text-[14px] md:text-[15px] text-white/40 font-light leading-[1.75] max-w-md"
                        style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
                     >
                        {t('core.desc')}
                     </p>
                  </div>
               </div>
            </div>

            {/* Tab Navigation — Centered Tab Bar with light blue border glow */}
            <div className="flex justify-center w-full mb-12">
               <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-[#09090b]/60 backdrop-blur-md border border-[#38bdf8]/30 rounded-full shadow-[0_0_22px_rgba(56,189,248,0.18)] max-w-full">
                  {tabs.map((tab) => (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4.5 rounded-full text-[10.5px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${activeTab === tab
                           ? 'bg-[#38bdf8]/15 border border-[#38bdf8]/45 text-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.12)]'
                           : 'text-white/40 hover:text-white/80 border border-transparent'
                           }`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>

            {/* Content Viewer (Sunset backdrop with dynamic cards in dark theme) */}
            <div className="w-full h-[580px] md:h-auto aspect-auto md:aspect-[16/10] lg:aspect-[1.8/1] rounded-[2rem] bg-[#09090b] overflow-hidden relative shadow-2xl">
               {/* Background Image (Landscape backdrop) */}
               <div className="absolute inset-0 z-0 select-none pointer-events-none">
                  <img
                     src="https://images.unsplash.com/photo-1635776062360-af423602aff3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="Sunset Landscape"
                     className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/40"></div>
               </div>

               {/* Outer Frame Wrapper with scaled visual representation */}
               <div className="absolute inset-x-3 inset-y-4 sm:inset-x-8 sm:inset-y-8 md:inset-x-12 md:inset-y-10 lg:inset-x-16 lg:inset-y-12 z-10 flex items-center justify-center">
                  <div className="w-full h-full max-w-[900px] max-h-[550px] relative">

                     <AnimatePresence mode="wait">
                        {/* TAB 1: AI PRODUCT MANAGER DISCOVERY */}
                        {activeTab === tabs[0] && (
                           <motion.div
                              key="vision-form"
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.25 }}
                              className="w-full h-full bg-[#f8fafc] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200 p-2.5 sm:p-3 select-none text-[8.5px] md:text-[9.5px] text-zinc-700 font-sans"
                           >
                              <style>{`
                                      @keyframes dash-progress {
                                         from { stroke-dashoffset: 150.8; }
                                         to { stroke-dashoffset: 113.1; }
                                      }
                                   `}</style>

                              {/* Header */}
                              <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-2 shrink-0">
                                 <div className="flex items-center gap-1.5 min-w-0">
                                    <button className="px-2.5 py-1 border border-indigo-600/20 text-[#6366f1] hover:bg-[#6366f1]/5 rounded text-[8px] sm:text-[9.5px] font-semibold transition-colors shrink-0 leading-none">
                                       {t('hiw.pm.back')}
                                    </button>
                                    <span className="font-bold text-zinc-800 text-[10.5px] sm:text-[11.5px] truncate">
                                       {t('hiw.pm.title')}
                                    </span>
                                    <span className="px-2 py-0.5 bg-zinc-105 text-zinc-650 rounded-full text-[7.5px] sm:text-[8.5px] font-semibold tracking-wide shrink-0">
                                       {t('hiw.pm.discovery')}
                                    </span>
                                 </div>

                                 <div className="flex items-center gap-1.5 shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-[7.5px] sm:text-[8.5px] text-zinc-400 font-semibold tracking-wider uppercase">
                                       {t('hiw.pm.active')}
                                    </span>
                                 </div>
                              </div>

                              {/* Main Workspace Split */}
                              <div className="flex flex-1 gap-2.5 overflow-hidden min-h-0">
                                 {/* Left Panel: Chat Interface */}
                                 <div className="flex-1 flex flex-col bg-slate-50 border border-zinc-200/80 rounded-lg overflow-hidden p-2.5 md:p-3 h-full min-h-0">
                                    {/* Chat Messages Log */}
                                    <div className="flex-1 overflow-y-auto p-1.5 space-y-3.5 flex flex-col min-h-0">
                                       {/* AI Message Bubble 1 */}
                                       <div className="flex flex-col items-start gap-1 max-w-[85%] self-start text-start">
                                          <div className="bg-white text-zinc-800 border border-zinc-200/60 rounded-lg p-2.5 shadow-3xs leading-relaxed text-[9px] sm:text-[10px]">
                                             {t('hiw.pm.hello')}
                                             <span className="text-[7.5px] text-zinc-400 block text-right mt-1.5">06:49</span>
                                          </div>
                                          <span className="text-[7.5px] sm:text-[8.5px] text-zinc-400 font-semibold px-1">
                                             {t('hiw.pm.title')}
                                          </span>
                                       </div>

                                       {/* User Message Bubble */}
                                       <div className="flex flex-col items-end gap-1 max-w-[85%] self-end text-start">
                                          <div className="bg-[#eff6ff] text-indigo-950 border border-indigo-100/80 rounded-lg p-2.5 shadow-3xs leading-relaxed text-[9px] sm:text-[10px]">
                                             {t('hiw.pm.userMsg1')}
                                             <span className="text-[7.5px] text-indigo-400 block text-right mt-1.5">06:50</span>
                                          </div>
                                          <span className="text-[7.5px] sm:text-[8.5px] text-zinc-400 font-semibold px-1 block text-right">
                                             {t('hiw.pm.userName')}
                                          </span>
                                       </div>

                                       {/* AI Message Bubble 2 */}
                                       <div className="flex flex-col items-start gap-1 max-w-[85%] self-start text-start">
                                          <div className="bg-white text-zinc-800 border border-zinc-200/60 rounded-lg p-2.5 shadow-3xs leading-relaxed text-[9px] sm:text-[10px]">
                                             {t('hiw.pm.botMsg2')}
                                             <span className="text-[7.5px] text-zinc-400 block text-right mt-1.5">06:50</span>
                                          </div>
                                          <span className="text-[7.5px] sm:text-[8.5px] text-zinc-400 font-semibold px-1">
                                             {t('hiw.pm.title')}
                                          </span>
                                       </div>
                                    </div>

                                    {/* Chat Inputs */}
                                    <div className="mt-2 shrink-0 flex gap-2 bg-white border border-zinc-200/85 rounded-lg p-1">
                                       <input
                                          type="text"
                                          disabled
                                          placeholder={t('hiw.pm.replyPlaceholder')}
                                          className="bg-transparent border-none text-[8px] sm:text-[9.5px] text-zinc-800 placeholder-zinc-400 flex-1 px-2.5 focus:outline-none text-start"
                                       />
                                       <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-md px-3.5 py-1.5 font-semibold text-[8px] sm:text-[9.5px] shrink-0 shadow-3xs transition-colors duration-200 leading-none">
                                          {t('hiw.pm.send')}
                                       </button>
                                    </div>
                                 </div>

                                 {/* Right Panel: Discovery Ledger */}
                                 <div className="w-[180px] sm:w-[220px] shrink-0 flex flex-col bg-white border border-zinc-200/80 rounded-lg p-2.5 gap-3 overflow-y-auto h-full min-h-0">
                                    <div className="text-[8.5px] sm:text-[9.5px] font-bold text-zinc-400 tracking-wider uppercase text-start">
                                       {t('hiw.pm.ledger')}
                                    </div>

                                    {/* Venture Card */}
                                    <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-2 text-start shrink-0">
                                       <div className="text-[7px] sm:text-[7.5px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">
                                          {t('hiw.pm.ventureTitle')}
                                       </div>
                                       <div className="text-[8.5px] sm:text-[9.5px] font-bold text-indigo-600 font-sans">
                                          HabitArc
                                       </div>
                                    </div>

                                    {/* Project Understanding Heading */}
                                    <div className="text-[7px] sm:text-[7.5px] text-zinc-400 font-bold uppercase tracking-wider mt-1 text-start shrink-0">
                                       {t('hiw.pm.understanding')}
                                    </div>

                                    {/* Progress Circular */}
                                    <div className="flex flex-col items-center gap-1 py-1 shrink-0">
                                       <div className="relative w-14 h-14 flex items-center justify-center">
                                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                                             <circle cx="32" cy="32" r="24" className="stroke-zinc-100 fill-none" strokeWidth="4.5" />
                                             <circle
                                                cx="32"
                                                cy="32"
                                                r="24"
                                                className="stroke-[#6366f1] fill-none"
                                                strokeWidth="4.5"
                                                strokeDasharray="150.8"
                                                strokeDashoffset="113.1"
                                                strokeLinecap="round"
                                                style={{ animation: 'dash-progress 1.5s ease-out forwards' }}
                                             />
                                          </svg>
                                          <span className="absolute text-zinc-800 font-bold text-[10px] sm:text-[11px]">25%</span>
                                       </div>
                                       <span className="text-[7.5px] sm:text-[8px] text-zinc-500 font-medium">
                                          {t('hiw.pm.phase')}
                                       </span>
                                    </div>

                                    {/* Checklist Items */}
                                    <div className="space-y-1.5">
                                       {/* Item 1 - Checked */}
                                       <div className="flex items-center gap-2 border border-zinc-200/80 bg-zinc-50/50 rounded-lg p-1.5 text-start">
                                          <div className="w-3.5 h-3.5 rounded-full bg-[#6366f1] flex items-center justify-center shrink-0 shadow-3xs">
                                             <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                             </svg>
                                          </div>
                                          <span className="text-[8px] sm:text-[9.5px] text-zinc-800 font-semibold truncate">
                                             {t('hiw.pm.check1')}
                                          </span>
                                       </div>

                                       {/* Item 2 - Unchecked */}
                                       <div className="flex items-center gap-2 border border-zinc-200/80 rounded-lg p-1.5 text-start opacity-70">
                                          <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-300 shrink-0" />
                                          <span className="text-[8px] sm:text-[9.5px] text-zinc-500 font-medium truncate">
                                             {t('hiw.pm.check2')}
                                          </span>
                                       </div>

                                       {/* Item 3 - Unchecked */}
                                       <div className="flex items-center gap-2 border border-zinc-200/80 rounded-lg p-1.5 text-start opacity-70">
                                          <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-300 shrink-0" />
                                          <span className="text-[8px] sm:text-[9.5px] text-zinc-500 font-medium truncate">
                                             {t('hiw.pm.check3')}
                                          </span>
                                       </div>

                                       {/* Item 4 - Unchecked */}
                                       <div className="flex items-center gap-2 border border-zinc-200/80 rounded-lg p-1.5 text-start opacity-70">
                                          <div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-300 shrink-0" />
                                          <span className="text-[8px] sm:text-[9.5px] text-zinc-500 font-medium truncate">
                                             {t('hiw.pm.check4')}
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        )}

                        {/* TAB 2: THE ANALYST (DARK THEME) */}
                        {activeTab === tabs[1] && (
                           <motion.div
                              key="analyst-dark"
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.25 }}
                              className="w-full h-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200 p-2.5 md:p-3 select-none"
                           >
                              {/* Dashboard Header Bar */}
                              <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-2 shrink-0">
                                 <div className="flex flex-col text-start">
                                    <span className="font-bold text-zinc-800 text-[10.5px] md:text-[12px] leading-tight">{t('hiw.analyst.title')}</span>
                                    <span className="text-[8.5px] text-zinc-500 font-medium">{t('hiw.analyst.project')}</span>
                                 </div>
                                 <button className="flex items-center gap-1 px-2.5 py-0.5 border border-red-500/20 text-red-500 rounded-full text-[8px] md:text-[9px] font-medium bg-red-500/5 hover:bg-red-500/10 transition-colors shrink-0">
                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3" />
                                    </svg>
                                    {t('hiw.analyst.restart')}
                                 </button>
                              </div>

                              {/* Split Content Area (Grid) */}
                              <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 flex-1 min-h-0">
                                 {/* Left Panel: Chat Interface */}
                                 <div className="md:col-span-3 flex flex-col bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden shadow-sm h-full min-h-0">
                                    {/* Chat Header */}
                                    <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-zinc-200 bg-zinc-100 shrink-0">
                                       <div className="flex items-center gap-1.5 min-w-0">
                                          <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 border border-zinc-300">
                                             <svg className="w-3 h-3 text-zinc-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                             </svg>
                                          </div>
                                          <div className="flex flex-col text-start min-w-0">
                                             <span className="font-semibold text-[8.5px] text-zinc-800 truncate leading-none mb-0.5">{t('hiw.analyst.botName')}</span>
                                             <div className="flex items-center gap-1 leading-none">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                                                <span className="text-[7px] text-emerald-600 font-semibold truncate">{t('hiw.analyst.status')}</span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Chat Messages Log */}
                                    <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5 flex flex-col text-[9px] md:text-[10px] min-h-0">
                                       {/* Archi Message */}
                                       <div className="flex items-start gap-2 max-w-[90%] self-start text-start">
                                          <div className="w-4 h-4 rounded-full bg-zinc-200 flex items-center justify-center shrink-0 border border-zinc-300">
                                             <svg className="w-2.5 h-2.5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                             </svg>
                                          </div>
                                          <div className="bg-white text-zinc-800 border border-zinc-200 rounded-2xl rounded-ss-none px-2.5 py-1.5 shadow-sm leading-relaxed">
                                             {t('hiw.analyst.botHello')}
                                          </div>
                                       </div>

                                       {/* User Message */}
                                       <div className="flex items-start gap-2 max-w-[90%] self-end text-start flex-row-reverse">
                                          <div className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-600 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-sm">
                                             <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                             </svg>
                                          </div>
                                          <div className="bg-sky-50 text-sky-900 border border-sky-100/80 rounded-2xl rounded-se-none px-2.5 py-1.5 shadow-sm leading-relaxed text-start">
                                             {t('hiw.analyst.userStep')}
                                          </div>
                                       </div>
                                    </div>

                                    {/* Chat Inputs */}
                                    <div className="p-2 border-t border-zinc-200 bg-zinc-100 shrink-0 space-y-1.5">
                                       <div className="flex items-center justify-between text-[7px] md:text-[8px] text-zinc-500">
                                          <span className="text-start truncate max-w-[70%]">{t('hiw.analyst.inputNote')}</span>
                                          <button className="flex items-center gap-1 px-2 py-0.5 border border-sky-500/20 bg-sky-500/10 text-sky-600 rounded-full hover:bg-sky-500/20 shrink-0 font-medium transition-colors">
                                             <svg className="w-2.5 h-2.5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                             </svg>
                                             {t('hiw.analyst.autoGen')}
                                          </button>
                                       </div>
                                       <div className="flex items-center gap-1.5 bg-white border border-zinc-200 rounded-full p-1">
                                          <input
                                             type="text"
                                             disabled
                                             placeholder={t('hiw.analyst.placeholder')}
                                             className="bg-transparent border-none text-[8.5px] md:text-[9.5px] text-zinc-800 placeholder-zinc-400 flex-1 px-2 focus:outline-none text-start"
                                          />
                                          <button className="bg-sky-500 text-white rounded-full px-3 py-1 font-semibold text-[8px] md:text-[9px] flex items-center gap-1 shrink-0">
                                             <span>{t('hiw.analyst.send')}</span>
                                             <svg className="w-2.5 h-2.5 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                             </svg>
                                          </button>
                                       </div>
                                    </div>
                                 </div>

                                 {/* Right Panel: Live Backlog */}
                                 <div className="md:col-span-2 flex flex-col bg-zinc-50 border border-zinc-200 rounded-lg p-2 md:p-2.5 shadow-sm h-full min-h-0">
                                    {/* Backlog Header */}
                                    <div className="flex items-center justify-between mb-2 shrink-0">
                                       <div className="flex items-center gap-1 min-w-0">
                                          <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                          </svg>
                                          <span className="font-bold text-[9.5px] md:text-[10px] text-zinc-800 truncate">{t('hiw.analyst.backlog')}</span>
                                       </div>
                                       <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[7px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shrink-0">
                                          <svg className="w-2 h-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3" />
                                          </svg>
                                          {t('hiw.analyst.autoSync')}
                                       </span>
                                    </div>

                                    {/* Backlog Cards List */}
                                    <div className="flex-1 overflow-y-auto space-y-1.5 text-[8.5px] md:text-[9px] min-h-0 pr-0.5">
                                       {/* Item 1 (Expanded) */}
                                       <div className="bg-white border border-zinc-200 rounded-md p-2 shadow-xs space-y-1.5 text-start">
                                          <div className="flex items-center justify-between gap-1">
                                             <div className="flex items-center gap-1 min-w-0">
                                                <svg className="w-3 h-3 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                </svg>
                                                <span className="font-semibold text-zinc-800 truncate">{t('hiw.analyst.item1Title')}</span>
                                             </div>
                                             <div className="flex items-center gap-1 shrink-0">
                                                <span className="px-1.5 py-0.5 rounded-sm bg-sky-500/10 text-sky-600 text-[7.5px] font-semibold border border-sky-500/20">{t('hiw.analyst.item1Features')}</span>
                                                <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                                </svg>
                                             </div>
                                          </div>
                                          <p className="text-zinc-550 text-[8px] font-normal leading-normal">{t('hiw.analyst.item1Desc')}</p>

                                          {/* Sub Features */}
                                          <div className="space-y-1 pl-2 border-l border-sky-500/30">
                                             <div className="flex flex-col border-b border-zinc-100 pb-1">
                                                <span className="font-medium text-zinc-700">{t('hiw.analyst.sub1Title')}</span>
                                                <span className="text-[7.5px] text-zinc-400 truncate leading-none mt-0.5">{t('hiw.analyst.sub1Story')}</span>
                                             </div>
                                             <div className="flex flex-col">
                                                <span className="font-medium text-zinc-700">{t('hiw.analyst.sub2Title')}</span>
                                                <span className="text-[7.5px] text-zinc-400 truncate leading-none mt-0.5">{t('hiw.analyst.sub2Story')}</span>
                                             </div>
                                          </div>
                                       </div>

                                       {/* Item 2 */}
                                       <div className="bg-white border border-zinc-200 rounded-md p-2 shadow-xs flex items-center justify-between text-start">
                                          <span className="font-semibold text-zinc-700">{t('hiw.analyst.item2Title')}</span>
                                          <div className="flex items-center gap-1">
                                             <span className="px-1.5 py-0.5 rounded-sm bg-zinc-100 text-zinc-500 text-[7.5px] border border-zinc-200">{t('hiw.analyst.item2Features')}</span>
                                             <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                             </svg>
                                          </div>
                                       </div>

                                       {/* Item 3 */}
                                       <div className="bg-white border border-zinc-200 rounded-md p-2 shadow-xs flex items-center justify-between text-start">
                                          <span className="font-semibold text-zinc-700">{t('hiw.analyst.item3Title')}</span>
                                          <div className="flex items-center gap-1">
                                             <span className="px-1.5 py-0.5 rounded-sm bg-zinc-100 text-zinc-500 text-[7.5px] border border-zinc-200">{t('hiw.analyst.item3Features')}</span>
                                             <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                             </svg>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        )}

                        {/* TAB 3: DESIGN CONFIGURATION */}
                        {activeTab === tabs[3] && (
                           <motion.div
                              key="design-config"
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.25 }}
                              className="w-full h-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200 p-3 select-none text-zinc-600 font-sans"
                           >
                              {/* Header bar */}
                              <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-2 shrink-0 text-start">
                                 <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                       <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
                                       <path d="M7.5 10.5C8.32843 10.5 9 9.82843 9 9C9 8.17157 8.32843 7.5 7.5 7.5C6.67157 7.5 6 8.17157 6 9C6 9.82843 6.67157 10.5 7.5 10.5Z" fill="currentColor" />
                                       <path d="M11.5 7.5C12.3284 7.5 13 6.82843 13 6C13 5.17157 12.3284 4.5 11.5 4.5C10.6716 4.5 10 5.17157 10 6C10 6.82843 10.6716 7.5 11.5 7.5Z" fill="currentColor" />
                                       <path d="M16.5 9.5C17.3284 9.5 18 8.82843 18 8C18 7.17157 17.3284 6.5 16.5 6.5C15.6716 6.5 14 7.17157 14 8C14 8.82843 15.6716 9.5 16.5 9.5Z" fill="currentColor" />
                                       <path d="M6 14C6 14 8 13 10 15C12 17 14 18 17 16" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="font-bold text-zinc-800 text-[11px] md:text-[12px] leading-tight">{t('hiw.design.title')}</span>
                                 </div>
                              </div>

                              {/* Content Grid split side-by-side */}
                              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 flex-1 min-h-0 text-start">
                                 {/* Left side: Configuration details */}
                                 <div className="md:col-span-3 overflow-y-auto space-y-2.5 pr-0.5">
                                    {/* Application Logo Section */}
                                    <div>
                                       <label className="text-[7.5px] uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                                          {t('hiw.design.logo')}
                                       </label>
                                       {/* Currently Active Logo indicator */}
                                       <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-2 flex items-center gap-2 mb-1.5">
                                          <div className="w-8 h-8 rounded bg-zinc-250 border border-zinc-200 flex items-center justify-center text-zinc-550 shrink-0">
                                             {/* Sprout Icon */}
                                             <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                             </svg>
                                          </div>
                                          <div className="flex flex-col">
                                             <span className="font-bold text-[8.5px] text-zinc-800 leading-none mb-1">{t('hiw.design.logo.active')}</span>
                                             <span className="text-[7.5px] text-zinc-450 leading-none">{t('hiw.design.logo.none')}</span>
                                          </div>
                                       </div>
                                       {/* Dash Dragzone */}
                                       <div className="bg-zinc-50/50 border border-dashed border-zinc-200 rounded-lg p-2.5 flex flex-col items-center justify-center gap-1">
                                          <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                          </svg>
                                          <span className="text-[8px] font-bold text-sky-500 text-center leading-tight">
                                             Selected File: <span className="underline font-mono">Gemini_Generated_Image_la8wc8la8wc8la8w.png</span>
                                          </span>
                                          <span className="text-[6.5px] text-zinc-450 leading-none">{t('hiw.design.logo.upload')}</span>
                                       </div>
                                    </div>

                                    {/* Primary & Secondary Color Pickers */}
                                    <div className="grid grid-cols-2 gap-3">
                                       <div>
                                          <label className="text-[7.5px] uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                                             {t('hiw.design.brandColor')}
                                          </label>
                                          <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 rounded-lg p-1">
                                             <div className="w-5 h-5 rounded bg-sky-400 shrink-0 border border-sky-300/30"></div>
                                             <span className="text-[8.5px] font-mono font-bold text-zinc-800">#38BDF8</span>
                                          </div>
                                          <span className="text-[6.5px] text-zinc-450 leading-snug mt-1 block">
                                             {t('hiw.design.brandColor.desc')}
                                          </span>
                                       </div>
                                       <div>
                                          <label className="text-[7.5px] uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                                             {t('hiw.design.accentColor')}
                                          </label>
                                          <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 rounded-lg p-1">
                                             <div className="w-5 h-5 rounded bg-[#00DB92] shrink-0 border border-[#00DB92]/30"></div>
                                             <span className="text-[8.5px] font-mono font-bold text-zinc-800">#00DB92</span>
                                          </div>
                                          <span className="text-[6.5px] text-zinc-450 leading-snug mt-1 block">
                                             {t('hiw.design.accentColor.desc')}
                                          </span>
                                       </div>
                                    </div>

                                    {/* Typography Profile grid */}
                                    <div>
                                       <label className="text-[7.5px] uppercase tracking-wider text-zinc-500 font-bold block mb-1">
                                          {t('hiw.design.typography')}
                                       </label>
                                       <div className="grid grid-cols-3 gap-1.5 text-center text-[7.5px] md:text-[8px]">
                                          {['Inter', 'Outfit', 'Poppins', 'Roboto', 'Montserrat', 'Lora'].map((font, idx) => (
                                             <div
                                                key={idx}
                                                className={`py-1 px-1.5 border rounded-md font-semibold transition-all ${font === 'Montserrat'
                                                   ? 'bg-sky-500 text-white border-sky-400 font-bold'
                                                   : 'bg-zinc-50 border-zinc-200 text-zinc-650'
                                                   }`}
                                             >
                                                {font}
                                             </div>
                                          ))}
                                       </div>
                                       <span className="text-[6.5px] text-zinc-450 mt-1 block">
                                          {t('hiw.design.typography.desc')}
                                       </span>
                                    </div>
                                 </div>

                                 {/* Right side: Live application mockup preview */}
                                 <div className="md:col-span-2 flex flex-col bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 shadow-sm h-full min-h-0">
                                    {/* Mockup Header */}
                                    <div className="flex items-center justify-between mb-2 shrink-0">
                                       <div className="flex items-center gap-1 min-w-0 text-zinc-500">
                                          <svg className="w-3.5 h-3.5 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542 7-4.477 0-8.268-2.943-9.542 7z" />
                                          </svg>
                                          <span className="font-bold text-[9px] md:text-[9.5px] text-zinc-800 truncate">{t('hiw.design.mockup')}</span>
                                       </div>
                                       <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-zinc-200 text-zinc-600 border border-zinc-300 text-[6.5px] font-bold shrink-0 uppercase leading-none">
                                          Preview
                                       </span>
                                    </div>

                                    {/* Mockup Dashboard Window Container */}
                                    <div className="flex-1 bg-white border border-zinc-200 rounded-xl p-2.5 flex flex-col min-h-[160px] overflow-hidden select-none font-sans text-[7.5px] leading-snug">
                                       {/* Mock App Nav Bar */}
                                       <div className="flex items-center justify-between border-b border-zinc-150 pb-1.5 mb-2.5 shrink-0">
                                          <div className="flex items-center gap-1 font-bold text-zinc-800 text-[8.5px]">
                                             {/* Small Green sprout logo */}
                                             <svg className="w-3 h-3 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                             </svg>
                                             <span>Portal</span>
                                          </div>
                                          <div className="flex gap-2 text-zinc-400 font-semibold scale-90">
                                             <span className="text-sky-500 font-bold">Dashboard</span>
                                             <span>Projects</span>
                                             <span>Analytics</span>
                                          </div>
                                          <div className="w-4 h-4 rounded-full bg-sky-500/20 border border-sky-450/30 flex items-center justify-center shrink-0">
                                             <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
                                          </div>
                                       </div>

                                       {/* Mock App Dashboard Overview block */}
                                       <div className="flex-1 flex flex-col justify-between">
                                          <div className="space-y-2">
                                             {/* Section name & badge */}
                                             <div className="flex items-center justify-between">
                                                <span className="text-[8px] font-bold text-zinc-500">{t('hiw.design.overview')}</span>
                                                <span className="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-600 border border-sky-500/20 text-[6px] font-bold leading-none uppercase">
                                                   {t('hiw.design.status')}
                                                </span>
                                             </div>
                                             {/* Metric Box card */}
                                             <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-2 space-y-0.5 text-start shadow-sm">
                                                <span className="text-zinc-500 text-[7px] font-medium block leading-none">{t('hiw.design.metric')}</span>
                                                <span className="text-zinc-800 text-sm font-extrabold block leading-tight font-mono">$124,582</span>
                                                <span className="text-emerald-500 text-[6.5px] font-bold flex items-center gap-0.5 mt-0.5">
                                                   ▲ +14.2% this month
                                                </span>
                                             </div>
                                          </div>

                                          {/* Action Buttons row */}
                                          <div className="flex gap-2 pt-2 border-t border-zinc-150 mt-2 shrink-0">
                                             <button className="w-1/2 py-1 bg-sky-500 hover:bg-sky-400 text-white font-extrabold rounded-md text-center text-[7.5px] transition-colors leading-none">
                                                {t('hiw.design.primaryBtn')}
                                             </button>
                                             <button className="w-1/2 py-1 bg-[#00DB92] hover:bg-[#02c785] text-white font-extrabold rounded-md text-center text-[7.5px] transition-colors leading-none">
                                                {t('hiw.design.accentBtn')}
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        )}

                        {/* TAB 4: USER STORIES (LIGHT THEME) */}
                        {activeTab === tabs[2] && (
                           <motion.div
                              key="stories-light"
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.25 }}
                              className="w-full h-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200 p-3 select-none text-zinc-650"
                           >
                              {/* Header bar */}
                              <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-3 shrink-0">
                                 <div className="flex flex-col text-start">
                                    <span className="font-bold text-zinc-800 text-[11px] md:text-[12px] leading-tight">{t('hiw.stories.title')}</span>
                                    <span className="text-[8.5px] text-zinc-450 font-medium">{t('hiw.stories.project')}</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 shrink-0">
                                    <button className="flex items-center gap-1 px-2.5 py-1.5 border border-sky-500/20 text-sky-600 bg-sky-500/10 rounded-full text-[8.5px] font-semibold hover:bg-sky-500/20 transition-all shrink-0">
                                       ← {t('hiw.stories.back')}
                                    </button>
                                    <button className="flex items-center gap-1 px-3 py-1.5 bg-sky-500 text-white rounded-full text-[8.5px] font-bold hover:bg-sky-400 transition-all shrink-0">
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
                                          className="bg-white border border-zinc-200 rounded-xl p-2.5 shadow-sm flex flex-col justify-between aspect-[1.35] min-h-[95px] transition-all hover:border-sky-500/30"
                                       >
                                          {/* Top Action Group */}
                                          <div className="flex items-center justify-between gap-1.5 border-b border-zinc-100 pb-1.5 mb-2 shrink-0">
                                             <div className="inline-flex items-center gap-0.5 bg-sky-500/10 text-sky-600 border border-sky-500/20 rounded px-1 text-[7.5px] font-bold">
                                                <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span>3</span>
                                             </div>
                                             <div className="flex items-center gap-0.5 scale-90">
                                                <div className="bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                   </svg>
                                                </div>
                                                <div className="bg-sky-500/10 text-sky-650 border border-sky-500/20 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                   </svg>
                                                </div>
                                                <div className="bg-amber-505/5 text-amber-500/80 border border-amber-500/10 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                   </svg>
                                                </div>
                                                <div className="bg-red-500/10 text-red-500 border border-red-500/20 rounded p-0.5 flex items-center justify-center">
                                                   <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                   </svg>
                                                </div>
                                             </div>
                                          </div>

                                          {/* Text Content */}
                                          <div className="flex-1 space-y-1">
                                             <span className="text-[7px] text-zinc-500 font-semibold block leading-none">{story.role}</span>
                                             <span className="text-[7.5px] md:text-[8.5px] text-zinc-800 font-bold block leading-snug">{story.want}</span>
                                             <span className="text-[7px] text-zinc-500 font-normal block leading-snug">{story.benefit}</span>
                                          </div>

                                          {/* Tag Bar & Badge */}
                                          <div className="flex items-center justify-between border-t border-zinc-100 pt-1.5 mt-2 shrink-0">
                                             <span className="inline-flex items-center gap-0.5 bg-zinc-100 text-zinc-650 rounded px-1.5 py-0.5 text-[6.5px] font-semibold border border-zinc-200 truncate max-w-[70%]">
                                                <svg className="w-2.5 h-2.5 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="truncate">{story.tag}</span>
                                             </span>
                                             <span className="px-1 py-0.5 rounded bg-[#1c2e36]/10 border border-sky-500/20 text-sky-600 font-bold text-[6px] shrink-0 leading-none">{t('hiw.stories.new')}</span>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </motion.div>
                        )}

                        {/* TAB 5: AUTONOMOUS COMPILATION (DARK THEME CLONE) */}
                        {activeTab === tabs[4] && (
                           <motion.div
                              key="compilation-dark-replica"
                              initial={{ opacity: 0, scale: 0.97 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.97 }}
                              transition={{ duration: 0.25 }}
                              className="w-full h-full bg-[#141416] rounded-2xl shadow-2xl overflow-hidden flex border border-[#222] relative z-10 select-none text-[#e3e3e5] font-sans"
                           >
                              <DarkArchiDevMockup />
                           </motion.div>
                        )}
                     </AnimatePresence>

                  </div>
               </div>
            </div>

         </div>
      </section>
   );
}
