"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWRMutation from "swr/mutation";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import { loginUserInfo } from "./state/loginUserInfo";
import { loginUserRepos } from "./state/loginUserRepos";
import { isUserDialogOpen } from "./state/isUserDialogOpen";
import { isRepoDialogOpen } from "./state/isRepoDialogOpen";
import { User, UserRepos } from "./types/types";

export const Header = () => {
  const { data: session } = useSession();
  const setUser: SetterOrUpdater<User> = useSetRecoilState(loginUserInfo);
  const setIsUserDialogOpen: SetterOrUpdater<boolean> =
    useSetRecoilState(isUserDialogOpen);
  const setUserRepos: SetterOrUpdater<Array<UserRepos>> =
    useSetRecoilState(loginUserRepos);
  const setRepoDialogOpen: SetterOrUpdater<boolean> =
    useSetRecoilState(isRepoDialogOpen);

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
            className="mr-4 w-8 cursor-pointer shadow-md rounded-full hover:opacity-70"
            onClick={handleUserClick}
          >
            <Image
              className="w-8 rounded-full"
              src={session?.user?.image ?? ""}
              alt={session?.user?.name ?? "ゲスト"}
              width={32}
              height={32}
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
