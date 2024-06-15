"use client";
import base from "@/axios/baseApi";
import { Container, Flex, Image, Paper, Text, rem } from "@mantine/core";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
interface Post {
  comments_body: string;
  id: number;
  title: string;
  body: string;
  date: string;
  tags: string[];
  image: string;
  comment_post_id: number;
}

const Page = () => {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    if (!id) return;
    (async () => {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await base.get(`/admin/post/${id}`);
        setLoading(false);
        setPost(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [id]);
  console.log(post);

  const parser = parse(`${post?.body}`);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container
        size={"lg"}
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Paper shadow="1" bg={"#080402"}>
          <Image
            radius="md"
            src={post?.image}
            h={300}
            w={1000}
            fit="cover"
            alt=""
          />
          <Text fw={700} fz={rem(60)} c={"white"}>
            {post?.title}{" "}
          </Text>
          <Flex my={10}>
            {post?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-custom-blue rounded-sm mr-2 text-[0.6rem] px-2 py-2 text-white"
              >
                {tag}
              </span>
            ))}
          </Flex>
          <div style={{ color: "white" }}>{parser}</div>
        </Paper>
      </Container>
    </div>
  );
};

export default Page;
