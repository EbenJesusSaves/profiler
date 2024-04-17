"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/textRevialCard";
// import {
//     TextRevealCard,
//     TextRevealCardDescription,
//     TextRevealCardTitle,
// } from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0e0e10] h-[15rem]  w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle className="justify-center text-center">
          I am Eben, A creative software Engineer.
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-center">
          {`Ebenezer is React Native and React Developer with over 3
            years of experience in building mobile and web apps. Currently, Ebenezer
            works as a Frontend developer at Jotella Media Group, where he uses
            React Native, React, Next.js, and Typescript to build performant
            apps. Before that, He was a JavaScript Instructor at Grassroot, where
            he had the pleasure of teaching others. In the past, he has also worked
            as a UI/UX Designer at Fofoofotech, designing websites, mobile apps,
            logos, and flyers for some of the biggest enterprise firms. It was a
            fantastic experience that helped him increase their revenue. Ebenezer
            comfortable working in large-scale collaborations, and Ebenezer's skills
            include React Native, React, Next.js, Typescript, Express, Node.js,
            MongoDB, Postgres SQL, UI/UX designing, data mining, JavaScript, and
            Python/Java/R.`}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
