import Link from "next/link";
import { TracingBeam } from "../ui/Tracking";
import { GlowingStarsBackgroundCardComp } from "./AboutCard";
import { Aboutme } from "./Aboutme";
import { MovingBorderDemo } from "./Buttons";
import { GoogleGeminiEffectComponent } from "./ColorsScrollEffect";
import Experience from "./Experience";
import { GetInTouch } from "./Forms";
import { VortexComp } from "./RandomNoice";
import { SparklesPreview } from "./Sparkles";
import { TextRevealCardPreview } from "./TextCard";
import { TypewriterEffectSmoothDemo } from "./WritingEffect";
import { InfiniteMovingCardsDemo } from "./logos";
import { HeroParallaxDemo } from "./projects";
import { MouseEvent, useRef } from "react";

// import s from '../../app/globals.css'
export const HomeComp = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col rounded-2xl bg-[#0e0e10] justify-center items-center ">
      {/* <TracingBeam> */}
      <div className={"bg-[#0e0e10]"}>
        <div className="bg-[#0e0e10] w-full flex  flex-col items-center">
          <SparklesPreview />
          <div className="flex justify-center flex-wrap-reverse lg:flex-nowrap">
            <div className="w-[25rem] md:w-full">
              <TextRevealCardPreview />
              <div className="w-full bg-black mt-[4rem] flex flex-row gap-5 items-center justify-center">
                <a href="/docs/cv2.pdf" download="CV.pdf">
                  <MovingBorderDemo text={"download CV"} />
                </a>
                <a
                  onClick={scrollToContact}
                  style={{ scrollBehavior: "smooth" }}
                >
                  <MovingBorderDemo text={"contact me"} />
                </a>
              </div>
            </div>
          </div>
          <Aboutme />
          <div className="flex flex-col  container max-width-2xl justify-center items-center">
            <TypewriterEffectSmoothDemo />
            <Experience />
            <InfiniteMovingCardsDemo />
            <VortexComp />
          </div>
        </div>
        <div>
          <div className="text-white hidden md:block text-6xl font-bold mb-4 ">
            Some of Awesome Projects I have worked on
          </div>
          <HeroParallaxDemo />
        </div>
        <GoogleGeminiEffectComponent />
        <div className="container flex justify-center gap-[10rem] flex-col md:flex-row items-center bg-black w-full">
          <div className="">
            <GlowingStarsBackgroundCardComp
              title="Email"
              text="agyekumebenezer2001@gmail.com"
            />
            <GlowingStarsBackgroundCardComp
              title="WhatsApp"
              text="+233 249 666 839"
            />
            <GlowingStarsBackgroundCardComp
              title="Twitter"
              text="coming soon"
            />
          </div>
          <div ref={contactRef}>
            <GetInTouch />
          </div>
        </div>
      </div>
      {/* </TracingBeam> */}
    </div>
  );
};
