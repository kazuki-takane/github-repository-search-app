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
    setClickedRepo(repo)
  }
  return (
    <li>
      <div className="flex items-center" onClick={()=>handleClick(repo)}>
        <div className="w-12 rounded-full">
          <img
            className="rounded-full"
            src={`${repo.owner.avatar_url}`}
            alt=""
          />
        </div>
        <h3>{repo.full_name}</h3>
      </div>
    </li>
  );
};
