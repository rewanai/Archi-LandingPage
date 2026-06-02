import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function TechFrame({ isVisible = true, isDark = false }: { isVisible?: boolean; isDark?: boolean; key?: React.Key }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 bottom-4 md:top-6 md:bottom-6 lg:top-8 lg:bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1360px] 2xl:max-w-[1500px] z-50 pointer-events-none"
        >
          {/* Main Outer Frame */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className={`absolute top-0 left-[30px] right-[30px] h-[1px] transition-colors duration-500 ${isDark ? 'bg-zinc-800/80' : 'bg-slate-200'}`} />
            <div className={`absolute bottom-0 left-[30px] right-[30px] h-[1px] transition-colors duration-500 ${isDark ? 'bg-zinc-800/80' : 'bg-slate-200'}`} />
            <div className={`absolute left-0 top-[30px] bottom-[30px] w-[1px] transition-colors duration-500 ${isDark ? 'bg-zinc-800/80' : 'bg-slate-200'}`} />
            <div className={`absolute right-0 top-[30px] bottom-[30px] w-[1px] transition-colors duration-500 ${isDark ? 'bg-zinc-800/80' : 'bg-slate-200'}`} />
            
            {/* Chamfered Corners */}
            <svg className="absolute top-0 left-0 w-[30px] h-[30px]" overflow="visible">
              <line x1="0" y1="30" x2="30" y2="0" stroke="currentColor" strokeWidth="1" className={`transition-colors duration-500 ${isDark ? 'text-zinc-800/80' : 'text-slate-200'}`} />
            </svg>
            <svg className="absolute top-0 right-0 w-[30px] h-[30px]" overflow="visible">
              <line x1="0" y1="0" x2="30" y2="30" stroke="currentColor" strokeWidth="1" className={`transition-colors duration-500 ${isDark ? 'text-zinc-800/80' : 'text-slate-200'}`} />
            </svg>
            <svg className="absolute bottom-0 left-0 w-[30px] h-[30px]" overflow="visible">
              <line x1="0" y1="0" x2="30" y2="30" stroke="currentColor" strokeWidth="1" className={`transition-colors duration-500 ${isDark ? 'text-zinc-800/80' : 'text-slate-200'}`} />
            </svg>
            <svg className="absolute bottom-0 right-0 w-[30px] h-[30px]" overflow="visible">
              <line x1="0" y1="30" x2="30" y2="0" stroke="currentColor" strokeWidth="1" className={`transition-colors duration-500 ${isDark ? 'text-zinc-800/80' : 'text-slate-200'}`} />
            </svg>
          </motion.div>

          {/* Inner Accent Lines */}
   
        </motion.div>
      )}
    </AnimatePresence>
  );
}
