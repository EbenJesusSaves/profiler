"use client";
import base from "@/axios/baseApi";
import { Article, Post } from "@/types/types";
import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
  Group,
  Code,
  Paper,
  Avatar,
  Indicator,
  Stack,
  Card,
  Badge,
  Image,
  Modal,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import s from "../../components/admin/nav/Navabar.module.css";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconArmchair,
  IconTransform,
  IconAlignJustified,
  IconCalendarMonth,
  IconBrandLivewire,
  IconScanEye,
  IconThumbUp,
  IconMessages,
  IconPhone,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { getSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { upperFirst } from "@mantine/hooks";
import { Chart } from "@/components/admin/Chart";
import pic from "/public/avatars/pca.jpg";
import {
  formatDate,
  getCurrentDateFormatted,
} from "@/components/util/functions";
import Link from "next/link";
import { notifications } from "@mantine/notifications";
import { useDispatch, useSelector } from "react-redux";
import { editPosts } from "../lib/slice/postSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { Posts } from "@/components/admin/dashboard/posts";
import Loader from "@/components/loaders/Loader";

const data = [
  { link: "", label: "Home", icon: IconArmchair },
  { link: "", label: "Posts", icon: IconAlignJustified },
  { link: "", label: "Drafts", icon: IconTransform },
  { link: "", label: "Settings", icon: IconSettings },
];

const Page = () => {
  const [active, setActive] = useState("Home");
  const [session, setSession] = useState<Session | null>();
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const router = useRouter();
  // getting user session
  useEffect(() => {
    (async () => {
      const session = await getSession();
      setSession(session);
    })();
  }, []);

  const Home = (
    <>
      <>
        <Flex justify={"space-between"}>
          <Text c={"white"} mb={20} fw={700} fz={20}>
            Engagement
          </Text>
        </Flex>
        <Chart />
      </>
      <div style={{ alignSelf: "center" }}>
        <Text c={"white"} my={20} fw={700} fz={20}>
          Recent Posts
        </Text>
        <Flex wrap={"wrap"} justify={"space-between"}>
          {posts?.slice(0, 3).map((post) => (
            <Card
              mb={20}
              w={300}
              key={post.id}
              shadow="sm"
              padding="lg"
              radius="md"
              bg={"rgb(16, 3, 24)"}
              withBorder
            >
              <Card.Section>
                <Image
                  src={post.image}
                  height={"130"}
                  style={{ height: 140 }}
                  alt="Norway"
                />
              </Card.Section>
              <Modal
                opened={slowTransitionOpened}
                onClose={() => setSlowTransitionOpened(false)}
                title={
                  <Text c={"white"} fz={16}>
                    Do you want to delete this post{" "}
                  </Text>
                }
                transitionProps={{ transition: "rotate-left" }}
              >
                <Flex gap={10}>
                  <Button color="blue" fullWidth mt="md" radius="md">
                    No
                  </Button>
                  <Button
                    onClick={() => deletePost(post)}
                    color="red"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    Yes
                  </Button>
                </Flex>
              </Modal>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} c={"white"}>
                  {post.title}
                </Text>
              </Group>

              <Text size="sm" c="dimmed">
                {formatDate(post.date)}
              </Text>

              <Flex gap={10}>
                <Button
                  color="blue"
                  onClick={() => editPostFunc(post)}
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => setSlowTransitionOpened(true)}
                  color="red"
                  fullWidth
                  loading={deleteLoader}
                  mt="md"
                  radius="md"
                >
                  Delete
                </Button>
              </Flex>
            </Card>
          ))}
        </Flex>
      </div>
    </>
  );

  const returnCurrentPage = () => {
    switch (active) {
      case "Home":
        return Home;
      case "Posts":
        return <Posts posts={posts} active={active} />;
      case "Drafts":
        return <Posts posts={posts} active={active} />;
    }
  };

  const links = data.map((item) => (
    <a
      className={s.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={s.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const deletePost = async (post: Post) => {
    const { id, posted_by } = post;
    setDeleteLoader(true);
    try {
      await base.delete(`/admin/delete_post?id=${id}&posted_by=${posted_by}`);
      notifications.show({
        title: "Success 🎉🎉🎉",
        color: "green",
        message: "Post deleted",
      });
      setDeleteLoader(false);
    } catch (error) {
      setDeleteLoader(false);
      console.log(error);
    } finally {
      setSlowTransitionOpened(false);
    }
  };

  const editPost = async (post: Article) => {
    const { title, body, image, tags, id, posted_by } = post;
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (!session?.user.name) return;
      try {
        setLoading(true);
        if (active === "Drafts") {
          const {
            data: { data },
          } = await base.get(`/admin/draft_posts/${session?.user.name}`);

          setPosts(data);
        } else {
          const {
            data: { data },
          } = await base.get(`/admin/admin_posts/${session?.user.name}`);
          setPosts(data);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [session?.user.name, active]);

  // edit post function
  const editPostFunc = (post: Post) => {
    dispatch(editPosts(post));
    router.push("user/admin");
  };

  return (
    <Container fluid>
      <Grid columns={12}>
        <Grid.Col span={{ sm: 10, md: 2, lg: 1.9 }}>
          <nav className={s.navbar}>
            <div className={s.navbarMain}>
              <Group className={s.header} justify="space-between">
                <Link href={"/portfolio"}>
                  <Text
                    fw={700}
                    fz={30}
                    c={"white"}
                    style={{ cursor: "pointer" }}
                  >
                    Posts
                  </Text>{" "}
                </Link>
                <Code fw={700}>2.223</Code>
              </Group>
              {links}
            </div>

            <div className={s.footer}>
              <button
                className={s.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconSwitchHorizontal className={s.linkIcon} stroke={1.5} />
                <span>Change account</span>
              </button>

              <div className={s.link} onClick={() => signOut()}>
                <IconLogout className={s.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </div>
            </div>
          </nav>
        </Grid.Col>
        <Divider orientation="vertical" />
        <Grid.Col span={{ sm: 10, md: 8, lg: 8 }}>
          <Container mt={20}>
            <Flex justify={"space-between"} align={"center"}>
              <Paper bg={"transparent"}>
                <Text fw={700} fz={30} c={"white"}>
                  Hello, {upperFirst(`${session?.user.name}`)}
                </Text>
                <Text>Here is a summery of your writing progress🎉🎉</Text>
              </Paper>
              <Paper bg={"transparent"}>
                <Text
                  fw={600}
                  fz={10}
                  c={"white"}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  {getCurrentDateFormatted()}
                  <span
                    style={{
                      backgroundColor: "gray",
                      padding: 5,
                      borderRadius: 15,
                    }}
                  >
                    <IconCalendarMonth size="20" />
                  </span>
                </Text>
              </Paper>
            </Flex>
            <Divider mt={40} />
            <Flex align={"center"} justify={"space-between"}>
              <div>
                <Flex align={"center"} gap={10}>
                  <div
                    style={{
                      backgroundColor: "rgba(3, 16, 158, 0.322)",
                      padding: 6,
                      borderRadius: 20,
                    }}
                  >
                    <IconScanEye color="#3697FF" />
                  </div>
                  <div>
                    <Text>Post views</Text>
                    <Text fw={700} fz={20} c={"white"}>
                      0{" "}
                      <span style={{ color: "green", fontSize: 10 }}>
                        {" "}
                        total
                      </span>
                    </Text>
                  </div>
                </Flex>
              </div>
              <Divider orientation="vertical" h={60} mt={5} />
              <div>
                <Flex align={"center"} gap={10}>
                  <div
                    style={{
                      backgroundColor: "rgba(3, 16, 158, 0.322)",
                      padding: 6,
                      borderRadius: 20,
                    }}
                  >
                    <IconThumbUp color="#3697FF" />
                  </div>
                  <div>
                    <Text>Post Reactions</Text>
                    <Text fw={700} fz={20} c={"white"}>
                      0{" "}
                      <span style={{ color: "green", fontSize: 10 }}>
                        {" "}
                        total
                      </span>
                    </Text>
                  </div>
                </Flex>
              </div>
              <Divider orientation="vertical" h={60} mt={5} />
              <div>
                <Flex align={"center"} gap={10}>
                  <div
                    style={{
                      backgroundColor: "rgba(3, 16, 158, 0.322)",
                      padding: 6,
                      borderRadius: 20,
                    }}
                  >
                    <IconMessages color="#3697FF" />
                  </div>
                  <div>
                    <Text>Total Comments</Text>
                    <Text fw={700} fz={20} c={"white"}>
                      0{" "}
                      <span style={{ color: "green", fontSize: 10 }}>
                        {" "}
                        total
                      </span>
                    </Text>
                  </div>
                </Flex>
              </div>
            </Flex>
            <Divider mb={40} />
            {loading ? (
              <Grid style={{ width: "60rem" }}>
                <Grid.Col span={{ sm: 10, md: 6, lg: 4 }}>
                  <Loader />
                </Grid.Col>
                <Grid.Col span={{ sm: 10, md: 6, lg: 4 }}>
                  <Loader />
                </Grid.Col>
                <Grid.Col span={{ sm: 10, md: 6, lg: 4 }}>
                  <Loader />
                </Grid.Col>
              </Grid>
            ) : (
              returnCurrentPage()
            )}
          </Container>
        </Grid.Col>
        <Divider orientation="vertical" />
        <Grid.Col
          span={{ sm: 10, md: 2, lg: 2 }}
          style={{ justifyContent: "center", marginTop: 20 }}
        >
          {" "}
          <Paper
            ml={10}
            h={200}
            w={"100%"}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Indicator inline size={16} offset={7} color="#3c97ff" withBorder>
              <div
                style={{
                  border: "solid",
                  borderColor: "white",
                  borderRadius: 30,
                }}
              >
                <Avatar
                  size={"lg"}
                  src={
                    "https://res.cloudinary.com/djzn1iixv/image/upload/v1719059541/gzdyhpo1htgu3luzuxt9.jpg"
                  }
                />
              </div>
            </Indicator>
            <Paper
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              mt={10}
            >
              <Text fw={600} c={"white"}>
                {session?.user.name}
              </Text>
              <div>
                <Text size="sm"> {session?.user.email}</Text>
              </div>
              <Flex gap={20} mt={10}>
                <div
                  style={{
                    backgroundColor: "rgba(3, 16, 158, 0.322)",
                    padding: 6,
                    borderRadius: 20,
                  }}
                >
                  {" "}
                  <IconBrandLinkedin color="#3697FF" />
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(3, 16, 158, 0.322)",
                    padding: 6,
                    borderRadius: 20,
                  }}
                >
                  {" "}
                  <IconPhone color="#3697FF" />
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(3, 16, 158, 0.322)",
                    padding: 6,
                    borderRadius: 20,
                  }}
                >
                  {" "}
                  <IconBrandGithub color="#3697FF" />
                </div>
              </Flex>
              <Link href={"user/admin"}>
                {" "}
                <Button mt={5} fullWidth>
                  Write something today Champ🎉{" "}
                </Button>
              </Link>
            </Paper>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Page;
