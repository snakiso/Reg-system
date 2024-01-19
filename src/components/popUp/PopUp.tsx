import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import s from "./popUp.module.scss";

type PopUpProps = {
  title: string;
};

export const PopUp = ({ title }: PopUpProps) => {
  return (
    <div className={s.popUp}>
      <Typography className={s.popUpTitle} variant={"body2m"}>
        {title}
      </Typography>
      <div className={s.popUpButtons}>
        <Button className={s.popUpButton} variant={"outline"}>
          <Typography variant={"body2m"}>Нет</Typography>
        </Button>
        <Button className={s.popUpButton} variant={"primary"}>
          <Typography variant={"body2m"}>Да</Typography>
        </Button>
      </div>
    </div>
  );
};
