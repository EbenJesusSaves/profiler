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

export function HeroParallaxDemo() {
  return (
    <div className="container flex flex-wrap gap-5">
      {products.map((item) => (
        <div
          key={item.title}
          className=" relative  flex items-center justify-center"
        >
          <DirectionAwareHover imageUrl={item.thumbnail}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
      ))}
    </div>
  );
}
export const products = [
  {
    title: "Deal Analyzer",
    link: "https://gomoonbeam.com",
    thumbnail: u1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: u2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: u3,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: u1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
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
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: u5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: u6,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: u7,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: u5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: u6,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: u2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: u3,
  },
];
