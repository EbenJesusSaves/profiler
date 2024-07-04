"use client";

import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Container, Flex, Text, TextInput } from "@mantine/core";
import { useParams } from "next/navigation";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import plainApi from "@/axios/axios";

interface SignIn {
  username: string;
  email: string;
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
      email: "",
      password: "",
    },
    validate: {
      username: (value) => (value.length >= 2 ? null : "Username is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value?.length >= 2
          ? null
          : "Password must be at least 6 characters long",
    },
  });

  const handleFormSubmit = async (vals: SignIn) => {
    const { password, username, email } = vals;
    setLoading(true);
    try {
      const { data } = await plainApi.post("/createuser", {
        username,
        password,
        email,
      });

      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        notifications.show({
          color: "red",
          title: "Oh No! Something went wrong, 😔😔😔",
          message: "Account Creation Field, Try Again",
        });
        setLoading(false);
        return;
      }
      notifications.show({
        color: "green",
        title: "Huzza! Welcome Aboard,🎉🎉🎉",
        message: "Account Created, Don't Try Again!",
      });
      router.replace("/user/admin");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      notifications.show({
        color: "red",
        title: "Opps!something went wrong,😔😔",
        message: "Account Created Failed,  Try Again!",
      });
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
      <Text fz={60} c="white" ta={"center"} fw={700}>
        Feel like writing today?
      </Text>
      <Text fz={40} c="white" ta={"center"} fw={700}>
        Create account let Rock 🚀🎉
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
          label="Email"
          placeholder="Your super email here"
          key={form.key("email")}
          {...form.getInputProps("email")}
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
          Create Account
        </Button>
        <Flex mt={"10"} gap={4} justify={"center"}>
          <Text fz={12}>Already have an account?</Text>

          <Link href={"/signin"}>
            <Text
              ta={"center"}
              fz={12}
              style={{ textDecoration: "underline" }}
              c={"blue"}
            >
              Sign In
            </Text>
          </Link>
        </Flex>
      </form>
    </Container>
  );
};

export default Page;
