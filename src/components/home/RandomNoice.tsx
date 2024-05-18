"use client";
import React from "react";
import { Vortex } from "../ui/Vortex";

export function VortexComp() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          {" What I'm Leaning"}
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          {"Well, these are the tech stacks I'm learning "}
        </p>
        <div className="flex flex-col sm:flex-row items-center font-bold fw-500 text-white gap-4 mt-6 ">
          <span className="text-blue-[600]">
            # Kotlin for Native Android Apps
          </span>
          <span># Rust for backend #</span>
          <span>lastly, 🏁 Advancing my Javascript knowledge</span>
        </div>
      </Vortex>
    </div>
  );
}
