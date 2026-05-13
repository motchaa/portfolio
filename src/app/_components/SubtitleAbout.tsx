"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function SubtitleAbout() {
  const visible = useScrollReveal(340, 390, 180, 490);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 130 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
              }
            : {
                opacity: 0,
                y: 130,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="text-center rounded-2xl"
      >
        <p className="text-[17px] font-light text-white/85">
          Turning technology into meaningful solutions
        </p>
      </motion.div>
    </div>
  );
}
