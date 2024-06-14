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
    user: {
      token: string;
    } & DefaultSession["user"];
  }
}
