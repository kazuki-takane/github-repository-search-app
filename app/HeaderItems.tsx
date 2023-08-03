"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import { loginUserInfo } from "./state/loginUserInfo";
import { loginUserRepos } from "./state/loginUserRepos";
import { isUserDialogOpen } from "./state/isUserDialogOpen";
import { isRepoDialogOpen } from "./state/isRepoDialogOpen";
import { User, UserRepos } from "./types/types";
import { getUserInfo, getUserRepos } from "./Header";

export const HeaderItems = () => {
  const { data: session } = useSession();
  const setUser: SetterOrUpdater<User> = useSetRecoilState(loginUserInfo);
  const setUserRepos: SetterOrUpdater<Array<UserRepos>> =
    useSetRecoilState(loginUserRepos);

  const setIsUserDialogOpen: SetterOrUpdater<boolean> =
    useSetRecoilState(isUserDialogOpen);

  const setRepoDialogOpen: SetterOrUpdater<boolean> =
    useSetRecoilState(isRepoDialogOpen);

  const handleUserClick = async () => {
    setRepoDialogOpen(false);
    setIsUserDialogOpen(true);
    const UserInfoJson = await getUserInfo(session);
    setUser(UserInfoJson);
    const UserReposJson = await getUserRepos(session);
    setUserRepos(UserReposJson);
  };

  return (
    <div className="fixed flex justify-end items-center bg-white z-10 w-full h-12 shadow">
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
      <div className="mr-4">
        <p className="text-xs md:text-base">{session?.user?.name ?? "ゲスト"}</p>
        <p className="text-xs md:text-sm">でログイン中</p>
      </div>
    </div>
  );
};
