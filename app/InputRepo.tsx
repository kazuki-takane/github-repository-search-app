"use client";
import React, { useState, memo } from "react";
import { useSetRecoilState } from "recoil";
import useSWRMutation from "swr/mutation";
import { searchedRepos } from "./state/searchedRepos";

export const InputRepo = memo(() => {
  const [inputValue, setInputValue] = useState<string>("");
  const setRepos = useSetRecoilState(searchedRepos);

  const fetcher = async (url: string) =>
    await fetch(url)
      .then((res) => res.json())
      .then((result) => result.items)
      .then((items) => setRepos(items));

  const { data, trigger, isMutating, error } = useSWRMutation(
    `https://api.github.com/search/repositories?q=${inputValue}`,
    fetcher
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // debug
  console.log("data", data);
  console.log("error", error);

  return (
    <div>
      <h2>GitHubリポジトリ検索</h2>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={() => trigger()}>
          {isMutating ? "検索中" : "検索する"}
        </button>
      </div>
    </div>
  );
});
