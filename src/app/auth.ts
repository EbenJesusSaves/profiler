import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "Sign in as Admin",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;
        let user = null;
        console.log(username);
        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/signin`,
            {
              username,
              password,
            },
            {
              headers: {
                Accept: "application/json",
              },
            }
          );

          return (user = data);
        } catch (error) {
          console.log(error);
        }

        if (!user) {
          return null;
        }

        return null;
      },
    }),
  ],
});
