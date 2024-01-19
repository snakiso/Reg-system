import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Typography } from "@/components/ui/typography";

import s from "./key.module.scss";

export type KeyProps = {
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Key = ({ children, ...rest }: KeyProps) => {
  return (
    <button className={s.key} {...rest}>
      <Typography as={"span"} variant={"body0s"}>
        {children}
      </Typography>
    </button>
  );
};
