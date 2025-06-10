import React from "react";
import { GiMineTruck } from "react-icons/gi";
import { Recycle, BrushCleaning } from "lucide-react";

const services = [
  { icon: <GiMineTruck size={32} />, label: "Pick waste" },
  { icon: <BrushCleaning size={32} />, label: "Cleaning" },
  { icon: <Recycle size={32} />, label: "Recycle" },
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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full aspect-square border border-black rounded-2xl p-3"
          >
            {service.icon}
            <span className="mt-2 text-sm text-center">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
