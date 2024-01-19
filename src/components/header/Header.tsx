import { Typography } from "@/components/ui/typography";

import s from "./header.module.scss";

import test from "../../assets/img/test.jpg";

export const Header = () => {
  return (
    <div className={s.header}>
      <a href={"#"}>
        <img alt={""} className={s.headerImg} src={test} />
      </a>
      <Typography variant={"h1"}>Название мероприятия</Typography>
    </div>
  );
};
