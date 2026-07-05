import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronLeft, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import heroImage from './assets/images/hero.webp';
import aiHeroImage from './assets/images/Aihero.png';
import dofarImage from './assets/images/dofarh.webp';

import { LanguageProvider, useLanguage } from './i18n';
import { FloatingNav } from './components/FloatingNav';
import { TechFrame } from './components/TechFrame';
import { Features } from './components/Features';
import { ProcessSection } from './components/ProcessSection';
import { HowItWorks } from './components/HowItWorks';
import { IdeaToProduction } from './components/IdeaToProduction';
import { CoreFeatures } from './components/CoreFeatures';
import { Footer37 } from './components/Footer37';
import { ContactSection } from './components/ContactSection';
import { WhoIsArchiFor } from './components/WhoIsArchiFor';
import { WhatIsArchi } from './components/WhatIsArchi';
import { AppleLoader } from './components/AppleLoader';
import LogoMarquee from './components/LogoMarquee';
import { ServicesAccordion } from './components/ServicesAccordion';
import { WindingProgressSection } from './components/WindingProgressSection';
import { TechStackSection } from './components/TechStackSection';
import { Hero206 } from './components/Hero206';
import { SmoothCursor } from './components/ui/smooth-cursor';
import MagicRings from './components/MagicRings';

const BlurredWord = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, filter: 'blur(12px)', y: 15 }}
    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

const renderHeroText = (text: string) => {
  if (!text) return null;
  const words = text.split(/(\s+)/);
  return words.map((word, index) => {
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?؟]/g, "").trim();
    const lowerWord = cleanWord.toLowerCase();
    if (
      lowerWord === "تطبيقك" ||
      lowerWord === "فكرتك"
    ) {
      return (
        <span key={index} className="text-[#38bdf8] text-[0.88em]">
          {"{"}{word}{"}"}
        </span>
      );
    }
    if (
      lowerWord === "idea" ||
      lowerWord === "app"
    ) {
      return (
        <span key={index} className="text-[#38bdf8] text-[0.88em]">
          {word}
        </span>
      );
    }
    return word;
  });
};

function AppContent() {
  const [animationKey, setAnimationKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isCoreFeaturesActive, setIsCoreFeaturesActive] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);
  const darkSectionRef = useRef<HTMLDivElement>(null);
  const coreFeaturesRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgRect, setImgRect] = useState({ width: 0, height: 0, offsetX: 0, offsetY: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const img = imgRef.current;
    if (!hero || !img) return;

    const onMove = (e: MouseEvent) => {
      const heroRect = hero.getBoundingClientRect();
      const imageRect = img.getBoundingClientRect();

      // Only reveal portal when cursor is actually over the hero image
      const overImage =
        e.clientX >= imageRect.left &&
        e.clientX <= imageRect.right &&
        e.clientY >= imageRect.top &&
        e.clientY <= imageRect.bottom;

      setIsHovered(overImage);

      setMousePos({
        x: e.clientX - heroRect.left,
        y: e.clientY - heroRect.top
      });
      setImgRect({
        width: imageRect.width,
        height: imageRect.height,
        offsetX: imageRect.left - heroRect.left,
        offsetY: imageRect.top - heroRect.top
      });
    };

    const onLeave = () => setIsHovered(false);

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Heavy momentum feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (darkSectionRef.current) {
        const rect = darkSectionRef.current.getBoundingClientRect();
        // Since ProcessSection is 500vh, we track when its top is near top of screen
        // and its bottom is still visible.
        if (rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5) {
          setIsDarkSection(true);
        } else {
          setIsDarkSection(false);
        }
      }

      if (coreFeaturesRef.current) {
        const rect = coreFeaturesRef.current.getBoundingClientRect();
        // Enter when the top of CoreFeatures is at 40% of viewport height or higher, and the bottom is still in view
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 40) {
          setIsCoreFeaturesActive(true);
        } else {
          setIsCoreFeaturesActive(false);
        }
      }

      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        // Enter when the top of Footer is within the viewport height
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsFooterActive(true);
        } else {
          setIsFooterActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
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
  };

  return (
    <>
      <SmoothCursor
        cursor={
          <div className="relative flex items-center justify-center w-8 h-8">
            {/* Outer ring */}
            <div className={`absolute inset-0 rounded-full border border-[#38bdf8] transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
            {/* Inner solid dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]" />
          </div>
        }
        springConfig={{ damping: 40, stiffness: 350, mass: 0.8, restDelta: 0.001 }}
      />
      <AnimatePresence>
        {isLoading && <AppleLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <motion.div
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={{
          hidden: { opacity: 0, scale: 0.98 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo
              staggerChildren: 0.1
            }
          }
        }}
        className="relative font-sans text-slate-900 selection:bg-black selection:text-white bg-[#ffffff]"
      >
        <FloatingNav isDarkMode={isCoreFeaturesActive} isVisible={!isDarkSection} />
        <TechFrame key={`frame-${animationKey}`} isVisible={!isDarkSection} isDark={isCoreFeaturesActive} />

        {/* Hero Wrapper (Regular scroll) */}
        <div ref={heroRef} className="relative min-h-[100dvh] md:h-[100dvh] w-full overflow-hidden md:overflow-visible flex flex-col justify-center py-12 md:py-0">

          {/* Central Model Image */}
          <div className="hidden md:flex absolute inset-x-0 bottom-12 top-[5%] z-0 justify-center pointer-events-none overflow-hidden mix-blend-multiply">
            <img
              src={heroImage}
              ref={imgRef}
              alt="AI Agent Portrait"
              referrerPolicy="no-referrer"
              className="h-[100%] max-h-[95vh] w-auto object-contain object-bottom select-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </div>

          {/* Portal circle: lives at z-20 pointer-events-none so it floats above content without blocking clicks */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: mousePos.x - 120,
              top: mousePos.y - 120,
              width: 140,
              height: 140,
              borderRadius: '50%',
              overflow: 'hidden',
              pointerEvents: 'none',
              transform: `scale(${isHovered ? 1 : 0})`,
              transformOrigin: 'center center',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 10,
            }}
          >
            <img
              src={aiHeroImage}
              alt="AI Robot Portrait"
              style={{
                position: 'absolute',
                // Center AI image on hero image center, bottom-aligned
                left: (imgRect.offsetX + imgRect.width / 2) - (mousePos.x - 120),
                top: (imgRect.offsetY + imgRect.height) - (mousePos.y - 120),
                transform: 'translateX(-50%) translateY(-100%)',
                // Match hero image height, let width adjust naturally
                height: imgRect.height ? imgRect.height * 1.05 : '110vh',
                width: 'auto',
                maxWidth: 'none',
                maxHeight: 'none',
              }}
            />
          </div>

          {/* Mobile-only MagicRings Background */}
          <div className="md:hidden absolute inset-0 pb-28 z-0 pointer-events-none opacity-40 bg-white">
            <MagicRings
              color="#38bdf8"
              colorTwo="#0ea5e9"
              ringCount={6}
              speed={0.8}
              attenuation={8}
              lineThickness={1.5}
              baseRadius={0.25}
              radiusStep={0.08}
              scaleRate={0.12}
              opacity={0.8}
              noiseAmount={0.05}
              followMouse={false}
            />
          </div>



          {/* Content Overlay */}
          <main key={animationKey} className="relative z-10 w-full max-w-[1400px] 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center lg:justify-between gap-5 lg:gap-0 pt-24 pb-20 md:py-16 overflow-visible">

            {/* Top Section */}
            <div className={`flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-start w-full mt-16 md:mt-16 lg:mt-8 mix-blend-multiply relative z-10 gap-8`}>
              <div className="flex flex-col items-center lg:items-start w-full lg:max-w-[70%]">
                {/* Top border pill */}
                {/* Top border pill link */}
                <motion.a
                  href="https://rewan.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03 }}
                  className="group inline-flex items-center gap-2.5 bg-[#ffffff]/95 hover:bg-[#ffffff] border border-[#bae6fd] hover:border-[#38bdf8] rounded-full py-1.5 px-3.5 mb-8 w-fit shadow-sm cursor-pointer transition-all duration-300 relative overflow-hidden select-none"
                >
                  <motion.div layout className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />

                  <span className="relative flex items-center overflow-hidden h-[18px]">
                    {/* Default badge text */}
                    <span className="text-[13px] font-medium text-[#38bdf8] tracking-wide transition-all duration-300 transform group-hover:-translate-y-6 group-hover:opacity-0 block">
                      {t('hero.badge')}
                    </span>

                    {/* Hover CTA text */}
                    <span className="absolute inset-0 text-[13px] font-semibold text-[#0ea5e9] tracking-wide transition-all duration-300 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center whitespace-nowrap">
                      {isRTL ? 'زيارة ريوان' : 'Visit Rewan'}
                    </span>
                  </span>

                  <ChevronLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#38bdf8] stroke-2 transition-transform duration-300 group-hover:-translate-x-1.5" />
                </motion.a>

                <h1 className={`${isRTL ? 'text-[2.5rem] sm:text-[3.7rem] md:text-[4.2rem] lg:text-[5.9rem] xl:text-[5.9rem]' : 'text-[2.7rem] sm:text-[4.0rem] md:text-[4.5rem] lg:text-[5.7rem] xl:text-[5.7rem]'} font-[100] text-[#111111] leading-[1.03] tracking-[-0.02em]`}>
                  <BlurredWord delay={0}>{renderHeroText(t('hero.h1.line1'))}</BlurredWord>{' '}
                  <BlurredWord delay={0.15}>{renderHeroText(t('hero.h1.line2'))}</BlurredWord>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden">  </span>
                  <BlurredWord delay={0.30}>{renderHeroText(t('hero.h1.line3'))}</BlurredWord>
                  {t('hero.h1.line4') && (
                    <>
                      <br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>
                      <BlurredWord delay={0.40}>{renderHeroText(t('hero.h1.line4'))}</BlurredWord>
                    </>
                  )}
                </h1>

                {/* Mobile-only H2 to keep value proposition unified */}
                <h2 className="block lg:hidden text-[2.7rem] sm:text-[4.0rem] font-[100] text-[#111111] leading-[1.03] tracking-[-0.02em] mt-2">
                  <BlurredWord delay={0.45}>{renderHeroText(t('hero.h2.line1'))}</BlurredWord>{' '}
                  <BlurredWord delay={0.60}>{renderHeroText(t('hero.h2.line2'))}</BlurredWord>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  <BlurredWord delay={0.75}>{renderHeroText(t('hero.h2.line3'))}</BlurredWord>
                </h2>
              </div>

              {/* User Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="hidden lg:flex shrink-0 w-56 h-56 xl:w-102 xl:h-60  relative overflow-hidden items-center justify-center group hover:bg-slate-100 hover:border-slate-400 transition-colors cursor-pointer"
              >
                <img src={dofarImage} alt="Feature" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Bottom Section */}
            <div className={`flex flex-col lg:flex-row items-center lg:items-end justify-between w-full mt-0 lg:mt-auto mb-4 gap-6 lg:gap-8 mix-blend-multiply pb-12 lg:pb-0 z-10`}>
              {/* Bottom Left: Paragraph + Marquee + Buttons */}
              <div className="w-full lg:max-w-[360px] pb-2 relative flex flex-col items-center lg:items-start text-center lg:text-start">

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.05, ease: 'easeOut' }}
                  className="text-slate-600 text-[13px] md:text-[16px] leading-[1.7] font-light"
                >
                  {t('hero.paragraph')}
                </motion.p>

                {/* CTA Buttons — below marquee */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
                  <motion.button
                    onClick={() => scrollToSection('contact-section')}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.25, ease: 'backOut' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none"
                  >
                    {/* Static border background */}
                    <span className="absolute inset-0 bg-[#333]" />

                    {/* Spinning border beam */}
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#38bdf8_100%)]" />

                    {/* Inner button surface and content */}
                    <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a] px-6 sm:px-7 py-3 text-[10px] sm:text-[11px] tracking-widest font-bold uppercase text-white transition-all duration-300">
                      {/* Inside glow on hover */}
                      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        {t('hero.cta.demo')}
                      </span>
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection('how-it-works')}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.35, ease: 'backOut' }}
                    whileHover={{ y: -2, scale: 1.02, backgroundColor: '#f8fafc' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#0f0f0f] border border-[#e5e7eb] px-6 sm:px-7 py-3 rounded-full text-[10px] sm:text-[11px] tracking-widest font-bold transition-all shadow-sm hover:shadow-md uppercase"
                  >
                    {t('hero.cta.how')}
                  </motion.button>
                </div>

              </div>

              {/* Bottom Right Heading + Marquee */}
              <div className={`flex flex-col items-center lg:items-end justify-end w-full lg:max-w-[50%] ${isRTL ? 'lg:items-end lg:max-w-[1%] lg:ms-auto lg:me-0.1' : ''}`}>
                <h2 className={`hidden lg:block text-[2.2rem] sm:text-[4.0rem] md:text-[4.5rem] ${isRTL ? 'lg:text-[6.4rem] xl:text-[6.4rem]' : 'lg:text-[5.7rem] xl:text-[5.7rem]'} font-[100] text-[#111111] leading-[1.03] tracking-[-0.02em] mb-6 md:mb-10`}>
                  <BlurredWord delay={0.45}>{renderHeroText(t('hero.h2.line1'))}</BlurredWord>{' '}
                  <BlurredWord delay={0.60}>{renderHeroText(t('hero.h2.line2'))}</BlurredWord>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  <BlurredWord delay={0.75}>{renderHeroText(t('hero.h2.line3'))}</BlurredWord>
                </h2>

                {/* Certified label + Marquee — constrained width */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoading ? 'hidden' : 'visible'}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.1, ease: 'easeOut' } }
                  }}
                  className="w-full max-w-[400px] mx-auto lg:ms-auto lg:me-0"
                >
                  <p className="text-[11px] font-light text-slate-400 tracking-wide mb-1 text-center lg:text-right">
                    {isRTL ? 'منصة معتمدة من قِبَل' : 'Certified platform by'}
                  </p>
                  <LogoMarquee />
                </motion.div>
              </div>
            </div>
          </main>
        </div>
        {/* Sticky Tech Stack + Stats Wrapper (Slide over effect) */}
        <div id="tech-stack" className="relative md:sticky md:top-0 md:min-h-screen w-full md:z-10 bg-[#f5f4f2] z-20">
          <TechStackSection />
        </div>



        <div id="process" ref={darkSectionRef} className="w-full relative z-20">
          <ProcessSection />
        </div>

        <div id="winding-progress" className="w-full relative z-20">
          <WindingProgressSection />
        </div>

        <div id="idea-to-production" className="w-full relative z-20 bg-white">
          <IdeaToProduction />
        </div>

        <div id="what-is-archi" className="w-full relative z-20 bg-[#f5f4f2]">
          <WhatIsArchi />
        </div>


        <div id="hero206" className="w-full relative z-20 bg-white">
          <Hero206
            heading={t('archi.dev.hero.heading')}
            description={t('archi.dev.hero.desc')}
            mockupUrl="Archi-dev"
          />
        </div>



        <div id="how-it-works" className="w-full relative z-20 bg-white">
          <HowItWorks />
        </div>

        <div id="core-features" ref={coreFeaturesRef} className="w-full relative z-20">
          <CoreFeatures />
        </div>




        <div id="services-accordion" className="w-full relative z-20 bg-[#f5f4f2]">
          <ServicesAccordion />
        </div>

        <div id="who-is-archi-for" className="w-full relative z-20">
          <WhoIsArchiFor />
        </div>

        <div id="contact-section" className="w-full relative z-20">
          <ContactSection />
        </div>

        <div id="footer" ref={footerRef} className="w-full relative z-20">
          <Footer37
            className="relative z-20 bg-white"
          />
        </div>

      </motion.div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
