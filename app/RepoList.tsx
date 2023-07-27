"use client";
import React from "react";
import { RepoListItem } from "./RepoListItem";
import { useRecoilValue } from "recoil";
import { searchedRepos } from "./state/searchedRepos";

export const RepoList = () => {
  const repos = useRecoilValue<Array<any>>(searchedRepos);
  console.log(repos);
  return (
    <ul>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};
