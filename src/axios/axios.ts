import axios from "axios";

const plainApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

export default plainApi;
