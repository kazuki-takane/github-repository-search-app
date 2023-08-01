"use client";
import React, { useState, memo } from "react";
import { useSetRecoilState } from "recoil";
import useSWRMutation from "swr/mutation";
import { searchedRepos } from "./state/searchedRepos";

export const InputRepo = memo(() => {
  const [inputValue, setInputValue] = useState<string>("");
  const setRepos = useSetRecoilState(searchedRepos);

  const fetcher = (url: string) =>
    fetch(url)
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

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      trigger();
    }
  };

  // debug
  console.log("data", data);
  console.log("error", error);

  return (
    <div>
      <h2 className="text-xl md:text-3xl font-medium">GitHubリポジトリ検索</h2>
      <div className="mt-4 flex justify-center items-center">
        <input
          className="border-2 rounded border-slate-200 focus:outline-1 outline-cyan-400 text-md md:text-lg p-1 mr-4"
          type="text"
          onChange={handleChange}
          onKeyDown={pressEnter}
        />
        <button
          className="bg-cyan-500 text-white rounded py-1 px-2 hover:opacity-70"
          onClick={() => trigger()}
        >
          {isMutating ? "検索中" : "検索する"}
        </button>
      </div>
    </div>
  );
});
