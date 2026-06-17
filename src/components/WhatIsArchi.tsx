import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useEffect } from 'react';

const DevEditorMockup: React.FC = () => {
  const [typedCode, setTypedCode] = useState('');
  const targetCode = `VALUES ($1, $2) ON CONFLICT DO NOTHING`;

  useEffect(() => {
    let index = 0;
    let timeoutId: any;

    const type = () => {
      if (index <= targetCode.length) {
        setTypedCode(targetCode.slice(0, index));
        index++;
        timeoutId = setTimeout(type, 45);
      } else {
        timeoutId = setTimeout(() => {
          setTypedCode('');
          index = 0;
          timeoutId = setTimeout(type, 1000); // 1 second delay before typing starts again
        }, 4000); // 4 seconds delay showing full text
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col h-full justify-between text-start font-mono bg-[#05070f] text-slate-355 p-2.5 rounded-xl border border-slate-900 shadow-md overflow-hidden select-none" dir="ltr">
      {/* Window Controls */}
      <div className="flex items-center justify-between border-b border-slate-900/60 pb-1.5 mb-1.5 text-[7px] text-slate-500 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-slate-600 text-[6.5px]">Archi Dev Studio — Header.tsx</span>
      </div>

      {/* Main Panel Row */}
      <div className="flex-1 flex overflow-hidden w-full text-[7.5px] font-sans">
        {/* Left Sidebar */}
        <div className="w-[72px] bg-[#090d16] border-r border-slate-900/60 flex flex-col p-1.5 shrink-0 select-none text-[6.5px]">
          <div className="text-[5.5px] text-slate-500 font-bold uppercase tracking-wider mb-2 pr-1">
            PROJECT FILES
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between p-1 rounded bg-[#38bdf8]/10 text-[#38bdf8] font-medium border border-[#38bdf8]/10">
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[7.5px] shrink-0">📄</span>
                <span className="truncate">Header.tsx</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#38bdf8] animate-pulse shrink-0" />
            </div>
            <div className="flex items-center justify-between p-1 rounded text-slate-400 hover:text-slate-200">
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[7.5px] text-slate-500 shrink-0">🗄️</span>
                <span className="truncate font-light">schema.sql</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#38bdf8]/50 shrink-0" />
            </div>
            <div className="flex items-center justify-between p-1 rounded text-slate-400 hover:text-slate-200">
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[7.5px] text-slate-500 shrink-0">📄</span>
                <span className="truncate font-light">App.tsx</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#38bdf8]/50 shrink-0" />
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col bg-[#05070f] overflow-hidden pl-1">
          {/* Editor Tab Bar */}
          <div className="bg-[#090d16] border-b border-slate-900/60 flex items-center px-2 py-1 gap-1.5 text-[6.5px] shrink-0">
            <div className="bg-[#05070f] border-t border-x border-slate-900/40 text-slate-200 px-2 py-0.5 rounded-t-md flex items-center gap-1 font-medium">
              <span>Header.tsx</span>
              <span className="text-slate-600 font-bold text-[5px]">x</span>
            </div>
            <div className="text-slate-500 px-2 py-0.5 hover:text-slate-300 cursor-pointer font-light">
              schema.sql
            </div>
          </div>

          {/* Editor Content Area */}
          <div className="flex-1 p-2 font-mono overflow-y-auto leading-[1.3] whitespace-pre text-slate-400 text-[7px]">
            {/* Syntax Highlighted React/TSX & SQL Blend */}
            <span className="text-slate-500 font-light">// AI: Optimizing database schema & mapping API...</span>
            <br />
            <span className="text-purple-400">const</span> syncUser = <span className="text-blue-400">async</span> (u: User) =&gt; {"{"}
            <br />
            {"  "}await db.execute(
            <br />
            {"    "}<span className="text-amber-300">`INSERT INTO users (id, email)</span>
            <br />
            {/* Active code generation highlighted area */}
            <div className="bg-[#38bdf8]/10 border-l-2 border-[#38bdf8] my-0.5 py-0.5 pl-1.5 pr-1 text-[#38bdf8] font-bold h-3.5 flex items-center whitespace-pre shrink-0">
              {"    "}{typedCode}
              <span className="w-[3px] h-[9px] bg-[#38bdf8] animate-pulse ml-0.5 shrink-0" />
            </div>
            {"  `"}
            <br />
            {"  "});
            <br />
            {"};"}
          </div>
        </div>
      </div>

      {/* Editor Status Bar */}
      <div className="mt-1.5 pt-1.5 border-t border-slate-900/80 flex items-center justify-between text-[6.5px] text-slate-500 shrink-0">
        <span>TypeScript TSX</span>
        <span className="text-[#38bdf8] flex items-center gap-1 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
          AUTONOMOUS WRITING
        </span>
      </div>
    </div>
  );
};

export function WhatIsArchi() {
  const { isRTL } = useLanguage();
  const [hoveredBusinessCol, setHoveredBusinessCol] = useState<number | null>(null);
  const [hoveredDevCol, setHoveredDevCol] = useState<number | null>(null);

  const businessColumns = [
    {
      id: 1,
      num: '01',
      title: isRTL ? 'المقابلة الذكية' : 'Smart Scoping',
      subtitle: isRTL ? 'كشف منطق فكرتك' : 'Uncover core logic',
    },
    {
      id: 2,
      num: '02',
      title: isRTL ? 'وثيقة متطلبات العمل' : 'Synthesized BRD',
      subtitle: isRTL ? 'أهداف ونطاق دقيق' : 'Clear scope & KPIs',
    },
    {
      id: 3,
      num: '03',
      title: isRTL ? 'تفكيك المهام والقصص' : 'Story Mapping',
      subtitle: isRTL ? 'مخطط تقني مفصل' : 'Developer-ready specs',
    },
  ];

  const devColumns = [
    {
      id: 1,
      num: '01',
      title: isRTL ? 'البرمجة والتجميع' : 'Autonomous Development',
      subtitle: isRTL ? 'كتابة الأكواد وبناء القواعد' : 'Write code & design schemas',
    },
    {
      id: 2,
      num: '02',
      title: isRTL ? 'الفحص والاختبار الذاتي' : 'Self-Testing & QA',
      subtitle: isRTL ? 'اختبارات الحماية والامتثال' : 'Safety & compliance checks',
    },
    {
      id: 3,
      num: '03',
      title: isRTL ? 'النشر والاستضافة الفورية' : 'Autonomous Deployment',
      subtitle: isRTL ? 'بناء التطبيق وتفعيله حياً' : 'Live cloud build & domain SSL',
    },
  ];

  const panels = [
    {
      id: 'business' as const,
      num: '01',
      icon: Brain,
      role: isRTL ? 'العقل المفكر' : 'THE BRAIN',
      name: isRTL ? 'أركي بيزنس' : 'Archi Business',
      tagline: isRTL ? 'يسأل، يفهم، ويبني الخارطة التقنية للمشروع.' : 'Interviews. Understands. Blueprints the project.',
    },
    {
      id: 'dev' as const,
      num: '02',
      icon: Cpu,
      role: isRTL ? 'المحرك التنفيذي' : 'THE MUSCLE',
      name: isRTL ? 'أركي ديف' : 'Archi Dev',
      tagline: isRTL ? 'يأخذ الخارطة، ويبني التطبيق بالكامل ذاتياً.' : 'Takes the blueprint. Builds the product autonomously.',
    },
  ];

  // Helper functions for rendering wireframes & hi-fi mockups
  const renderBusinessWireframe = (id: number, isRTL: boolean) => {
    switch (id) {
      case 1: // Smart Scoping - Pure Visual AI Input Form Wireframe
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
            
            <div className="space-y-2.5 flex-1 z-10">
              {/* Field 1 wireframe */}
              <div className="space-y-1">
                <div className="w-[45%] h-1 bg-black/20 rounded" />
                <div className="border border-black/[0.04] bg-white/50 p-1.5 rounded-lg flex items-center justify-between">
                  <div className="w-[70%] h-1 bg-black/10 rounded" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/15" />
                </div>
              </div>

              {/* Field 2 wireframe */}
              <div className="space-y-1">
                <div className="w-[30%] h-1 bg-black/20 rounded" />
                <div className="border border-black/[0.04] bg-white/50 p-1.5 rounded-lg flex items-center justify-between">
                  <div className="w-[55%] h-1 bg-black/10 rounded" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/15" />
                </div>
              </div>

              {/* Field 3 wireframe */}
              <div className="space-y-1">
                <div className="w-[35%] h-1 bg-black/20 rounded" />
                <div className="border border-black/[0.04] bg-white/50 p-1.5 rounded-lg flex items-center justify-between">
                  <div className="w-[80%] h-1 bg-black/10 rounded" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/50" />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-[6.5px] font-mono text-black/30 z-10">
              <div className="w-10 h-1 bg-black/10 rounded" />
              <div className="w-8 h-1 bg-black/10 rounded" />
            </div>
          </div>
        );
      case 2: // Synthesized BRD - Holographic Spec Sheet
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden font-sans text-start" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
            
            {/* Top Sheet Header */}
            <div className="flex items-center justify-between border-b border-black/[0.04] pb-2 z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#38bdf8] to-blue-500 p-[1.5px] flex items-center justify-center shadow-sm">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="w-16 h-1.5 bg-black/25 rounded" />
                  <div className="w-8 h-1 bg-black/10 rounded" />
                </div>
              </div>
              <span className="w-8 h-3.5 bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full flex items-center justify-center text-[#38bdf8]">
                <svg className="w-2.5 h-2.5 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L14.8,9.2L22,12L14.8,14.8L12,22L9.2,14.8L2,12L9.2,9.2L12,2Z" />
                </svg>
              </span>
            </div>

            {/* Document Body Skeletons (Detailed & Full) */}
            <div className="space-y-2.5 my-2 z-10 flex-1 overflow-y-auto no-scrollbar">
              <div className="flex items-center gap-2">
                <div className="w-[25%] h-1 bg-[#38bdf8]/35 rounded-full" />
                <div className="w-[70%] h-[1.5px] bg-black/[0.05] rounded-full" />
              </div>
              
              {/* Mini Flow Chart inside document */}
              <div className="flex items-center justify-between bg-black/[0.01] border border-black/[0.03] p-1.5 rounded-lg my-1 gap-1">
                <div className="flex-1 border border-black/[0.05] bg-white/60 rounded p-1 flex items-center justify-center text-slate-450">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <svg className="w-4 h-2 text-black/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-1 border border-[#38bdf8]/20 bg-[#38bdf8]/2 rounded p-1 flex items-center justify-center text-[#38bdf8]">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </div>

              {/* Extra Wireframe lines to make document look full */}
              <div className="space-y-1.5">
                <div className="w-[18%] h-1 bg-[#38bdf8]/25 rounded-full" />
                <div className="w-full h-[1.5px] bg-black/[0.05] rounded-full" />
                <div className="w-[90%] h-[1.5px] bg-black/[0.05] rounded-full" />
                <div className="w-[75%] h-[1.5px] bg-black/[0.05] rounded-full" />
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="w-[22%] h-1 bg-[#38bdf8]/25 rounded-full" />
                <div className="w-[95%] h-[1.5px] bg-black/[0.05] rounded-full" />
                <div className="w-[65%] h-[1.5px] bg-black/[0.05] rounded-full" />
              </div>
            </div>

            {/* Document Footer Info */}
            <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-[6.5px] font-mono text-black/30 z-10">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
              <div className="w-8 h-1 bg-black/10 rounded-full" />
            </div>
          </div>
        );
      case 3: // Story Mapping - Premium Glassmorphic Kanban Board
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

            {/* Column Headers */}
            <div className="flex justify-between items-center mb-1.5 border-b border-black/[0.03] pb-1.5 z-10">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <div className="w-12 h-1.5 bg-black/20 rounded" />
              </div>
              <span className="w-6 h-1 bg-black/10 rounded" />
            </div>

            {/* Scrollable Story Cards list (no scrollbar) */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 z-10">
              {/* Task Card 01 */}
              <div className="border border-black/[0.05] bg-white/75 backdrop-blur-xs p-2 rounded-xl flex flex-col gap-1.5 shadow-3xs hover:border-[#38bdf8]/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center shrink-0">
                      <svg className="w-2 h-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="w-6 h-1 bg-black/15 rounded" />
                  </div>
                  <span className="w-5 h-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full" />
                </div>
                <div className="space-y-1">
                  <div className="w-[90%] h-1 bg-black/15 rounded" />
                  <div className="w-[45%] h-1 bg-black/10 rounded" />
                </div>
              </div>

              {/* Task Card 02 */}
              <div className="border border-black/[0.05] bg-white/75 backdrop-blur-xs p-2 rounded-xl flex flex-col gap-1.5 shadow-3xs hover:border-amber-200 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded border border-amber-500/30 bg-amber-500/5 flex items-center justify-center shrink-0">
                      <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                    </div>
                    <div className="w-6 h-1 bg-black/15 rounded" />
                  </div>
                  <span className="w-5 h-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full" />
                </div>
                <div className="space-y-1">
                  <div className="w-[80%] h-1 bg-black/15 rounded" />
                  <div className="w-[30%] h-1 bg-black/10 rounded" />
                </div>
              </div>

              {/* Task Card 03 */}
              <div className="border border-black/[0.05] bg-white/75 backdrop-blur-xs p-2 rounded-xl flex flex-col gap-1.5 shadow-3xs hover:border-[#38bdf8]/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded border border-[#38bdf8]/30 bg-[#38bdf8]/5 flex items-center justify-center shrink-0">
                      <svg className="w-2 h-2 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div className="w-6 h-1 bg-black/15 rounded" />
                  </div>
                  <span className="w-5 h-1.5 bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full" />
                </div>
                <div className="space-y-1">
                  <div className="w-[85%] h-1 bg-black/15 rounded" />
                  <div className="w-[35%] h-1 bg-black/10 rounded" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderBusinessHiFi = (id: number, isRTL: boolean) => {
    switch (id) {
      case 1: // Smart Scoping - Premium Interactive Form
        return (
          <div className="flex flex-col h-full justify-between text-[8.5px] font-sans gap-2" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="space-y-2 flex-1 overflow-y-auto no-scrollbar pr-0.5">
              {/* Field 1: Project Idea */}
              <div>
                <label className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider mb-0.5">
                  {isRTL ? "فكرة المشروع والمنصة" : "PROJECT IDEA & PLATFORM"}
                </label>
                <div className="bg-white border border-slate-100 p-1.5 rounded-lg text-slate-700 shadow-3xs flex items-center justify-between">
                  <span className="font-light truncate">
                    {isRTL ? "منصة لربط العملاء بمحلات الورد وتجهيز الهدايا" : "Platform connecting customers with flower & gift shops"}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                </div>
              </div>

              {/* Field 2: Target Audience */}
              <div>
                <label className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider mb-0.5">
                  {isRTL ? "الفئة المستهدفة" : "TARGET AUDIENCE"}
                </label>
                <div className="bg-white border border-slate-100 p-1.5 rounded-lg text-slate-700 shadow-3xs flex items-center justify-between">
                  <span className="font-light truncate">
                    {isRTL ? "الباحثون عن هدايا وتوصيل مجدول في المناسبات" : "People seeking scheduled delivery for special occasions"}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                </div>
              </div>

              {/* Field 3: Product Vision */}
              <div>
                <label className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider mb-0.5">
                  {isRTL ? "رؤية المشروع والتميز" : "VISION & DIFFERENTIATION"}
                </label>
                <div className="bg-white border border-slate-100 p-1.5 rounded-lg text-slate-700 shadow-3xs flex items-center justify-between">
                  <span className="font-light truncate">
                    {isRTL ? "تجربة إهداء سريعة، خرائط مباشرة وتكامل مع المتاجر المحلية" : "Seamless gifting, live tracking & local shop partnerships"}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[7px] text-slate-400 font-mono">
              <span className="text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded-full font-bold border border-[#38bdf8]/10 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#38bdf8] animate-pulse" />
                {isRTL ? "مستند مدخلات العميل" : "CLIENT BRIEF ACTIVE"}
              </span>
              <span>Scoping Session: #FLO-88</span>
            </div>
          </div>
        );
      case 2: // Synthesized BRD Document details
        return (
          <div className="flex flex-col h-full justify-between text-start text-[9px]" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-1.5 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                <span className="font-bold text-slate-800 tracking-tight">{isRTL ? "وثيقة متطلبات العمل" : "Synthesized BRD"}</span>
              </div>
              <span className="text-[7px] font-mono bg-[#38bdf8]/10 text-[#38bdf8] px-1.5 py-0.5 rounded border border-[#38bdf8]/15">V2.0</span>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-2.5 text-slate-650 pr-0.5 pb-1">
              <div>
                <span className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider">{isRTL ? "الهدف الأساسي" : "PRIMARY OBJECTIVE"}</span>
                <p className="font-light text-slate-700 leading-tight mt-0.5">
                  {isRTL ? "تطبيق للهواتف يربط متاجر الهدايا بالعملاء لتوصيل الهدايا المجدولة." : "Mobile application connecting gift vendors with customers for scheduled gifting."}
                </p>
              </div>
              <div>
                <span className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider">{isRTL ? "البنية والربط" : "INTEGRATION ARCHITECTURE"}</span>
                <p className="font-light text-slate-700 leading-tight mt-0.5">
                  {isRTL ? "بوابة دفع ثواني، خدمة خرائط Google، نظام إشعارات Firebase." : "Thawani checkout API, Google Maps SDK, Firebase push notifications."}
                </p>
              </div>
              <div>
                <span className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider">{isRTL ? "المزايا الرئيسية" : "KEY FEATURES"}</span>
                <p className="font-light text-slate-700 leading-tight mt-0.5">
                  {isRTL ? "١. البحث الذكي عن المتاجر الفورية. ٢. التتبع المباشر وحساب الوقت المتوقع. ٣. إرسال الهدايا للغير والدفع الإلكتروني." : "1. Smart vendor matching logic. 2. Real-time mapping route & ETA. 3. Gifting to others & digital checkout."}
                </p>
              </div>
              <div>
                <span className="text-slate-400 block text-[7px] uppercase font-semibold tracking-wider">{isRTL ? "مؤشرات الأداء ومقاييس النجاح" : "KPIs & SUCCESS METRICS"}</span>
                <p className="font-light text-slate-700 leading-tight mt-0.5">
                  {isRTL ? "معدل اكتمال الطلب < ٢٥ دقيقة، توافر الخدمات بنسبة تفوق ٩٩.٩٪." : "Order completion < 25 mins, service availability SLA > 99.9%."}
                </p>
              </div>
            </div>
            
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[7px] text-slate-400 font-mono shrink-0">
              <span>{isRTL ? "معرّف المشروع: #ARC-902" : "Project ID: #ARC-902"}</span>
              <span className="text-slate-500 font-medium">BRD_Final_Draft.pdf</span>
            </div>
          </div>
        );
      case 3: // Story Mapping / Kanban cards (with 3 cards & no scrollbar)
        return (
          <div className="flex flex-col h-full justify-between gap-1.5 text-start text-[8.5px]" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 pr-0.5">
              {/* Card 1 */}
              <div className="bg-white border border-slate-100 p-2 rounded-xl shadow-3xs flex flex-col gap-1 transition-all hover:border-[#bae6fd]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#38bdf8] font-bold text-[7.5px]">USER-01</span>
                  <span className="text-[6.5px] bg-[#38bdf8]/10 text-[#38bdf8] px-2 py-0.5 rounded-full border border-[#38bdf8]/25 font-bold uppercase tracking-wider">
                    {isRTL ? "تكامل الدفع" : "PAYMENT HUB"}
                  </span>
                </div>
                <p className="text-slate-650 leading-normal font-light">
                  {isRTL ? "شراء آمن عبر بوابة ثواني مع تخزين حالة الدفع وتحديث المخزون تلقائياً." : "Secure purchase via Thawani SDK with payment state persistence & auto inventory update."}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-100 p-2 rounded-xl shadow-3xs flex flex-col gap-1 transition-all hover:border-amber-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-amber-500 font-bold text-[7.5px]">DRIV-02</span>
                  <span className="text-[6.5px] bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full border border-amber-500/25 font-bold uppercase tracking-wider">
                    {isRTL ? "التتبع والخرائط" : "GEO ROUTING"}
                  </span>
                </div>
                <p className="text-slate-650 leading-normal font-light">
                  {isRTL ? "تتبع مباشر لموقع المندوب وحساب الوقت المتوقع للوصول باستخدام إحداثيات الموقع." : "Real-time courier mapping & ETA calculations via precise latitude/longitude routing."}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-100 p-2 rounded-xl shadow-3xs flex flex-col gap-1 transition-all hover:border-[#bae6fd]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#38bdf8] font-bold text-[7.5px]">USER-03</span>
                  <span className="text-[6.5px] bg-[#38bdf8]/10 text-[#38bdf8] px-2 py-0.5 rounded-full border border-[#38bdf8]/25 font-bold uppercase tracking-wider">
                    {isRTL ? "مركز الإشعارات" : "NOTIF HUB"}
                  </span>
                </div>
                <p className="text-slate-650 leading-normal font-light">
                  {isRTL ? "إرسال تنبيهات فورية للمستخدم والمندوب لمتابعة حالة الطلب والجاهزية." : "Instant push notification dispatch to customer & courier for order readiness status."}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderDevWireframe = (id: number, isRTL: boolean) => {
    switch (id) {
      case 1: // Modern node-link compilation network graph
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden" dir="ltr">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

            {/* Topology Header */}
            <div className="flex justify-between items-center mb-1 border-b border-black/[0.03] pb-1.5 z-10">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="w-14 h-1.5 bg-black/25 rounded" />
              </div>
              <span className="w-8 h-3.5 bg-emerald-500/10 border border-emerald-500/15 rounded-full flex items-center justify-center text-emerald-600">
                <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>

            {/* Node graph canvas */}
            <div className="relative flex-1 w-full flex items-center justify-center my-1">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 100" fill="none">
                <path d="M 35,50 C 65,50 65,25 95,25" stroke="url(#blue-grad-line)" strokeWidth="1.5" />
                <path d="M 35,50 C 65,50 65,75 95,75" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1.5" />
                <path d="M 95,25 C 125,25 125,50 155,50" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 95,75 C 125,75 125,50 155,50" stroke="url(#blue-grad-line)" strokeWidth="1.5" />
                
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="blue-grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Flow particles */}
                <circle cx="65" cy="38" r="2" fill="#38bdf8" className="animate-pulse" />
                <circle cx="125" cy="62" r="1.5" fill="#38bdf8" />
              </svg>

              {/* Node labels (Pure Visuals) */}
              {/* Client device */}
              <div className="absolute left-[3%] top-[33%] w-7 h-7 rounded-lg border border-black/[0.06] bg-white/90 shadow-3xs flex items-center justify-center text-slate-400">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>

              {/* API bracket </api> */}
              <div className="absolute left-[40%] top-[3%] w-7 h-7 rounded-lg border border-[#38bdf8]/35 bg-white shadow-2xs flex items-center justify-center text-[#38bdf8]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              {/* Database cylinders */}
              <div className="absolute left-[40%] top-[57%] w-7 h-7 rounded-lg border border-black/[0.06] bg-white/90 shadow-3xs flex items-center justify-center text-slate-500">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3z" />
                  <path d="M4 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6" />
                  <path d="M4 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
                </svg>
              </div>

              {/* Cloud environment */}
              <div className="absolute right-[3%] top-[33%] w-7 h-7 rounded-lg border border-black/[0.06] bg-white/90 shadow-3xs flex items-center justify-center text-slate-400">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.5 19A5.5 5.5 0 0 0 18 8h-1.26A8 8 0 1 0 4 15.25" />
                  <path d="M4 15.25A5.5 5.5 0 0 0 5.5 19h12" />
                </svg>
              </div>
            </div>

            {/* Topology Footer */}
            <div className="pt-1.5 border-t border-black/[0.03] flex items-center justify-between text-[6.5px] font-mono text-black/30">
              <div className="w-10 h-1 bg-black/10 rounded-full" />
              <div className="w-8 h-1 bg-[#38bdf8]/30 rounded-full" />
            </div>
          </div>
        );
      case 2: // Abstract Security Shield with holographic threat status
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

            {/* Security Header */}
            <div className="flex justify-between items-center mb-1 border-b border-black/[0.03] pb-1.5 z-10">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                <div className="w-12 h-1.5 bg-black/20 rounded" />
              </div>
              <span className="w-8 h-1 bg-[#38bdf8]/35 rounded-full" />
            </div>

            {/* Radial security interface */}
            <div className="relative flex-1 w-full flex items-center justify-center my-2">
              {/* Concentric rotating design rings */}
              <div className="absolute w-24 h-24 rounded-full border border-black/[0.03] animate-spin" style={{ animationDuration: '12s' }} />
              <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#38bdf8]/10 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
              <div className="absolute w-14 h-14 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/2" />
              
              {/* Shield emblem */}
              <svg className="w-7 h-7 text-[#38bdf8] relative z-10 filter drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              
              {/* Micro diagnostic widgets floating around shield */}
              <div className="absolute left-[8%] top-[25%] px-1 py-1 rounded-full border border-[#38bdf8]/20 bg-white/85 shadow-3xs text-[#38bdf8]">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V12m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <div className="absolute right-[8%] bottom-[25%] px-1 py-1 rounded-full border border-emerald-500/20 bg-white/85 shadow-3xs text-emerald-500">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div className="pt-1.5 border-t border-black/[0.03] flex items-center justify-between text-[6.5px] font-mono text-black/30">
              <div className="w-14 h-1 bg-black/10 rounded-full" />
              <div className="w-6 h-1 bg-[#38bdf8]/30 rounded-full" />
            </div>
          </div>
        );
      case 3: // Modern deployment network connection wireframe
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 overflow-hidden" dir="ltr">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />

            {/* Topology Header */}
            <div className="flex justify-between items-center mb-1 border-b border-black/[0.03] pb-1.5 z-10">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                <div className="w-14 h-1.5 bg-black/25 rounded" />
              </div>
              <span className="w-8 h-3.5 bg-sky-500/10 border border-sky-500/15 rounded-full flex items-center justify-center text-sky-600">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </span>
            </div>

            {/* Wireframe Deployment Diagram */}
            <div className="relative flex-1 w-full flex items-center justify-center my-1">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 100" fill="none">
                <path d="M 35,50 L 95,50" stroke="url(#sky-grad-line)" strokeWidth="1.5" />
                <path d="M 95,50 L 155,50" stroke="url(#sky-grad-line)" strokeWidth="1.5" strokeDasharray="3 3" />
                
                <defs>
                  <linearGradient id="sky-grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <circle cx="65" cy="50" r="2" fill="#38bdf8" className="animate-pulse" />
                <circle cx="125" cy="50" r="1.5" fill="#38bdf8" />
              </svg>

              {/* Local Server Node */}
              <div className="absolute left-[3%] top-[33%] w-7 h-7 rounded-lg border border-black/[0.06] bg-white/90 shadow-3xs flex items-center justify-center text-slate-400">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>

              {/* Cloud Gateway */}
              <div className="absolute left-[40%] top-[33%] w-7 h-7 rounded-lg border border-[#38bdf8]/35 bg-white shadow-2xs flex items-center justify-center text-[#38bdf8]">
                <svg className="w-3.5 h-3.5 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.5 19A5.5 5.5 0 0 0 18 8h-1.26A8 8 0 1 0 4 15.25" />
                  <path d="M4 15.25A5.5 5.5 0 0 0 5.5 19h12" />
                </svg>
              </div>

              {/* Globe / Custom Domain Node */}
              <div className="absolute right-[3%] top-[33%] w-7 h-7 rounded-lg border border-black/[0.06] bg-white/90 shadow-3xs flex items-center justify-center text-slate-400">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>

            {/* Topology Footer */}
            <div className="pt-1.5 border-t border-black/[0.03] flex items-center justify-between text-[6.5px] font-mono text-black/30">
              <div className="w-10 h-1 bg-black/10 rounded-full" />
              <div className="w-8 h-1 bg-[#38bdf8]/30 rounded-full" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderDevHiFi = (id: number, isRTL: boolean) => {
    switch (id) {
      case 1: // API Sync & Compiler console
        return <DevEditorMockup />;
      case 2: // Secure shield / Oman Compliance matrix
        return (
          <div className="flex flex-col h-full justify-between text-start text-[9px] font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 text-emerald-650 bg-emerald-500/10 px-2.5 py-0.5 rounded-full w-fit font-bold text-[7.5px] border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isRTL ? "منظومة الأمان: نشطة ومحمية" : "SECURITY SHIELD: SECURE"}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="flex items-center gap-1.5 p-1.5 rounded border border-slate-100 bg-slate-50/50">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600 text-[8px] font-medium leading-none">{isRTL ? "تشفير كامل" : "AES-256 Enc"}</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded border border-slate-100 bg-slate-50/50">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600 text-[8px] font-medium leading-none">{isRTL ? "حماية XSS" : "Anti-Injection"}</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded border border-slate-100 bg-slate-50/50">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600 text-[8px] font-medium leading-none">{isRTL ? "سياسة CORS" : "Secure CORS"}</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded border border-[#38bdf8]/10 bg-[#38bdf8]/5">
                  <svg className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#38bdf8] text-[8px] font-bold leading-none">{isRTL ? "الامتثال للوزارة" : "Oman MCIT OK"}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[7px] text-slate-400 font-mono">
              <span>{isRTL ? "أمان سيادي مفعل" : "Sovereign Compliance"}</span>
              <span className="text-slate-500 font-medium">SSL ACTIVE</span>
            </div>
          </div>
        );
      case 3: // Autonomous Deployment Dashboard
        return (
          <div className="flex flex-col h-full justify-between text-start text-[9px] font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-emerald-650 bg-emerald-500/10 px-2.5 py-0.5 rounded-full w-fit font-bold text-[7.5px] border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{isRTL ? "مباشر ونشط" : "LIVE & DEPLOYED"}</span>
                </div>
                <span className="text-[7.5px] font-mono text-slate-400">v1.0.4 — GCC East</span>
              </div>

              {/* Clickable project URL */}
              <div className="bg-[#05070f] border border-slate-900 rounded-lg p-2 flex items-center justify-between gap-2 shadow-inner select-all" dir="ltr">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[10px] text-emerald-500 shrink-0">🌐</span>
                  <span className="text-[#38bdf8] font-mono text-[7.5px] truncate font-medium">https://todo-app.archi.om</span>
                </div>
                <span className="text-slate-500 hover:text-slate-200 text-[6.5px] font-mono cursor-pointer shrink-0 border border-slate-800 px-1 py-0.5 rounded">COPY</span>
              </div>

              {/* System Specs and Environment Info */}
              <div className="grid grid-cols-2 gap-1.5 pt-1 text-slate-650">
                <div className="flex flex-col border border-slate-100 bg-slate-50/50 p-1.5 rounded">
                  <span className="text-[6.5px] text-slate-400 font-medium uppercase tracking-wider">{isRTL ? "مزود الخدمة" : "CLOUD PROVIDER"}</span>
                  <span className="text-slate-700 font-bold text-[8px] mt-0.5">Vercel / AWS Oman</span>
                </div>
                <div className="flex flex-col border border-slate-100 bg-slate-50/50 p-1.5 rounded">
                  <span className="text-[6.5px] text-slate-400 font-medium uppercase tracking-wider">{isRTL ? "قاعدة البيانات" : "DATABASE STATE"}</span>
                  <span className="text-emerald-650 font-bold text-[8px] mt-0.5 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    Supabase Sync
                  </span>
                </div>
                <div className="flex flex-col border border-slate-100 bg-slate-50/50 p-1.5 rounded">
                  <span className="text-[6.5px] text-slate-400 font-medium uppercase tracking-wider">{isRTL ? "شهادة الأمان" : "SSL CERTIFICATE"}</span>
                  <span className="text-slate-700 font-bold text-[8px] mt-0.5">SHA-256 (HTTPS)</span>
                </div>
                <div className="flex flex-col border border-[#38bdf8]/10 bg-[#38bdf8]/2 p-1.5 rounded">
                  <span className="text-[6.5px] text-[#38bdf8] font-semibold uppercase tracking-wider">{isRTL ? "تكامل النطاق" : "DOMAIN SYNC"}</span>
                  <span className="text-[#38bdf8] font-bold text-[8px] mt-0.5">{isRTL ? "مكتملة ونشطة" : "Active & Verified"}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[7px] text-slate-400 font-mono shrink-0">
              <span>{isRTL ? "نظام موثوق ١٠٠٪" : "100% Sovereign Deployment"}</span>
              <span className="text-slate-500 font-medium">12:30:15 UTC</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative w-full bg-[#f5f4f2] border-t border-[#d1cfc9] overflow-hidden"
    >
      {/* ── Top Label Row ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-0 pt-16 pb-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111111]/50">
          <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          {isRTL ? 'ما هي منظومة أركي؟' : 'What is Archi?'}
        </div>
        <p className="hidden md:block text-[11px] font-mono text-[#111111]/30 tracking-widest uppercase">
          {isRTL ? 'نظامان — منظومة واحدة' : 'Two engines — one system'}
        </p>
      </div>

      {/* ── Headline ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-0 pb-14">
        <h2
          className="flex flex-row items-baseline justify-between w-full text-[1.8rem] sm:text-[2.8rem] md:text-[4.2rem] lg:text-[5.5rem] font-[300] text-[#111111] leading-none tracking-[-0.03em] gap-4"
          style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
        >
          {isRTL ? (
            <>
              <span className="whitespace-nowrap">محرك مزدوج.</span>
              <span className="whitespace-nowrap">
                <span className="text-[#38bdf8]">فكر</span> ثم <span className="text-[#38bdf8]">ابنِ</span>.
              </span>
            </>
          ) : (
            <>
              <span className="whitespace-nowrap">A bimodal engine.</span>
              <span className="whitespace-nowrap">
                <span className="text-[#38bdf8]">Think</span> then <span className="text-[#38bdf8]">build</span>.
              </span>
            </>
          )}
        </h2>
      </div>

      {/* ── Two Large Interactive Containers ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-0 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-[#d1cfc9]">
        {panels.map((panel) => {
          const Icon = panel.icon;
          const isBusiness = panel.id === 'business';
          const hoveredCol = isBusiness ? hoveredBusinessCol : hoveredDevCol;
          const setHoveredCol = isBusiness ? setHoveredBusinessCol : setHoveredDevCol;
          const columns = isBusiness ? businessColumns : devColumns;

          return (
            <div
              key={panel.id}
              id={panel.id === 'business' ? 'archi-business' : 'archi-dev'}
              className="relative flex flex-col p-6 md:p-10 overflow-hidden cursor-default border border-[#d1cfc9] rounded-2xl bg-[#ffffff] shadow-xs w-full"
            >
              {/* Card Header Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 relative z-10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono tracking-widest text-black/35">
                      {panel.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.22em] uppercase font-semibold text-[#38bdf8]">
                      {panel.role}
                    </span>
                  </div>
                  <h3
                    className="text-[2.2rem] sm:text-[2.6rem] font-[300] leading-none tracking-[-0.02em] text-[#111111]"
                    style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
                  >
                    {panel.name}
                  </h3>
                  <p
                    className="text-[13px] md:text-[14px] font-light leading-relaxed text-slate-500 whitespace-pre-line mt-1 max-w-[700px]"
                    style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : 'inherit' }}
                  >
                    {panel.tagline}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-black/5 text-black shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Horizontal / Vertical Accordion */}
              <div
                className="w-full flex flex-col md:flex-row gap-4 mt-2 h-[560px] md:h-[360px] relative z-10"
              >
                {columns.map((col) => {
                  const isColHovered = hoveredCol === col.id;
                  const isAnyColHovered = hoveredCol !== null;

                  return (
                    <div
                      key={col.id}
                      onMouseEnter={() => setHoveredCol(col.id)}
                      onMouseLeave={() => setHoveredCol(null)}
                      style={{
                        flex: isAnyColHovered ? (isColHovered ? 2.8 : 0.4) : 1,
                      }}
                      className={`relative flex flex-col justify-between p-5 md:p-6 rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden h-full ${
                        isColHovered
                          ? 'bg-white border-[#bae6fd] shadow-md shadow-[#38bdf8]/5'
                          : isAnyColHovered
                          ? 'bg-[#fcfbfa]/50 border-black/5 opacity-50'
                          : 'bg-[#fcfbfa] border-black/5'
                      }`}
                    >
                      {/* Column Header */}
                      <div className="text-start" dir={isRTL ? 'rtl' : 'ltr'}>
                        <span className="text-[10px] font-mono tracking-widest text-[#38bdf8] font-bold block mb-1">
                          {col.num}
                        </span>
                        <h4 className="text-[14px] font-semibold text-slate-800 leading-tight">
                          {col.title}
                        </h4>
                        <p className="text-[11px] font-light text-slate-400 mt-1 leading-snug">
                          {col.subtitle}
                        </p>
                      </div>

                      {/* Content Area with absolute transitions */}
                      <div className={`relative w-full flex-1 min-h-0 bg-black/[0.015] border border-black/[0.03] rounded-xl overflow-hidden mt-3 ${
                        isColHovered
                          ? 'opacity-100 scale-100 flex'
                          : 'hidden md:flex opacity-100 scale-100'
                      }`}>
                        {/* Wireframe State */}
                        <div
                          className={`w-full h-full p-3 flex flex-col justify-center transition-all duration-300 ${
                            isColHovered ? 'opacity-0 scale-95 pointer-events-none absolute inset-0' : 'opacity-100 scale-100'
                          }`}
                        >
                          {isBusiness ? renderBusinessWireframe(col.id, isRTL) : renderDevWireframe(col.id, isRTL)}
                        </div>

                        {/* High-Fidelity Mockup State */}
                        <div
                          className={`w-full h-full p-3 flex flex-col justify-center transition-all duration-550 delay-75 ${
                            isColHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute inset-0'
                          }`}
                        >
                          {isBusiness ? renderBusinessHiFi(col.id, isRTL) : renderDevHiFi(col.id, isRTL)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Caption Row ── */}
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-0 py-8 flex items-center justify-between border-t border-[#d1cfc9]">
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
