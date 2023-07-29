import { atom } from "recoil";

export const isRepoDialogOpen = atom<boolean>({
  key: "isRepoDialogOpen",
  default: false,
});
