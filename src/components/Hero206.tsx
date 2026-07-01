"use client";

import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Plus,
  RotateCw,
  Share,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface HeroSaasProps {
  className?: string;
  heading: string;
  description: string;
  logos?: Logo[];
  images?: Image[];
  mockupUrl?: string;
}

import { useLanguage } from "../i18n";
import LogoMarquee from "./LogoMarquee";
import ArchiDevMockup from "./ArchiDevMockup";
import ArchiDevFeatures from "./ArchiDevFeatures";

interface Hero206Props extends HeroSaasProps { }
type Props = Partial<Hero206Props>;

const defaultProps: Hero206Props = {
  heading: "The AI-powered CRM solution.",
  description:
    "Let AI help you manage accounts, deals, and handoffs in one place. Experience the future of CRM with AI-powered insights and automation.",
  logos: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Company logo 1",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Company logo 2",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Company logo 3",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg",
      alt: "Company logo 4",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg",
      alt: "Company logo 5",
      className: "h-5 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg",
      alt: "Company logo 6",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg",
      alt: "Company logo 7",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg",
      alt: "Company logo 8",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg",
      alt: "Company logo 9",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-10.svg",
      alt: "Company logo 10",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-11.svg",
      alt: "Company logo 11",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-12.svg",
      alt: "Company logo 12",
      className: "h-7 w-auto",
    },
  ],
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9.png",
      alt: "Product interface preview",
    },
  ],
  mockupUrl: "https://shadcnblocks.com/block/hero206",
};

/** Logo row under the hero copy. */
const MAX_LOGOS = 5;

const Hero206 = (props: Props) => {
  const { heading, description, logos, images, mockupUrl, className } = {
    ...defaultProps,
    ...props,
  };

  const { isRTL } = useLanguage();
  const logoRow = (logos ?? []).slice(0, MAX_LOGOS);
  const mockImage = images?.[0];

  const renderFormattedText = (text: string) => {
    if (!text) return "";
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      const parts = line.split(/\{([^}]+)\}/g);
      const content = parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span key={index} className="inline-block px-1">
              <span className="text-[#38bdf8]">{"{"}</span>
              <span className="text-[#111111]">{part}</span>
              <span className="text-[#38bdf8]">{"}"}</span>
            </span>
          );
        }
        return part;
      });
      return (
        <span key={lineIdx} className="block">
          {content}
        </span>
      );
    });
  };

  return (
    <section
      className={cn("relative overflow-hidden bg-background", className)}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-50"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 16%, black 30%, black 68%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 16%, black 30%, black 68%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 md:h-56"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-background, #fff) 35%, transparent 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <header className="relative mx-auto max-w-4xl text-center">
          <h2
            className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5rem] font-[100] tracking-[-0.02em] text-[#111111] leading-[1.05]"
            style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
          >
            {renderFormattedText(heading ?? "")}
          </h2>
          <p
            className="mx-auto mt-6 max-w-3xl text-balance text-slate-500 lg:text-lg font-light leading-relaxed"
            style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "inherit" }}
          >
            {description}
          </p>
        </header>



        {/* Browser mockup with live Archi Dev IDE */}
        <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center">
          <BrowserMockup
            className="w-full shadow-[0_-20px_48px_-16px_rgba(0,0,0,0.1)]"
            url={mockupUrl ?? ""}
          >
            <ArchiDevMockup />
          </BrowserMockup>
          <div className="absolute bottom-0 h-[19%] w-full bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Archi Dev features list under the mockup */}
        <ArchiDevFeatures />
      </div>
    </section>
  );
};

export { Hero206 };

const BrowserMockup = ({
  className = "",
  url,
  children,
}: {
  className?: string;
  url: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "relative w-full overflow-hidden rounded-xl border border-gray-200 md:rounded-2xl lg:rounded-3xl",
      className,
    )}
  >
    {/* Browser chrome */}
    <div className="flex items-center justify-between gap-10 bg-gray-100 px-8 py-4 lg:gap-25">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
        <div className="ml-6 hidden items-center gap-2 opacity-40 lg:flex">
          <ChevronLeft className="size-5" />
          <ChevronRight className="size-5" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="relative hidden w-full rounded-full bg-white px-4 py-1 text-center text-sm tracking-tight md:block">
          {url}
          <RotateCw className="absolute top-2 right-3 size-3.5" />
        </p>
      </div>
      <div className="flex items-center gap-4 opacity-40">
        <Share className="size-4" />
        <Plus className="size-4" />
        <Copy className="size-4" />
      </div>
    </div>

    {/* Content slot – renders children (React component) or falls back to nothing */}
    <div className="relative w-full h-[580px] md:h-auto md:aspect-video overflow-hidden">
      {children}
    </div>
  </div>
);
