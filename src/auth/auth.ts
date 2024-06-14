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
      async authorize(credentials): Promise<User | null> {
        console.log(credentials);
        try {
          const {
            data: { data },
          } = await plainApi.post("/signin", credentials);

          return { name: data.username, email: data.email, token: data.token };
        } catch (error) {
          throw new Error(" there is no user found");
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account, session, trigger }) {
      console.log(token, user, account, session, trigger);
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },

    async session({ session, token, user }) {
      session = { ...token, ...session, ...user };
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
