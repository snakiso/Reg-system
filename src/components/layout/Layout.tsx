import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/header";
import { Links } from "@/components/layout/links/Links";

import s from "./layout.module.scss";

console.log("layout.tsx");

export const Layout = () => {
  console.log("inner");

  return (
    <>
      <div className={s.bgLayout}></div>
      <Header />
      <Links />
      <Outlet />
    </>
  );
};
