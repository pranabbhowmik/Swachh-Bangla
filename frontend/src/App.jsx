import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Alllayout from "./components/layout/Alllayout";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import Scan from "./page/Scan";
import Notification from "./page/Notification";
import Account from "./page/Account";
import Articles from "./page/Articles";
import RedeemPage from "./page/Redeem";
import TransactionHistory from "./page/TransactionHistory";
import FirstArtical from "./page/FirstArtical";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Alllayout />,

      children: [
        { path: "/", element: <Home /> },
        { path: "/account", element: <Account /> },
        { path: "/scan", element: <Scan /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/notifications", element: <Notification /> },
        { path: "/transaction-history", element: <TransactionHistory /> },
        { path: "/redeem", element: <RedeemPage /> },
        { path: "/first-artical", element: <FirstArtical /> },
        { path: "/articles", element: <Articles /> },
        // { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
