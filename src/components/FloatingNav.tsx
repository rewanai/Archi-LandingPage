import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';
import { BorderBeam } from './ui/border-beam';
import { useLanguage } from '../i18n';
import { ArchiLogo } from './ui/ArchiLogo';

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
      { label: t('nav.overview'), path: '#tech-stack' },
      { label: t('nav.analytics'), path: '#services-accordion' },
      { label: t('nav.users'), badge: '316', path: '#services-accordion' },
      { label: t('nav.settings'), path: '#services-accordion' },
    ],
    grow: [
      { label: t('nav.pricing'), badge: 'Updated', isPill: true, path: '#how-it-works' },
      { label: t('nav.subscriptions'), path: '#archi-business' },
      { label: t('nav.billing'), path: '#archi-dev' },
    ],
    resources: [
      { label: t('nav.integrations'), badge: '28', path: '#footer' },
      { label: t('nav.documentation'), path: '#footer' },
      { label: t('nav.api'), path: '#footer' },
      { label: t('nav.changelog'), badge: 'New', isPill: true, path: '#services-accordion' },
    ]
  };

  const renderLink = (link: any, idx: number, arr: any[]) => (
    <a
      href={link.path}
      key={idx}
      onClick={(e) => {
        if (link.path.startsWith('#')) {
          e.preventDefault();
          setIsHovered(false);
          const targetId = link.path;
          const target = document.querySelector(targetId);
          if (target) {
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + scrollTop - 100;
            if ((window as any).lenis) {
              (window as any).lenis.scrollTo(top, {
                duration: 1.5,
              });
            } else {
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }
        }
      }}
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
                <ArchiLogo className="w-5.5 h-5.5 sm:w-7 sm:h-7" isDark={isDarkMode} />
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

                <button 
                  onClick={() => {
                    const target = document.querySelector('#footer');
                    if (target) {
                      const rect = target.getBoundingClientRect();
                      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                      const top = rect.top + scrollTop - 100;
                      if ((window as any).lenis) {
                        (window as any).lenis.scrollTo(top, {
                          duration: 1.5,
                        });
                      } else {
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-[12px] sm:text-[15px] font-medium shadow-sm transition-all duration-500 ${isDarkMode ? 'bg-white hover:bg-slate-200 text-black' : 'bg-[#111] hover:bg-black text-white'}`}
                >
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
                        {/* Instagram */}
                        <a 
                          href="https://www.instagram.com/rewan_ai/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
                        {/* Twitter/X */}
                        <a 
                          href="https://x.com/Rewan_Ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        {/* LinkedIn */}
                        <a 
                          href="https://www.linkedin.com/company/rewanai/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                          </svg>
                        </a>
                        {/* WhatsApp */}
                        <a 
                          href="https://api.whatsapp.com/send/?phone=96876626636" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`transition-colors duration-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.002-3.973-.505-5.724-1.46L0 24zm6.59-4.846c1.6.95 3.497 1.45 5.416 1.451 5.378 0 9.754-4.373 9.757-9.755.002-2.607-1.01-5.059-2.85-6.902C17.078 2.095 14.634 1.08 12.03 1.08c-5.382 0-9.76 4.374-9.764 9.757-.002 1.957.51 3.867 1.485 5.568L2.73 21.09l4.917-1.29zM17.47 14.86c-.296-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.347.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          </svg>
                        </a>
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
