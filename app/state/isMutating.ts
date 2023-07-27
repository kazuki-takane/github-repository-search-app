import { atom } from "recoil";

export const isMutating = atom<boolean>({
  key: "isMutating",
  default: false,
});
