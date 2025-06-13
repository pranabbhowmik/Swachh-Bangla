import React from "react";
import { CheckCircle, Info, AlertTriangle } from "lucide-react";

const NotificationComponent = ({ type = "success", message }) => {
  const icons = {
    success: <CheckCircle className="text-green-600 w-5 h-5" />,
    info: <Info className="text-blue-600 w-5 h-5" />,
    warning: <AlertTriangle className="text-yellow-600 w-5 h-5" />,
  };

  const bgColors = {
    success: "bg-green-100",
    info: "bg-blue-100",
    warning: "bg-yellow-100",
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 mx-4 py-6 mt-5 rounded-xl shadow-md border ${bgColors[type]}`}
    >
      <div>{icons[type]}</div>
      <p className="text-sm text-gray-800 font-medium">{message}</p>
    </div>
  );
};

export default NotificationComponent;
