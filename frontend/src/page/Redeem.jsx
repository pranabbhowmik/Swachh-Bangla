import React, { useState } from "react";
import { Coins, Sparkles, Leaf, Gift, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import justcheers from "../assets/Brand/justcheers.png";
import flipkart from "../assets/Brand/flipkart.png";
import ola from "../assets/Brand/ola.png";
import zomato from "../assets/Brand/zomato.png";
import swiggy from "../assets/Brand/swiggy.png";
import totowala from "../assets/Brand/logo.jpeg";

const vouchers = [
  {
    id: 1,
    company: "Zomato",
    logo: zomato,
    points: 699,
    code: "ZMTOFREE",
  },
  {
    id: 2,
    company: "Flipkart",
    logo: flipkart,
    points: 999,
    code: "FLPKT299",
  },
  {
    id: 3,
    company: "Just Cheers",
    logo: justcheers,
    points: 1299,
    code: "JUSTCHEERS199",
  },
  {
    id: 4,
    company: "Ola",
    logo: ola,
    points: 799,
    code: "OLASAVE99",
  },
  {
    id: 5,
    company: "Swiggy",
    logo: swiggy,
    points: 899,
    code: "SWIGDEAL99",
  },
  {
    id: 6,
    company: "Toto Wala",
    logo: totowala,
    points: 1099,
    code: "WELCOME50",
  },
];

function RedeemPage() {
  const [revealed, setRevealed] = useState({});
  const [treesDonated, setTreesDonated] = useState(0);
  const [userPoints, setUserPoints] = useState(5287);

  const handleReveal = (voucher) => {
    if (userPoints >= voucher.points) {
      setRevealed((prev) => ({ ...prev, [voucher.id]: true }));
      setUserPoints((prev) => prev - voucher.points);
    } else {
      alert("Not enough points!");
    }
  };

  const handleDonate = () => {
    if (userPoints >= 100) {
      setUserPoints((prev) => prev - 100);
      setTreesDonated((prev) => prev + 1);
    } else {
      alert("You need at least 100 points to donate a tree.");
    }
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background: `linear-gradient(to bottom right, #C6F6D5, #FFFFFF)`,
      }}
    >
      {/* User Points */}
      <div
        className="flex items-center justify-between p-4 rounded-2xl shadow mb-6"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="flex items-center gap-3" style={{ color: "#2F855A" }}>
          <Coins className="w-6 h-6" />
          <span className="text-lg font-semibold">
            Points: <CountUp end={userPoints} duration={2} />
          </span>
        </div>
        <Sparkles
          className="w-6 h-6 animate-pulse"
          style={{ color: "#F6E05E" }}
        />
      </div>

      {/* Donation Section */}
      <div
        className="rounded-2xl p-5 text-center shadow-inner mb-8"
        style={{ backgroundColor: "#C6F6D5" }}
      >
        <Sprout
          className="w-10 h-10 mx-auto mb-2"
          style={{ color: "#2F855A" }}
        />
        <h3 className="text-lg font-semibold" style={{ color: "#1A202C" }}>
          Donate Trees
        </h3>
        <p className="text-sm mb-3" style={{ color: "#4A5568" }}>
          100 points = 1 tree
        </p>
        <button
          onClick={handleDonate}
          className="px-6 py-2 rounded-full transition"
          style={{
            backgroundColor: "#2F855A",
            color: "#FFFFFF",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#276749")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2F855A")}
        >
          Donate
        </button>
        {treesDonated > 0 && (
          <p className="mt-3" style={{ color: "#2F855A" }}>
            You have donated {treesDonated} tree{treesDonated > 1 ? "s" : ""} 🌳
          </p>
        )}
      </div>

      {/* Vouchers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {vouchers.map((voucher) => (
          <motion.div
            key={voucher.id}
            whileHover={{ scale: 1.02 }}
            className="relative border rounded-xl p-4 shadow-md transition-all"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#EDF2F7",
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src={voucher.logo}
                alt={`${voucher.company} logo`}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#1A202C" }}>
                  {voucher.company}
                </h3>
                <p className="text-sm" style={{ color: "#4A5568" }}>
                  Requires {voucher.points} points
                </p>
              </div>
            </div>
            {revealed[voucher.id] ? (
              <div
                className="mt-4 text-center p-2 rounded-lg font-mono border-t border-dashed"
                style={{
                  backgroundColor: "#EDF2F7",
                  color: "#2F855A",
                  borderColor: "#E2E8F0",
                }}
              >
                {voucher.code}
              </div>
            ) : (
              <button
                onClick={() => handleReveal(voucher)}
                className="w-full mt-4 py-2 rounded-full transition"
                style={{
                  backgroundColor: "#2F855A",
                  color: "#FFFFFF",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#276749")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2F855A")}
              >
                Scratch & Reveal
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RedeemPage;
