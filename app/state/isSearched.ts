import { atom } from "recoil";

export const isSearched = atom<boolean>({
  key: "isSearched",
  default: false,
});
