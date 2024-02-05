import { PersonLine } from "@/components/PersonList/personLine";
import { Typography } from "@/components/ui/typography";
import { Participant } from "@/services/secvices.type";

import s from "./personList.module.scss";

type PersonListProps = {
  data: Participant[];
  marginBottom?: number;
};

export const PersonList = ({ data, marginBottom }: PersonListProps) => {
  return (
    <div
      className={s.list}
      style={{ marginBottom: `${(marginBottom ?? 0) + 30}px` }}
    >
      <div className={s.tableHeader}>
        <Typography as={"span"} className={s.data} variant={"body1m"}>
          Данные
        </Typography>
        <Typography as={"span"} className={s.table} variant={"body1m"}>
          № стола
        </Typography>
        <Typography as={"span"} className={s.actions} variant={"body1m"}>
          Действия
        </Typography>
      </div>
      {data?.map((el) => <PersonLine data={el} key={el.id} />)}
    </div>
  );
};
