"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { RepoListItem } from "./RepoListItem";
import { Pagination } from "./Pagination";
import { numOfPagesInRepos, searchedRepos } from "../state/searchedRepos";
import { currentPage } from "../state/currentPage";
import { isSearching } from "../state/isSearching";
import { RepoData } from "../types/types";

export const RepoList = () => {
  const repos = useRecoilValue<Array<RepoData>>(searchedRepos);
  const numOfPages = useRecoilValue<number>(numOfPagesInRepos);
  const searching = useRecoilValue<boolean | null>(isSearching);
  const [numOfCurrentPage, setNumOfCurrentPage] =
    useRecoilState<number>(currentPage);
  console.log(repos);
  console.log(currentPage);
  const displayedRepos = repos.slice().splice(numOfCurrentPage * 10, 10);

  return (
    <div className="mt-8">
      {searching && <p>検索中...</p>}
      {repos.length ? (
        <div>
          <ul>
            {displayedRepos.map((repo) => (
              <RepoListItem key={repo.id} repo={repo} />
            ))}
          </ul>
          <Pagination
            currentPage={numOfCurrentPage}
            numOfPages={numOfPages}
            setNumOfCurrentPage={setNumOfCurrentPage}
          />
        </div>
      ) : (
        <div>
          {searching === null && <p></p>}
          {searching === false && <p>見つかりませんでした</p>}
        </div>
      )}
    </div>
  );
};
