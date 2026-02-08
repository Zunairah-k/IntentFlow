"use client";
import { motion } from "framer-motion";

export function SystemArchitectureMap({ modules = [] }) {
  return (
    <div className="p-6 rounded-2xl bg-green-900/40 shadow-xl border-l-4 border-green-400">
      <h2 className="text-xl font-bold text-green-300 mb-4">🖥️ System Architecture</h2>
      <div className="flex flex-wrap gap-3">
        {modules.map((m, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-2 bg-green-700/30 text-white rounded-full border border-green-500"
          >
            {m}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
