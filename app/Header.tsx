"use client";
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useSession } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <p>Header</p>
      {session ? <Logout /> : <Login />}
      <img
        src={session?.user?.image ?? undefined}
        alt={session?.user?.name ?? "guest"}
      />
      <p>{session?.user?.name ?? "guest"}</p>
    </div>
  );
};
