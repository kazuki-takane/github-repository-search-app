"use client";
import React, { useState } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

import { searchedRepos } from "../state/searchedRepos";
import { isSearched } from "../state/isSearched";
import { currentPage } from "../state/currentPage";
import { RepoData } from "../types/types";
import { searchRepos } from "./InputRepo";

export const InputRepoItems = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const setRepos: SetterOrUpdater<Array<RepoData>> =
    useSetRecoilState(searchedRepos);
  const setIsSearched: SetterOrUpdater<boolean> = useSetRecoilState(isSearched);
  const setCurrentPage: SetterOrUpdater<number> =
    useSetRecoilState(currentPage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = async () => {
    const searchedRepoList = await searchRepos(inputValue);
    await setRepos(searchedRepoList);
    await setIsSearched(true);
    await setCurrentPage(0);
  };

  const pressEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchedRepoList = await searchRepos(inputValue);
      await setRepos(searchedRepoList);
      await setIsSearched(true);
      await setCurrentPage(0);
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
        検索する
      </button>
    </div>
  );
};
