import { CloseButton } from "@/components/card/cardComponents/closeButton/closeButton";
import { Description } from "@/components/card/cardComponents/description";
import { OwnInfo } from "@/components/card/cardComponents/ownInfo/OwnInfo";
import { Button } from "@/components/ui/button";

import s from "./card.module.scss";

type CardProps = {
  checked: boolean;
  id: number;
  organization: string;
  phone: string;
  position: string;
  table: string;
};

export const Card = ({
  checked,
  id,
  organization,
  phone,
  position,
  table,
}: CardProps) => {
  return (
    <div className={s.card}>
      <CloseButton />
      <OwnInfo checked={checked} table={table} />
      <div className={s.cardDescription}>
        <Description description={organization} title={"Организация"} />
        <Description description={position} title={"Должность"} />
        <Description description={phone} title={"Номер телефона"} />
        <Description description={`${id}`} title={"ID"} />
      </div>
      <div className={s.cardButtons}>
        <Button disabled={checked} variant={"primary"}>
          Зарегистрировать
        </Button>
        <Button disabled={!checked} variant={"primary"}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
