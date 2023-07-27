"use client";
import React, { useState, memo } from "react";
import { useRecoilState } from "recoil";
import useSWRMutation from "swr/mutation";
import { searchedRepos } from "./state/searchedRepos";


export const InputRepo = memo(() => {
  const [inputValue, setInputValue] = useState<string>("");
  const [Repos, setRepos] = useRecoilState(searchedRepos);
  
  const fetcher = async (url: string) =>
    await fetch(url)
      .then((res) => res.json())
      .then((result) => result.items)
      .then((items) => setRepos(items));
      
  const { data, trigger, isMutating } = useSWRMutation(
    `https://api.github.com/search/repositories?q=${inputValue}`,
    fetcher
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    trigger();
  };

  return (
    <li>
      <h2>GitHubリポジトリ検索</h2>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          検索{isMutating ? "中" : "する"}
        </button>
      </div>
    </li>
  );
});
