"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { isRepoDialogOpen } from "../app/state/isRepoDialogOpen";
import { clickedRepo } from "../app/state/clickedRepo";

export const RepoDetailDialog = () => {
  const [isOpen, setIsOpen] = useRecoilState(isRepoDialogOpen);
  const repo = useRecoilValue(clickedRepo);

  const handleExceptClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    } else return;
  };

  return (
    <>
      {isOpen && (
        <div
          className="bg-gray-400/50 fixed inset-0 w-screen h-screen"
          onClick={handleExceptClick}
        >
          <div className="bg-white fixed inset-0 m-auto w-11/12 max-w-screen-sm h-5/6 overflow-scroll">
            <p>This is a modal window.</p>
            <div className="flex items-center">
              <div>
                <img
                  className="rounded-full"
                  src={`${repo.owner.avatar_url}`}
                  alt={`${repo.owner.login}`}
                />
              </div>
              <h3>{repo.full_name}</h3>
            </div>
            <p>プロジェクト言語: {repo.language}</p>
            <p>Star数: {repo.stargazers_count}</p>
            <p>Watcher数: {repo.watchers_count}</p>
            <p>Fork数: {repo.forks_count}</p>
            <p>Issue数: {repo.open_issues_count}</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
