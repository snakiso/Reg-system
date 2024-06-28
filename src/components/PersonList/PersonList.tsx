import { useContext } from "react";

import s from "./personList.module.scss";

import { SettingsContext } from "../../app/App";
import { Participant } from "../../services/services.type";
import { Typography } from "../ui/typography";
import { PersonLine } from "./personLine";

type PersonListProps = {
  data: Participant[];
  marginBottom?: number;
};

export const PersonList = ({ data, marginBottom }: PersonListProps) => {
  const settings = useContext(SettingsContext);

  return (
    <div
      className={s.list}
      style={{ paddingBottom: `${(marginBottom ?? 0) + 20}px` }}
    >
      <div className={s.tableHeader}>
        <Typography as={"span"} className={s.data} variant={"body1m"}>
          Данные
        </Typography>
        <div className={settings?.table ? s.tableHeaderGroup : undefined}>
          {settings?.table && (
            <Typography as={"span"} className={s.table} variant={"body1m"}>
              № стола
            </Typography>
          )}
          <Typography as={"span"} className={s.actions} variant={"body1m"}>
            Действия
          </Typography>
        </div>
      </div>

      {data?.map((el) => <PersonLine data={el} key={el.id} />)}
    </div>
  );
};
