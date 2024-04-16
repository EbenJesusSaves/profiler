"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/slidesScroll";
import logo1 from "../../../public/logo/express.webp";
import logo2 from "../../../public/logo/docker.webp";
import logo3 from "../../../public/logo/python.webp";
import logo4 from "../../../public/logo/js.webp";
import logo5 from "../../../public/logo/react.webp";
import logo6 from "../../../public/logo/reactnative.webp";
import logo7 from "../../../public/logo/typescript.webp";
import logo8 from "../../../public/logo/next.webp";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: logo1,
    name: "1 year +",
  },
  {
    image: logo2,
    name: "1 year +",
  },
  {
    image: logo3,
    name: "3 years +",
  },
  {
    image: logo4,
    name: "4 years +",
  },
  {
    image: logo5,
    name: "4 years +",
  },
  {
    image: logo6,
    name: "3 years +",
  },
  {
    image: logo7,
    name: "3 years +",
  },
  {
    image: logo8,
    name: "3 years +",
  },
];
