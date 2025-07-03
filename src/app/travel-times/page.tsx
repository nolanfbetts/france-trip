import { travelTimes } from "@/data/trip";

export default function TravelTimesPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Travel Times</h1>
      <ul className="space-y-6">
        {travelTimes.map((travel, index) => (
          <li key={index} className="border border-gray-600 rounded-lg p-4 shadow-sm bg-gray-900">
            <div className="font-semibold text-lg mb-1 text-white">
              {travel.from} → {travel.to}
            </div>
            <div className="text-sm text-gray-200">
              <div><span className="font-medium text-gray-300">Mode:</span> {travel.mode}</div>
              <div><span className="font-medium text-gray-300">Duration:</span> {travel.duration}</div>
              {travel.distance && (
                <div><span className="font-medium text-gray-300">Distance:</span> {travel.distance}</div>
              )}
              {travel.notes && (
                <div><span className="font-medium text-gray-300">Notes:</span> {travel.notes}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
} 