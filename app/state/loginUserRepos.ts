import { atom } from "recoil";

export const loginUserRepos = atom<Array<any>>({
  key: "loginUserRepos",
  default: [],
});
