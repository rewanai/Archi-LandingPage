import { Mail, MapPin, Phone, Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import { useLanguage } from '../i18n';
import { ArchiLogo } from './ui/ArchiLogo';
import { AsciiWave } from './ui/AsciiWave';

interface Footer37Props {
  className?: string;
}

const Footer37 = ({
  className,
}: Footer37Props) => {
  const { t, isRTL } = useLanguage();

  const renderSloganText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/({[^}]+})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        const word = part.slice(1, -1);
        return (
          <span key={index} className="text-[#0ea5e9] font-normal inline-block">
            {"{"}{word}{"}"}
          </span>
        );
      }
      return part;
    });
  };

  const navigationLinks = [
    { text: t('footer.nav.products'), url: '#' },
    { text: t('footer.nav.solutions'), url: '#' },
    { text: t('footer.nav.resources'), url: '#' },
    { text: t('footer.nav.support'), url: '#' },
  ];

  const socialLinks = [
    { 
      text: t('footer.social.instagram'), 
      url: 'https://www.instagram.com/rewan_ai/',
      icon: (
        <svg className="h-3.5 w-3.5 text-[#38bdf8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      text: t('footer.social.twitter'), 
      url: 'https://x.com/Rewan_Ai',
      icon: (
        <svg className="h-3.5 w-3.5 text-[#38bdf8] fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      text: t('footer.social.linkedin'), 
      url: 'https://www.linkedin.com/company/rewanai/',
      icon: (
        <svg className="h-3.5 w-3.5 text-[#38bdf8] fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      )
    },
    { 
      text: t('footer.social.whatsapp'), 
      url: 'https://api.whatsapp.com/send/?phone=96876626636',
      icon: (
        <svg className="h-3.5 w-3.5 text-[#38bdf8] fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.002-3.973-.505-5.724-1.46L0 24zm6.59-4.846c1.6.95 3.497 1.45 5.416 1.451 5.378 0 9.754-4.373 9.757-9.755.002-2.607-1.01-5.059-2.85-6.902C17.078 2.095 14.634 1.08 12.03 1.08c-5.382 0-9.76 4.374-9.764 9.757-.002 1.957.51 3.867 1.485 5.568L2.73 21.09l4.917-1.29zM17.47 14.86c-.296-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      )
    },
  ];

  const legalLinks = [
    { text: t('footer.privacy'), url: '#' },
    { text: t('footer.terms'), url: '#' },
  ];

  return (
    <section className={cn("w-full bg-white text-slate-900 py-16 md:py-24 min-h-[420px] flex flex-col justify-between relative overflow-hidden px-6 md:px-12 lg:px-16", className)}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-between flex-1 gap-8 md:gap-12 relative z-10">
        
        {/* Footer Top Slogan */}
        <div className="flex flex-col gap-4 items-center text-center max-w-4xl mx-auto w-full">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0ea5e9]">
            {isRTL ? "منصة أركي" : "ARCHI PLATFORM"}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-slate-900 leading-tight tracking-tight">
            {renderSloganText(t('footer.slogan'))}
          </h2>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start text-start">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 w-fit">
              <ArchiLogo className="w-8 h-8" isDark={false} />
              <span className="font-semibold text-xl tracking-tight text-slate-900">{t('footer.brand')}</span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800">{t('footer.links')}</h4>
            <ul className="space-y-3 font-light">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800">{t('footer.socials')}</h4>
            <ul className="space-y-3 font-light">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3.5 group cursor-pointer"
                  >
                    <div className="flex items-center justify-center rounded-full bg-slate-50 p-2 shrink-0 transition-colors group-hover:bg-[#38bdf8]/10">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800 transition-colors group-hover:text-[#38bdf8]">{link.text}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
              {isRTL ? "معلومات التواصل" : "Contact Details"}
            </h4>
            <div className="flex flex-col gap-5">
              {/* Phone */}
              <a href="https://api.whatsapp.com/send/?phone=96876626636" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group cursor-pointer">
                <div className="flex items-center justify-center rounded-full bg-slate-50 p-2 shrink-0 transition-colors group-hover:bg-[#38bdf8]/10">
                  <Phone className="h-3.5 w-3.5 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold">{t('footer.phone.label')}</p>
                  <p className="text-sm font-medium text-slate-800 transition-colors group-hover:text-[#38bdf8]" dir="ltr">{t('footer.phone')}</p>
                </div>
              </a>
              {/* Email */}
              <a href="mailto:info@rewan.com" className="flex items-center gap-3.5 group cursor-pointer">
                <div className="flex items-center justify-center rounded-full bg-slate-50 p-2 shrink-0 transition-colors group-hover:bg-[#38bdf8]/10">
                  <Mail className="h-3.5 w-3.5 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold">{t('footer.email.label')}</p>
                  <p className="text-sm font-medium text-slate-800 transition-colors group-hover:text-[#38bdf8]" dir="ltr">{t('footer.email')}</p>
                </div>
              </a>
              {/* Location */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex items-center justify-center rounded-full bg-slate-50 p-2 shrink-0 transition-colors group-hover:bg-[#38bdf8]/10">
                  <MapPin className="h-3.5 w-3.5 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold">{t('footer.location.label')}</p>
                  <p className="text-sm font-medium text-slate-800 transition-colors group-hover:text-[#38bdf8]">{t('footer.location')}</p>
                </div>
              </div>
              {/* Website */}
              <a href="https://rewan.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group cursor-pointer">
                <div className="flex items-center justify-center rounded-full bg-slate-50 p-2 shrink-0 transition-colors group-hover:bg-[#38bdf8]/10">
                  <Globe className="h-3.5 w-3.5 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold">{t('footer.website.label')}</p>
                  <p className="text-sm font-medium text-slate-800 transition-colors group-hover:text-[#38bdf8]">{t('footer.website')}</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col-reverse justify-between gap-4 pt-12 md:flex-row text-xs">
          <div>
            <p className="text-slate-400 font-light">{t('footer.copyright')}</p>
          </div>

          <div className="flex gap-4 font-light">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-slate-400 hover:text-slate-800 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* AsciiWave Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] pointer-events-none select-none z-0">
        <AsciiWave className="opacity-15" color="#0ea5e9" speed={0.4} />
      </div>
    </section>
  );
};

export { Footer37 };
