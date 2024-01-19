import { ComponentPropsWithoutRef, ReactNode } from "react";

import s from "./iconButton.module.scss";

type IconButtonProps = {
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;
export const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return (
    <button className={s.iconButton} {...rest}>
      {children}
    </button>
  );
};
