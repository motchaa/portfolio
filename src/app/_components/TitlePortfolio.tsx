"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function TitlePortfolio() {
  const visible = useScrollReveal(1305, 1420, 890, 1690);

  return (
    <div className="flex flex-col items-center justify-cente">
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
        className="text-center"
      >
        <p className="text-[48px] font-bold bg-gradient-to-r from-red-700 to-red-700 text-transparent bg-clip-text leading-[1.2]">
          Portfolio Showcase
        </p>
      </motion.div>
    </div>
  );
}
