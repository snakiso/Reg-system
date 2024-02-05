import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { AlphabetList } from "@/pages/alphabetList/AlphabetList";
import { FullList } from "@/pages/fullList/FullList";
import { TableList } from "@/pages/tableList/TableList";

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <FullList />,
        path: "/",
      },
      {
        element: <AlphabetList />,
        path: "/alphabet",
      },
      {
        element: <TableList />,
        path: "/tableList",
      },
    ],
    element: <Layout />,
    path: "/",
  },
]);
export const Router = () => {
  return <RouterProvider router={router} />;
};
