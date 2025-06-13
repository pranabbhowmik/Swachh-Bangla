import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Alllayout from "./components/layout/Alllayout";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import Scan from "./page/Scan";
import Notification from "./page/Notification";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Alllayout />,

      children: [
        { path: "/", element: <Home /> },
        // { path: "/about", element: <About /> },
        { path: "/scan", element: <Scan /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/notifications", element: <Notification /> },
        // { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
