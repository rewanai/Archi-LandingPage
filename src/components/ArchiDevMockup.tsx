import React from 'react';

// Custom icons to perfectly match the screenshot
const InfinityIcon = () => (
  <svg className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c2.25 1.5 4.5 3 4.5 3s-2.25 3-4.5 3-4.5-1.5-4.5-3m0-6c-2.25-1.5-4.5-3-4.5-3s2.25-3 4.5-3 4.5 1.5 4.5 3" />
  </svg>
);

const SearchIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChevronLeft = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const TerminalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const KanbanIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2m8-4V7a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2z" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const PaperclipIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const GearIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ArchiDevMockup: React.FC = () => {
  // Timeline Stages: 'prompt' | 'thinking' | 'console' | 'table' | 'comment' | 'complete'
  const [stage, setStage] = React.useState<'prompt' | 'thinking' | 'console' | 'table' | 'comment' | 'complete'>('prompt');

  const [promptText, setPromptText] = React.useState('');
  const [consoleIndex, setConsoleIndex] = React.useState(0);
  const [showBullets, setShowBullets] = React.useState(false);
  const [showTable, setShowTable] = React.useState(false);
  const [commentText, setCommentText] = React.useState('');

  React.useEffect(() => {
    let active = true;

    const runTimeline = async () => {
      while (active) {
        // Reset states
        setStage('prompt');
        setPromptText('');
        setConsoleIndex(0);
        setShowBullets(false);
        setShowTable(false);
        setCommentText('');

        // 1. Typing Prompt (context matches CalcKey response)
        const promptVal = "break it down for me";
        for (let i = 0; i <= promptVal.length; i++) {
          if (!active) return;
          setPromptText(promptVal.slice(0, i));
          await new Promise((r) => setTimeout(r, 40));
        }

        // Wait brief pause
        await new Promise((r) => setTimeout(r, 1000));

        // 2. AI Thinking Phase
        if (!active) return;
        setStage('thinking');
        await new Promise((r) => setTimeout(r, 1600));

        // 3. AI Console Response Typing
        if (!active) return;
        setStage('console');
        const textToType = "That's the CalcKey component (a single calculator button). Lines 10–13 do this:";
        for (let i = 0; i <= textToType.length; i++) {
          if (!active) return;
          setConsoleIndex(i);
          await new Promise((r) => setTimeout(r, 20));
        }

        // Show bullets
        await new Promise((r) => setTimeout(r, 500));
        if (!active) return;
        setShowBullets(true);

        // 4. Variant Table fade-in
        await new Promise((r) => setTimeout(r, 1200));
        if (!active) return;
        setStage('table');
        setShowTable(true);

        // 5. Code Comment Box Typing
        await new Promise((r) => setTimeout(r, 1500));
        if (!active) return;
        setStage('comment');

        const commentVal = "Ensure variant colors default to brand.surface if undefined";
        for (let i = 0; i <= commentVal.length; i++) {
          if (!active) return;
          setCommentText(commentVal.slice(0, i));
          await new Promise((r) => setTimeout(r, 35));
        }

        // 6. Loop Complete (Hold final state for 8 seconds)
        if (!active) return;
        setStage('complete');
        await new Promise((r) => setTimeout(r, 8000));
      }
    };

    runTimeline();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full text-slate-700 select-none overflow-hidden bg-[#f8fafc] text-[11px] font-sans" dir="ltr">

      {/* ─────────────────────────────────────────────────────────────
         TOP WINDOW TITLE BAR
         ───────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-3 h-[38px] bg-[#f1f5f9] border-b border-[#e2e8f0] shrink-0">

        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-[26px] h-[26px] rounded bg-white shadow-sm border border-[#e2e8f0]">
            <InfinityIcon />
          </div>
          <div className="flex items-center gap-1 opacity-60 text-slate-500">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="hidden sm:flex items-center gap-3 w-1/3 max-w-[320px]">
          <div className="flex items-center justify-between w-full h-[24px] bg-white border border-[#cbd5e1] rounded px-2 text-slate-500 text-[10px] shadow-3xs">
            <div className="flex items-center gap-1.5">
              <SearchIcon className="w-2.5 h-2.5 opacity-65 text-slate-400" />
              <span>Search Math-app...</span>
            </div>
            <span className="text-[8.5px] opacity-50 font-mono">Ctrl-K</span>
          </div>

          <div className="flex items-center gap-1 bg-white hover:bg-slate-50 px-2 py-1 rounded text-slate-600 cursor-pointer border border-[#cbd5e1] shrink-0 text-[10px] h-[24px] shadow-3xs">
            <FolderIcon />
            <span className="font-semibold text-slate-800 ml-1">Math-app</span>
            <ChevronDownIcon />
          </div>
        </div>

        {/* Right Section: Workspace Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-4 text-slate-500 font-medium text-[10.5px]">
            <div className="flex items-center gap-1 hover:text-slate-800 cursor-pointer">
              <TerminalIcon />
              <span>Terminal</span>
            </div>
            <div className="flex items-center gap-1 hover:text-slate-800 cursor-pointer">
              <KanbanIcon />
              <span>Kanban Board</span>
            </div>
            <div className="flex items-center gap-1 text-slate-900 border-b-2 border-slate-500 pb-1 pt-1.5 font-semibold">
              <FileIcon />
              <span>PRD & Stories</span>
            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
         MAIN WORKSPACE AREA
         ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden w-full">

        {/* slim sidebar */}
        <div className="hidden md:flex w-[44px] bg-[#f1f5f9] border-r border-[#e2e8f0] flex-col items-center py-3 justify-between shrink-0">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-slate-500 hover:text-slate-800 cursor-pointer p-1">
              <ChevronRight />
            </div>
            <div className="text-slate-800 bg-[#e2e8f0] border-l-2 border-blue-600 w-full flex justify-center py-2 cursor-pointer">
              <FolderIcon />
            </div>
            <div className="text-slate-500 hover:text-slate-800 cursor-pointer py-1">
              <SearchIcon className="w-4.5 h-4.5" />
            </div>
            <div className="text-slate-500 hover:text-slate-800 cursor-pointer py-1">
              <TerminalIcon />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pb-1">
            <div className="text-slate-500 hover:text-slate-800 cursor-pointer">
              <DatabaseIcon />
            </div>
            <div className="text-slate-500 hover:text-slate-800 cursor-pointer">
              <GearIcon />
            </div>
            <div className="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-[10px] shadow-sm">
              M.
            </div>
          </div>
        </div>

        {/* explorer sidebar */}
        <div className="hidden lg:flex w-[160px] bg-[#f8fafc] border-r border-[#e2e8f0] flex-col p-3.5 shrink-0 justify-between">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <div className="text-[9px] font-semibold text-slate-400 tracking-[0.15em] uppercase">WORKSPACE</div>
              <div className="text-[12px] font-bold text-slate-800 flex items-center justify-between">
                <span>Math-app</span>
                <span className="text-slate-400 font-normal">···</span>
              </div>
              <div className="text-[9.5px] text-slate-500 truncate font-light">C:/Users/John Doe...</div>
            </div>

            <div className="border border-[#cbd5e1] hover:border-slate-400 bg-white p-1.5 rounded-lg text-center cursor-pointer flex items-center justify-center gap-1 text-[10.5px] text-slate-700 font-semibold shadow-3xs">
              <PlusIcon />
              <span>New session</span>
            </div>

            <div className="space-y-1">
              <div className="p-2 rounded-lg bg-[#eff6ff] border border-blue-200 text-blue-800 font-semibold flex items-center justify-between text-[10.5px] cursor-pointer">
                <span>Project overview</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm" />
              </div>
            </div>
          </div>

          <div className="text-[9px] text-slate-400 tracking-wider">Rewan Archi Engine</div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           CONSOLE PANEL (LEFT CHAT / INTERACTION)
           ───────────────────────────────────────────────────────────── */}
        <div className="w-full md:w-1/2 bg-[#f8fafc] border-b md:border-b-0 md:border-r border-[#e2e8f0] flex flex-col overflow-hidden shrink-0 h-[280px] md:h-full">

          {/* Header Tab */}
          <div className="flex items-center gap-2 px-3.5 h-[34px] bg-[#f1f5f9] border-b border-[#e2e8f0] shrink-0 text-slate-500 font-semibold">
            <span className="text-slate-800 border-b-2 border-slate-500 pb-1.5 pt-2 flex items-center gap-1.5 text-[10.5px]">
              <span>🐚</span>
              <span>Console</span>
            </span>
            <span className="text-[14px] hover:text-slate-800 cursor-pointer px-1">+</span>
          </div>

          {/* Chat / Content area */}
          <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 text-[11px] leading-[1.6]">

            <h3 className="text-base font-bold text-slate-800 tracking-tight">Project overview</h3>

            {/* Bubble 1 (User / Context File reference) */}
            <div className="align-self-end flex flex-col items-end gap-1.5 self-end max-w-[85%]">
              <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-3 text-[#1e3a8a] shadow-3xs">
                <div className="flex items-center gap-2 border-b border-[#bfdbfe]/60 pb-1.5 mb-1.5 text-[9px] font-mono text-[#2563eb]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-blue-600 font-semibold">CalculatorKeypad.tsx</span>
                  <span>9-13</span>
                </div>
                <p className="font-light">What does this exactly do?</p>
              </div>
            </div>

            {/* Bubble 2 (User question) */}
            <div className="align-self-end self-end max-w-[85%]">
              <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-3 text-[#1e3a8a] shadow-3xs font-light">
                I need you to break it down for me
              </div>
            </div>

            {/* Explored tag */}
            <div className="text-[10px] text-slate-400 font-light italic mt-1">Explored 1 read</div>

            {/* AI thinking state */}
            {stage === 'thinking' && (
              <div className="flex items-center gap-2 text-slate-500 font-light italic py-2 animate-pulse">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '200ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '400ms' }} />
                </div>
                <span>Archi Dev is analyzing CalculatorKeypad.tsx...</span>
              </div>
            )}

            {/* Explanation box (Show only if typing started) */}
            {stage !== 'prompt' && stage !== 'thinking' && (
              <div className="text-slate-700 space-y-3 font-light">
                <p className="font-mono text-[10.5px]">
                  {"That's the ".slice(0, Math.max(0, consoleIndex))}
                  {consoleIndex > 10 && <span className="text-[#2563eb] font-semibold">CalcKey</span>}
                  {" component (a single calculator button). Lines 10–13 do this:".slice(0, Math.max(0, consoleIndex - 17))}
                  {stage === 'console' && consoleIndex < 81 && <span className="w-1 h-3 ml-0.5 bg-blue-500 animate-pulse inline-block" />}
                </p>

                {/* Bullets (Slide in after prompt typing) */}
                <div className={`space-y-2.5 pl-1.5 transition-all duration-700 transform ${showBullets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <div className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <p>
                      <span className="font-bold text-slate-900">Line 10</span> — Destructures the props (<span className="text-[#2563eb] font-mono">label</span>, <span className="text-[#2563eb] font-mono">onPress</span>, <span className="text-[#2563eb] font-mono">variant</span>) and defaults <span className="text-[#2563eb] font-mono">variant</span> to <span className="text-[#d97706] font-mono">'number'</span> if nothing is passed.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400">•</span>
                    <p>
                      <span className="font-bold text-slate-900">Lines 11–13</span> — A chained ternary that picks a <span className="font-bold text-slate-900">background color</span> based on the button's <span className="text-[#2563eb] font-mono">variant</span>:
                    </p>
                  </div>
                </div>

                {/* Table (Fade-in stage) */}
                <div className={`border border-[#cbd5e1] rounded-lg overflow-x-auto mt-3 text-[10px] shadow-sm transition-opacity duration-1000 ${showTable ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="min-w-[340px]">
                    <div className="grid grid-cols-[1fr_1.1fr_1.8fr] bg-[#f1f5f9] border-b border-[#cbd5e1] font-bold text-slate-600">
                    <div className="p-2 border-r border-[#cbd5e1]">Variant</div>
                    <div className="p-2 border-r border-[#cbd5e1]">Buttons</div>
                    <div className="p-2">Background Color</div>
                  </div>

                  <div className="grid grid-cols-[1fr_1.1fr_1.8fr] border-b border-[#cbd5e1] bg-white">
                    <div className="p-2 border-r border-[#cbd5e1] text-[#2563eb] font-mono">'operator'</div>
                    <div className="p-2 border-r border-[#cbd5e1]">÷, ×, -, +, =</div>
                    <div className="p-2 text-slate-500"><span className="text-[#2563eb] font-mono">colors.primary</span> (main theme color)</div>
                  </div>

                  <div className="grid grid-cols-[1fr_1.1fr_1.8fr] border-b border-[#cbd5e1] bg-white">
                    <div className="p-2 border-r border-[#cbd5e1] text-[#2563eb] font-mono">'function'</div>
                    <div className="p-2 border-r border-[#cbd5e1]">C, ⌫</div>
                    <div className="p-2 text-slate-500"><span className="text-[#2563eb] font-mono">colors.textSecondary</span> (muted/secondary)</div>
                  </div>

                  <div className="grid grid-cols-[1fr_1.1fr_1.8fr] bg-white">
                    <div className="p-2 border-r border-[#cbd5e1] text-[#2563eb] font-mono">'number' (default)</div>
                    <div className="p-2 border-r border-[#cbd5e1]">0-9, ., (, )</div>
                    <div className="p-2 text-slate-500"><span className="text-[#2563eb] font-mono">colors.surface</span> (default card background)</div>
                  </div>
                </div>
              </div>

            </div>
            )}

          </div>

          {/* Interactive input box at the bottom */}
          <div className="p-4 border-t border-[#e2e8f0] bg-[#f1f5f9] space-y-3 shrink-0">

            {/* Animated border beam container wrapper */}
            <div className="relative w-full overflow-hidden p-[1.5px] rounded-lg bg-slate-200">
              {/* Conic rotating beam border animation */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#0284c7_88%,#38bdf8_98%,transparent_100%)] animate-[spin_4s_linear_infinite] pointer-events-none" />
              
              {/* Inner input frame content */}
              <div className="relative flex items-center justify-between bg-white rounded-[7px] p-2 pl-3 shadow-3xs z-10 w-full">
                <div className="flex items-center gap-1 text-slate-700 font-light text-[11px] overflow-hidden truncate mr-2">
                  <span>{promptText}</span>
                  {stage === 'prompt' && <span className="w-1.5 h-3.5 bg-blue-600 animate-pulse shrink-0" />}
                </div>
                <button className={`w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm transition-colors duration-300 ${stage !== 'prompt' && promptText.length > 0 ? 'bg-[#0284c7]' : 'bg-slate-350'}`}>
                  <span className="text-xs">↑</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9.5px]">
              <div className="flex items-center gap-2">
                <button className="text-slate-500 hover:text-slate-800 cursor-pointer"><PlusIcon /></button>
                <button className="text-slate-500 hover:text-slate-800 cursor-pointer"><PaperclipIcon /></button>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="bg-white border border-[#cbd5e1] rounded-full px-2.5 py-0.5 text-slate-700 font-semibold flex items-center gap-0.5 shadow-3xs">
                  <span>Build</span>
                  <ChevronDownIcon />
                </div>
                <div className="bg-white border border-[#cbd5e1] rounded-full px-2.5 py-0.5 text-slate-700 font-semibold flex items-center gap-0.5 shadow-3xs">
                  <span>Models</span>
                  <ChevronDownIcon />
                </div>
                <div className="bg-white border border-[#cbd5e1] rounded-full px-2.5 py-0.5 text-slate-700 font-semibold flex items-center gap-0.5 shadow-3xs">
                  <span>Default</span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
           CODE EDITOR PANEL (RIGHT SIDE)
           ───────────────────────────────────────────────────────────── */}
        <div className="flex-1 bg-white flex flex-col overflow-hidden relative">

          {/* Header Tab */}
          <div className="flex items-center justify-between px-3 h-[34px] bg-[#f1f5f9] border-b border-[#e2e8f0] shrink-0 text-slate-500">
            <div className="flex items-center gap-1.5 bg-white border-t-2 border-blue-600 border-x border-[#e2e8f0] px-3.5 h-[34px] text-slate-800 text-[10.5px] font-semibold -mb-[1px] relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>CalculatorKeypad.tsx</span>
              <span className="text-[8.5px] text-slate-400 font-normal ml-1">✕</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="cursor-pointer hover:opacity-100">+</span>
            </div>
          </div>

          {/* Editor content */}
          <div className="flex-1 p-4 font-mono text-[10.5px] leading-[1.65] overflow-auto text-[#24292e]">

            {/* Syntax Highlighted Lines */}
            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">1</span>
              <span><span className="text-[#d73a49]">import</span> <span className="text-[#24292e]">{`{ View, TouchableOpacity, Text, StyleSheet }`}</span> <span className="text-[#d73a49]">from</span> <span className="text-[#032f62]">'react-native'</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">2</span>
              <span><span className="text-[#d73a49]">import</span> <span className="text-[#24292e]">{`{ colors, borderRadius, spacing, typography, shadows }`}</span> <span className="text-[#d73a49]">from</span> <span className="text-[#032f62]">'@/lib/theme'</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">3</span>
              <span className="text-slate-500"></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">4</span>
              <span><span className="text-[#005cc5]">interface</span> <span className="text-[#6f42c1]">KeyProps</span> <span className="text-[#24292e]">{`{`}</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">5</span>
              <span><span className="text-[#24292e]">  label</span><span className="text-[#d73a49]">:</span> <span className="text-[#005cc5]">string</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">6</span>
              <span><span className="text-[#24292e]">  onPress</span><span className="text-[#d73a49]">:</span> <span className="text-[#24292e]">(value:</span> <span className="text-[#005cc5]">string</span><span className="text-[#24292e]">) =&gt;</span> <span className="text-[#005cc5]">void</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">7</span>
              <span><span className="text-[#24292e]">  variant</span><span className="text-purple-600">?</span><span className="text-[#d73a49]">:</span> <span className="text-[#032f62]">'number'</span> <span className="text-[#d73a49]">|</span> <span className="text-[#032f62]">'operator'</span> <span className="text-[#d73a49]">|</span> <span className="text-[#032f62]">'function'</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">8</span>
              <span className="text-[#24292e]">{`}`}</span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">9</span>
              <span className="text-slate-500"></span>
            </div>

            {/* LINE 10: HIGHLIGHTED LINE AND POPUP COMMENT BOX */}
            <div className="relative z-20">
              <div className="flex bg-[#fef3c7] border-l-[3px] border-[#d97706] py-1">
                <span className="w-6 text-right select-none text-[#d97706] mr-4 font-semibold text-[9.5px]">10</span>
                <span><span className="text-[#d73a49]">function</span> <span className="text-[#6f42c1]">CalcKey</span><span className="text-[#24292e]">({`{ label, onPress, variant = `}</span><span className="text-[#032f62]">'number'</span> <span className="text-[#24292e]">{`}: KeyProps) {`}</span></span>
              </div>

              {/* Overlapping comment panel (Fades in on Comment stage) */}
              <div className={`absolute right-4 top-2.5 w-[230px] bg-white border border-[#cbd5e1] rounded-lg p-3 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.12)] z-30 font-sans text-[11px] leading-[1.4] flex flex-col gap-3 transition-all duration-750 transform ${(stage === 'comment' || stage === 'complete') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}>
                <div className="relative">
                  <textarea
                    placeholder="Add comment"
                    value={commentText}
                    className="w-full h-16 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-2 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 font-mono text-[9px] resize-none leading-normal"
                    readOnly
                  />
                  {stage === 'comment' && commentText.length < 59 && (
                    <span className="absolute bottom-3 right-3 w-1.5 h-3 bg-blue-600 animate-pulse inline-block" />
                  )}
                </div>
                <div className="flex items-center justify-between text-[9.5px]">
                  <span className="text-slate-400 font-light">Commenting on line 10</span>
                  <div className="flex gap-2">
                    <button className="bg-white hover:bg-slate-50 text-slate-700 border border-[#cbd5e1] px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors duration-200">Cancel</button>
                    <button className={`border px-2.5 py-1 rounded font-semibold transition-colors duration-300 ${stage === 'complete' ? 'bg-blue-600 border-blue-600 text-white cursor-pointer hover:bg-blue-700' : 'bg-[#f1f5f9] border-[#e2e8f0] text-slate-400 cursor-not-allowed'}`}>Comment</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5 mt-1.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">11</span>
              <span><span className="text-[#d73a49]">  const</span> <span className="text-[#24292e]">bg = variant ===</span> <span className="text-[#032f62]">'operator'</span> <span className="text-[#d73a49]">?</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">12</span>
              <span><span className="text-[#24292e]">    colors.primary</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">13</span>
              <span><span className="text-[#24292e]">    : variant ===</span> <span className="text-[#032f62]">'function'</span> <span className="text-[#d73a49]">?</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">14</span>
              <span><span className="text-[#24292e]">    colors.textSecondary</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">15</span>
              <span><span className="text-[#24292e]">    : colors.surface</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">16</span>
              <span className="text-slate-500"></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">17</span>
              <span><span className="text-[#d73a49]">  const</span> <span className="text-[#24292e]">textColor = variant ===</span> <span className="text-[#032f62]">'number'</span> <span className="text-[#d73a49]">?</span></span>
            </div>

            <div className="flex hover:bg-[#f1f5f9]/60 py-0.5">
              <span className="w-6 text-right select-none text-slate-400 mr-4 font-light text-[9.5px]">18</span>
              <span><span className="text-[#24292e]">    colors.text : colors.white</span></span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ArchiDevMockup;
