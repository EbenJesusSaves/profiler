"use client";
import base from "@/axios/baseApi";
import {
  Avatar,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import PageLoader from "@/components/loaders/PageLoader";
import { formatDate, getInitials } from "@/components/util/functions";
import { LabelInputContainer } from "@/components/home/Forms";
import { Label } from "@/components/ui/Label";
import { TextArea } from "@/components/ui/TextArea";
import { getSession } from "next-auth/react";
import { notifications } from "@mantine/notifications";
import plainApi from "@/axios/axios";
interface Post {
  comments_body: string;
  id: number;
  title: string;
  body: string;
  date: string;
  tags: string[];
  image: string;
  comments: { body: string; post_id: number; commented_by: string }[];
  posted_by: string;
}

interface GetPosts {
  data: Post;
}

interface CommentType {
  body: string;
  post_id: number;
  commented_by: string;
}
const Page = () => {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState<CommentType[]>();
  const [session, setSession] = useState<string>();

  const [loadingSession, setLoadingSession] = useState(false);
  useEffect(() => {
    (async () => {
      const session = await getSession();

      setSession(session?.user?.name);
    })();
  }, []);

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    if (!id) return;
    (async () => {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await base.get(`/post/${id}`);
        setLoading(false);
        setPost(data);
        setPostComments(data.comments);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [id]);

  const submitComment = async () => {
    setLoadingComment(true);
    const commentObject = {
      post_id: id[0],
      commented_by: session,
      body: comment,
    };
    try {
      const {
        data: { data },
      } = await plainApi.post("/post_comments/", commentObject);
      const newComment = data[0];
      setPostComments((prev) => [newComment, ...(prev as CommentType[])]);
      notifications.show({
        color: "green",
        title: "Huzza! 🎉🎉🎉",
        message: "Comment added successfully",
      });
      setLoadingComment(false);
    } catch (error) {
      notifications.show({
        color: "red",
        title: "Oh Noo! 😔😔😔",
        message: "Unable to add Comment, Try again",
      });
      setLoadingComment(false);
    }
  };

  const parser = parse(`${post?.body}`);

  return (
    <div style={{ backgroundColor: "black" }}>
      {loading ? (
        <>Loading </>
      ) : (
        // <Container>
        //   {/* <PageLoader /> */}
        //   Lo
        // </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#05011a",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <div>
            <Image
              radius="md"
              src={post?.image}
              h={300}
              w={1000}
              fit="cover"
              alt=""
            />
            <Flex align={"center"} my={10}>
              <Avatar src={null} alt="Vitaly Rtishchev" color="pink"></Avatar>

              <div>
                <Text fz={"sm"} c={"white"} fw={600} m={0} p={0}>
                  {post?.posted_by}
                </Text>
                <div className="text-blue-100 text-[0.6rem] mt-0 p-0">
                  {post?.date && formatDate(post?.date as string)}
                </div>
              </div>
            </Flex>
            <Text fw={700} fz={rem(48)} c={"white"}>
              {post?.title}{" "}
            </Text>
            <Flex my={10}>
              {post?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-custom-blue rounded-sm mr-2 text-[1rem] px-2 py-2 text-white"
                >
                  {tag}
                </span>
              ))}
            </Flex>
            <div style={{ color: "white" }}>{parser}</div>
          </div>
          <Group style={{ alignSelf: "start" }} mt={20}>
            <Text c="white" fz={30} fw={700}>
              Top Comments
            </Text>
            <div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">
                  Share your Brilliant tough with this Awesome community
                </Label>
                <TextArea
                  id="password"
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Your message here"
                  type="text"
                  className="text-wrap h-[4rem] w-[53vw] whitespace-normal"
                />
              </LabelInputContainer>
              <Button loading={loadingComment} onClick={submitComment}>
                Submit comment
              </Button>
            </div>
            {!!postComments?.length ? (
              <Stack>
                {postComments?.map((comment) => (
                  <Group key={comment?.post_id + comment.commented_by}>
                    <Flex align={"center"} my={10}>
                      <Avatar src={null} alt="Vitaly Rtishchev" color="blue">
                        {comment?.commented_by &&
                          getInitials(comment?.commented_by)}
                      </Avatar>
                      <div>
                        <Text fz={"sm"} c={"white"} fw={600} m={0} p={0}>
                          {comment?.commented_by}
                        </Text>
                      </div>
                    </Flex>
                    <Card shadow="sm" bg={"black"} withBorder>
                      {comment?.body}
                    </Card>
                  </Group>
                ))}
              </Stack>
            ) : (
              <>No comment 😔😔😔</>
            )}
          </Group>
        </Container>
      )}
    </div>
  );
};

export default Page;
