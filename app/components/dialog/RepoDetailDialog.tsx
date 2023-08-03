"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import Image from "next/image";

import { isRepoDialogOpen } from "../../state/isRepoDialogOpen";
import { clickedRepo } from "../../state/clickedRepo";
import { RepoData } from "@/app/types/types";
import { memo } from "react";

export const RepoDetailDialog = memo(() => {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(isRepoDialogOpen);
  const repo = useRecoilValue<RepoData>(clickedRepo);

  //ダイアログ以外をクリックするとダイアログを閉じる
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
          <div className="bg-white fixed inset-0 m-auto w-11/12 max-w-lg h-5/6 p-8 pt-16 rounded-lg overflow-auto">
            <div className="flex items-center">
              <div className="w-16 md:w-24 rounded-full mr-8">
                <Image
                  className="rounded-full"
                  src={`${repo.owner.avatar_url}`}
                  alt={`${repo.owner.login}`}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-base md:text-2xl break-words w-3/5">
                {repo.name}
              </h3>
            </div>
            <Link
              className="mt-8  text-sm md:text-xl block underline break-words decoration-cyan-500 text-cyan-500 hover:opacity-70"
              href={`${repo.html_url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.html_url}
            </Link>
            <p className="mt-8 border-b pb-1 text-sm md:text-lg">
              Owner:{" "}
              <span className="ml-2 text-base md:text-xl">
                {repo.owner.login}
              </span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              プロジェクト言語:
              <span className="ml-2 text-base md:text-xl">{repo.language}</span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              Star数:
              <span className="ml-2 text-base md:text-xl">
                {repo.stargazers_count}
              </span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              Watcher数:
              <span className="ml-2 text-base md:text-xl">
                {repo.watchers_count}
              </span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              Fork数:{" "}
              <span className="ml-2 text-base md:text-xl">
                {repo.forks_count}
              </span>
            </p>
            <p className="mt-3 border-b pb-1 text-sm md:text-lg">
              Issue数:
              <span className="ml-2 text-base md:text-xl">
                {repo.open_issues_count}
              </span>
            </p>
            <button
              className="absolute top-4 right-4 p-1 text-xs md:text-base text-white rounded bg-cyan-500 hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
});
