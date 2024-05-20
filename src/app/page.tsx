import { Aboutme } from "@/components/home/Aboutme";
import { MovingBorderDemo } from "@/components/home/Buttons";
import { SparklesPreview } from "@/components/home/Sparkles";
import { TextRevealCardPreview } from "@/components/home/TextCard";
import { TypewriterEffectSmoothDemo } from "@/components/home/WritingEffect";
import { InfiniteMovingCardsDemo } from "@/components/home/logos";

import { HeroParallaxDemo } from "@/components/home/projects";

import { GoogleGeminiEffectComponent } from "@/components/home/ColorsScrollEffect";
import { GetInTouch } from "@/components/home/Forms";

import { VortexComp } from "@/components/home/RandomNoice";
import { GlowingStarsBackgroundCardComp } from "@/components/home/AboutCard";
import { Tabs } from "@/components/ui/TabsComponent";
import { DummyContent } from "@/components/home/Tabs";
export default function Home() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full  relative h-full rounded-2xl pt-10  bg-gradient-to-br from-[#191714] to-[#2234AE]">
          <p className="text-xl md:text-4xl font-bold text-white">
            Product Tab
          </p>
          <HomeComp />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full  relative h-full rounded-2xl pt-20 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="flex  items-center flex-col bg-black ">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export const HomeComp = () => {
  return (
    <div className=" rounded-2xl">
      {/* <div className={s.root}> */}
      {/* <TracingBeam> */}
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
          <GlowingStarsBackgroundCardComp title="Twitter" text="coming soon" />
        </div>
        <div className="">
          <GetInTouch />
        </div>
      </div>
      {/* </TracingBeam> */}
      {/* </div> */}
    </div>
  );
};
