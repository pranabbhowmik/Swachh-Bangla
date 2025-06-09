import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaBell, FaRegNewspaper } from "react-icons/fa";
import { Scan } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16  top-0 left-0 z-50 flex items-center justify-between px-4 md:px-8 shadow-lg">
        Div
      </div>
      <div className="fixed bottom-0 w-full z-50 bg-[#10471d] text-white flex justify-around items-center h-16 rounded-t-2xl md:h-20">
        <NavItem to="/" icon={<FaHome />} />
        <NavItem to="/articles" icon={<FaRegNewspaper />} />

        <NavLink
          to="/scan"
          className="bg-white p-3 rounded-full -mt-8 shadow-md border-4 border-[#10471d] hover:scale-110 transition-transform duration-300"
        >
          <Scan className="text-[#10471d] text-2xl md:text-3xl" />
        </NavLink>

        <NavItem to="/notifications" icon={<FaBell />} />
        <NavItem to="/account" icon={<FaUser />} />
      </div>
    </>
  );
};

const NavItem = ({ to, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center text-sm transition-all duration-300 ${
        isActive
          ? "text-yellow-300 scale-110"
          : "hover:text-yellow-300 hover:scale-110"
      }`
    }
  >
    <div className="text-xl md:text-2xl">{icon}</div>
    {/* <span className="text-xs mt-1">{label}</span> */}
  </NavLink>
);

export default Navbar;
