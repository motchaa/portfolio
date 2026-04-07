"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <div className=" flex text-2xl font-cascadia">
      <Typewriter
        words={[
          "Technolohy Enthusiast",
          "Back-end Developer",
          "Software Engineer",
        ]}
        loop={0} // 0 = infinito
        cursor
        cursorStyle={<span className="text-red-500 font-cascadia">|</span>}
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}
