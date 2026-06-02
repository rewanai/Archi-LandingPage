import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { useLanguage } from '../i18n';

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

          {/* SCREEN 1: Enterprise Logistics Console — Top Left */}
          <div className="absolute top-[8%] left-[2%] md:top-[10%] md:left-[5%] lg:left-[6%] w-[280px] md:w-[340px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.55] sm:scale-100 origin-top-left hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500">
            {/* Window Chrome */}
            <div className="bg-[#0d1117] border-b border-white/[0.06] px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">[SYS_DECK // FRAME_01]</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-400">LIVE</span>
              </div>
            </div>
            {/* Body */}
            <div className="bg-[#0a0e14] flex h-[220px]">
              {/* Sidebar */}
              <div className="w-9 border-r border-white/[0.05] flex flex-col items-center py-3 gap-3 bg-[#080c12]">
                {[
                  <path key="a" strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />,
                  <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
                  <path key="c" strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />,
                ].map((path, i) => (
                  <div key={i} className={`w-6 h-6 flex items-center justify-center rounded ${i === 0 ? 'bg-cyan-500/20' : ''}`}>
                    <svg className={`w-3.5 h-3.5 ${i === 0 ? 'text-cyan-400' : 'text-slate-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{path}</svg>
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="flex-1 p-3 overflow-hidden flex flex-col gap-2">
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Supply-Chain Optimization — Live View</div>
                {/* Metric Row */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: 'Throughput', value: '94.2k/hr', color: 'text-cyan-400' },
                    { label: 'Latency', value: '12ms', color: 'text-emerald-400' },
                    { label: 'Nodes', value: '247', color: 'text-slate-300' },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/[0.03] border border-white/[0.05] rounded p-1.5">
                      <div className="text-[8px] text-slate-500 font-mono uppercase">{m.label}</div>
                      <div className={`text-[13px] font-mono font-bold ${m.color} leading-none mt-0.5`}>{m.value}</div>
                    </div>
                  ))}
                </div>
                {/* Node Graph Canvas */}
                <div className="flex-1 bg-[#060a10] border border-white/[0.05] rounded relative overflow-hidden">
                  {/* SVG Node Graph */}
                  <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 320 120">
                    <defs>
                      <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    </defs>
                    {/* Connections */}
                    {[
                      [40,60,120,35],[40,60,120,85],[120,35,200,20],[120,35,200,60],[120,85,200,60],[120,85,200,100],[200,20,280,40],[200,60,280,40],[200,60,280,80],[200,100,280,80],
                    ].map(([x1,y1,x2,y2],i) => (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(6,182,212,0.25)" strokeWidth="0.8" />
                    ))}
                    {/* Nodes */}
                    {[
                      {cx:40,cy:60,r:5,c:'#0ea5e9'},{cx:120,cy:35,r:4,c:'#22d3ee'},{cx:120,cy:85,r:4,c:'#22d3ee'},
                      {cx:200,cy:20,r:3,c:'#67e8f9'},{cx:200,cy:60,r:3,c:'#67e8f9'},{cx:200,cy:100,r:3,c:'#67e8f9'},
                      {cx:280,cy:40,r:4,c:'#38bdf8'},{cx:280,cy:80,r:4,c:'#38bdf8'},
                    ].map((n,i) => (
                      <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.c} filter="url(#glow)" opacity="0.9" />
                    ))}
                  </svg>
                  <div className="absolute bottom-1.5 right-2 text-[8px] font-mono text-slate-600">route-mesh v3.1 // oman-dc-cluster</div>
                </div>
                {/* Status Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-mono text-slate-500">All systems nominal</span>
                  </div>
                  <span className="text-[8px] font-mono text-slate-600">05:42:17 UTC+4</span>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 3: Mobile Banking App — Bottom Left */}
          <div className="absolute bottom-[6%] left-[3%] md:bottom-[8%] md:left-[6%] lg:left-[8%] w-[160px] md:w-[190px] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.6] sm:scale-100 origin-bottom-left hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-500">
            {/* Phone Frame */}
            <div className="bg-[#08090c] h-full">
              {/* Status bar */}
              <div className="px-3 pt-2.5 pb-1 flex items-center justify-between">
                <span className="text-[8px] font-mono text-white/60">09:41</span>
                <div className="w-10 h-2.5 bg-black rounded-full" />
                <div className="flex gap-1 items-center">
                  <svg className="w-2.5 h-2.5 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 8.25a.75.75 0 01.75-.75h19.5a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75zM1.5 12a.75.75 0 01.75-.75h19.5a.75.75 0 010 1.5H2.25A.75.75 0 011.5 12z"/></svg>
                </div>
              </div>
              {/* Header */}
              <div className="px-3 pt-1 pb-2 flex items-center justify-between">
                <div>
                  <div className="text-[8px] text-white/40 font-mono">Good morning</div>
                  <div className="text-[11px] text-white font-semibold tracking-tight">Khalid Al-Farsi</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-[8px] text-white font-bold">KF</div>
              </div>
              {/* Balance Card */}
              <div className="mx-2.5 rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 p-3 shadow-lg">
                <div className="text-[7px] font-mono text-white/40 uppercase tracking-widest mb-1">Total Balance</div>
                <div className="text-[18px] font-bold text-white tracking-tight leading-none">142,850</div>
                <div className="text-[8px] text-purple-400 font-mono mt-0.5">OMR</div>
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-4 rounded bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center">
                      <span className="text-[5px] text-white/80 font-bold">VISA</span>
                    </div>
                    <span className="text-[7px] font-mono text-white/40">••• 4891</span>
                  </div>
                  <span className="text-[7px] font-mono text-emerald-400">Active</span>
                </div>
              </div>
              {/* Transactions */}
              <div className="px-2.5 pt-2.5">
                <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest mb-2">Recent</div>
                <div className="space-y-1.5">
                  {[
                    { name: 'Ministry of Finance', amount: '-4,200', status: 'Cleared', color: 'text-emerald-400' },
                    { name: 'Escrow Transfer', amount: '+18,500', status: 'Sovereign Lock', color: 'text-purple-400' },
                    { name: 'OPAL Petroleum', amount: '-930', status: 'Settling', color: 'text-amber-400' },
                  ].map((tx) => (
                    <div key={tx.name} className="flex items-center justify-between py-1 border-b border-white/[0.04] last:border-0">
                      <div>
                        <div className="text-[8px] text-white/70 font-medium leading-none">{tx.name}</div>
                        <div className={`text-[7px] font-mono mt-0.5 ${tx.color}`}>{tx.status}</div>
                      </div>
                      <span className="text-[8px] font-mono text-white/60">{tx.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-3 py-1.5 mt-1 text-right">
                <span className="text-[7px] font-mono text-slate-600">[SYS_DECK // FRAME_02]</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UI Elements - Right Side */}
        <motion.div style={{ opacity: rightOpacity, y: rightY, scale: rightScale, willChange: "transform, opacity" }} className="absolute inset-0 pointer-events-none flex items-center justify-center w-full h-full max-w-[1300px] mx-auto">

          {/* SCREEN 3: Web3 Dev Infrastructure Hero — Top Right */}
          <div className="absolute top-[8%] right-[2%] md:top-[10%] md:right-[5%] lg:right-[6%] w-[280px] md:w-[340px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.55] sm:scale-100 origin-top-right hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-500">
            {/* Window Chrome */}
            <div className="bg-[#0d110f] border-b border-white/[0.06] px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">[SYS_DECK // FRAME_03]</span>
              <span className="text-[9px] font-mono text-emerald-500/70">TypeScript</span>
            </div>
            {/* Body — Split layout */}
            <div className="bg-[#080e0b] flex h-[220px]">
              {/* Left copy column */}
              <div className="w-[42%] p-3 border-r border-white/[0.05] flex flex-col justify-between">
                <div>
                  <div className="text-[8px] font-mono text-emerald-500/60 uppercase tracking-widest mb-2">Consensus Layer</div>
                  <p className="text-[10px] text-white font-semibold leading-snug tracking-tight">The Consensus Layer for Global Autonomous Commerce.</p>
                  <p className="text-[8px] text-slate-500 mt-2 leading-relaxed">Trustless. Stateless. Sovereign by design.</p>
                </div>
                <div>
                  <div className="flex flex-col gap-1 mb-2">
                    {['Node uptime: 99.98%','TPS: 84,200','Finality: 1.2s'].map(s => (
                      <div key={s} className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        <span className="text-[7px] font-mono text-slate-400">{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[7px] font-mono text-slate-600 border-t border-white/[0.05] pt-1.5">VIEW TYPESCRIPT SCHEMA ↗</div>
                </div>
              </div>
              {/* Right code editor */}
              <div className="flex-1 p-2.5 overflow-hidden">
                <div className="text-[8px] font-mono text-slate-600 mb-1.5">api/consensus.ts</div>
                <div className="font-mono text-[8px] leading-relaxed space-y-0.5">
                  {[
                    { c: 'text-purple-400', t: 'interface ' },{ c: 'text-cyan-300', t: 'ConsensusNode' },{ c: 'text-white/60', t: ' {' },
                    { c: 'text-slate-500', t: '  nodeId:  ' },{ c: 'text-emerald-400', t: 'string' },{ c: 'text-white/60', t: ';' },
                    { c: 'text-slate-500', t: '  region: ' },{ c: 'text-amber-400', t: '"OM" | "AE" | "SA"' },{ c: 'text-white/60', t: ';' },
                    { c: 'text-slate-500', t: '  stake:  ' },{ c: 'text-emerald-400', t: 'bigint' },{ c: 'text-white/60', t: ';' },
                    { c: 'text-slate-500', t: '  verified:' },{ c: 'text-blue-400', t: 'boolean' },{ c: 'text-white/60', t: ';' },
                    { c: 'text-white/60', t: '}' },
                    { c: 'text-slate-600', t: ' ' },
                    { c: 'text-purple-400', t: 'type ' },{ c: 'text-cyan-300', t: 'TxStatus' },{ c: 'text-white/60', t: ' =' },
                    { c: 'text-amber-400', t: '  | "pending"' },
                    { c: 'text-amber-400', t: '  | "finalized"' },
                    { c: 'text-amber-400', t: '  | "sovereign"' },
                  ].reduce<{ lines: { c: string; t: string }[][] }>((acc, item) => {
                    if (acc.lines.length === 0 || ['{',';','}'].some(ch => acc.lines[acc.lines.length-1].some(x => x.t.includes(ch)))) {
                      acc.lines.push([item]);
                    } else {
                      acc.lines[acc.lines.length-1].push(item);
                    }
                    return acc;
                  }, { lines: [] }).lines.map((line, i) => (
                    <div key={i} className="flex flex-wrap">
                      {line.map((token, j) => (
                        <span key={j} className={token.c}>{token.t}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Marquee footer */}
            <div className="bg-[#060a07] border-t border-white/[0.05] px-3 py-1.5 flex items-center gap-3 overflow-hidden">
              <span className="text-[7px] font-mono text-emerald-600/60 whitespace-nowrap animate-pulse">● NODE:OM-DC-01 verified</span>
              <span className="text-[7px] font-mono text-slate-600 whitespace-nowrap">SIG:0x4f8a...c291</span>
              <span className="text-[7px] font-mono text-emerald-600/60 whitespace-nowrap">● NODE:AE-DC-03 verified</span>
              <span className="text-[7px] font-mono text-slate-600 whitespace-nowrap">SIG:0x7b2d...e104</span>
            </div>
          </div>

          {/* SCREEN 4: Government Cloud ERP — Bottom Right */}
          <div className="absolute bottom-[6%] right-[2%] md:bottom-[8%] md:right-[5%] lg:right-[6%] w-[280px] md:w-[340px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto block scale-[0.55] sm:scale-100 origin-bottom-right hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.10)] transition-all duration-500">
            {/* Window Chrome */}
            <div className="bg-[#110e07] border-b border-white/[0.06] px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">[SYS_DECK // FRAME_04]</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[9px] font-mono text-amber-400/70">AUDIT MODE</span>
              </div>
            </div>
            {/* Top Status Bar */}
            <div className="bg-[#0e0b05] border-b border-white/[0.05] px-3 py-1.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <span className="text-[7px] font-mono text-amber-400/80">🛡 Sovereign Encryption Lvl 4 Active</span>
              </div>
              <span className="text-[7px] font-mono text-slate-600 bg-white/5 px-1.5 py-0.5 rounded">Super Admin // Ministry Auditor</span>
            </div>
            {/* Body */}
            <div className="bg-[#080601] flex h-[195px]">
              {/* Main table */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {/* Table header */}
                <div className="grid grid-cols-4 gap-0 border-b border-white/[0.06] px-3 py-1.5">
                  {['Workspace','Entity','Status','Compliance'].map(h => (
                    <div key={h} className="text-[7px] font-mono text-slate-600 uppercase tracking-wider">{h}</div>
                  ))}
                </div>
                {/* Table rows */}
                <div className="overflow-hidden flex-1">
                  {[
                    { ws: 'MOF-CORE-01', entity: 'Min. Finance', status: 'Verified', ok: true },
                    { ws: 'ROP-SHIELD-02', entity: 'Police HQ', status: 'Auditing', ok: null },
                    { ws: 'PDO-OPS-09', entity: 'PDO Energy', status: 'Cleared', ok: true },
                    { ws: 'MOCI-REG-04', entity: 'Commerce', status: 'Pending', ok: false },
                    { ws: 'DGOV-SVC-11', entity: 'eGov Portal', status: 'Verified', ok: true },
                  ].map((row) => (
                    <div key={row.ws} className="grid grid-cols-4 gap-0 border-b border-white/[0.03] px-3 py-1.5 hover:bg-white/[0.02]">
                      <div className="text-[8px] font-mono text-slate-300 truncate">{row.ws}</div>
                      <div className="text-[8px] font-mono text-slate-500 truncate">{row.entity}</div>
                      <div className={`text-[7px] font-mono ${row.ok === true ? 'text-emerald-400' : row.ok === false ? 'text-red-400' : 'text-amber-400'}`}>{row.status}</div>
                      <div className="flex items-center">
                        {row.ok === true && <span className="text-[7px] text-emerald-400">✓ Pass</span>}
                        {row.ok === false && <span className="text-[7px] text-red-400">✗ Fail</span>}
                        {row.ok === null && <span className="text-[7px] text-amber-400">⟳ Review</span>}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Uptime row */}
                <div className="border-t border-white/[0.05] px-3 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[7px] font-mono text-slate-500">Uptime: 99.97% · 42d 14h</span>
                  </div>
                  <span className="text-[7px] font-mono text-amber-400/60">5 workspaces active</span>
                </div>
              </div>
              {/* Right diagnostic drawer */}
              <div className="w-[80px] border-l border-white/[0.05] bg-black/30 p-2 flex flex-col gap-1.5 overflow-hidden">
                <div className="text-[7px] font-mono text-slate-600 uppercase tracking-wider">Console</div>
                {['> SYS_BOOT OK','> CERTS valid','> AUTH 2FA ✓','> DB sync 100%','> ENC active','> LOG flushed'].map((line, i) => (
                  <div key={i} className="text-[6.5px] font-mono text-emerald-500/60 leading-tight">{line}</div>
                ))}
                <div className="mt-auto pt-1 border-t border-white/[0.05]">
                  <div className="text-[6.5px] font-mono text-slate-600 mb-1">MEM</div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[68%] h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
                  </div>
                  <div className="text-[6px] font-mono text-slate-600 mt-0.5">68% / 128GB</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


