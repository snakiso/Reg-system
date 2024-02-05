import { NavLink } from "react-router-dom";

import { Alphabet } from "@/assets/icons/alphabet";
import { ListLink } from "@/assets/icons/listLink";
import { Tables } from "@/assets/icons/tables";
import { Typography } from "@/components/ui/typography";
import { clsx } from "clsx";

import "./navLink.scss";

import s from "./links.module.scss";

const linkClass = clsx(s.link, "link");

export const Links = () => {
  return (
    <nav className={s.links}>
      <div className={s.linksGroup}>
        <NavLink className={linkClass} to={"/alphabet"}>
          <Alphabet />
          <Typography variant={"body1m"}>А — Я</Typography>
        </NavLink>
        <NavLink className={linkClass} to={"/tableList"}>
          <Tables />
          <Typography variant={"body1m"}>По столам</Typography>
        </NavLink>
      </div>
      <NavLink className={linkClass} to={"/"}>
        <ListLink />
        <Typography variant={"body1m"}>Полный список</Typography>
      </NavLink>
    </nav>
  );
};
