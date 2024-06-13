import { Container, Grid, Text, Timeline, rem } from "@mantine/core";
import {
  IconCheck,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import React from "react";

const Experience = () => {
  return (
    <Container
      size={"xl"}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid justify="space-between" align="flex-start">
        <Grid.Col span={4}>
          <Timeline active={1} bulletSize={24} lineWidth={1}>
            <Timeline.Item
              bullet={<IconGitBranch size={12} />}
              title={
                <Text style={{ fontWeight: 700, fontSize: 20 }} c={"white"}>
                  Front End
                </Text>
              }
            >
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                React
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Next.Js
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Vue.js
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Astro
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Gasby
              </Text>
              <Text size="xs" c="dimmed" mt={4}>
                etc
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconGitCommit size={12} />}
              title={
                <Text style={{ fontWeight: 700, fontSize: 20 }} c={"white"}>
                  Back End
                </Text>
              }
            >
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Node.js
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Express.js
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Postgres
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Firebase
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Mongo DB
              </Text>
              <Text size="xs" c="dimmed" mt={4}>
                etc
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title={
                <Text style={{ fontWeight: 100 }} c={"white"}>
                  .................
                </Text>
              }
              bullet={<IconGitPullRequest size={12} />}
              lineVariant="dashed"
            ></Timeline.Item>
          </Timeline>
        </Grid.Col>
        <Grid.Col span={4}>
          <Timeline active={1} bulletSize={24} lineWidth={1}>
            <Timeline.Item
              bullet={<IconGitBranch size={12} />}
              title={
                <Text style={{ fontWeight: 700, fontSize: 20 }} c={"white"}>
                  Mobile Development
                </Text>
              }
            >
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                React Native
              </Text>

              <Text size="xs" c="dimmed" mt={4}>
                etc
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconGitCommit size={12} />}
              title={
                <Text style={{ fontWeight: 700, fontSize: 20 }} c={"white"}>
                  Programming Languages
                </Text>
              }
            >
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                TypeScript
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                JavaScript
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Java
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                C#
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                C++
              </Text>
              <Text size="xs" c="dimmed" mt={4}>
                etc
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title={
                <Text style={{ fontWeight: 700 }} c={"white"}>
                  Other Libraries
                </Text>
              }
              bullet={<IconGitPullRequest size={12} />}
              lineVariant="dashed"
            >
              <Text c="dimmed" size="sm">
                Redux, Form milk, Chart Js, Jest, Auth.js, tailwind, <br />{" "}
                Material UI, Mantine UI, bootstrap, Rechart, <br /> Quill Js,
                Framer Motions, React Calendar, stripe, Axios, Tostify,
                react-pdf, etc.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
        <Grid.Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Timeline active={1} bulletSize={24} lineWidth={1}>
            <Timeline.Item
              bullet={<IconGitBranch size={12} />}
              title={
                <Text style={{ fontWeight: 700, fontSize: 20 }} c={"white"}>
                  UI/UX
                </Text>
              }
            >
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Figma
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Adobe Xd
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Adobe Illustrator
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Adobe Photoshop
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Adobe Indesign
              </Text>
              <Text size="xs" c="dimmed" mt={4}>
                etc
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconGitCommit size={12} />}
              title={
                <Text style={{ fontWeight: 700, fontSize: 20 }} c={"white"}>
                  Back End
                </Text>
              }
            >
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Node.js
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Express.js
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Postgres
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Firebase
              </Text>
              <Text
                c="dimmed"
                size="sm"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconRosetteDiscountCheck size={15} color="gray" />
                Mongo DB
              </Text>
              <Text size="xs" c="dimmed" mt={4}>
                etc
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title={
                <Text style={{ fontWeight: 700 }} c={"white"}>
                  Other Useful Stack
                </Text>
              }
              bullet={<IconGitPullRequest size={12} />}
              lineVariant="dashed"
            >
              <Text c="dimmed" size="sm">
                R , WordPress(CMS), Docker,
                <br />
                <Text variant="link" component="span" inherit>
                  Git, Github
                </Text>
              </Text>
              <Text size="xs" mt={4}></Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Experience;
