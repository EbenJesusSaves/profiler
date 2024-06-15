import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
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
  let session = await auth();

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "black" }}>
        <SessionProvider basePath={BASE_PATH} session={session}>
          <MantineProvider defaultColorScheme="dark">
            {" "}
            {children}{" "}
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
