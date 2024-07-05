import base from "@/axios/baseApi";

import { formatDate } from "@/components/util/functions";
import { Post } from "@/types/types";
import { Button, Card, Flex, Group, Image, Modal, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { editPosts } from "@/app/lib/slice/postSlice";
import { useAppDispatch } from "@/app/lib/hooks";
export const Posts = ({
  posts,
  active,
}: {
  posts: Post[] | undefined;
  active: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const deletePost = async (post: Post) => {
    const { id, posted_by, created_by } = post;
    console.log(id);
    setDeleteLoader(true);
    try {
      if (active === "Drafts") {
        await base.delete(
          `/admin/delete_post?id=${id}&created_by=${created_by}`
        );
        notifications.show({
          title: "Success 🎉🎉🎉",
          color: "green",
          message: "Draft deleted",
        });
      } else {
        await base.delete(`/admin/delete_post?id=${id}&posted_by=${posted_by}`);
        notifications.show({
          title: "Success 🎉🎉🎉",
          color: "green",
          message: "Post deleted",
        });
      }

      setDeleteLoader(false);
    } catch (error) {
      setDeleteLoader(false);
    } finally {
      setSlowTransitionOpened(false);
    }
  };

  const editPostFunc = (post: Post) => {
    dispatch(editPosts(post));
    router.push("user/admin");
  };

  return (
    <>
      <Flex justify={"space-between"}>
        <Text c={"white"} mb={20} fw={700} fz={20}>
          {` Your Collection of ${
            active === "Posts" ? "posts" : "drafts"
          } over time`}
        </Text>
      </Flex>
      <Flex wrap={"wrap"} justify={"space-between"}>
        {posts?.map((post) => (
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
            <Card.Section component="a" href="">
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
    </>
  );
};
