import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { MeteorsComp } from "./MeteorComp";
import { LiaAwardSolid } from "react-icons/lia";
import { BsPeople } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";

export const Aboutme = () => {
  return (
    <div className="w-full mt-[10rem] bg-black flex flex-col items-center justify-center ">
      <div className="h-[10rem] w-full mt-[10rem] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
          About Me
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="container flex md:h-[45rem]  flex-wrap justify-center  items-center">
        <MeteorsComp
          mainText="Experience"
          subText="Have been working as software engineer for more than 4 years, building Web and Mobile Apps individually and as member of team "
          btNText="Explore"
          icon={<LiaAwardSolid size={"60px"} color="white" />}
        />
        <MeteorsComp
          mainText="Clients"
          subText="Have worked with 300+ clients worldwide, on both individual and corporate projects (UI/UX designs, web and Mobile Apps)  "
          btNText="Explore"
          icon={<BsPeople size={"60px"} color="white" />}
        />
        <MeteorsComp
          mainText="Projects"
          subText="Have have a track record of completed more than 250+ engineering and design projects for both corporate and individual"
          btNText="Explore"
          icon={<IoFolderOpenOutline size={"60px"} color="white" />}
        />
      </div>
    </div>
  );
};
