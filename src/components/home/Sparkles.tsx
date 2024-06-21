"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "../ui/sparkles";
import base from "@/axios/baseApi";

export function SparklesPreview() {
  const [post, setPosts] = useState();

  // because articles are hosted on a free server, it goes off after some few minutes of being inactive
  // this useEffect kinda ping request to spin up server before client visits
  useEffect(() => {
    (async () => {
      if (post) return;
      try {
        const {
          data: { data },
        } = await base.get("/posts");
        setPosts(data);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="h-[30rem]  w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <small className="text-white ">Hey There, 🚀Welcome Aboard!</small>
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
        Eben Here
      </h1>
      <div className=" sm:w-[100%]   md:w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
