export default function HistoryExplorer({
  history,
}: {
  history: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-gray-500">
      <h2 className="text-xl font-bold mb-2">📚 Related Ideas</h2>
      <ul className="text-sm text-gray-600 space-y-1">
        {history.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
