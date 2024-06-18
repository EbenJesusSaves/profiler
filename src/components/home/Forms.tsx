"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "../util/cn";
import { TextArea } from "../ui/TextArea";
import Link from "next/link";
import plainApi from "@/axios/axios";
import { notifications } from "@mantine/notifications";
import { Button, Loader } from "@mantine/core";

export function GetInTouch() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [loadingForm, setLoadingForm] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", e);
    setLoadingForm(true);
    try {
      const { data } = await plainApi.post("/email/", {
        clientAccount: email,
        clientEmail: body,
        clientSubject: name,
      });
      notifications.show({
        color: "green",
        title: "Great 🎉🎉🎉Email Sent",
        message:
          "Great check your provided email for acknowledgement of receipt",
      });

      setLoadingForm(false);
    } catch (error) {
      notifications.show({
        color: "red",
        title: "Opps!! 😔😔😔Email sending failed",
        message: "Check your provided email well or try again please",
      });
      console.log(error);
      setLoadingForm(false);
    }
  };

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form?.current, {
  //       publicKey: "YOUR_PUBLIC_KEY",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className="flex flex-col space-y-4 mb-10">
        <Link
          href="https://github.com/EbenJesusSaves"
          target="_blank"
          className="mt-1"
        >
          <button className=" relative  group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />

            <span className="text-neutral-700 dark:text-neutral-300 text-md ">
              <a>GitHub Account</a>
            </span>

            <BottomGradientGithub />
          </button>
        </Link>

        <button
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Google
          </span>
          <BottomGradient />
        </button>
      </div>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Send me a mail
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Send me a quick mail and let talk more about our plans together
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Full Name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="firstname"
              placeholder="Full Name"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Your Email Address</Label>
          <Input
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Message</Label>
          <TextArea
            required
            id="password"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Your message here"
            type="text"
            className="text-wrap h-48 whitespace-normal"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loadingForm ? (
            <Loader size={"sm"} c={"gray"} />
          ) : (
            <>Send mail &rarr;</>
          )}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export const BottomGradientGithub = () => {
  return (
    <>
      <span className="opacity-100 block transition duration-500 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="opacity-100 blur-sm block transition duration-500  absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
