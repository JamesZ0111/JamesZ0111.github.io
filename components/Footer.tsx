import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-32" id="contact">
  <div className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-16 shadow-[0_40px_120px_rgba(3,8,23,0.7)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 opacity-80" />
        <div className="relative flex flex-col items-center text-center gap-6">
          <h1 className="heading lg:max-w-[45vw] bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
            Let&apos;s build something reliable
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Whether you&apos;re exploring automation, web platforms, or technical consulting, I&apos;m open to discussing how we can work together.
          </p>
          <a href="mailto:haolinzhanwork@gmail.com" className="w-full sm:w-auto">
            <MagicButton
              title="Contact Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="relative mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm md:text-base text-gray-300">
            Copyright © {new Date().getFullYear()} Haolin Zhan
          </p>
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-xl border border-white/10 bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-110"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
