import { atom } from "recoil";

export const isUserDialogOpen = atom<boolean>({
  key: "isUserDialogOpen",
  default: false,
});
