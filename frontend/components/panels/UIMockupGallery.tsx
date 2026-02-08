"use client";
import { motion } from "framer-motion";

export function UIMockupGallery({ screens = [] }) {
  return (
    <div className="p-6 rounded-2xl bg-blue-900/40 shadow-xl">
      <h2 className="text-xl font-bold text-blue-300 mb-4">🎨 UI Mockups</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {screens.map((s: any, i: number) => (
          <motion.div
            key={i}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-800/50 rounded-xl overflow-hidden shadow-md border border-blue-700"
          >
            <img
              src={s.imageUrl || "https://source.unsplash.com/400x300/?app,ui"}
              alt={s.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="text-gray-200 text-sm">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
