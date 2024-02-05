import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Typography } from "@/components/ui/typography";

import s from "./key.module.scss";

export type KeyProps = {
  children?: ReactNode;
  keyDown: () => void;
} & ComponentPropsWithoutRef<"button">;

export const Key = ({ children, keyDown, ...rest }: KeyProps) => {
  return (
    <button className={s.key} {...rest} onClick={keyDown}>
      <Typography as={"span"} variant={"body0s"}>
        {children}
      </Typography>
    </button>
  );
};
