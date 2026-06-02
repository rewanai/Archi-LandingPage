import React from "react";
import Marquee from "react-fast-marquee";
import { useLanguage } from "../i18n";
import logo2 from "../assets/images/i2.png";
import logo3 from "../assets/images/i3.png";
import logo4 from "../assets/images/i4.png";

// Repeat the logos 4 times to prevent empty space and ensure a seamless, continuous scroll loop
const baseLogos = [logo2, logo3, logo4];
const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

const LogoMarquee: React.FC = () => {
    const { isRTL } = useLanguage();

    return (
        <div
            dir="ltr"
            className="relative w-full py-4 bg-transparent overflow-hidden"
        >
            {/* Fade Effect - Left */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

            {/* Fade Effect - Right */}
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <Marquee
                gradient={false}
                speed={25}
                pauseOnHover={false}
                className="flex items-center"
                direction={isRTL ? "left" : "right"}
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-6 md:mx-8 flex items-center justify-center grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    >
                        <img
                            src={logo}
                            alt={`Client logo ${index + 1}`}
                            className="h-10 md:h-12 w-auto max-w-[140px] object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LogoMarquee;
