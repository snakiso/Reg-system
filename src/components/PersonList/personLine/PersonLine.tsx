import { useState } from "react";

import { CheckIcon } from "@/assets/icons/checkIcon";
import { ListIcon } from "@/assets/icons/listIcon";
import { PersonIcon } from "@/assets/icons/personIcon";
import { Card } from "@/components/card";
import { PopUp } from "@/components/popUp";
import { IconButton } from "@/components/ui/iconButton";
import { Typography } from "@/components/ui/typography";
import { Participant } from "@/services/secvices.type";
import { clsx } from "clsx";

import s from "./personLine.module.scss";

type PersonLineProps = {
  data: Participant;
};

export const PersonLine = ({ data }: PersonLineProps) => {
  const [openInfo, setOpenInfo] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const classNames = {
    personLine: clsx(s.personLine, data.registered && s.active),
    table: clsx(s.table, data.registered && s.active),
    text: clsx(s.text, data.registered && s.active),
  };

  return (
    <>
      <Card
        close={() => setOpenInfo(false)}
        data={data}
        id={data.id}
        open={openInfo}
      />
      <PopUp
        close={() => setOpenPopup(false)}
        id={data.id}
        isOpen={openPopup}
        title={"Подтвердить регистрацию?"}
      />
      {(openInfo || openPopup) && <div className={s.darkBg}></div>}
      <div className={classNames.personLine}>
        <div className={classNames.text}>
          <Typography variant={"body1s"}>
            {data.thirdName + " " + data.name}
          </Typography>
          <Typography variant={"body3r"}>{data.position}</Typography>
        </div>
        <div className={classNames.table}>
          <Typography variant={"body1s"}>{data.table}</Typography>
        </div>
        <div className={s.icons}>
          {data.registered ? (
            <IconButton className={s.check}>
              <CheckIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => setOpenPopup(true)}>
              <ListIcon />
            </IconButton>
          )}
          <IconButton onClick={() => setOpenInfo(true)}>
            <PersonIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
