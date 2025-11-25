"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const meteorConfig = useMemo(() => {
    if (!mounted) return [];
    return new Array(number).fill(true).map((_, idx) => {
      const position = idx * (800 / number) - 400;
      return {
        left: position,
        delay: Math.random() * 5,
        duration: Math.random() * (10 - 5) + 5,
      };
    });
  }, [mounted, number]);

  if (!mounted || meteorConfig.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-hidden
      className="pointer-events-none"
    >
      {meteorConfig.map(({ left, delay, duration }, idx) => (
        <span
          key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-200/80 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/80 before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px",
              left: `${left}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
        />
      ))}
    </motion.div>
  );
};
