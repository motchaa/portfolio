"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function TitleAbout() {
  //                  showDesktop, hideDesktop, showMobile, hideMobile
  const visible = useScrollReveal(224, 350, 200, 440);

  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }
            : {
                opacity: 0,
                y: 120,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="text-center rounded-2xl"
      >
        <h1 className="text-[48px] font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text">
          About Me
        </h1>
      </motion.div>
    </section>
  );
}
