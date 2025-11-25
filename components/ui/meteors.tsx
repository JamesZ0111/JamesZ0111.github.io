"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className }) => {
  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-hidden
      className="pointer-events-none"
    >
      {meteors.map((_, idx) => {
        const position = idx * (800 / number) - 400;

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-200/80 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/80 before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px",
              left: `${position}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * (10 - 5) + 5}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
