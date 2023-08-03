import React, { memo } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import Image from "next/image";

import { isRepoDialogOpen } from "../state/isRepoDialogOpen";
import { clickedRepo } from "../state/clickedRepo";
import { RepoData } from "../types/types";

export const RepoListItem = memo(({ repo }: { repo: RepoData }) => {
  const setIsOpen: SetterOrUpdater<boolean> =
    useSetRecoilState(isRepoDialogOpen);
  const setClickedRepo: SetterOrUpdater<RepoData> =
    useSetRecoilState(clickedRepo);

  const handleClick = (repo: RepoData) => {
    setIsOpen(true);
    setClickedRepo(repo);
  };

  return (
    <li className="border rounded bg-white mt-4 p-4 shadow cursor-pointer">
      <div className="flex items-center" onClick={() => handleClick(repo)}>
        <div className="w-12 rounded-full mr-4">
          <Image
            className="rounded-full"
            src={`${repo.owner.avatar_url}`}
            alt={`${repo.owner.login}`}
            width={48}
            height={48}
          />
        </div>
        <h3>{repo.name}</h3>
      </div>
    </li>
  );
});
