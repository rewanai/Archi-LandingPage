import React from "react";
import ReactMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Marquee – thin wrapper around react-fast-marquee that exposes the
// kibo-ui–compatible <Marquee> / <MarqueeContent> / <MarqueeItem> / <MarqueeFade>
// surface used by the Hero206 block.
// ---------------------------------------------------------------------------

interface MarqueeProps {
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

const Marquee = ({ className, speed = 40, pauseOnHover = false, children }: MarqueeProps) => {
  return (
    <div className={cn("relative overflow-hidden flex items-center w-full", className)}>
      <ReactMarquee
        gradient={false}
        speed={speed}
        pauseOnHover={pauseOnHover}
        className="flex items-center"
      >
        {children}
      </ReactMarquee>
    </div>
  );
};

interface MarqueeContentProps {
  className?: string;
  children?: React.ReactNode;
}

const MarqueeContent = ({ className, children }: MarqueeContentProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      {children}
    </div>
  );
};

interface MarqueeItemProps {
  className?: string;
  children?: React.ReactNode;
}

const MarqueeItem = ({ className, children }: MarqueeItemProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      {children}
    </div>
  );
};

interface MarqueeFadeProps {
  side: "left" | "right";
  className?: string;
}

const MarqueeFade = ({ side, className }: MarqueeFadeProps) => {
  return (
    <div
      className={cn(
        "absolute top-0 bottom-0 z-10 w-16 pointer-events-none",
        side === "left"
          ? "left-0 bg-gradient-to-r from-background to-transparent"
          : "right-0 bg-gradient-to-l from-background to-transparent",
        className,
      )}
    />
  );
};

export { Marquee, MarqueeContent, MarqueeItem, MarqueeFade };
