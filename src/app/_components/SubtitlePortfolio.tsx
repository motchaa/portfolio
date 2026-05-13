"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function SubtitlePortfolio() {
  const visible = useScrollReveal(1330, 1455, 950, 1740);

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={
          visible
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }
            : {
                opacity: 0,
                y: 100,
                transition: { duration: 0.6, ease: "easeIn" },
              }
        }
        className="text-center mt-[-0.5rem] text-[15px]"
      >
        <p>This is the digital footprint of my journey.</p>
      </motion.div>
    </div>
  );
}
