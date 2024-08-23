"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamComp";
import { Container, Grid, Paper, Text } from "@mantine/core";
import agent from "../../../public/images/testImg.png";
import dealAnay from "../../../public/images/dealAnay.png";
import jmgc from "../../../public/images/jmg.png";
import jm from "../../../public/images/jm.png";
import bpoh from "../../../public/images/bgTwo.png";
import gamk from "../../../public/images/gamkrib.png";
import trans from "../../../public/images/trans.png";
import React from "react";
import Image from "next/image";
import { IconLink } from "@tabler/icons-react";
const Page = () => {
  return (
    <div
      style={{
        backgroundColor: "#F8FAFC",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <BackgroundBeamsWithCollision>
        <Container style={{ textAlign: "center" }}>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Well it seems you want to know more{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">About the Seer.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">About the Seer.🔭</span>
              </div>
            </div>
          </h2>
          <Text fw={700} fz={"h3"} mt={20}>
            Here is my Work History Tree 🌴
          </Text>
        </Container>
      </BackgroundBeamsWithCollision>
      <Container size={"xl"} py={40}>
        <>
          {progressArray.map((pro) => (
            <Paper
              key={pro.title}
              bg={"white"}
              my={40}
              style={{ borderRadius: 10, padding: 20 }}
            >
              <Grid display={"flex"} style={{ alignItems: "center" }}>
                <Grid.Col
                  span={{ sm: 11, md: 6 }}
                  style={{
                    display: "flex",
                    alignItems: "start",
                    paddingLeft: "2.5em",
                    justifyContent: "center",
                    textAlign: "start",
                    flexDirection: "column",
                  }}
                >
                  <Text>{pro.date}</Text>
                  <Text
                    c={"black"}
                    fw={"700"}
                    className="text-2xl my-1 md:text-5xl"
                  >
                    {pro.title}
                  </Text>

                  <Text>{pro.description}</Text>
                  <a href={pro.link} target="_blank">
                    <Text fz={12} mt={1} display={"flex"} td={"underline"}>
                      LINK <IconLink size={15} />
                    </Text>
                  </a>
                  <div>
                    <Text mt={50}>ROLE</Text>
                    <Text c={"black"} fw={300}>
                      {" "}
                      {pro.role}
                    </Text>
                  </div>
                </Grid.Col>
                <Grid.Col span={{ sm: 11, md: 6 }}>
                  <Image alt="Image" height={500} src={pro.image} />
                </Grid.Col>
              </Grid>
            </Paper>
          ))}
        </>
      </Container>
    </div>
  );
};

export default Page;

const progressArray = [
  {
    date: "BPO Homes (2023__Present)",
    title: "BPO Hones",
    description: (
      <>
        Real estate App for Search, selling and Buying Homes <br />
      </>
    ),
    link: "https://testing.bpohomes.com/",
    role: "Frontend Engineer",
    image: bpoh,
  },
  {
    date: "BPO Tech (2023__Present)",
    title: "Deal Analyzer",
    description: (
      <>
        {" "}
        A real estate app, that help Real estate agent analyze
        <br /> the value of homes and profits they will make <br />
        from the deal incase they decide to buy
      </>
    ),
    link: "https://testing.bpotech.io/analyze-deal",
    role: "Lead Frontend Engineer",
    image: dealAnay,
  },
  {
    date: "BPO Homes",
    title: "Agents Program",
    description: (
      <>
        {" "}
        A web app that help real estate agents register manage
        <br />
        their Real estate agent programs
      </>
    ),
    link: "https://testing.bpohomes.com/agentComp",
    role: "Fronted Engineer",
    image: agent,
  },
  {
    date: "JMGC",
    title: " Competitor Analysis",
    description: (
      <>
        A web app that help business owners track what their competitor
        <br />
        business owners are posting on their social media platforms
      </>
    ),
    link: "https://testing.jmgc.io/",
    role: "Frontend Engineer",
    image: jmgc,
  },
  {
    date: "JMGC",
    title: "Transclosures",
    description: (
      <>
        A CRM platform that help business owners manage tasks
        <br />
        thus, assign task task to individuals, groups, and create calender
        events
      </>
    ),
    link: "#",
    role: "Frontend Engineer",
    image: trans,
  },
  {
    date: "Gamkrib (2020__2022)",
    title: "Gamkrib GH",
    description: (
      <>
        A web app for finding accommodation off campus
        <br />
        thus, assign task task to individuals, groups, and create calender
        events
      </>
    ),
    link: "#",
    role: "Lead Frontend Engineer",
    image: gamk,
  },
];
