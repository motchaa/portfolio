import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

type TerminalState = "normal" | "minimized" | "closed";

export default function FloatingTerminal() {
  const [terminalState, setTerminalState] = useState<TerminalState>("normal");
  const isFirstRender = useRef(true);

  const handleClose = () => {
    setTerminalState("closed");
  };

  const handleMinimize = () => {
    setTerminalState(terminalState === "minimized" ? "normal" : "minimized");
  };

  const handleRestore = () => {
    setTerminalState("normal");
  };

  return (
    <motion.div
      className="w-full lg:w-[40%] mt-[3rem] md:mt-[3rem] lg:mt-[0rem] relative h-[360px] sm:h-[300px] md:h-[330px] flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
    >
      {/* Placeholder - Only visible when terminal is CLOSED */}
      {terminalState === "closed" && (
        <div
          onClick={handleRestore}
          className="absolute inset-0 w-full rounded-xl cursor-pointer
                     bg-red-500/10 border border-red-500/30
                     hover:bg-red-500/20 hover:border-red-500/50
                     backdrop-blur-sm flex items-center justify-center
                     transition-colors duration-300"
          style={{
            boxShadow:
              "0 0 40px -10px rgba(0,0,0,0.8), 0 0 20px -5px rgba(127, 29, 29, 0.25)",
            minHeight: "320px",
          }}
        >
          <p className="font-mono text-lg tracking-wide">
            <span className="text-red-300 mr-2">$</span>
            <span className="text-red-300/80">./open-terminal.sh</span>
          </p>
        </div>
      )}

      {/* Terminal */}
      <AnimatePresence>
        {terminalState !== "closed" && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: terminalState === "minimized" ? 0.8 : 1,
              scale: terminalState === "minimized" ? 0.75 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onAnimationComplete={() => {
              isFirstRender.current = false;
            }}
            className="rounded-xl overflow-hidden shadow-2xl
                       bg-[#0c0c0c] border border-neutral-800/60
                       origin-center backdrop-blur-sm"
            style={{
              boxShadow:
                "0 0 40px -10px rgba(0,0,0,0.8), 0 0 20px -5px rgba(127, 29, 29, 0.15)",
            }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 bg-[#141414] border-b border-neutral-800/50">
              <div className="flex gap-2">
                {/* Close button (Red) */}
                <button
                  title="Fechar"
                  onClick={handleClose}
                  className="w-3 h-3 rounded-full bg-red-600 
                             hover:bg-red-500 hover:scale-125 hover:brightness-125
                             transition-all duration-150 cursor-pointer"
                />
                {/* Minimize button (Yellow) */}
                <button
                  title="Minimizar"
                  onClick={handleMinimize}
                  className="w-3 h-3 rounded-full bg-yellow-600 
                             hover:bg-yellow-500 hover:scale-125 hover:brightness-125
                             transition-all duration-150 cursor-pointer"
                />
                {/* Maximize button (Green) - restores from minimized */}
                <button
                  title="Maximizar"
                  onClick={handleRestore}
                  className="w-3 h-3 rounded-full bg-green-600 
                             hover:bg-green-500 hover:scale-125 hover:brightness-125
                             transition-all duration-150 cursor-pointer"
                />
              </div>
              <span className="ml-3 font-mono text-xs text-neutral-500">
                ~/mota-dev
              </span>
            </div>

            {/* Terminal Content */}
            <motion.div
              initial={false}
              animate={{
                opacity: terminalState === "minimized" ? 0 : 1,
                maxHeight: terminalState === "minimized" ? "40px" : "600px",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="overflow-hidden bg-[#0a0a0a]"
            >
              <div className="p-3 md:p-5 font-mono text-xs md:text-sm space-y-2 md:space-y-4">
                {/* Line 1: whoami */}
                <div>
                  <p className="text-neutral-400">
                    <span className="text-red-500">➜</span>{" "}
                    <span className="text-red-800">~</span>{" "}
                    <span className="text-neutral-200 font-semibold">
                      whoami
                    </span>
                  </p>
                  <p className="text-neutral-500 mt-1 pl-3 md:pl-4">
                    software engineer | back-end | technology enthusiast |
                    voluntary in tech community
                  </p>
                </div>

                {/* Line 2: cat mission.txt */}
                <div className="mt-2 md:mt-4">
                  <p className="text-neutral-400">
                    <span className="text-red-500">➜</span>{" "}
                    <span className="text-red-800">~</span>{" "}
                    <span className="text-red-500">cat</span>{" "}
                    <span className="text-amber-500/80">mission.txt</span>
                  </p>
                  <p className="text-neutral-500 mt-1 pl-3 md:pl-4 leading-relaxed">
                    Software engineering focused on high-impact technological
                    solutions. Specialist in backend development, systems
                    architecture and security, creating robust, scalable
                    applications prepared for the future.
                  </p>
                </div>

                {/* Final prompt line with blinking cursor */}
                <div className="flex items-center mt-2 md:mt-4 pb-1 md:pb-2">
                  <span className="text-red-500">➜</span>{" "}
                  <span className="text-red-800 ml-1">~</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2 w-2 h-4 bg-red-600 inline-block"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
