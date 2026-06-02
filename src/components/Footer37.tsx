import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLanguage } from '../i18n';

interface Footer37Props {
  className?: string;
}

const Footer37 = ({
  className,
}: Footer37Props) => {
  const { t, isRTL } = useLanguage();

  const navigationLinks = [
    { text: t('footer.nav.products'), url: '#' },
    { text: t('footer.nav.solutions'), url: '#' },
    { text: t('footer.nav.resources'), url: '#' },
    { text: t('footer.nav.support'), url: '#' },
  ];

  const socialLinks = [
    { text: t('footer.social.twitter'), url: '#' },
    { text: t('footer.social.linkedin'), url: '#' },
    { text: t('footer.social.github'), url: '#' },
  ];

  const legalLinks = [
    { text: t('footer.privacy'), url: '#' },
    { text: t('footer.terms'), url: '#' },
  ];

  return (
    <section className={cn("pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 px-4 md:px-6 lg:px-8", className)}>
      <div className="rounded-2xl md:rounded-3xl bg-[#1d1b1a] text-primary-foreground min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-6rem)] flex flex-col justify-between overflow-hidden ">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20 flex-1 flex flex-col justify-between gap-12">
          {/* Top CTA Section */}
          <div className="flex flex-col items-start justify-between gap-8 pb-8 border-b border-border/20 lg:flex-row lg:items-center">
            <h2 className="max-w-md text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-snug">{t('footer.cta.heading')}</h2>
            <Button
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/95 transition-colors cursor-pointer shrink-0"
              size="lg"
            >
              {t('footer.cta.button')}
              <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 justify-between gap-8 py-8 lg:grid-cols-2 lg:gap-20">
            {/* Logo Column */}
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 w-fit">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] flex items-center justify-center overflow-hidden p-[2px]">
                  <div className="w-full h-full rounded-[50%_50%_10%_50%] bg-primary"></div>
                </div>
                <span className="font-semibold text-xl tracking-tight text-white">{t('footer.brand')}</span>
              </a>
              <p className="text-sm text-muted-foreground max-w-xs">
                {t('footer.tagline')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {/* Links Column */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{t('footer.links')}</h3>
                <ul className="space-y-2">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-sm text-muted-foreground hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials Column */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{t('footer.socials')}</h3>
                <ul className="space-y-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-sm text-muted-foreground hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Column */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{t('footer.newsletter.heading')}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t('footer.newsletter.desc')}
                </p>
                <div className="space-y-2 pt-1">
                  <Input
                    type="email"
                    placeholder={t('footer.newsletter.placeholder')}
                    className="rounded-full border-border/20 bg-black/20 focus:border-border text-xs h-9 px-4"
                  />
                  <Button className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/95 text-xs h-9 transition-colors cursor-pointer">
                    {t('footer.newsletter.subscribe')}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contact Section */}
          <div className="grid grid-cols-1 gap-8 border-t border-border/20 py-8 md:grid-cols-3">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-muted-foreground/10 p-3 shrink-0">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t('footer.phone.label')}</p>
                <p className="text-sm font-medium text-white" dir="ltr">{t('footer.phone')}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-muted-foreground/10 p-3 shrink-0">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t('footer.email.label')}</p>
                <p className="text-sm font-medium text-white" dir="ltr">{t('footer.email')}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-muted-foreground/10 p-3 shrink-0">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t('footer.location.label')}</p>
                <p className="text-sm font-medium text-white">{t('footer.location')}</p>
              </div>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col-reverse justify-between gap-4 border-t border-border/20 pt-8 md:flex-row text-xs">
            <div>
              <p className="text-muted-foreground">{t('footer.copyright')}</p>
            </div>

            <div className="flex gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer37 };
