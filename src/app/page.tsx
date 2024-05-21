import { Tabs } from "@/components/ui/TabsComponent";
import { DummyContent } from "@/components/home/Tabs";
import { HomeComp } from "@/components/home/HomeComp";
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
