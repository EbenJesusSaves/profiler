"use client";

import { FlipWords } from "../ui/TextWritter";

export function TypewriterEffectSmoothDemo() {
  const words = ["ToolBox?", "Treasures."];
  return (
    <div className="flex flex-col items-center mt-[4rem] justify-center h-[10rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <div className="text-white font-black text-[1.5rem] md:text-[4rem]">
        What is in my <FlipWords words={words} />
      </div>
    </div>
  );
}
//Which Skills do I Have
