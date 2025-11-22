"use client";
import React from "react";
import Image from "next/image";

export function RecentWork() {
  return (
    <div className="bg-black w-full px-4 py-20 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            Recent Work
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Whether you need a striking portfolio, a functional website, or a
            custom solution, I&apos;m here to deliver results that align with your
            vision.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full my-20">
          {/* Left Phone */}
          <div className="w-full max-w-[300px] xl:w-[350px] flex-shrink-0 transform transition-transform hover:scale-105 duration-500">
            <Image
              src="/images/partnerapp.png"
              alt="Partner App"
              width={400}
              height={800}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Center Laptop */}
          <div className="w-full max-w-[900px] xl:flex-1 transform transition-transform hover:scale-105 duration-500 z-10">
            <Image
              src="/images/jm.png"
              alt="JM Project"
              width={1200}
              height={800}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Phone */}
          <div className="w-full max-w-[300px] xl:w-[350px] flex-shrink-0 transform transition-transform hover:scale-105 duration-500">
            <Image
              src="/images/lydme.png"
              alt="Lydme App"
              width={400}
              height={800}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Your creative process is constantly evolving, shaped by the intricate
            forms of architecture, the organic beauty of nature, and the bold
            expressions of modern art. These influences intertwine to inspire
            fresh ideas, allowing your designs to balance structure, fluidity,
            and contemporary aesthetics.
          </p>
        </div>

        <div className="w-full h-[1px] bg-gray-800 mt-20"></div>
      </div>
    </div>
  );
}
