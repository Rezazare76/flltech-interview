import { useRoutes } from "react-router";
import loadable from "@loadable/component";
import { ComingSoon } from "components";

// profile
const Profile = loadable(() => import("pages/profile/Profile"));
// others
const NotFound = loadable(() => import("pages/notFound/NotFound"));
const routes = [
  {
    path: "/",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <ComingSoon />,
      },
      {
        path: "wallets",
        element: <ComingSoon />,
      },
      {
        path: "gas-station",
        element: <ComingSoon />,
      },
      {
        path: "referrals",
        element: <ComingSoon />,
      },
      {
        path: "invoices",
        element: <ComingSoon />,
        children: [
          {
            path: "withdraw",
            element: <ComingSoon />,
          },
          {
            path: "deposit",
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: "transaction",
        element: <ComingSoon />,
      },
      {
        path: "swap",
        element: <ComingSoon />,
      },
      {
        path: "security",
        element: <ComingSoon />,
      },
      {
        path: "support",
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const AppRoutes = () => {
  const combinedRoutes = [...routes];

  const elements = useRoutes(combinedRoutes);
  return elements;
};
