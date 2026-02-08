"use client";
import { motion } from "framer-motion";

export function FlowVisualizer({ steps = [] }) {
  return (
    <div className="p-6 rounded-2xl bg-purple-900/50 shadow-xl border-l-4 border-purple-500">
      <h2 className="text-xl font-bold text-purple-300 mb-4">🌀 Flow Visualizer</h2>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <motion.li
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-purple-800/40 p-3 rounded text-white"
          >
            {s}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
