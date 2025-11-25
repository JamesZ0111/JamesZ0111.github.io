"use client";

import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    if (!scope.current) return;
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 1.5,
        delay: stagger(0.15),
        ease: "easeOut",
      },
    );
  }, [animate, wordsArray, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="text-black dark:text-white leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
              const highlight = idx > 1;
              return (
                <motion.span
                  key={`${word}-${idx}`}
                  className={cn(
                    highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-white drop-shadow-[0_0_25px_rgba(244,114,182,0.35)]"
                      : "text-slate-900 dark:text-white",
                    "opacity-0",
                  )}
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
