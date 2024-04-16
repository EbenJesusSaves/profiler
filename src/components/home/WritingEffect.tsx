"use client";

import { TypewriterEffectSmooth } from "@/ui/TextWritter";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Which",
    },
    {
      text: "Skills",
    },
    {
      text: "do",
    },
    {
      text: "I",
    },
    {
      text: "Have.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
//Which Skills do I Have
