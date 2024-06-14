import plainApi from "@/axios/axios";
import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

export const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any | null> {
        console.log(credentials);
        try {
          const {
            data: { data },
          } = await plainApi.post("/signin", credentials);
          const user = data;
          console.log(user);
          return data;
        } catch (error) {
          throw new Error(" there is no user found");
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, ...user };
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },

  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
