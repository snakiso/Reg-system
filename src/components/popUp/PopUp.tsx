import { clsx } from "clsx";

import s from "./popUp.module.scss";

import { useUpdateParticipantMutation } from "../../services/baseApi";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

type PopUpProps = {
  close: () => void;
  id: number;
  isOpen: boolean;
  title: string;
};

export const PopUp = ({ close, id, isOpen, title }: PopUpProps) => {
  const [update] = useUpdateParticipantMutation();
  const classNames = clsx(s.popUp, isOpen && s.active);

  const updateHandler = () => {
    update({ id, registered: true });
    close();
  };

  return (
    <div className={classNames}>
      <Typography className={s.popUpTitle} variant={"body2m"}>
        {title}
      </Typography>
      <div className={s.popUpButtons}>
        <Button className={s.popUpButton} onClick={close} variant={"outline"}>
          <Typography variant={"body2m"}>Нет</Typography>
        </Button>
        <Button
          className={s.popUpButton}
          onClick={updateHandler}
          variant={"primary"}
        >
          <Typography variant={"body2m"}>Да</Typography>
        </Button>
      </div>
    </div>
  );
};
