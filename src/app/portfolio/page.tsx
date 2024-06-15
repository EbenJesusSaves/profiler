import React from "react";
import { FloatingNav } from "@/components/ui/TabsComponent";
import { navItems } from "@/components/util/navList";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
const page = () => {
  return (
    <div className=" flex items-center justify-center bg-black">
      <FloatingNav navItems={navItems} />
      <div className="z-10 flex justify-center flex-col items-center">
        <div className="flex mt-20">
          <span className="z-10 relative bg-blue-600 text-center text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            SCROLLS FROM THE SEER
          </span>
          <span className="text-lg md:text-7xl">📜</span>
        </div>

        <div className=" font-bold text-4xl mt-10 text-white tex-center">
          Ensure some Chilly Cool Articles ✨🧐{" "}
        </div>
        {/* <BackgroundBeams className="bg-black" /> */}

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect />
        </div>
      </div>
    </div>
  );
};

export default page;
