"use client";
import { motion } from "framer-motion";

export function RoadmapTimeline({ phases = [] }) {
  return (
    <div className="p-6 rounded-2xl bg-orange-900/40 shadow-xl border-l-4 border-orange-400">
      <h2 className="text-xl font-bold text-orange-300 mb-4">📅 Roadmap Timeline</h2>
      <div className="space-y-4">
        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="border-l-4 border-orange-500 pl-4 bg-orange-800/20 p-2 rounded"
          >
            <h3 className="text-white font-semibold">{p.title}</h3>
            <p className="text-gray-200 text-sm">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
