import { CheckIcon } from "@/assets/icons/checkIcon";
import { PhotoIcon } from "@/assets/icons/photoIcon";
import { UncheckIcon } from "@/assets/icons/uncheckIcon";
import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx";

import s from "./ownInfo.module.scss";

type OwnInfoProps = {
  name: string;
  photo: string;
  registered: boolean;
  secondName: string;
  table: string;
  thirdName: string;
};

export const OwnInfo = ({
  name,
  photo,
  registered,
  secondName,
  table,
  thirdName,
}: OwnInfoProps) => {
  const classNames = {
    status: clsx(s.status, registered ? s.active : s.unactive),
  };

  return (
    <div className={s.ownInfo}>
      {photo ? <img alt={""} src={photo} /> : <PhotoIcon />}
      <div>
        <Typography variant={"body1m"}>Стол № {table}</Typography>
        <div className={classNames.status}>
          {registered ? (
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
          <Typography variant={"body1s"}>{thirdName}</Typography>
          <Typography variant={"body1s"}>{name}</Typography>
          <Typography variant={"body1s"}>{secondName}</Typography>
        </div>
      </div>
    </div>
  );
};
