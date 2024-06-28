import { Outlet } from "react-router-dom";

import s from "./layout.module.scss";

import { Header } from "./header";
import { Links } from "./links/Links";

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
