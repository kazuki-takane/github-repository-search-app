"use client";
import React from "react";
import { RepoListItem } from "./RepoListItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { numOfPagesInRepos, searchedRepos } from "./state/searchedRepos";
import { Pagination } from "./Pagination";
import { currentPage } from "./state/currentPage";

export const RepoList = () => {
  const repos = useRecoilValue<Array<any>>(searchedRepos);
  const numOfPages = useRecoilValue<number>(numOfPagesInRepos);
  console.log(repos);
  const [numOfCurrentPage, setNumOfCurrentPage] = useRecoilState(currentPage);
  console.log(currentPage);
  const displayedRepos = repos.slice().splice(numOfCurrentPage * 10, 10);

  return (
    <div>
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
        <p>見つかりませんでした</p>
      )}
    </div>
  );
};
