"use client";
import { motion } from "framer-motion";

export function ImpactMeter({ impact = 0, creativity = 0, feasibility = 0 }) {
  const Bar = ({ label, value }) => (
    <div>
      <p className="text-gray-300">{label}</p>
      <div className="w-full bg-gray-800 h-3 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <div className="p-6 rounded-2xl bg-yellow-900/40 shadow-xl border-l-4 border-yellow-400 space-y-2">
      <h2 className="text-xl font-bold text-yellow-300 mb-2">📊 Impact Meter</h2>
      <Bar label="Impact" value={impact} />
      <Bar label="Creativity" value={creativity} />
      <Bar label="Feasibility" value={feasibility} />
    </div>
  );
}
