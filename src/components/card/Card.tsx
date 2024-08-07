import { clsx } from "clsx";

import s from "./card.module.scss";

import { useUpdateParticipantMutation } from "../../services/baseApi";
import { Participant } from "../../services/services.type";
import { Button } from "../ui/button";
import { CloseButton } from "./cardComponents/closeButton";
import { Description } from "./cardComponents/description";
import { OwnInfo } from "./cardComponents/ownInfo";

type CardProps = {
  close: (isOpen: boolean) => void;
  data: Participant;
  id: number;
  open: boolean;
};

export const Card = ({ close, data, id, open }: CardProps) => {
  const classNames = clsx(s.card, open && s.active);
  const [update] = useUpdateParticipantMutation();
  const closeHandler = () => {
    close(false);
  };

  const updateHandler = (registered: boolean) => {
    update({ id, registered });
    closeHandler();
  };

  return (
    <div className={classNames}>
      <CloseButton close={closeHandler} />
      <OwnInfo
        name={data.name}
        photo={data.photo}
        registered={data.registered}
        secondName={data.secondName}
        table={data.table}
        thirdName={data.thirdName}
      />
      <div className={s.cardDescription}>
        <Description description={data.organization} title={"Организация"} />
        <Description description={data.position} title={"Должность"} />
        <Description description={data.phone} title={"Номер мобильного"} />
        <Description description={`${data.id}`} title={"ID"} />
      </div>
      <div className={s.cardButtons}>
        <Button
          disabled={data.registered}
          onClick={() => updateHandler(true)}
          variant={"primary"}
        >
          Зарегистрировать
        </Button>
        <Button
          disabled={!data.registered}
          onClick={() => updateHandler(false)}
          variant={"primary"}
        >
          Отменить
        </Button>
      </div>
    </div>
  );
};
