"use client";

import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, TextInput } from "@mantine/core";
import { useParams } from "next/navigation";

interface SignIn {
  username: string;
  password: string;
}

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const callbackUrl = params;
  const [error, setError] = useState("");
  const form = useForm<SignIn>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (value.length >= 2 ? null : "u"),
      password: (value) =>
        value?.length >= 2
          ? null
          : "Password must be at least 6 characters long",
    },
  });

  const handleFormSubmit = async (vals: SignIn) => {
    const { password, username } = vals;

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("There is an error here so fix it ");
        return;
      }
      router.replace("/admin");
    } catch (error) {}
  };

  console.log(error);
  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key("username")}
        {...form.getInputProps("username")}
      />
      <TextInput
        withAsterisk
        label="Password"
        type="password"
        placeholder="your most secure password"
        key={form.key("password")}
        {...form.getInputProps("password")}
      />
      <Button type="submit">Submit</Button>
      {error}
    </form>
  );
};

export default Page;
