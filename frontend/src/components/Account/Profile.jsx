import React from "react";
import UserCard from "../Home/UserCard";
import { LogOut, Settings, ChevronRight, History, Sprout } from "lucide-react";
import { motion } from "framer-motion";

// Motion variant for animation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 80,
    },
  }),
};

function Profile() {
  return (
    <div className="space-y-6 px-4 py-6 bg-gray-50">
      <UserCard />

      {/* Options List */}
      <div className="bg-white rounded-3xl shadow-md p-4 space-y-3">
        <OptionButton
          icon={<Sprout />}
          label="Redeem Points"
          index={0}
          bgColor="bg-green-50"
          hoverColor="hover:bg-green-100"
        />
        <OptionButton
          icon={<History />}
          label="Transaction History"
          index={1}
          bgColor="bg-yellow-50"
          hoverColor="hover:bg-yellow-100"
        />
        <OptionButton
          icon={<Settings />}
          label="Settings"
          index={2}
          bgColor="bg-blue-50"
          hoverColor="hover:bg-blue-100"
        />
        <OptionButton
          icon={<LogOut />}
          label="Logout"
          className="text-red-500"
          index={3}
          bgColor="bg-red-50"
          hoverColor="hover:bg-red-100"
        />
      </div>
    </div>
  );
}

const OptionButton = ({
  icon,
  label,
  onClick,
  className = "",
  index = 0,
  bgColor = "bg-white",
  hoverColor = "hover:bg-gray-50",
}) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center justify-between w-full ${bgColor} px-4 py-3 rounded-xl shadow-sm border border-gray-100 ${hoverColor} hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out ${className}`}
    custom={index}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex items-center gap-3 text-left text-gray-800 font-medium">
      {icon}
      <span>{label}</span>
    </div>
    <ChevronRight className="text-gray-400 w-4 h-4" />
  </motion.button>
);

export default Profile;
