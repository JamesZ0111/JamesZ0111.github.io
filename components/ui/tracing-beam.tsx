"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export const TracingBeam = ({ children, className }: TracingBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(600);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight + 120);
      }
    };

    updateHeight();

    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver(() => updateHeight());
    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setHasScrolled(value > 0.01);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [40, svgHeight - 180]), {
    stiffness: 400,
    damping: 80,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [120, svgHeight - 40]), {
    stiffness: 400,
    damping: 80,
  });

  return (
    <motion.div ref={ref} className={cn("relative mx-auto h-full w-full max-w-5xl", className)}>
      <div className="absolute top-2 -left-6 md:-left-16">
        <motion.div
          transition={{ duration: 0.3 }}
          animate={{
            boxShadow: hasScrolled ? "none" : "rgba(0,0,0,0.35) 0px 10px 30px",
          }}
          className="ml-[26px] flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur"
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={{
              backgroundColor: hasScrolled ? "#fafafa" : "#34d399",
              borderColor: hasScrolled ? "#fafafa" : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-white/40 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.35" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
