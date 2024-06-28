import { Link } from "react-router-dom";

import { Typography } from "@/components/ui/typography";
import { useGetStylesQuery } from "@/services/baseApi";

import s from "./header.module.scss";

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
