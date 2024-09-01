"use client";
import React from "react";
import { HeroHighlight } from "../ui/Vortex";

export function VortexComp() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md hidden md:block h-[30rem] overflow-hidden">
      <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-black text-2xl md:text-6xl font-bold text-center">
          {" 📚 Library of Learning"}
        </h2>
        <p className="text-dark text-sm md:text-xl max-w-xl mt-6 font-bold text-center mb-5">
          {
            "I believe in lifelong learning and continuous improvement. Here's a peek at the latest scrolls I've added to my library:"
          }
        </p>
        <div className=" text-dark  ">
          <div>
            <span className="text-blue-[600]"></span>
          </div>
          <div>
            <span className="font-black bg-clip-text text-md  text-black">
              Advanced Potion Making -
            </span>
            <span> Advancing my Javascript knowledge</span>
          </div>
          <div>
            <span className="font-black bg-clip-text text-md  text-black">
              Defense Against the Dark Arts -
            </span>
            <span> Mastering Web and Mobile App Security</span>
          </div>
          <div>
            <span className="font-black bg-clip-text text-md  text-black">
              Cooking New Charms -
            </span>
            <span>Learning Kotlin for Native Android Apps</span>
          </div>
          <div>
            <span className="font-black bg-clip-text text-md  text-black">
              Adding More Powers to the Backend Portion -
            </span>
            <span># Rust for backend #</span>
          </div>
        </div>
      </div>
    </div>
  );
}
