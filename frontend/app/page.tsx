"use client";

import { useRef } from "react";
import { useTamboThread, useTamboThreadInput } from "@tambo-ai/react";
import { motion } from "framer-motion";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const { thread } = useTamboThread();
  const { value, setValue, submit, isPending } = useTamboThreadInput();

  // Ref for the messages we want to print
  const componentRef = useRef<HTMLDivElement>(null);

  // React-to-print handler (Option 1: cast as any to fix TypeScript error)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "IntentFlow_Thread",
    onAfterPrint: () => console.log("PDF saved!"),
  } as any); // <-- this removes the red line under 'content'

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-10">
      <h1 className="text-5xl font-bold mb-4 text-center">IntentFlow ✨</h1>
      <p className="text-center text-gray-300 mb-8">
        Describe your idea. Watch AI generate visuals, architecture & roadmap.
      </p>

      {/* Example Input Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-800 to-purple-600 shadow-lg border-l-4 border-purple-400"
      >
        <h2 className="text-lg font-bold text-white mb-2">💡 Example Idea Format</h2>
        <p className="text-gray-200 text-sm">
          "A patient-first healthcare appointment booking app that helps users find the right provider, see real-time availability, book/reschedule/cancel visits (in-person or telehealth), and receive timely reminders—while enabling providers to manage schedules and reduce no-shows through automated matching and notifications."
        </p>
      </motion.div>

      {/* Input + Generate */}
      <div className="flex gap-2 mb-4 max-w-3xl mx-auto">
        <input
          className="flex-1 p-3 rounded bg-gray-800 border border-gray-600 text-white"
          placeholder="Design a healthcare appointment booking app"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={submit}
          disabled={isPending}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-bold"
        >
          {isPending ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* Export PDF Button */}
      <div className="text-center mb-10">
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-bold"
        >
          Export PDF
        </button>
      </div>

      {/* Thread Content */}
      <div ref={componentRef} className="space-y-6 max-w-4xl mx-auto">
        {thread.messages.map((msg) => (
          <div key={msg.id}>{msg.renderedComponent}</div>
        ))}
      </div>
    </main>
  );
}