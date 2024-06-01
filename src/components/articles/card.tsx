"use client";
import React from "react";

import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/card";

export interface CardProps {
  imageURl: string;
  title: string;
  date: string;
  tags: string[];
  body: string;
}

export function Card({ imageURl, title, date, tags, body }: CardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={
            imageURl ||
            "https://docs.astro.build/open-graph/en/basics/astro-components.webp"
          }
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}|| Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </p>
        <div className="flex">
          {" "}
          {tags.map((item) => (
            <button
              key={item}
              className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
            >
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          ))}
        </div>
        <div className="text-blue-300 text-sm">{date}</div>
      </BackgroundGradient>
    </div>
  );
}
