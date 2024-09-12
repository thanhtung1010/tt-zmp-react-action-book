
import { atom } from "recoil";
import { IZaloUser } from "./interfaces";

export const userState = atom<IZaloUser>({
  key: "zalo-user",
  default: {
    id: '12345678',
    name: 'Zalo',
    avatar: 'ZA',
  }
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});

