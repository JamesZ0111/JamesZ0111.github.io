"use client";

import React from "react";
import { useScroll, useTransform } from "motion/react";

import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

const GeminiTransition = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const easedProgress = useTransform(scrollYProgress, [0.2, 0.9], [0, 1], {
    clamp: true,
  });

  const pathLengthFirst = useTransform(easedProgress, [0, 1], [0.2, 1.1]);
  const pathLengthSecond = useTransform(easedProgress, [0, 1], [0.15, 1.1]);
  const pathLengthThird = useTransform(easedProgress, [0, 1], [0.1, 1.1]);
  const pathLengthFourth = useTransform(easedProgress, [0, 1], [0.05, 1.1]);
  const pathLengthFifth = useTransform(easedProgress, [0, 1], [0, 1.1]);

  return (
    <section aria-label="Transition to project showcase" className="w-full py-12 md:py-16">
      <div
        ref={ref}
        className="relative min-h-[85vh] md:min-h-[100vh] rounded-[48px] overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[-15%] bg-gradient-to-r from-blue-500/10 via-white/5 to-pink-500/10 blur-3xl opacity-60"
        />
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Ready? Let's go."
          description="Scroll to bring the signal online, then dive into a handful of recent builds."
          ctaLabel="Projects loading"
          className="relative min-h-[85vh] md:min-h-[100vh]"
        />
      </div>
    </section>
  );
};

export default GeminiTransition;
