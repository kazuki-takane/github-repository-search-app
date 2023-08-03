"use server";
import React from "react";

import { InputRepoItems } from "./InputRepoItems";

export const searchRepos = async (inputValue: string) => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${inputValue}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }
  const result = await res.json();
  const resultItems = await result.items;
  return resultItems;
};

export const InputRepo = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-medium">GitHubリポジトリ検索</h2>
        <InputRepoItems />
    </div>
  );
};
