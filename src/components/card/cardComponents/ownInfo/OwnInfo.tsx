import { CheckIcon } from "@/assets/icons/checkIcon";
import { PhotoIcon } from "@/assets/icons/photoIcon";
import { UncheckIcon } from "@/assets/icons/uncheckIcon";
import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx";

import s from "./ownInfo.module.scss";

type OwnInfoProps = {
  checked: boolean;
  table: string;
};

export const OwnInfo = ({ checked, table }: OwnInfoProps) => {
  const classNames = {
    status: clsx(s.status, checked ? s.active : s.unactive),
  };

  return (
    <div className={s.ownInfo}>
      <PhotoIcon />
      <div>
        <Typography variant={"body1m"}>Стол № {table}</Typography>
        <div className={classNames.status}>
          {checked ? (
            <>
              {" "}
              <CheckIcon />
              <Typography variant={"body2s"}>Зарегистрирован</Typography>
            </>
          ) : (
            <>
              <UncheckIcon />
              <Typography variant={"body2s"}>Не зарегистрирован</Typography>
            </>
          )}
        </div>
        <div className={s.name}>
          <Typography variant={"body1s"}>ЕРМИЛОВА</Typography>
          <Typography variant={"body1s"}>Марина</Typography>
          <Typography variant={"body1s"}>Петровна</Typography>
        </div>
      </div>
    </div>
  );
};
