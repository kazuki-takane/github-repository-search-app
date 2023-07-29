import { atom } from "recoil";

export const clickedRepo = atom<any>({
  key: "clickedRepo",
  default: {},
});
