import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// validation
export const isEmpty = (value) => {
  if (value === "") {
    return true;
  }
}