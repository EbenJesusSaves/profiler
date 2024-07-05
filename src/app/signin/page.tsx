"use client";

import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Container, Flex, Text, TextInput } from "@mantine/core";
import { useParams } from "next/navigation";
import { notifications } from "@mantine/notifications";
import Link from "next/link";

interface SignIn {
  username: string;
  password: string;
}

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const callbackUrl = params;
  const [loading, setLoading] = useState(false);
  const form = useForm<SignIn>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (value.length >= 2 ? null : "Username is required"),
      password: (value) =>
        value?.length >= 2
          ? null
          : "Password must be at least 6 characters long",
    },
  });

  const handleFormSubmit = async (vals: SignIn) => {
    const { password, username } = vals;
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        notifications.show({
          color: "red",
          title: "Oh No!, 😔😔😔",
          message: "Wrong Email or Password!😎",
        });
        setLoading(false);
        return;
      }
      router.replace("/user");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        maxWidth: "40vw",
      }}
    >
      <Text fz={50} c="white" ta={"center"} fw={700}>
        Welcome Back, Great to See you again Champ! 🎉
      </Text>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <TextInput
          withAsterisk
          label="Username"
          placeholder="Enter your username"
          key={form.key("username")}
          {...form.getInputProps("username")}
        />
        <TextInput
          withAsterisk
          label="Password"
          type="password"
          placeholder="Your most secure password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button loading={loading} mt={10} fullWidth type="submit">
          Submit
        </Button>
        <Flex mt={"10"} gap={4} justify={"center"}>
          <Text fz={12}>{"Don't have an account?"}</Text>

          <Link href={"/signup"}>
            <Text
              ta={"center"}
              fz={12}
              style={{ textDecoration: "underline" }}
              c={"blue"}
            >
              Sign Up
            </Text>
          </Link>
        </Flex>
      </form>
    </Container>
  );
};

export default Page;
