import { useContext, useState } from "react";

import { clsx } from "clsx";

import s from "./personLine.module.scss";

import { SettingsContext } from "../../../app/App";
import { CheckIcon } from "../../../assets/icons/checkIcon";
import { ListIcon } from "../../../assets/icons/listIcon";
import { useUpdateParticipantMutation } from "../../../services/baseApi";
import { Participant } from "../../../services/services.type";
import { Card } from "../../card";
import { PopUp } from "../../popUp";
import { IconButton } from "../../ui/iconButton";
import { Typography } from "../../ui/typography";

type PersonLineProps = {
  data: Participant;
};

export const PersonLine = ({ data }: PersonLineProps) => {
  const settings = useContext(SettingsContext);
  const [update] = useUpdateParticipantMutation();
  const [openInfo, setOpenInfo] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const classNames = {
    personLine: clsx(s.personLine, data.registered && s.active),
    table: clsx(s.table, data.registered && s.active),
    text: clsx(s.text, data.registered && s.active),
  };

  const confirmRegistration = () => {
    if (settings?.confirm) {
      setOpenPopup(true);
    } else {
      const id = data.id;

      update({ id, registered: true });
    }
  };

  return (
    <>
      {openInfo && (
        <Card
          close={() => setOpenInfo(false)}
          data={data}
          id={data.id}
          open={openInfo}
        />
      )}
      {openPopup && (
        <PopUp
          close={() => setOpenPopup(false)}
          id={data.id}
          isOpen={openPopup}
          title={"Подтвердить регистрацию?"}
        />
      )}
      {(openInfo || openPopup) && <div className={s.darkBg}></div>}
      <div className={classNames.personLine}>
        <div className={classNames.text}>
          <Typography variant={"body1s"}>
            {data.thirdName + " " + data.name}
          </Typography>
          <Typography variant={"body3r"}>{data.position}</Typography>
        </div>
        <div className={settings?.table ? s.personLineGroup : undefined}>
          {settings?.table && (
            <div className={classNames.table}>
              <Typography variant={"body1s"}>{data.table}</Typography>
            </div>
          )}
          <div className={s.icons}>
            {data.registered ? (
              <IconButton className={s.check}>
                <CheckIcon />
              </IconButton>
            ) : (
              <IconButton onClick={confirmRegistration}>
                <span className={s.accessButton}></span>
                {/*<ListIcon />*/}
              </IconButton>
            )}
            <IconButton onClick={() => setOpenInfo(true)}>
              <ListIcon />
              {/*<PersonIcon />*/}
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};
