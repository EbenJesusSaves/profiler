"use client";
import React from "react";
import { LinkPreview } from "./LinkPreview";
import linked from "/public/images/LINKEDIN.webp";
export function LinkPreviewDemoSecond() {
  return (
    <div className="flex justify-center items-start h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">
        Visit{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/agyekum-ebenezer-b24611129/"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500"
          isStatic
          imageSrc={linked}
        >
          My Linked Profile
        </LinkPreview>{" "}
        to find out more about me
      </p>
    </div>
  );
}
