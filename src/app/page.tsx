import { Aboutme } from "@/components/home/Aboutme";
import { MovingBorderDemo } from "@/components/home/Buttons";
import { SparklesPreview } from "@/components/home/Sparkles";
import { TextRevealCardPreview } from "@/components/home/TextCard";
import { TypewriterEffectSmoothDemo } from "@/components/home/WritingEffect";
import { InfiniteMovingCardsDemo } from "@/components/home/logos";
import { MacbookScrollDemo } from "@/components/home/macbook";
import { HeroParallaxDemo } from "@/components/home/projects";
import { TracingBeam } from "@/components/ui/Tracking";
import Image from "next/image";
import s from "./home/Home.module.css";
export default function Home() {
  return (
    <>
      <div className={s.root}>
        <TracingBeam>
          <div>
            <SparklesPreview />
            <TextRevealCardPreview />
            <div className="w-full bg-black mt-[8rem] flex flex-row gap-5 items-center justify-center">
              <MovingBorderDemo text={"download CV"} />
              <MovingBorderDemo text={"contact me"} />
            </div>
            <Aboutme />
            <div className="container max-width-2xl">
              {/* <MacbookScrollDemo /> */}
              <TypewriterEffectSmoothDemo />
              <InfiniteMovingCardsDemo />
            </div>
            <div className="container lg:w-[100vw] bg-slate-500"></div>
            <HeroParallaxDemo />
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
