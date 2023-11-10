"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {
    console.log(user);
  };

  return (
    <div className="bg-yellow-200 flex flex-col gap-2 justify-center align-center h-[100vh]">
      <h1 className="mb-4">hello signUp</h1>

      <label htmlFor="username">
        user Name :
        <input className="p-2" type="text" placeholder="User Name" id="userName" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
      </label>

      <label htmlFor="email">
        email :
        <input className="p-2" type="text" placeholder="User Name" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </label>

      <label htmlFor="password">
        Password :
        <input className="p-2" type="text" placeholder="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
      </label>

      <button className="border border-4 border-violet-800" onClick={onSignUp}>
        Sign Up
      </button>
      <Link href="/login">login visit</Link>
    </div>
  );
}
