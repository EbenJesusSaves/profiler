import { handlers } from "@/app/auth";
type Credentials = {
  username: string;
  password: string;
};

export const { GET, POST } = handlers;
