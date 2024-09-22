import Link from "next/link";
import { TracingBeam } from "../ui/Tracking";
import { GlowingStarsBackgroundCardComp } from "./AboutCard";
import { Aboutme } from "./Aboutme";
import { MovingBorderDemo } from "./Buttons";
import Experience from "./Experience";
import { GetInTouch } from "./Forms";
import { VortexComp } from "./RandomNoice";
import { SparklesPreview } from "./Sparkles";
import { TextRevealCardPreview } from "./TextCard";
import { TypewriterEffectSmoothDemo } from "./WritingEffect";
import { InfiniteMovingCardsDemo } from "./logos";
import { MouseEvent, useRef } from "react";
import { HeroHighlight } from "../ui/Vortex";
import { LinkPreviewDemoSecond } from "./ColorsScrollEffect";

// import s from '../../app/globals.css'
export const HomeComp = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="overflow-hidden flex justify-center items-center flex-col">
        <div className=" w-[99vw] overflow-hidden">
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
          </div>
          <HeroHighlight className="overflow-hidden justify-center items-center">
            <TypewriterEffectSmoothDemo />
            <Experience />
            <InfiniteMovingCardsDemo />
            <VortexComp />
          </HeroHighlight>

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
        <HeroHighlight className="overflow-hidden flex h-[60vh] justify-center items-center">
          <LinkPreviewDemoSecond />
        </HeroHighlight>
      </div>
    </>
  );
};
