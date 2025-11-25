"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="flex justify-center relative my-20 pt-36 pb-16" id="about">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-[11px] md:text-xs text-center text-slate-300/80 max-w-80 mb-4"
          >
            Robotics & Software Engineering Portfolio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <TextGenerateEffect
              words="Designing Reliable Robotics & Modern Web Systems"
              className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-slate-300 max-w-2xl"
          >
            I&apos;m James Zhan, a Melbourne-based robotics and software engineer focused on building robust automation, performant web platforms, and tools that scale from prototype to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mb-10"
          >
            <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 shadow-[0_15px_50px_rgba(15,23,42,0.35)]">
              <Image
                src="/images/james-headshot.jpg"
                alt="Portrait of James Zhan"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto min-w-[200px] items-center justify-center rounded-lg border border-purple-400/50 text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;
