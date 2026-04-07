"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import {
  SiPostgresql,
  SiNextdotjs,
  SiSpringboot,
  SiSpringsecurity,
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function BarTechStacks() {
  const visibleCol1 = useScrollReveal(1012, 1800, 1350, 1460);
  const visibleCol2 = useScrollReveal(1620, 1875, 1440, 1655);

  return (
    <section className="flex flex-col mt-[2.5rem] gap-y-4 md:gap-y-5 items-center justify-center w-[95%] md:w-[90%] lg:w-[80%]">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 md:gap-5">
        {/* Java - primeiro lugar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faJava}
              className=" mb-2 text-[32px] md:text-[42px] text-red-600"
            />{" "}
            <p className="text-[14px] md:text-[16px] text-center">Java</p>
          </div>
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiSpringboot className=" mb-2 text-[32px] md:text-[42px] text-[#6DB33F]" />
            <p className="text-[14px] md:text-[16px] text-center">
              Spring Boot
            </p>
          </div>
        </motion.div>

        {/* Spring Security */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiSpringsecurity className=" mb-2 text-[32px] md:text-[42px] text-[#6DB33F]" />
            <p className="text-[14px] md:text-[16px] text-center">
              Spring Security
            </p>
          </div>
        </motion.div>

        {/* Spring Data JPA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <FontAwesomeIcon
              icon={faAws}
              className=" mb-2 text-[32px] md:text-[42px] text-[#FF9900]"
            />
            <p className="text-[14px] md:text-[16px] text-center">AWS</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 md:gap-5">
        {/* Docker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiDocker className=" mb-2 text-[32px] md:text-[42px] text-[#2496ED]" />
            <p className="text-[14px] md:text-[16px] text-center">Docker</p>
          </div>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiTypescript className=" mb-2 text-[32px] md:text-[42px] text-[#326CE5]" />
            <p className="text-[14px] md:text-[16px] text-center">TypeScript</p>
          </div>
        </motion.div>

        {/* Next.js */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiNextdotjs className=" mb-2 text-[32px] md:text-[42px] text-[#FFFFFF]" />
            <p className="text-[14px] md:text-[16px] text-center">Next.js</p>
          </div>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : {
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }
          }
          className="flex w-full"
        >
          <div className="backdrop-blur-2xl py-[1.2rem] md:py-[1.7rem] flex items-center flex-col rounded-lg shadow-lg w-full border-2 border-white/50">
            <SiPostgresql className=" mb-2 text-[32px] md:text-[42px] text-[#336791]" />
            <p className="text-[14px] md:text-[16px] text-center">PostgreSQL</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
