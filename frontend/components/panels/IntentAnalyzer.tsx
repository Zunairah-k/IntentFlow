"use client";
import { motion } from "framer-motion";

export function IntentAnalyzer({ intent = "No intent detected", confidence = 0 }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl bg-gradient-to-r from-cyan-800 to-cyan-600 shadow-xl border-l-4 border-cyan-400"
    >
      <h2 className="text-2xl font-bold text-white mb-3">🧠 Intent Analyzer</h2>
      <p className="text-gray-200 mb-2">{intent}</p>
      <p className="text-gray-400 text-sm">Confidence: {(confidence * 100).toFixed(1)}%</p>
    </motion.div>
  );
}
