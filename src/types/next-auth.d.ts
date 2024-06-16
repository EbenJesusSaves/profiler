import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    name: string;
    email: string;
    token: string;
    id?: number;
  }

  interface Session {
    token: string;
    name: string;
    user: {
      name: string;
      email: string;
      token: string;
      id?: number;
    } & DefaultSession["user"];
  }
}
