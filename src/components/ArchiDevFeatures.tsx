import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

// SVGs and Icons
const BinocularsIcon = () => (
  <svg className="w-3.5 h-3.5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const BugIcon = () => (
  <svg className="w-3.5 h-3.5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z" />
  </svg>
);

const FlagIcon = () => (
  <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5a1 1 0 00.8.4l.8.8a1 1 0 01.8.4H19a2 2 0 012 2v6a2 2 0 01-2 2h-5.5a1 1 0 00-.8-.4l-.8-.8a1 1 0 01-.8-.4H5a2 2 0 00-2 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-2.5 h-2.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-3 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CopyIcon = () => (
  <svg className="w-3 h-3 text-slate-400 hover:text-slate-600 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);

const QuestionIcon = () => (
  <svg className="w-3 h-3 text-slate-400 hover:text-slate-600 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 text-blue-500 ml-1 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

export default function ArchiDevFeatures() {
  const { t, isRTL } = useLanguage();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 py-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* CARD 1: Instant codebase context */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between"
        >
          {/* Card Mockup Frame */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 h-[290px] flex flex-col shadow-xs overflow-hidden select-none hover:shadow-sm hover:border-[#cbd5e1] transition-all duration-300">
            {/* Header tab */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-2 px-3 mb-2.5 flex items-center justify-between shadow-3xs">
              <div className="flex items-center gap-2 overflow-hidden">
                <BinocularsIcon />
                <span className="text-[10px] font-mono font-medium text-slate-700 truncate">
                  {t('archi.features.c1.title')}
                </span>
              </div>
              <ChevronDownIcon />
            </div>

            {/* Explainer paragraph */}
            <p className="text-[9.5px] leading-normal text-slate-500 font-light mb-3">
              {t('archi.features.c1.summary')}
            </p>

            {/* Checklist Runner */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-1.5 max-h-[140px]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                const text = t(`archi.features.c1.item${index}`);
                const isGrep = text.includes('grep');
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 hover:bg-slate-100/50 p-0.5 rounded cursor-pointer transition-colors"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </div>
                    {isGrep ? (
                      <span className="text-[9px] font-mono leading-none">
                        <span className="text-teal-600 font-semibold">grep</span>{' '}
                        <span className="text-slate-800">{text.replace('grep', '')}</span>
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono text-slate-600 leading-none truncate">
                        {text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description copy under the card */}
          <div className="mt-5 text-center sm:text-start px-2">
            <h4 className="text-[15px] font-bold text-slate-900 leading-snug tracking-tight mb-2">
              {t('archi.features.c1.heading')}
            </h4>
            <p className="text-[13px] text-slate-500 font-light leading-relaxed">
              {t('archi.features.c1.desc')}
            </p>
          </div>
        </motion.div>

        {/* CARD 2: Never miss a detail */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between"
        >
          {/* Card Mockup Frame */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 h-[290px] flex flex-col gap-3 shadow-xs overflow-hidden select-none hover:shadow-sm hover:border-[#cbd5e1] transition-all duration-300">
            {/* Bug tracker block */}
            <div className="flex flex-col gap-1.5 bg-white border border-[#e2e8f0] rounded-xl p-2.5 shadow-3xs">
              <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-rose-600">
                  <BugIcon />
                  <span>{t('archi.features.c2.bugs')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ChevronDownIcon />
                  <CopyIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9.5px] text-slate-800 font-mono truncate">
                  {t('archi.features.c2.bugText')}
                </span>
                <span className="text-[8px] text-rose-500 font-mono font-medium">
                  {t('archi.features.c2.bugSub')}
                </span>
              </div>
            </div>

            {/* Flags tracker block */}
            <div className="flex flex-col gap-1.5 bg-white border border-[#e2e8f0] rounded-xl p-2.5 shadow-3xs flex-1 overflow-hidden">
              <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-amber-600">
                  <FlagIcon />
                  <span>{t('archi.features.c2.flags')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] bg-slate-100 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded cursor-pointer hover:bg-slate-200 active:scale-95 transition-all">
                    {t('archi.features.c2.markRead')}
                  </span>
                  <QuestionIcon />
                  <CopyIcon />
                </div>
              </div>

              {/* Flags list */}
              <div className="space-y-2 overflow-y-auto no-scrollbar flex-1 pr-0.5">
                {/* Flag 1 */}
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-800 font-mono truncate font-medium flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {t('archi.features.c2.flag1Text')}
                  </span>
                  <span className="text-[8px] text-amber-600 font-mono pl-2">
                    {t('archi.features.c2.flag1Sub')}
                  </span>
                </div>

                {/* Flag 2 */}
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-500 font-mono truncate flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                    {t('archi.features.c2.flag2Text')}
                  </span>
                  <span className="text-[8px] text-slate-400 font-mono pl-2">
                    {t('archi.features.c2.flag2Sub')}
                  </span>
                </div>

                {/* Flag 3 */}
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-500 font-mono truncate flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                    {t('archi.features.c2.flag3Text')}
                  </span>
                  <span className="text-[8px] text-slate-400 font-mono pl-2">
                    {t('archi.features.c2.flag3Sub')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description copy under the card */}
          <div className="mt-5 text-center sm:text-start px-2">
            <h4 className="text-[15px] font-bold text-slate-900 leading-snug tracking-tight mb-2">
              {t('archi.features.c2.heading')}
            </h4>
            <p className="text-[13px] text-slate-500 font-light leading-relaxed">
              {t('archi.features.c2.desc')}
            </p>
          </div>
        </motion.div>

        {/* CARD 3: Effortless handoff to the cloud */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between"
        >
          {/* Card Mockup Frame */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 h-[290px] flex flex-col gap-2.5 shadow-xs overflow-hidden select-none hover:shadow-sm hover:border-[#cbd5e1] transition-all duration-300 text-[10px]">
            {/* plan.md block */}
            <div className="flex flex-col gap-1.5 bg-white border border-[#e2e8f0] rounded-xl p-2.5 shadow-3xs">
              <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-slate-800 pb-1 border-b border-slate-100">
                <FileIcon />
                <span>{t('archi.features.c4.title')}</span>
              </div>
              <p className="text-[9px] leading-normal text-slate-500 font-light font-sans">
                {t('archi.features.c4.summary')}
              </p>
              <div className="flex items-center justify-between pt-1 text-[8.5px] font-medium border-t border-slate-50 mt-1">
                <span className="text-blue-500 hover:underline cursor-pointer flex items-center gap-0.5">
                  {t('archi.features.c4.view')}
                  <ExternalLinkIcon />
                </span>
                <span className="text-emerald-600 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
                  {t('archi.features.c4.status')}
                </span>
              </div>
            </div>

            {/* Thought for 6s */}
            <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-xl p-2 px-3 shadow-3xs">
              <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500">
                <ClockIcon />
                <span>{t('archi.features.c4.thought')}</span>
              </div>
              <ChevronDownIcon />
            </div>

            {/* Git-diff style file stats */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl p-2 px-3 shadow-3xs flex-1 flex flex-col gap-1.5 justify-center overflow-hidden">
              {/* File 1 */}
              <div className="flex items-center justify-between font-mono text-[9.5px] text-slate-600">
                <span className="truncate max-w-[130px]">server/kafkaConsumer.ts</span>
                <span className="text-emerald-600 bg-emerald-50 px-1 rounded text-[8px] font-bold">+84</span>
              </div>
              {/* File 2 */}
              <div className="flex items-center justify-between font-mono text-[9.5px] text-slate-600">
                <span className="truncate max-w-[130px]">server/salesSocket.ts</span>
                <div className="flex gap-1">
                  <span className="text-emerald-600 bg-emerald-50 px-1 rounded text-[8px] font-bold">+52</span>
                  <span className="text-rose-600 bg-rose-50 px-1 rounded text-[8px] font-bold">-3</span>
                </div>
              </div>
              {/* File 3 */}
              <div className="flex items-center justify-between font-mono text-[9.5px] text-slate-600">
                <span className="truncate max-w-[130px]">web/components/SalesGlobe.tsx</span>
                <span className="text-emerald-600 bg-emerald-50 px-1 rounded text-[8px] font-bold">+147</span>
              </div>
            </div>
          </div>

          {/* Description copy under the card */}
          <div className="mt-5 text-center sm:text-start px-2">
            <h4 className="text-[15px] font-bold text-slate-900 leading-snug tracking-tight mb-2">
              {t('archi.features.c4.heading')}
            </h4>
            <p className="text-[13px] text-slate-500 font-light leading-relaxed">
              {t('archi.features.c4.desc')}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
