import { atom } from "recoil";

export const isSearching = atom<boolean | null>({
  key: "isSearching",
  default: null,
});
