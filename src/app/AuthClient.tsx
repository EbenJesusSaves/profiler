"use client";
import { Button } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign Out
    </Button>
  ) : (
    <Button
      onClick={async () =>
        await signIn("credentials", { redirect: false }).then((res) => {
          if (res?.ok) {
            console.log("hi ");
          } else {
            console.log(res?.error);
          }
        })
      }
    >
      Sign In
    </Button>
  );
}
