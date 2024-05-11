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
import aboutImg from "../../public/avatars/Dynamic.png";
import { GoogleGeminiEffectComponent } from "@/components/home/ColorsScrollEffect";
import { GetInTouch } from "@/components/home/Forms";
export default function Home() {
  return (
    <>
      <div className={s.root}>
        <TracingBeam>
          <div>
            <SparklesPreview />
            <div className="flex justify-center flex-wrap-reverse lg:flex-nowrap">
              <div>
                <TextRevealCardPreview />
                <div className="w-full bg-black mt-[8rem] flex flex-row gap-5 items-center justify-center">
                  <MovingBorderDemo text={"download CV"} />
                  <MovingBorderDemo text={"contact me"} />
                </div>
              </div>
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
          <GoogleGeminiEffectComponent />
          <div className="flex justify-around items-center">
            <div className="bg-green-400">First div</div>
            <div className="bg-green-400">
              <GetInTouch />
            </div>
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
