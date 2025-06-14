import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

function Alllayout() {
  const location = useLocation();

  // Pages where the footer should be hidden
  const hiddenFooterPaths = [
    "/notifications",
    "/account",
    "/transaction-history",
  ];

  // Check if the current path matches or starts with the hidden paths
  const shouldHideFooter = hiddenFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default Alllayout;
