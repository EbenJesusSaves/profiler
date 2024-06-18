"use client";
import React from "react";

import u1 from "../../../public/images/Untitled-1.webp";
import u2 from "../../../public/images/Untitled-2.webp";
import u3 from "../../../public/images/Untitled-3.webp";
import u4 from "../../../public/images/Untitled-4.webp";
import u5 from "../../../public/images/Untitled-5.webp";
import u6 from "../../../public/images/Untitled-6.webp";
import u7 from "../../../public/images/Untitled-7.webp";
import { DirectionAwareHover } from "../ui/movingPages";
import Link from "next/link";

export function HeroParallaxDemo() {
  return (
    <div className="container hidden md:flex flex-wrap gap-5">
      {products.map((item) => (
        <div
          key={item.title}
          className=" relative  flex items-center justify-center"
        >
          <Link href={item.link}>
            <DirectionAwareHover imageUrl={item.thumbnail}>
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm">click to visit site</p>
            </DirectionAwareHover>
          </Link>
        </div>
      ))}
    </div>
  );
}
export const products = [
  {
    title: "Deal Analyzer",
    link: "https://bpotech.io/analytics",
    thumbnail: u1,
  },
  {
    title: "BPO HOMES",
    link: "https://bpotech.io/",
    thumbnail: u2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: u3,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: u4,
  },
  {
    title: "JMGC",
    link: "https://jmgc.io/",
    thumbnail: u5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: u6,
  },

  {
    title: "Movies Site",
    link: "https://ebenjesussaves.github.io/BetterMovies/",
    thumbnail: u7,
  },
];
