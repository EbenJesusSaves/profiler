"use client";
import React from "react";

export function TextRevealCardPreview() {
  return (
    <div className="bg-black w-full px-10 py-12 md:px-20 md:py-20 font-sans">
      <div className="max-w-[81%] mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Ebenezer is a React Native and React Developer with over 4 years
              of experience in building mobile and web apps. Currently, he works
              as a Frontend developer at Jotella Media Group (Toronto Canada,
              Remote), where he builds performant mobile and web apps with React
              Native, React, Next.js, and Typescript.
            </p>
            <p>
              Before that, he worked as a JavaScript Instructor at Grassroot
              Academy (London UK, Remote), teaching others. In the past, he has
              also worked as a UI/UX Designer at Fofoofotech (Accra, Ghana),
              designing websites, mobile apps, logos, and flyers. His skills
              include React Native, React, Next.js, Typescript, Express,
              Node.js, MongoDB, Postgres SQL, UI/UX designing, data mining,
              JavaScript, and Python/Java/R.
            </p>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 flex flex-row items-end justify-start md:justify-end gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-white">
                5+
              </span>
              <span className="text-sm text-gray-400 mt-2">
                Years of experience
              </span>
            </div>
            <div className="h-16 w-[1px] bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-white">
                20+
              </span>
              <span className="text-sm text-gray-400 mt-2">
                Completed projects
              </span>
            </div>
            <div className="h-16 w-[1px] bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-white">
                10+
              </span>
              <span className="text-sm text-gray-400 mt-2">
                Companies & Clients worldwide
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-800 mt-16"></div>
      </div>
    </div>
  );
}
