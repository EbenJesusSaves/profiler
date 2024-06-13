import { CardProps } from "@/components/articles/card";
import { BackgroundBeams } from "@/components/ui/backgroundBeam";
import React from "react";
import { faker } from "@faker-js/faker";
import { FloatingNav } from "@/components/ui/TabsComponent";
import { navItems } from "@/components/util/navList";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
const page = () => {
  function generateArticles(count: number): CardProps[] {
    const articles: CardProps[] = [];

    for (let i = 0; i < count; i++) {
      articles.push({
        imageURl: `https://picsum.photos/seed/${faker.datatype.uuid()}/300/200`, // Generates a random tech image URL
        title: faker.lorem.sentence(), // Generates a random sentence for the title
        date: faker.date.recent().toISOString(), // Generates a recent date
        tags: Array.from({ length: 3 }, () => faker.lorem.word()), // Generates an array of 3 random words for the tags
        body: faker.lorem.paragraphs(), // Generates random paragraphs for the body
      });
    }

    return articles;
  }

  const articles = generateArticles(6);

  return (
    <div className=" flex items-center justify-center bg-black">
      <FloatingNav navItems={navItems} />
      <div className="z-10 flex justify-center flex-col items-center">
        <div className="flex mt-20">
          <span className="z-10 relative bg-blue-600 text-center text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            SCROLLS FROM THE SEER
          </span>
          <span className="text-lg md:text-7xl">📜</span>
        </div>

        <div className=" font-bold text-4xl mt-10 text-white tex-center">
          Ensure some Chilly Cool Articles ✨🧐{" "}
        </div>
        {/* <BackgroundBeams className="bg-black" /> */}
        {/* <div className="container flex flex-wrap justify-between items-center mt-20">
          {articles.map((item) => (
            <Card
              key={item.title}
              body={item.body}
              tags={item.tags}
              title={item.title}
              date={item.date}
              imageURl={item.imageURl}
            />
          ))}
        </div> */}
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={articles} />
        </div>
      </div>
    </div>
  );
};

export default page;
