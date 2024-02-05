import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/header";
import { Links } from "@/components/layout/links/Links";

export const Layout = () => {
  return (
    <>
      <Header />
      <Links />
      <Outlet />
    </>
  );
};
