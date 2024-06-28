import { Link } from "react-router-dom";

import s from "./header.module.scss";

import { useGetStylesQuery } from "../../../services/baseApi";
import { Typography } from "../../ui/typography";

export const Header = () => {
  const { data } = useGetStylesQuery();

  return (
    <header className={s.header}>
      <Link to={"/list"}>
        <img alt={""} className={s.headerImg} src={data?.logo} />
      </Link>
      <Typography className={s.headerTitle} variant={"h1"}>
        {data?.event_title}
      </Typography>
    </header>
  );
};
