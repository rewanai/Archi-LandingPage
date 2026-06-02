import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, Instagram, Linkedin, Youtube, Zap, Globe } from 'lucide-react';
import { BorderBeam } from './ui/border-beam';
import { useLanguage } from '../i18n';

export function FloatingNav({ isDarkMode = false, isVisible = true }: { isDarkMode?: boolean, isVisible?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const { t, toggleLang, lang, isRTL } = useLanguage();
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth < 768;
  const navWidth = isMobile
    ? (isHovered ? screenWidth * 0.92 : screenWidth * 0.88)
    : (isHovered ? 860 : 600);

  const navLinks = {
    manage: [
      { label: t('nav.overview'), path: '#' },
      { label: t('nav.analytics'), path: '#' },
      { label: t('nav.users'), badge: '316', path: '#' },
      { label: t('nav.settings'), path: '#' },
    ],
    grow: [
      { label: t('nav.pricing'), badge: 'Updated', isPill: true, path: '#' },
      { label: t('nav.subscriptions'), path: '#' },
      { label: t('nav.billing'), path: '#' },
    ],
    resources: [
      { label: t('nav.integrations'), badge: '28', path: '#' },
      { label: t('nav.documentation'), path: '#' },
      { label: t('nav.api'), path: '#' },
      { label: t('nav.changelog'), badge: 'New', isPill: true, path: '#' },
    ]
  };

  const renderLink = (link: any, idx: number, arr: any[]) => (
    <a
      href={link.path}
      key={idx}
      className={`flex items-center gap-2.5 py-4 transition-colors duration-500 text-[15px] ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'} ${idx !== arr.length - 1 ? (isDarkMode ? 'border-b border-white/5' : 'border-b border-slate-100') : ''}`}
    >
      {link.label}
      {link.badge && (
        <span
          className={`transition-colors duration-500 ${link.isPill ? (isDarkMode ? 'px-2 py-0.5 rounded-full text-[11px] font-medium bg-white text-black' : 'px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#111] text-white') : (isDarkMode ? 'text-slate-400 text-[11px] font-medium' : 'text-slate-400 text-[11px] font-medium')}`}
        >
          {link.badge}
        </span>
      )}
    </a>
  );

  return (
    <div className="fixed top-12 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`pointer-events-auto relative backdrop-blur-md flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border transition-colors duration-500 no-scrollbar ${isDarkMode ? 'bg-[#111]/95 text-white border-white/10' : 'bg-white/95 text-slate-900 border-slate-200/60'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: -20, width: isMobile ? screenWidth * 0.88 : 600, borderRadius: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              width: navWidth,
              borderRadius: isHovered ? 24 : 100,
            }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ maxHeight: '85vh', overflowY: isHovered ? 'auto' : 'hidden' }}
          >
            <BorderBeam size={250} duration={12} delay={9} borderWidth={1.5} />
            <div className="h-[56px] flex items-center justify-between px-2 sm:px-3 w-full shrink-0">
              <div className="flex-1 flex items-center justify-start pl-1 sm:pl-2">
                <button className={`flex items-center gap-1.5 sm:gap-2.5 text-[13px] sm:text-[15px] font-medium px-2.5 sm:px-4 py-2 rounded-full transition-all duration-500 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-700'}`}>
                  {isHovered ? (
                    <>
                      <span className={`w-3.5 h-[1.5px] block transition-colors duration-500 ${isDarkMode ? 'bg-white' : 'bg-slate-700'}`}></span>
                      {t('nav.close')}
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col gap-[4px] justify-center items-center w-4">
                        <span className={`w-4 h-[1.5px] block transition-colors duration-500 ${isDarkMode ? 'bg-white' : 'bg-slate-700'}`}></span>
                        <span className={`w-4 h-[1.5px] block transition-colors duration-500 ${isDarkMode ? 'bg-white' : 'bg-slate-700'}`}></span>
                      </div>
                      {t('nav.menu')}
                    </>
                  )}
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-3">
                <div className="w-5.5 h-5.5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] flex items-center justify-center overflow-hidden p-[1.5px] sm:p-[2px]">
                  <div className={`w-full h-full rounded-[50%_50%_10%_50%] transition-colors duration-500 ${isDarkMode ? 'bg-[#111]' : 'bg-white'}`}></div>
                </div>
                <span className="font-medium text-[13px] sm:text-[15px] tracking-tight transition-colors duration-500">{t('nav.brand')}</span>
              </div>

              <div className="flex-1 flex items-center justify-end gap-1 sm:gap-2 pr-0.5 sm:pr-1">
                {/* Language Toggle Button */}
                <button
                  onClick={toggleLang}
                  className={`flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-semibold transition-all duration-500 ${isDarkMode ? 'hover:bg-white/10 text-slate-300 hover:text-white' : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'}`}
                >
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{lang === 'en' ? 'AR' : 'EN'}</span>
                </button>

                <button className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-[12px] sm:text-[15px] font-medium shadow-sm transition-all duration-500 ${isDarkMode ? 'bg-white hover:bg-slate-200 text-black' : 'bg-[#111] hover:bg-black text-white'}`}>
                  {t('nav.login')}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-4 pb-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">

                    {/* Column 1 */}
                    <div className={`border rounded-2xl p-6 flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50/70 border-slate-100'}`}>
                      <h3 className={`text-[11px] font-bold tracking-widest uppercase mb-2 transition-colors duration-500 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{t('nav.manage')}</h3>
                      <div className="flex flex-col">
                        {navLinks.manage.map((link, idx) => renderLink(link, idx, navLinks.manage))}
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className={`border rounded-2xl p-6 flex flex-col justify-between transition-colors duration-500 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50/70 border-slate-100'}`}>
                      <div>
                        <h3 className={`text-[11px] font-bold tracking-widest uppercase mb-2 transition-colors duration-500 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{t('nav.grow')}</h3>
                        <div className="flex flex-col">
                          {navLinks.grow.map((link, idx) => renderLink(link, idx, navLinks.grow))}
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className={`flex items-center gap-4 mt-8 pl-1 pb-1 transition-colors duration-500 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Twitter className={`w-4 h-4 cursor-pointer transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`} />
                        <Instagram className={`w-4 h-4 cursor-pointer transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`} />
                        <Linkedin className={`w-4 h-4 cursor-pointer transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`} />
                        <Youtube className={`w-4 h-4 cursor-pointer transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`} />
                        <Zap className={`w-4 h-4 cursor-pointer transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`} fill="currentColor" />
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className={`border rounded-2xl p-6 flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50/70 border-slate-100'}`}>
                      <h3 className={`text-[11px] font-bold tracking-widest uppercase mb-2 transition-colors duration-500 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{t('nav.resources')}</h3>
                      <div className="flex flex-col">
                        {navLinks.resources.map((link, idx) => renderLink(link, idx, navLinks.resources))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
