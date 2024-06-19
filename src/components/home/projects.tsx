"use client";
import React from "react";

import u1 from "../../../public/images/Untitled-1.webp";
import u2 from "../../../public/images/Untitled-2.webp";
import u3 from "../../../public/images/Untitled-3.webp";
import u4 from "../../../public/images/Untitled-4.webp";
import u5 from "../../../public/images/Untitled-5.webp";
import u6 from "../../../public/images/Untitled-6.webp";
import u7 from "../../../public/images/Untitled-7.webp";
import movie from "../../../public/images/movie.jpg";
import creatives from "../../../public/images/creatives.png";
import food from "../../../public/images/food.jpg";
import smart from "../../../public/images/smart.png";
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
    title: "JMGC",
    link: "https://jmgc.io/",
    thumbnail: u5,
  },
  {
    title: "JMGC Creatives",
    link: "https://testing.jmgc.io/resources",
    thumbnail: creatives,
  },
  {
    title: "Free Movies",
    link: "https://github.com/EbenJesusSaves/fullMovie",
    thumbnail: movie,
  },

  {
    title: "Transclosures",
    link: "#",
    thumbnail: u4,
  },
  {
    title: "Smart Pod",
    link: "https://mediline.onrender.com/home",
    thumbnail: smart,
  },

  {
    title: "Movies Site",
    link: "https://ebenjesussaves.github.io/BetterMovies/",
    thumbnail: u7,
  },
  {
    title: "Restaurant Near Finder",
    link: "https://github.com/EbenJesusSaves/foodApp/tree/master/",
    thumbnail: food,
  },
  {
    title: "Restaurant Near Finder",
    link: "https://github.com/EbenJesusSaves/foodApp/tree/master/",
    thumbnail: food,
  },
];
