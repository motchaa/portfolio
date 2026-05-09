"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";
import QuoteBlock from "./QuoteBlock";

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
          <a
            href="https://coda-ce.com.br"
            target="_blank"
            className="text-amber-300 font-bold"
          >
            CODA.CE
          </a>
          . I&apos;m fascinated by technology and am always seeking to learn
          more in various areas.
        </p>
        <QuoteBlock />
      </motion.div>
    </div>
  );
}
