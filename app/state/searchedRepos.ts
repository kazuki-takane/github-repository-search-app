import { atom, selector } from "recoil";
import { RepoData } from "../types/types";

export const searchedRepos = atom<Array<RepoData>>({
  key: "searchedRepos",
  default: [],
});

export const numOfPagesInRepos = selector<number>({
  key: "numOfPagesInRepos",
  get: ({ get }) => Math.round(get(searchedRepos).length / 10),
});
