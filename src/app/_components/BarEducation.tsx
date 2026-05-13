"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function BarEducation() {
  // Card 1: Technologist Diplom
  const visibleCol1 = useScrollReveal(1100, 1760, 1150, 2100);
  // Card 2: Post Graduate
  const visibleCol2 = useScrollReveal(1100, 1760, 1380, 2300);
  // Card 3: Back-end Java
  const visibleCol3 = useScrollReveal(1150, 1900, 1350, 2500);
  // Card 4: Full-Stack
  const visibleCol4 = useScrollReveal(1150, 1900, 1730, 2700);

  return (
    <section className="flex flex-col mt-[2.5rem] gap-y-[1.5rem] md:gap-y-[2.5rem] w-[95%] md:w-[90%] lg:w-[80%]">
      <div className="flex flex-col md:flex-row w-full justify-between gap-[1.5rem] md:gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            visibleCol1
              ? {
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
                } // fade in
              : {
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                } // fade out
          }
          className="flex w-full md:w-[49.4%]"
        >
          <div className="backdrop-blur-2xl rounded-lg shadow-lg w-full border border-red-400/10">
            <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-5 md:px-7 py-5">
              <div className="flex flex-row items-center gap-x-3">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className=" mb-1 text-[22px] md:text-[27px] text-red-500"
                />{" "}
                <p className="font-bold text-white text-[18px] md:text-[22px] text-start">
                  Technologist Diplom
                </p>
              </div>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <p className="w-full text-sm font-medium text-[14px] md:text-[16px] rounded-lg flex ">
                  Software Analysis and Development - UNOPAR
                </p>

                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                  <span className="bg-red-800 text-indigo-100 text-[12px] md:text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                    2023 – 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={
            visibleCol2
              ? {
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.35, ease: "easeOut" },
                } // fade in
              : {
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                } // fade out
          }
          className="flex w-full md:w-[49.4%]"
        >
          <div className="backdrop-blur-2xl rounded-lg w-full shadow-lg border border-red-400/10">
            <div className="bg-white/2 flex flex-col rounded-b-md backdrop-blur-xl shadow-lg px-5 md:px-7 py-5">
              <div className="flex flex-row items-center gap-x-3">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className=" mb-1 text-[22px] md:text-[27px] text-red-500"
                />{" "}
                <p className="font-bold text-white text-[18px] md:text-[22px] text-start">
                  Post Graduate
                </p>
              </div>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <p className="w-full text-sm font-medium text-[14px] md:text-[16px] rounded-lg flex ">
                  Software Engineering, DevOps and Cloud - Unifametro
                </p>

                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                  <span className="bg-red-800 text-indigo-100 text-[12px] md:text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                    2026 – 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between gap-[1.5rem] md:gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            visibleCol3
              ? {
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
                } // fade in
              : {
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                } // fade out
          }
          className="flex w-full md:w-[49.4%]"
        >
          <div className="backdrop-blur-2xl rounded-lg shadow-lg w-full border border-red-400/10">
            <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-5 md:px-7 py-5">
              <div className="flex flex-row items-center gap-x-3">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className=" mb-1 text-[22px] md:text-[27px] text-red-500"
                />{" "}
                <p className="font-bold text-white text-[18px] md:text-[22px] text-start">
                  Back-end Java
                </p>
              </div>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <p className="w-full text-sm font-medium text-[14px] md:text-[16px] rounded-lg flex ">
                  Bootcamp DIO - Santander
                </p>

                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                  <span className="bg-red-800 text-indigo-100 text-[12px] md:text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                    2023 – 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={
            visibleCol4
              ? {
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.65, ease: "easeOut" },
                } // fade in
              : {
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                } // fade out
          }
          className="flex w-full md:w-[49.4%]"
        >
          <div className="backdrop-blur-2xl rounded-lg shadow-lg w-full border border-red-400/10">
            <div className="bg-white/2 rounded-b-md backdrop-blur-xl shadow-lg px-5 md:px-7 py-5">
              <div className="flex flex-row items-center gap-x-3">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className=" mb-1 text-[22px] md:text-[27px] text-red-500"
                />{" "}
                <p className="font-bold text-white text-[18px] md:text-[22px] text-start">
                  Full-Stack
                </p>
              </div>

              <div className="mt-[1rem] flex flex-col gap-y-[0.5rem]">
                <p className="w-full text-sm font-medium text-[14px] md:text-[16px] rounded-lg flex ">
                  Digital College
                </p>

                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                  <span className="bg-red-800 text-indigo-100 text-[12px] md:text-[13px] font-medium px-2.5 py-0.5 rounded-full">
                    2025 – 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
