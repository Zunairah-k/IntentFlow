export default function DecisionBoard({
  options,
}: {
  options: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border-l-4 border-orange-500">
      <h2 className="text-xl font-bold mb-2">🎯 Decision Board</h2>
      <ul className="space-y-2">
        {options.map((opt, i) => (
          <li key={i} className="bg-orange-50 p-2 rounded">
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}
