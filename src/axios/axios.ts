import axios, { InternalAxiosRequestConfig } from "axios";
import { useSession } from "next-auth/react";
const plainApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

// axios interceptions
export const base = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

base.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = useSession();
    if (session) {
      config.headers["Authorization"] = ` Bearer ${session}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default plainApi;
