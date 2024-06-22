"use client";

import React, { useEffect, useState } from "react";
import { FloatingNav } from "@/components/ui/TabsComponent";
import { navItems } from "@/components/util/navList";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { getSession } from "next-auth/react";
import { Button, Flex } from "@mantine/core";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/backgroundBeam";
const Page = () => {
  const [session, setSession] = useState<string>();
  const [loadingSession, setLoadingSession] = useState(false);
  useEffect(() => {
    (async () => {
      setLoadingSession(true);
      const session = await getSession();
      setLoadingSession(false);
      setSession(session?.token);
    })();
  }, []);

  return (
    <div className=" flex items-center justify-center mt-20 md:mt-4 flex-col bg-black">
      <Flex justify={"end"} w={"50%"}>
        {loadingSession === false && !session ? (
          <Link href={"/signin"}>
            <Button>Sign in </Button>
          </Link>
        ) : (
          <Flex gap={10}>
            <Link href={"/admin"}>
              <Button>Post Article</Button>
            </Link>
            <Link href={"/user"}>
              <Button>Dashboard</Button>
            </Link>
          </Flex>
        )}
      </Flex>
      <FloatingNav navItems={navItems} />
      <div className="z-10 flex justify-center flex-col items-center">
        <div className="flex mt-10">
          <span className="z-10 relative bg-blue-600 text-center text-xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            SCROLLS FROM THE SEER
          </span>
          <span className="text-lg md:text-7xl">📜</span>
        </div>

        <div className=" font-bold text-xl md:text-4xl mt-10 text-white tex-center">
          Ensure some Chilly Cool Articles ✨🧐{" "}
        </div>
        {/* <BackgroundBeams className="bg-black" /> */}

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect />
        </div>
      </div>
    </div>
  );
};

export default Page;
