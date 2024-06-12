"use client;";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignIn() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const submitForm = async (e) => {
    e.preventDefault();
    signIn("credentials", { password, username, redirect: false });
    console.log(pasword, username);
  };
  return (
    <form>
      <label>
        Email
        <input
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Password
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </label>
      <button onClick={submitForm}>Sign In</button>
    </form>
  );
}
