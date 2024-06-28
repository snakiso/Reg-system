import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import { Layout } from "../../components/layout/Layout";
import { AlphabetList } from "../../pages/alphabetList/AlphabetList";
import { FullList } from "../../pages/fullList/FullList";
import { TableList } from "../../pages/tableList/TableList";

console.log("router.tsx");

const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/reg-system/alphabet");
  }, [navigate]);

  return null;
};

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <FullList />,
        path: "/reg-system/list",
      },
      {
        element: <AlphabetList />,
        path: "/reg-system/alphabet",
      },
      {
        element: <TableList />,
        path: "/reg-system/table",
      },
      {
        element: <RootRedirect />,
        path: "/reg-system",
      },
    ],
    element: <Layout />,
    path: "/reg-system",
  },
]);
export const Router = () => {
  return <RouterProvider router={router} />;
};
