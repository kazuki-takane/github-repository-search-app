import { atom } from "recoil";

export const currentPage = atom<number>({
  key: "currentPage",
  default: 0,
});
