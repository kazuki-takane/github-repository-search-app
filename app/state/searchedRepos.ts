import { atom, selector } from "recoil";

export const searchedRepos = atom<Array<any>>({
  key: "searchedRepos",
  default: [],
});

export const numOfPagesInRepos = selector<number>({
  key: "numOfPagesInRepos",
  get: ({ get }) => Math.round(get(searchedRepos).length / 10),
});
