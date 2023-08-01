"use client";
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useSession } from "next-auth/react";
import useSWRMutation from "swr/mutation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginUserInfo } from "./state/loginUserInfo";
import { loginUserRepos } from "./state/loginUserRepos";
import { isUserDialogOpen } from "./state/isUserDialogOpen";
import { isRepoDialogOpen } from "./state/isRepoDialogOpen";

export const Header = () => {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(loginUserInfo);
  const setIsUserDialogOpen = useSetRecoilState(isUserDialogOpen);
  const setUserRepos = useSetRecoilState(loginUserRepos);
  const setRepoDialogOpen = useSetRecoilState(isRepoDialogOpen);

  const fetcher = (url: string) => {
    const headers = {
      Authorization: "Bearer " + session?.user.accessToken,
    };

    fetch(url, { headers })
      .then((res) => res.json())
      .then((result) => setUser(result))
      .then(() => fetch(url + "/repos", { headers }))
      .then((response) => response.json())
      .then((results) => setUserRepos(results))
      .then(() => setIsUserDialogOpen(true));
  };

  const { data, trigger, isMutating, error } = useSWRMutation(
    "https://api.github.com/user",
    fetcher
  );

  const handleUserClick = () => {
    setRepoDialogOpen(false);
    trigger();
  };

  return (
    <header className="fixed flex justify-end items-center bg-white z-10 w-full h-12 shadow">
      {session ? (
        <div className="flex items-center">
          <Logout />
          <div
            className="mr-4 cursor-pointer shadow-md rounded-full hover:opacity-70"
            onClick={handleUserClick}
          >
            <img
              className="w-8 rounded-full"
              src={session?.user?.image ?? undefined}
              alt={session?.user?.name ?? "ゲスト"}
            />
          </div>
        </div>
      ) : (
        <Login />
      )}
      <div className="text-xs md:text-base mr-4">
        <p>{session?.user?.name ?? "ゲスト"}</p>
        <p>でログイン中</p>
      </div>
    </header>
  );
};
