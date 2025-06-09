import React from "react";
import { Sparkles } from "lucide-react";
import waste from "../../assets/waste.png";
import recycle from "../../assets/Vector.png";

const services = [
  {
    icon: <img src={waste} alt="Pick waste" className="w-10 h-10" />,
    label: "Pick waste",
  },
  {
    icon: <Sparkles size={35} />,
    label: "Cleaning",
  },
  {
    icon: <img src={recycle} alt="Recycle" className="w-10 h-8" />,
    label: "Recycle",
  },
];

const Services = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">More services</h2>
        <button className="text-gray-500 text-sm hover:underline">
          See more
        </button>
      </div>

      <div className="flex space-x-2 overflow-x-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-28 h-28 border border-black rounded-2xl p-3 flex-shrink-0"
          >
            {service.icon}
            <span className="mt-2 text-sm text-center font-semibold">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
