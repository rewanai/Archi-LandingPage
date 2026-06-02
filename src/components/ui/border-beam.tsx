import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className = "",
  size = 200,
  duration = 10,
  borderWidth = 1.5,
  colorFrom = "#0ea5e9", // light blue primary
  colorTo = "#38bdf8", 
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden ${className}`}>
      <style>
        {`
          @keyframes border-beam-spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>
      
      {/* We use a mask to only show the border area */}
      <div 
         className="absolute inset-0 rounded-[inherit]"
         style={{
            background: "transparent",
            maskImage: "linear-gradient(white, white), linear-gradient(white, white)",
            maskClip: "padding-box, border-box",
            maskComposite: "exclude",
            WebkitMaskImage: "linear-gradient(white, white), linear-gradient(white, white)",
            WebkitMaskClip: "padding-box, border-box",
            WebkitMaskComposite: "xor",
            border: `${borderWidth}px solid transparent`
         }}
      >
         <div 
           className="absolute top-1/2 left-1/2 w-[300%] aspect-square"
           style={{
             background: `conic-gradient(from 0deg, transparent 70%, ${colorFrom} 85%, ${colorTo} 100%)`,
             animation: `border-beam-spin ${duration}s linear infinite`,
             animationDelay: `-${delay}s`
           }}
         />
      </div>
    </div>
  );
};
