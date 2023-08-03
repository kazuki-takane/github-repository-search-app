"use client";
import React, { memo, useState } from "react";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";

import { searchedRepos } from "../state/searchedRepos";
import { isSearching } from "../state/isSearching";
import { currentPage } from "../state/currentPage";
import { RepoData } from "../types/types";
import { searchRepos } from "./InputRepo";

export const InputRepoItems = memo(() => {
  const [inputValue, setInputValue] = useState<string>("");
  const setRepos: SetterOrUpdater<Array<RepoData>> =
    useSetRecoilState(searchedRepos);
  const [searching, setSearching] = useRecoilState(isSearching);
  const setCurrentPage: SetterOrUpdater<number> =
    useSetRecoilState(currentPage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //検索ボタンクリックでリポジトリを検索する
  const handleSearch = async () => {
    if (inputValue === "") {
      return;
    }
    setSearching(true);
    const searchedRepoList = await searchRepos(inputValue);
    setRepos(searchedRepoList);
    setSearching(false);
    setCurrentPage(0);
  };

  //Enterでもリポジトリを検索する
  const pressEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue === "") {
      return;
    }
    if (e.key === "Enter") {
      setSearching(true);
      const searchedRepoList = await searchRepos(inputValue);
      setRepos(searchedRepoList);
      setSearching(false);
      setCurrentPage(0);
    }
  };

  return (
    <div className="mt-4 flex justify-center items-center">
      <input
        className="border-2 rounded border-slate-200 focus:outline-1 outline-cyan-400 text-md md:text-lg p-1 mr-4"
        type="text"
        onChange={handleChange}
        onKeyDown={pressEnter}
      />
      <button
        className="bg-cyan-500 text-white rounded py-1 px-2 hover:opacity-70"
        onClick={handleSearch}
      >
        {searching ? "検索中" : "検索"}
      </button>
    </div>
  );
});
