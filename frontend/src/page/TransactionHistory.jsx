import React from "react";
import { ArrowDownCircle, ArrowUpCircle, Coins } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "credit",
    description: "Completed Recycling Task",
    amount: 150,
    date: "2025-06-12",
  },
  {
    id: 2,
    type: "debit",
    description: "Redeemed Zomato Voucher",
    amount: 699,
    date: "2025-06-10",
  },
  {
    id: 3,
    type: "credit",
    description: "Referral Bonus",
    amount: 200,
    date: "2025-06-09",
  },
  {
    id: 4,
    type: "debit",
    description: "Donated Tree",
    amount: 100,
    date: "2025-06-08",
  },
];

function TransactionHistory() {
  const totalEarned = transactions
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalSpent = transactions
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen pb-20 bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
          {/* Total Earned */}
          <div className="bg-white p-5 rounded-xl shadow flex flex-col items-start">
            <div className="flex items-center gap-2 text-green-700 font-medium text-base mb-1">
              <ArrowDownCircle className="w-5 h-5" />
              <span>Total Earned</span>
            </div>
            <div className="flex items-center gap-2 text-green-800 font-bold text-xl">
              <Coins className="w-5 h-5" />
              <span>{totalEarned} pts</span>
            </div>
          </div>

          {/* Total Spent */}
          <div className="bg-white p-5 rounded-xl shadow flex flex-col items-start">
            <div className="flex items-center gap-2 text-red-600 font-medium text-base mb-1">
              <ArrowUpCircle className="w-5 h-5" />
              <span>Total Spent</span>
            </div>
            <div className="flex items-center gap-2 text-red-700 font-bold text-xl">
              <Coins className="w-5 h-5" />
              <span>{totalSpent} pts</span>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Transaction History
          </h2>
          <ul className="divide-y">
            {transactions.map((txn) => (
              <li
                key={txn.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  {txn.type === "credit" ? (
                    <ArrowDownCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <ArrowUpCircle className="w-6 h-6 text-red-600" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {txn.description}
                    </p>
                    <p className="text-xs text-gray-500">{txn.date}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    txn.type === "credit" ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {txn.type === "credit" ? "+" : "-"}
                  {txn.amount} pts
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
