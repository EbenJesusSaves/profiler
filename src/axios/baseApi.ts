import axios, { InternalAxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

const base = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

base.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession();
    const access = session?.token;
    console.log(access);
    if (access) {
      const token = access;
      console.log(token);

      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default base;
