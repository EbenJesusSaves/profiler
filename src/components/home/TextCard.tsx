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
    <div className="flex items-center justify-center flex-col bg-[#0e0e10]  w-full">
      <>
        <TextRevealCardTitle className="justify-center text-center">
          A creative software Engineer.
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-center sm:w-[10rem] md:w-[45rem]">
          {`Ebenezer is React Native and React Developer with over 4
            years of experience in building mobile and web apps. Currently, Ebenezer
            works as a Frontend developer at Jotella Media Group (Toronto Canada, Remote), where he builds performant mobile and web apps with
            React Native, React, Next.js, and Typescript. Before that, He worked as JavaScript Instructor 
            at Grassroot Academy (London UK, Remote), where
            he had the pleasure of teaching others. In the past, he has also worked
            as a UI/UX Designer at Fofoofotech (Accra, Ghana), designing websites, mobile apps,
            logos, and flyers for some of the biggest enterprise firms. It was a
            fantastic experience that helped him increase their revenue. Ebenezer is
            comfortable working in large-scale collaborations, and Ebenezer's skills
            include React Native, React, Next.js, Typescript, Express, Node.js,
            MongoDB, Postgres SQL, UI/UX designing, data mining, JavaScript, and
            Python/Java/R.`}
        </TextRevealCardDescription>
      </>{" "}
      <div className="hidden md:block">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        />
      </div>
    </div>
  );
}
