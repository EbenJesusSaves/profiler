import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import getServerSession from "next-auth/next";
import { authOptions } from "@/auth/auth";
import { auth, BASE_PATH } from "@/auth/auth";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebenezer' Work Progress",
  description: "Ebenezer's portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
    };
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider basePath={BASE_PATH} session={session}>
          <MantineProvider> {children} </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
