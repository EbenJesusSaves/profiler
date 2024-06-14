"use client";

import { useState, useEffect } from "react";
import { HomeComp } from "@/components/home/HomeComp";
import Image from "next/image";
import gitImage from "../../public/images/Animation - 1717134917174.gif";
import { FloatingNav } from "@/components/ui/TabsComponent";
import { navItems } from "@/components/util/navList";
import AuthButton from "./AuthClient";
import { useSession } from "next-auth/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
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
        <div>
          <FloatingNav navItems={navItems} />
          <HomeComp />
        </div>
      )}
    </div>
  );
}
