"use client";
import React from "react";
import { LinkPreview } from "./LinkPreview";
import linked from "/public/images/LINKEDIN.webp";
import { Text } from "@mantine/core";
export function LinkPreviewDemoSecond() {
  return (
    <div className="flex justify-center  items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-600 dark:text-neutral-600 text-xl  md:text-3xl max-w-3xl font-bold text-left mb-10">
        Visit{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/agyekum-ebenezer-b24611129/"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500"
          isStatic
          imageSrc={linked}
        >
          My Linked Profile
        </LinkPreview>{" "}
        to find out more about me
      </p>
      <Text c={"gray"} fz={15} style={{ textAlign: "center" }}>
        And Many 🙏 for taking time out of your busy schdules to check my
        profile
      </Text>
    </div>
  );
}
