"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function TextAbout() {
  const visible = useScrollReveal(350, 670, 400, 750);

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
              }
            : {
                opacity: 0,
                x: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="rounded-2xl shadow-lg flex flex-col"
      >
        <p className="text-[26px] md:text-[36px] lg:text-[40px] font-bold lg:text-left">
          <span className="text-red-500">Hello, I&apos;m</span> Thiago Mota.
        </p>
        <p className="text-[15px] md:text-[17px] lg:text-[22px] mt-1 text-white/85 text-justify leading-[1.6rem] md:leading-[1.8rem] lg:leading-[1.9rem]">
          Currently, I am a Backend Developer and a Technologist in Systems
          Analysis and Development, focused on becoming a Software Engineer.
          I&apos;m expanding my expertise through a postgraduate degree in
          Software Engineering, DevOps, and Cloud Computing. I also serve as a
          Volunteer Project Manager and Developer in the technology community{" "}
          <a href="#" className="text-amber-300 font-bold">
            CODA.CE
          </a>
          . I&apos;m fascinated by technology and am always seeking to learn
          more in various areas.
        </p>

        <div className="relative mt-[1.7rem] rounded-xl overflow-hidden group">
          {/* Gradient border glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/30 via-amber-400/20 to-red-500/10 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative backdrop-blur-md bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 rounded-xl px-5 md:px-8 py-5 md:py-4 flex items-start gap-4">
            {/* Left accent bar */}
            <div className="hidden md:block w-1 min-h-full self-stretch rounded-full bg-gradient-to-b from-red-500 via-amber-400 to-red-500/40 shrink-0" />

            <div className="flex flex-col items-center md:items-start w-full">
              {/* Decorative quote mark */}
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-red-500/60 mb-1 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              {/* Quote text */}
              <p className="text-white/90 font-semibold text-sm md:text-lg lg:text-xl italic font-montserrat leading-relaxed tracking-wide text-center md:text-left">
                Build it. Test it. Break it. Fix it.
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 mt-2">
                <span className="w-5 h-[2px] bg-gradient-to-r from-red-500 to-amber-400 rounded-full" />
                <p className="text-white/50 text-xs md:text-sm font-medium tracking-wider uppercase">
                  Tony Stark
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
