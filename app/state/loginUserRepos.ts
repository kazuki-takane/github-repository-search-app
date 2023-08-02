import { atom } from "recoil";
import { UserRepos } from "../types/types";

export const loginUserRepos = atom<Array<UserRepos>>({
  key: "loginUserRepos",
  default: [],
});
