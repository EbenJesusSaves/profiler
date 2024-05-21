import { TracingBeam } from "../ui/Tracking";
import { GlowingStarsBackgroundCardComp } from "./AboutCard";
import { Aboutme } from "./Aboutme";
import { MovingBorderDemo } from "./Buttons";
import { GoogleGeminiEffectComponent } from "./ColorsScrollEffect";
import { GetInTouch } from "./Forms";
import { VortexComp } from "./RandomNoice";
import { SparklesPreview } from "./Sparkles";
import { TextRevealCardPreview } from "./TextCard";
import { TypewriterEffectSmoothDemo } from "./WritingEffect";
import { InfiniteMovingCardsDemo } from "./logos";
import { HeroParallaxDemo } from "./projects";
// import s from '../../app/globals.css'
export const HomeComp = () => {
  return (
    <div className="flex flex-col rounded-2xl bg-[#0e0e10] justify-center items-center ">
      <div className={"bg-[#0e0e10]"}>
        <TracingBeam>
          <div className="bg-[#0e0e10] w-full flex  flex-col items-center">
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
            <div className="flex flex-col  container max-width-2xl justify-center items-center">
              {/* <MacbookScrollDemo /> */}
              <TypewriterEffectSmoothDemo />
              <InfiniteMovingCardsDemo />
              <VortexComp />
            </div>
          </div>
          <div className="container flex justify-center bg-white align-middle">
            <HeroParallaxDemo />
          </div>
          <GoogleGeminiEffectComponent />
          <div className="flex justify-center gap-52 items-center bg-black w-full">
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
            <div className="">
              <GetInTouch />
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};
