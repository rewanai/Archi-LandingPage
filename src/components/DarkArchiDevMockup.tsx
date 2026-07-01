import React from 'react';

// Custom icons to perfectly match the screenshot
const InfinityIcon = () => (
  <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c2.25 1.5 4.5 3 4.5 3s-2.25 3-4.5 3-4.5-1.5-4.5-3m0-6c-2.25-1.5-4.5-3-4.5-3s2.25-3 4.5-3 4.5 1.5 4.5 3" />
  </svg>
);

const SearchIcon = ({ className = "w-3.5 h-3.5" }) => (
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

export const DarkArchiDevMockup: React.FC = () => {
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

        // 1. Typing Prompt
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
    <div className="relative flex flex-col w-full h-full text-zinc-300 select-none overflow-hidden bg-[#141416] text-[10px] font-sans" dir="ltr">

      {/* ─────────────────────────────────────────────────────────────
         TOP WINDOW TITLE BAR
         ───────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-3 h-[38px] bg-[#111112] border-b border-[#222] shrink-0">

        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-[26px] h-[26px] rounded bg-[#1e1e20]/85 shadow-sm border border-zinc-800">
            <InfinityIcon />
          </div>
          <div className="flex items-center gap-1 opacity-60 text-zinc-500">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="hidden sm:flex items-center gap-3 w-1/3 max-w-[320px]">
          <div className="flex items-center justify-between w-full h-[24px] bg-[#18181a] border border-zinc-800 rounded px-2 text-zinc-450 text-[10px] shadow-3xs">
            <div className="flex items-center gap-1.5">
              <SearchIcon className="w-2.5 h-2.5 opacity-65 text-zinc-500" />
              <span>Search Math-app...</span>
            </div>
            <span className="text-[8.5px] opacity-40 font-mono">Ctrl-K</span>
          </div>

          <div className="flex items-center gap-1 bg-[#18181a] hover:bg-zinc-800 px-2 py-1 rounded text-zinc-450 cursor-pointer border border-zinc-800 shrink-0 text-[10px] h-[24px] shadow-3xs">
            <FolderIcon />
            <span className="font-semibold text-zinc-200 ml-1">Math-app</span>
            <ChevronDownIcon />
          </div>
        </div>

        {/* Right Section: Workspace Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-4 text-zinc-400 font-medium text-[10.5px]">
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <TerminalIcon />
              <span>Terminal</span>
            </div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <KanbanIcon />
              <span>Kanban Board</span>
            </div>
            <div className="flex items-center gap-1 text-white border-b-2 border-white pb-1 pt-1.5 font-semibold">
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
        <div className="hidden md:flex w-[44px] bg-[#0c0c0d] border-r border-[#222] flex-col items-center py-3 justify-between shrink-0">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-zinc-550 hover:text-white cursor-pointer p-1">
              <ChevronRight />
            </div>
            <div className="text-[#38bdf8] bg-zinc-900 border-l-2 border-sky-500 w-full flex justify-center py-2 cursor-pointer">
              <FolderIcon />
            </div>
            <div className="text-zinc-500 hover:text-white cursor-pointer py-1">
              <SearchIcon className="w-4.5 h-4.5" />
            </div>
            <div className="text-zinc-500 hover:text-white cursor-pointer py-1">
              <TerminalIcon />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pb-1">
            <div className="text-zinc-550 hover:text-white cursor-pointer">
              <DatabaseIcon />
            </div>
            <div className="text-zinc-550 hover:text-white cursor-pointer">
              <GearIcon />
            </div>
            <div className="w-6 h-6 rounded-full bg-sky-500 text-[9px] font-bold text-white flex items-center justify-center shadow-inner cursor-pointer">
              M
            </div>
          </div>
        </div>

        {/* wider sidebar */}
        <div className="hidden lg:flex w-[180px] bg-[#111112] border-r border-[#222] flex-col p-3 shrink-0 text-start justify-between font-sans">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[7.5px] uppercase font-bold text-zinc-500 tracking-wider">Workspace</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[11px] font-bold text-zinc-200">Math app</span>
                <span className="text-zinc-500 hover:text-zinc-300 text-[10px] leading-none pb-1 font-bold cursor-pointer">...</span>
              </div>
              <span className="text-[8.5px] text-zinc-500 font-medium truncate mt-0.5" dir="ltr">C:/Users/Mustafa Ahmed...</span>
            </div>

            <button className="w-full border border-zinc-800 rounded-lg py-1.5 px-3 flex items-center justify-center gap-1.5 text-[9.5px] text-zinc-250 hover:bg-zinc-800 transition-colors font-medium bg-[#1e1e20]/40 cursor-pointer">
              <PlusIcon />
              <span>New session</span>
            </button>

            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#1a1a20]/80 border border-zinc-800 rounded text-[9.5px] text-zinc-300 font-semibold cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"></span>
                <span className="truncate">UI refinement impleme...</span>
              </div>
              <div className="text-[9.5px] text-zinc-550 font-medium px-2 py-1 hover:bg-zinc-900/40 rounded cursor-pointer transition-colors">
                Project overview
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
           CONSOLE / CHAT INTERFACE (LEFT SIDE)
           ───────────────────────────────────────────────────────────── */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#222] bg-[#161617] flex flex-col overflow-hidden shrink-0 h-[280px] md:h-full">

          {/* Console Tab */}
          <div className="flex items-center justify-between px-3 h-[34px] bg-[#111112] border-b border-[#222] shrink-0 text-zinc-400">
            <div className="flex items-center gap-1.5 bg-[#161617] border-t-2 border-sky-500 border-x border-[#222] px-3.5 h-[34px] text-zinc-200 text-[10.5px] font-semibold -mb-[1px] relative z-10">
              <ChevronRight />
              <span>Console</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="cursor-pointer hover:opacity-100 font-bold">...</span>
            </div>
          </div>

          {/* Chat / Console Content Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col min-h-0">

            <div className="text-zinc-500 text-[9.5px] text-start font-semibold uppercase tracking-wider shrink-0 border-b border-zinc-800/45 pb-1.5">
              Project overview
            </div>

            {/* User message */}
            {promptText.length > 0 && (
              <div className="flex flex-col items-end gap-1 max-w-[85%] self-end text-start">
                <div className="bg-[#2d2d34] text-zinc-200 border border-zinc-800 rounded-lg p-2.5 shadow-sm leading-relaxed text-[10px]">
                  {promptText}
                </div>
                <span className="text-[7.5px] text-zinc-500 font-medium px-1 block text-right">
                  I need you to break it down for me
                </span>
              </div>
            )}

            {/* AI thinking state */}
            {stage === 'thinking' && (
              <div className="flex items-start gap-2 max-w-[85%] self-start text-start">
                <div className="bg-[#1e1e20] text-zinc-400 border border-zinc-800 rounded-lg p-2.5 shadow-sm leading-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span>
                  <span className="text-[9px] font-mono">Thinking...</span>
                </div>
              </div>
            )}

            {/* AI Console Response */}
            {(stage !== 'prompt' && stage !== 'thinking') && (
              <div className="flex flex-col items-start gap-1.5 max-w-[95%] self-start text-start">
                <div className="bg-[#18181c] text-zinc-200 border border-zinc-800 rounded-lg p-2.5 shadow-sm leading-relaxed text-[10px] space-y-3 w-full">
                  <div className="font-light">
                    {stage === 'console' 
                      ? "That's the CalcKey component (a single calculator button). Lines 10–13 do this:".slice(0, consoleIndex)
                      : "That's the CalcKey component (a single calculator button). Lines 10–13 do this:"
                    }
                    {stage === 'console' && consoleIndex < 83 && <span className="w-1 h-3.5 bg-sky-500 animate-pulse inline-block align-middle ml-0.5" />}
                  </div>

                  {/* Bullet list */}
                  {showBullets && (
                    <ul className="list-disc pl-4 space-y-2.5 text-[9.5px] font-light text-zinc-300 transition-opacity duration-500">
                      <li>
                        <span className="font-semibold text-zinc-200">Line 10</span> — Destructures the props <span className="font-mono bg-[#282830] px-1 py-0.5 rounded text-zinc-200 font-bold">{`{label, onPress, variant}`}</span> and defaults <span className="font-mono bg-[#282830] px-1 py-0.5 rounded text-[#38bdf8] font-bold">variant</span> to <span className="font-mono bg-[#282830] px-1 py-0.5 rounded text-[#fb923c] font-bold">'number'</span> if nothing is passed.
                      </li>
                      <li>
                        <span className="font-semibold text-zinc-200">Lines 11–13</span> — A chained ternary that picks a <span className="font-semibold text-zinc-200">background color</span> based on the button's <span className="font-mono bg-[#282830] px-1 py-0.5 rounded text-zinc-200">variant</span>:
                      </li>
                    </ul>
                  )}

                  {/* Table */}
                  {showTable && (
                    <div className="border border-zinc-800 rounded-lg overflow-x-auto mt-3 transition-opacity duration-700 bg-[#16161a]">
                      <table className="w-full text-left text-[9px] border-collapse font-sans">
                        <thead>
                          <tr className="bg-zinc-900 text-zinc-450 font-bold border-b border-zinc-800/80">
                            <th className="p-2 py-1.5 font-bold uppercase tracking-wider text-[8px]">Variant</th>
                            <th className="p-2 py-1.5 font-bold uppercase tracking-wider text-[8px]">Buttons</th>
                            <th className="p-2 py-1.5 font-bold uppercase tracking-wider text-[8px]">Background Color</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900 font-light text-zinc-300">
                          <tr className="hover:bg-zinc-900/30">
                            <td className="p-2 py-1.5 font-mono text-[#38bdf8] font-semibold">'operator'</td>
                            <td className="p-2 py-1.5 font-bold">÷, ×, -, +, =</td>
                            <td className="p-2 py-1.5"><span className="text-[#38bdf8] font-bold">colors.primary</span> (main theme color)</td>
                          </tr>
                          <tr className="hover:bg-zinc-900/30">
                            <td className="p-2 py-1.5 font-mono text-[#38bdf8] font-semibold">'function'</td>
                            <td className="p-2 py-1.5 font-bold">C, ⌫</td>
                            <td className="p-2 py-1.5"><span className="text-zinc-400 font-bold">colors.textSecondary</span> (muted/secondary)</td>
                          </tr>
                          <tr className="hover:bg-zinc-900/30">
                            <td className="p-2 py-1.5 font-mono text-zinc-400 font-semibold">'number' (default)</td>
                            <td className="p-2 py-1.5 font-bold">0-9, ., (, )</td>
                            <td className="p-2 py-1.5"><span className="text-zinc-400 font-bold">colors.surface</span> (default card background)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Closing explanation */}
                  {showTable && (
                    <p className="text-[9.5px] font-light text-zinc-300 pt-1 leading-relaxed">
                      So it color-codes the three types of calculator keys: numbers get the surface color, operators get the primary/accent color, and function buttons (clear/backspace) get a secondary muted color.
                    </p>
                  )}

                </div>
                <span className="text-[7.5px] text-zinc-550 font-semibold px-1">
                  Archi Dev
                </span>
              </div>
            )}

          </div>

          {/* Bottom Chat Prompt box */}
          <div className="p-3 border-t border-[#222] bg-[#111112] space-y-2.5 shrink-0">

            {/* Animated border beam container wrapper */}
            <div className="relative w-full overflow-hidden p-[1.5px] rounded-lg bg-zinc-800">
              {/* Conic rotating beam border animation */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,#0284c7_88%,#38bdf8_98%,transparent_100%)] animate-[spin_4s_linear_infinite] pointer-events-none" />
              
              {/* Inner input frame content */}
              <div className="relative flex items-center justify-between bg-[#141416] rounded-[7px] p-2 pl-3 shadow-3xs z-10 w-full">
                <div className="flex items-center gap-1 text-zinc-300 font-light text-[11px] overflow-hidden truncate mr-2">
                  <span>{promptText}</span>
                  {stage === 'prompt' && <span className="w-1.5 h-3.5 bg-sky-500 animate-pulse shrink-0" />}
                </div>
                <button className={`w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm transition-colors duration-300 ${stage !== 'prompt' && promptText.length > 0 ? 'bg-[#0284c7]' : 'bg-zinc-800 text-zinc-550'}`}>
                  <span className="text-xs">↑</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px]">
              <div className="flex items-center gap-2">
                <button className="text-zinc-550 hover:text-white cursor-pointer"><PlusIcon /></button>
                <button className="text-zinc-550 hover:text-white cursor-pointer"><PaperclipIcon /></button>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="bg-[#18181a] border border-zinc-800 rounded-full px-2.5 py-0.5 text-zinc-300 font-semibold flex items-center gap-0.5 shadow-3xs cursor-pointer hover:text-white">
                  <span>Build</span>
                  <ChevronDownIcon />
                </div>
                <div className="bg-[#18181a] border border-zinc-800 rounded-full px-2.5 py-0.5 text-zinc-300 font-semibold flex items-center gap-0.5 shadow-3xs cursor-pointer hover:text-white">
                  <span>Models</span>
                  <ChevronDownIcon />
                </div>
                <div className="bg-[#18181a] border border-zinc-800 rounded-full px-2.5 py-0.5 text-zinc-300 font-semibold flex items-center gap-0.5 shadow-3xs cursor-pointer hover:text-white">
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
        <div className="flex-1 bg-[#141416] flex flex-col overflow-hidden relative">

          {/* Header Tab */}
          <div className="flex items-center justify-between px-3 h-[34px] bg-[#111112] border-b border-[#222] shrink-0 text-zinc-400">
            <div className="flex items-center gap-1.5 bg-[#141416] border-t-2 border-sky-500 border-x border-[#222] px-3.5 h-[34px] text-zinc-200 text-[10.5px] font-semibold -mb-[1px] relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>CalculatorKeypad.tsx</span>
              <span className="text-[8.5px] text-zinc-500 font-normal ml-1.5 hover:text-white cursor-pointer">✕</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="cursor-pointer hover:opacity-100 font-bold">+</span>
            </div>
          </div>

          {/* Editor content */}
          <div className="flex-1 p-4 font-mono text-[10.5px] leading-[1.65] overflow-auto text-zinc-300">

            {/* Syntax Highlighted Lines */}
            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">1</span>
              <span><span className="text-[#f472b6]">import</span> <span className="text-[#f3f4f6]">{`{ View, TouchableOpacity, Text, StyleSheet }`}</span> <span className="text-[#f472b6]">from</span> <span className="text-[#fb923c]">'react-native'</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">2</span>
              <span><span className="text-[#f472b6]">import</span> <span className="text-[#f3f4f6]">{`{ colors, borderRadius, spacing, typography, shadows }`}</span> <span className="text-[#f472b6]">from</span> <span className="text-[#fb923c]">'@/lib/theme'</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">3</span>
              <span className="text-zinc-500"></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">4</span>
              <span><span className="text-[#c084fc]">interface</span> <span className="text-[#818cf8]">KeyProps</span> <span className="text-zinc-200">{`{`}</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">5</span>
              <span><span className="text-zinc-200">  label</span><span className="text-[#f472b6]">:</span> <span className="text-[#60a5fa]">string</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">6</span>
              <span><span className="text-zinc-200">  onPress</span><span className="text-[#f472b6]">:</span> <span className="text-zinc-200">(value:</span> <span className="text-[#60a5fa]">string</span><span className="text-zinc-200">) =&gt;</span> <span className="text-[#60a5fa]">void</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">7</span>
              <span><span className="text-zinc-200">  variant</span><span className="text-purple-400">?</span><span className="text-[#f472b6]">:</span> <span className="text-[#fb923c]">'number'</span> <span className="text-[#f472b6]">|</span> <span className="text-[#fb923c]">'operator'</span> <span className="text-[#f472b6]">|</span> <span className="text-[#fb923c]">'function'</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">8</span>
              <span className="text-zinc-200">{`}`}</span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">9</span>
              <span className="text-zinc-500"></span>
            </div>

            {/* LINE 10: HIGHLIGHTED LINE AND POPUP COMMENT BOX */}
            <div className="relative z-20">
              <div className="flex bg-amber-500/10 border-l-[3px] border-amber-500 py-1">
                <span className="w-6 text-right select-none text-amber-500 mr-4 font-semibold text-[9.5px]">10</span>
                <span><span className="text-[#f472b6]">function</span> <span className="text-[#818cf8]">CalcKey</span><span className="text-zinc-200">({`{ label, onPress, variant = `}</span><span className="text-[#fb923c]">'number'</span> <span className="text-zinc-200">{`}: KeyProps) {`}</span></span>
              </div>

              {/* Overlapping comment panel (Fades in on Comment stage) */}
              <div className={`absolute right-4 top-2.5 w-[230px] bg-[#1e1e24] border border-zinc-800 rounded-lg p-3 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5)] z-30 font-sans text-[11px] leading-[1.4] flex flex-col gap-3 transition-all duration-750 transform ${(stage === 'comment' || stage === 'complete') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}>
                <div className="relative">
                  <textarea
                    placeholder="Add comment"
                    value={commentText}
                    className="w-full h-16 bg-[#141416] border border-zinc-800 rounded-lg p-2 pr-4 text-zinc-200 placeholder-zinc-550 focus:outline-none focus:border-zinc-700 font-mono text-[9px] resize-none leading-normal"
                    readOnly
                  />
                  {stage === 'comment' && commentText.length < 59 && (
                    <span className="absolute bottom-3 right-3 w-1.5 h-3 bg-sky-500 animate-pulse inline-block" />
                  )}
                </div>
                <div className="flex items-center justify-between text-[9.5px]">
                  <span className="text-zinc-500 font-light">Commenting on line 10</span>
                  <div className="flex gap-2">
                    <button className="bg-[#141416] hover:bg-zinc-800 text-zinc-300 border border-zinc-800 px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors duration-200">Cancel</button>
                    <button className={`border px-2.5 py-1 rounded font-semibold transition-colors duration-300 ${stage === 'complete' ? 'bg-sky-600 border-sky-600 text-white cursor-pointer hover:bg-sky-500' : 'bg-zinc-900 border-zinc-800 text-zinc-550 cursor-not-allowed'}`}>Comment</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5 mt-1.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">11</span>
              <span><span className="text-[#f472b6]">  const</span> <span className="text-zinc-200">bg = variant ===</span> <span className="text-[#fb923c]">'operator'</span> <span className="text-[#f472b6]">?</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">12</span>
              <span><span className="text-zinc-200">    colors.primary</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">13</span>
              <span><span className="text-zinc-200">    : variant ===</span> <span className="text-[#fb923c]">'function'</span> <span className="text-[#f472b6]">?</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">14</span>
              <span><span className="text-zinc-200">    colors.textSecondary</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">15</span>
              <span><span className="text-zinc-200">    : colors.surface</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">16</span>
              <span className="text-zinc-500"></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">17</span>
              <span><span className="text-[#f472b6]">  const</span> <span className="text-zinc-200">textColor = variant ===</span> <span className="text-[#fb923c]">'number'</span> <span className="text-[#f472b6]">?</span></span>
            </div>

            <div className="flex hover:bg-zinc-900/40 py-0.5">
              <span className="w-6 text-right select-none text-zinc-600 mr-4 font-light text-[9.5px]">18</span>
              <span><span className="text-zinc-200">    colors.text : colors.white</span></span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
