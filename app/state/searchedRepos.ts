import { atom } from "recoil";

export const searchedRepos = atom<Array<any>>({
  key: "searchedRepos",
  default: [],
});
