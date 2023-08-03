"use server";
import React from "react";
import { HeaderItems } from "./HeaderItems";
import { Session } from "next-auth";

export const getUserInfo = async (session: Session | null) => {
  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "Bearer " + session?.user.accessToken,
    },
  });
  const result = await res.json();
  return result;
};

export const getUserRepos = async (session: Session | null) => {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: "Bearer " + session?.user.accessToken,
    },
  });
  const result = await res.json();
  return result;
};

export const Header = () => {
  return (
    <header>
      <HeaderItems />
    </header>
  );
};
