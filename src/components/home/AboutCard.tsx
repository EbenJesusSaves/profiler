"use client";
import React from "react";

import {
  GlowingStarsTitle,
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
} from "../ui/GlowingStars";

interface Input {
  title: string;
  text: string;
}

export function GlowingStarsBackgroundCardComp({ title, text }: Input) {
  return (
    <div className="flex py-1 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between flex-row items-end">
          <GlowingStarsDescription>{text}</GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
