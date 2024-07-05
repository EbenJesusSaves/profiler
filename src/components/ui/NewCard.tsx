"use client";

import Image from "next/image";
import { cn } from "../util/cn";
import { Article } from "@/types/types";

export function NewCard({ post }: { post: Article }) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        style={
          {
            "--image-url": `url(${post.image})`,
            backgroundSize: "170% 100%", // This will stretch the image to fill the container, which might distort the image. Consider using 'auto' or specific dimensions (e.g., '100px 150px') to maintain aspect ratio.
            backgroundPosition: "center", // This centers the image.
            backgroundRepeat: "no-repeat",
          } as React.CSSProperties
        }
        className={cn(
          " cursor-pointer overflow-hidden relative card h-[15rem] opacity-100 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          ` bg-[image:var(--image-url)]`
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-40 "></div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-40"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {post.posted_by}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-xl text-gray-50 relative z-10">
            {post.title}
          </h1>
          <div className="font-normal text-sm text-gray-50 relative z-10 my-1">
            {post?.tags &&
              post?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-custom-blue rounded-sm mr-2 mb-2 text-[0.6rem] px-1 py-1 text-white"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
