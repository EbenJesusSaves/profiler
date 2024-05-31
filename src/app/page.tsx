"use client";

import { useState, useEffect } from "react";
import { HomeComp } from "@/components/home/HomeComp";
import Image from "next/image";
import gitImage from "../../public/images/Animation - 1717134917174.gif";

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/TabsComponent";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Articles",
      link: "/portfolio",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        setIsLoading(false);
      } else {
        window.onload = () => {
          setIsLoading(false);
        };
      }
    }
  }, []);

  return (
    <div className="flex items-center flex-col bg-black ">
      {isLoading ? (
        <div className=" h-[100vh] flex flex-col justify-center items-center ">
          <div className="text-center flex justify-center items-center flex-col">
            <Image width={200} src={gitImage} alt="loading image" />
            <div className="text-white text-center text-2xl font-bold ">
              Loading Something Aweeesome!!!✨✨✨
            </div>
          </div>
        </div>
      ) : (
        <>
          <FloatingNav navItems={navItems} />
          <HomeComp />
        </>
      )}
    </div>
  );
}
