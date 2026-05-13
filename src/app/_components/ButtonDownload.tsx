"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function ButtonDownload() {
  const visible = useScrollReveal(350, 670, 400, 1450);

  return (
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
      className="mt-4 md:mt-6 w-full flex justify-center lg:justify-start"
    >
      <a
        href="/curriculo.docx"
        download="Curriculo_Thiago_Mota.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-6 md:px-9 rounded-md bg-gradient-to-r font-semibold flex flex-row gap-x-2 items-center from-red-600 to-red-950 text-sm md:text-base transition-all duration-300 hover:from-red-500 hover:to-red-800 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-[1.03]"
      >
        Download CV
      </a>
    </motion.div>
  );
}
