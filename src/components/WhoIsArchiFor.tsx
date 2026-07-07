import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import Grainient from './Grainient';
import dhofarMist from '../assets/images/dhofar_mist.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import iconnobg from '../assets/images/iconnobg.png';
import dhofarMistAlt from '../assets/images/dhofar_mist_alt.png';

interface CardData {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  bullets: string[];
  cta: string;
  theme: string;
  pill?: string;
  bgImage?: string;
  bgClass?: string;
}

interface TargetCardProps {
  key?: React.Key;
  card: CardData;
  index: number;
  isRTL: boolean;
  handleScrollToContact: () => void;
}

function TargetCard({ card, index, isRTL, handleScrollToContact }: TargetCardProps) {
  const isFeatured = card.theme === 'featured';

  // Mouse coordinate tracking for cursor spotlight glow effect
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-between rounded-3xl p-8 md:p-9 transition-all duration-300 border overflow-hidden ${
        isFeatured 
          ? 'text-white border-slate-800/80 shadow-2xl shadow-cyan-950/30 overflow-hidden md:scale-[1.05] md:-translate-y-2 z-10 hover:md:scale-[1.07]' 
          : 'bg-white border-slate-200/80 text-slate-800 shadow-lg shadow-slate-100/40 hover:bg-[#fbfcfd] hover:border-[#38bdf8]/40 hover:shadow-xl hover:shadow-[#38bdf8]/5'
      }`}
    >
      {/* Background image for side cards */}
      {!isFeatured && card.bgImage && (
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden pointer-events-none opacity-[0.75]">
          <img 
            src={card.bgImage} 
            alt="" 
            className={`w-full h-full object-cover transition-transform duration-700 ease-out grayscale saturate-25 contrast-125 brightness-115 ${
              card.bgClass || 'object-right-bottom scale-110 group-hover:scale-115'
            }`}
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/60" />
        </div>
      )}

      {/* Interactive cursor spotlight glow overlay (for side glass cards) */}
      {!isFeatured && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-0 rounded-3xl"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.08), transparent 80%)`
          }}
        />
      )}

      {/* Animated gradient background (for center featured card) */}
      {isFeatured && (
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden pointer-events-none">
          <Grainient
            color1="#111827"
            color2="#0e7490"
            color3="#030712"
            timeSpeed={2.0}
            colorBalance={-0.15}
            warpStrength={0.7}
            warpFrequency={4.0}
            warpSpeed={1.2}
            warpAmplitude={35.0}
            blendAngle={45.0}
            blendSoftness={0.06}
            rotationAmount={180.0}
            noiseScale={1.5}
            grainAmount={0.06}
            grainScale={1.5}
            grainAnimated={true}
            contrast={1.3}
            gamma={0.95}
            saturation={1.1}
            zoom={0.8}
          />
          {/* Base darkening overlay */}
          <div className="absolute inset-0 bg-slate-950/25" />
          
          {/* Subtle cursor spotlight glow overlay inside the featured card */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
            style={{
              background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.15), transparent 80%)`
            }}
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Top Row: Icon container + Status Pill */}
          <div className="flex items-center justify-between mb-8">
            {/* Card Icon Header (Premium Double-Ring Glassmorphic) */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Outer ring */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                isFeatured 
                  ? 'bg-sky-500/5' 
                  : 'bg-slate-50/50 group-hover:bg-[#38bdf8]/5'
              }`} />
              {/* Inner icon container */}
              <div className="relative w-10 h-10 rounded-[14px] flex items-center justify-center transition-all duration-300">
                <img 
                  src={card.icon} 
                  alt="" 
                  className={`w-8 h-8 object-contain transition-all duration-300 ${
                    isFeatured 
                      ? (card.id === 'enterprises' ? '' : 'invert brightness-[3] mix-blend-screen') 
                      : 'mix-blend-multiply'
                  }`}
                />
              </div>
            </div>

            {/* Premium status tag pill */}
            {card.pill && (
              <span className={`text-[9px] font-bold tracking-wider px-3 py-1 rounded-full uppercase border ${
                isFeatured 
                  ? 'bg-[#38bdf8]/10 border-[#38bdf8]/20 text-[#38bdf8] shadow-sm'
                  : 'bg-slate-50/60 border-slate-200/80 text-slate-500 shadow-sm group-hover:border-[#38bdf8]/20 group-hover:text-[#38bdf8] group-hover:bg-sky-50/20 transition-all duration-350'
              }`}>
                {card.pill}
              </span>
            )}
          </div>

          {/* Card Title & Description */}
          <h3 className={`text-xl font-semibold mb-2 tracking-tight ${
            isFeatured ? 'text-white' : 'text-slate-900'
          }`}>
            {card.title}
          </h3>
          
          <p className={`text-[13px] font-light leading-relaxed mb-6 ${
            isFeatured ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {card.tagline}
          </p>

          <div className={`w-full h-[1px] my-6 ${
            isFeatured ? 'bg-slate-800' : 'bg-slate-100'
          }`} />

          {/* Bullet points list (parsing pipe symbol | for bold emphasis) */}
          <ul className="space-y-4">
            {card.bullets.map((bullet, bIdx) => {
              const parts = bullet.split(' | ');
              const hasBold = parts.length > 1;
              return (
                <li key={bIdx} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                    isFeatured ? 'bg-sky-500/10 text-[#38bdf8]' : 'bg-sky-50 text-[#38bdf8]'
                  }`}>
                    <Check className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span className={`text-[13px] font-light leading-relaxed ${
                    isFeatured ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {hasBold ? (
                      <>
                        <strong className={isFeatured ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>
                          {parts[0]}
                        </strong>
                        {' '}{parts[1]}
                      </>
                    ) : (
                      bullet
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Card CTA Button */}
        <button
          onClick={handleScrollToContact}
          className={`group relative z-10 w-full mt-10 py-3.5 rounded-full text-[10px] tracking-widest font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            isFeatured
              ? 'bg-white text-slate-900 hover:bg-sky-50 hover:shadow-lg'
              : 'bg-[#0a0a0a] text-white hover:bg-slate-900 shadow-sm hover:shadow-md'
          }`}
        >
          <span>{card.cta}</span>
          <ArrowRight className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-350 ${
            isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
          }`} />
        </button>
      </div>
    </motion.div>
  );
}

export function WhoIsArchiFor() {
  const { t, isRTL } = useLanguage();

  const cards: CardData[] = [
    {
      id: 'creators',
      icon: icon2,
      title: t('target.card1.title'),
      tagline: t('target.card1.tagline'),
      bullets: [
        t('target.card1.bullet1'),
        t('target.card1.bullet2'),
        t('target.card1.bullet3'),
      ],
      cta: t('target.card1.cta'),
      theme: 'normal',
      pill: t('target.card1.pill'),
      bgImage: dhofarMistAlt,
      bgClass: 'object-right-bottom scale-x-[-1.1] scale-y-[1.1] group-hover:scale-x-[-1.15] group-hover:scale-y-[1.15]',
    },
    {
      id: 'enterprises',
      icon: iconnobg,
      title: t('target.card2.title'),
      tagline: t('target.card2.tagline'),
      bullets: [
        t('target.card2.bullet1'),
        t('target.card2.bullet2'),
        t('target.card2.bullet3'),
      ],
      cta: t('target.card2.cta'),
      theme: 'featured',
      pill: t('target.card2.pill'),
    },
    {
      id: 'custom',
      icon: icon3,
      title: t('target.card3.title'),
      tagline: t('target.card3.tagline'),
      bullets: [
        t('target.card3.bullet1'),
        t('target.card3.bullet2'),
        t('target.card3.bullet3'),
      ],
      cta: t('target.card3.cta'),
      theme: 'normal',
      pill: t('target.card3.pill'),
      bgImage: dhofarMist,
    },
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
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
    <section 
      dir={isRTL ? 'rtl' : 'ltr'} 
      className="w-full bg-white py-24 md:py-32 relative overflow-hidden border-t border-slate-100"
    >
      {/* Tech Grid Background with Radial Mask */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
        }}
      />
      
      {/* Soft color glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#38bdf8] bg-sky-50 px-3 py-1 rounded-full border border-sky-100/55 inline-block"
          >
            {t('target.badge')}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] font-[300] text-slate-900 leading-[1.1] tracking-[-0.025em]"
          >
            {t('target.heading')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-500 text-[14px] md:text-[16px] leading-[1.7] font-light max-w-2xl mx-auto"
          >
            {t('target.description')}
          </motion.p>
        </div>

        {/* Target Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12 md:mt-16">
          {cards.map((card, index) => (
            <TargetCard 
              key={card.id}
              card={card}
              index={index}
              isRTL={isRTL}
              handleScrollToContact={handleScrollToContact}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
