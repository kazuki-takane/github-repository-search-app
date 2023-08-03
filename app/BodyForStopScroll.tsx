"use client";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { Noto_Sans_JP } from "next/font/google";

import { isRepoDialogOpen } from "./state/isRepoDialogOpen";
import { isUserDialogOpen } from "./state/isUserDialogOpen";

const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const BodyForStopScroll = ({ children }: { children: ReactNode }) => {
  const isRepoOpen = useRecoilValue<boolean>(isRepoDialogOpen);
  const isUserOpen = useRecoilValue<boolean>(isUserDialogOpen);

  return (
    <body
      className={`${
        notoSans.className
      } text-sm md:text-base text-slate-900 tracking-wide ${
        isRepoOpen && "overflow-hidden"
      } ${isUserOpen && "overflow-hidden"}`}
    >
      {children}
    </body>
  );
};
