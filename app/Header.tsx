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

export const Header = () => {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(loginUserInfo);
  const setIsUserDialogOpen = useSetRecoilState(isUserDialogOpen);
  const setUserRepos = useSetRecoilState(loginUserRepos);

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

  return (
    <header className="fixed bg-white z-10">
      <p>Header</p>
      {session ? <Logout /> : <Login />}
      <div onClick={() => trigger()}>
        <img
          className="w-12 rounded-full"
          src={session?.user?.image ?? undefined}
          alt={session?.user?.name ?? "guest"}
        />
      </div>
      <p>{session?.user?.name ?? "guest"}</p>
    </header>
  );
};
