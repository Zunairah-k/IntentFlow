export function ImpactMeter({
  impact = 0,
  creativity = 0,
  feasibility = 0,
}: {
  impact?: number;
  creativity?: number;
  feasibility?: number;
}) {
  const Bar = ({ label, value }: { label: string; value: number }) => (
    <div>
      <p>{label}</p>
      <div className="w-full bg-gray-700 h-3 rounded-full">
        <div
          className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="glass p-4 rounded-xl space-y-2">
      <h2 className="text-xl text-yellow-400 mb-2">Impact Meter</h2>
      <Bar label="Impact" value={impact} />
      <Bar label="Creativity" value={creativity} />
      <Bar label="Feasibility" value={feasibility} />
    </div>
  );
}