import React from "react";
import { motion } from "motion/react";

/**
 * NoiseBackground Component
 * Wraps content with an animated multicolored gradient and grainy SVG noise texture.
 */
export function NoiseBackground({
  children,
  className = "",
  containerClassName = "w-fit p-1.5 rounded-full",
  gradientColors = [
    "rgb(255, 100, 150)",
    "rgb(100, 150, 255)",
    "rgb(255, 200, 100)",
  ],
  noiseIntensity = 0.35,
  speed = 6,
  ...props
}) {
  const gradientString = `linear-gradient(135deg, ${gradientColors.join(", ")})`;

  return (
    <div
      className={`relative inline-flex items-center justify-center p-[2px] overflow-hidden group ${containerClassName}`}
      {...props}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-[-100%] z-0"
        style={{
          background: `conic-gradient(from 0deg, ${gradientColors.concat(gradientColors[0]).join(", ")})`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* SVG Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none rounded-[inherit] mix-blend-overlay"
        style={{
          opacity: noiseIntensity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Glow Blur Effect */}
      <div
        className="absolute inset-0 z-0 rounded-[inherit] blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"
        style={{
          background: gradientString,
        }}
      />

      {/* Children / Button Content */}
      <div className={`relative z-10 w-full h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function NoiseBackgroundDemo() {
  return (
    <div className="flex justify-center">
      <NoiseBackground
        containerClassName="w-fit p-2 rounded-full mx-auto"
        gradientColors={[
          "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",
        ]}>
        <button
          className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
          Start publishing &rarr;
        </button>
      </NoiseBackground>
    </div>
  );
}

export default NoiseBackground;
