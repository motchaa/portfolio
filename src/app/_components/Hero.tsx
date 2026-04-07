"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TextWriter from "./TextWriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import FloatingTerminal from "./FloatingTerminal";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  // Só ativa a animação após o carregamento da página
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row w-[95%] md:w-[85%] lg:w-[80%] items-center justify-between mt-[9rem] md:mt-[12rem] lg:mt-[17rem] gap-8 lg:gap-6">
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  }
                : {}
            }
            className="rounded-2xl "
          >
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold mb-4 text-center lg:text-left">
                I&apos;m <span className="text-red-700">Motcha</span>
                <br />
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
                  }
                : {}
            }
            className="rounded-2xl"
          >
            <TextWriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
                  }
                : {}
            }
            className="rounded-2xl"
          >
            <p className="text-base md:text-lg lg:text-xl font-inter font-[100] mt-[1.3rem] text-center lg:text-left">
              Transforming ideas into automations and intelligent digital
              solutions.
            </p>
          </motion.div>

          {/* Botões principais */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.6, ease: "easeOut" },
                  }
                : {}
            }
            className="text-center rounded-2xl shadow-lg w-full sm:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2 mt-[1.8rem] w-full sm:w-auto">
              <a
                href="#portfolio"
                className="py-3 px-8 sm:px-11 font-semibold rounded-md bg-gradient-to-r flex flex-row gap-x-2 items-center justify-center from-red-600 to-red-950 transition-all duration-300 hover:from-red-500 hover:to-red-800 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-[1.03] cursor-pointer"
              >
                Projects
                <FaCode />
              </a>
              <a
                href="#contact"
                className="py-3 px-8 sm:px-11 font-semibold rounded-md border-1 border-red-950 flex flex-row gap-x-2 items-center justify-center transition-all duration-300 hover:bg-red-950/30 hover:border-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:scale-[1.03] cursor-pointer"
              >
                Contact
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={
              visible
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
                  }
                : {}
            }
            className="text-center rounded-2xl shadow-lg"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-[1.7rem] rounded-2xl w-fit">
              {/* GitHub */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex px-4 sm:px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a
                    className="flex flex-row items-center gap-x-2 text-sm sm:text-base"
                    href="https://github.com/ImDevMota"
                  >
                    <FaGithub />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </button>
              </div>

              {/* Instagram */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex px-4 sm:px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a
                    href="https://www.instagram.com/thiagou.mota?igsh=MW9ydG9kemg0cjFmeA%3D%3D&utm_source=qr"
                    className="flex flex-row items-center gap-x-2 text-sm sm:text-base"
                  >
                    <FaInstagram />
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                </button>
              </div>

              {/* Linkedin */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-[0.7rem] opacity-40 group-hover:opacity-80 blur-[0.3rem] transition duration-500"></div>
                <button className="relative flex px-4 sm:px-5 py-3 bg-[#0b0b0f] border border-red-500/20 rounded-[0.7rem] text-white font-medium transition">
                  <a
                    href="https://www.linkedin.com/in/thiago-mota-32332a268/"
                    className="flex flex-row items-center gap-x-2 text-sm sm:text-base"
                  >
                    <FaLinkedin />
                    <span className="hidden sm:inline">Linkedin</span>
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <FloatingTerminal />
      </div>
    </section>
  );
}
