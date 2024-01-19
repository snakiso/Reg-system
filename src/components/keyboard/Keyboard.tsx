import { ReactNode } from "react";

import s from "./keyboard.module.scss";

type KeyboardProps = {
  children?: ReactNode;
};

export const Keyboard = ({ children }: KeyboardProps) => {
  return <div className={s.keyboard}>{children}</div>;
};
