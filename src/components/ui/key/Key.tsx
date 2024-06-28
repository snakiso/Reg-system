import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx";

import s from "./key.module.scss";

export type KeyProps = {
  children?: ReactNode;
  isActive: boolean;
  keyDown: () => void;
} & ComponentPropsWithoutRef<"button">;

export const Key = ({ children, isActive, keyDown, ...rest }: KeyProps) => {
  const classNames = clsx(s.key, isActive && s.active);

  return (
    <button className={classNames} {...rest} onClick={keyDown}>
      <Typography as={"span"} variant={"body0s"}>
        {children}
      </Typography>
    </button>
  );
};
