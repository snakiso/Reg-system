import { CheckIcon } from "@/assets/icons/checkIcon";
import { ListIcon } from "@/assets/icons/listIcon";
import { PersonIcon } from "@/assets/icons/personIcon";
import { IconButton } from "@/components/ui/iconButton";
import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx";

import s from "./personLine.module.scss";

type PersonLineProps = {
  done: boolean;
  name: string;
  position: string;
  table: string;
};

export const PersonLine = ({
  done,
  name,
  position,
  table,
}: PersonLineProps) => {
  const classNames = {
    personLine: clsx(s.personLine, done && s.active),
    table: clsx(s.table, done && s.active),
    text: clsx(s.text, done && s.active),
  };

  return (
    <div className={classNames.personLine}>
      <div className={classNames.text}>
        <Typography variant={"body1s"}>{name}</Typography>
        <Typography variant={"body3r"}>{position}</Typography>
      </div>
      <div className={classNames.table}>
        <Typography variant={"body1s"}>{table}</Typography>
      </div>
      <div className={s.icons}>
        {done ? (
          <CheckIcon />
        ) : (
          <IconButton>
            <ListIcon />
          </IconButton>
        )}
        <IconButton>
          <PersonIcon />
        </IconButton>
      </div>
    </div>
  );
};
