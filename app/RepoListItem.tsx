import React from "react";
import { useSetRecoilState } from "recoil";
import { isRepoDialogOpen } from "./state/isRepoDialogOpen";
import { clickedRepo } from "./state/clickedRepo";

type Props = {
  repo: any;
};

export const RepoListItem = ({ repo }: Props) => {
  const setIsOpen = useSetRecoilState(isRepoDialogOpen);
  const setClickedRepo = useSetRecoilState(clickedRepo);
  const handleClick = (repo: any) => {
    setIsOpen(true);
    setClickedRepo(repo);
  };
  return (
    <li className="border rounded bg-white mt-4 p-4 shadow cursor-pointer">
      <div className="flex items-center" onClick={() => handleClick(repo)}>
        <div className="w-12 rounded-full mr-4">
          <img
            className="rounded-full"
            src={`${repo.owner.avatar_url}`}
            alt=""
          />
        </div>
        <h3>{repo.name}</h3>
      </div>
    </li>
  );
};
