"use client";
import React from "react";
import { Button } from "../ui/CoolBtn";

export function MovingBorderDemo({ text }: { text: string }) {
  return (
    <div>
      <button className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center rounded-full relative mt-4">
        <span>{text}</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
      </button>
    </div>
  );
}
