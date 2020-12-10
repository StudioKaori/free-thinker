import { atom } from "recoil";
// Atom is our indvidual piece of reactive data

export const recent = atom({
  key: "activityID",
  default: "",
});