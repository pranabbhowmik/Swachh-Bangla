import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Alllayout from "./components/layout/Alllayout";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Alllayout />,

      children: [
        { path: "/", element: <Home /> },
        // { path: "/about", element: <About /> },
        // { path: "/contact", element: <Contact /> },
        { path: "/login", element: <LoginPage /> },
        // { path: "/signup", element: <Signup /> },
        // { path: "/*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
