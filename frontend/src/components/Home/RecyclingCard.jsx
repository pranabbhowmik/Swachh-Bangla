// components/RecyclingCard.jsx

import React from "react";
import { Recycle } from "lucide-react";
import binImage from "../../assets/dustbin.png"; // adjust path as needed

const RecyclingCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-[#7837da] border rounded-xl p-6 shadow-sm flex flex-col items-center text-center space-y-4">
      <div className="w-20 h-20">
        <img src={binImage} alt="Dustbin" className="object-cover" />
      </div>

      <h2 className="text-xl font-bold text-white leading-tight">
        How you can <br />
        <span className="text-white">Earn reward for Recycling</span>
      </h2>

      <p className="text-sm text-white">With you we will help ecology</p>

      <button className="mt-4 flex items-center justify-between border border-black rounded-full px-5 py-2 text-sm font-medium bg-black text-white transition-all">
        My Waste pick up
        <Recycle className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

export default RecyclingCard;
