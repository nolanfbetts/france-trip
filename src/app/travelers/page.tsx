import { travelers } from "@/data/trip";

export default function TravelersPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Travelers</h1>
      <ul className="space-y-6">
        {travelers.map((traveler) => (
          <li key={traveler.name} className="border border-gray-600 rounded-lg p-4 shadow-sm bg-gray-900">
            <div className="font-semibold text-lg mb-1 text-white">{traveler.name}</div>
            <div className="text-sm text-gray-200">
              <div><span className="font-medium text-gray-300">Airline:</span> {traveler.flight.airline}</div>
              <div><span className="font-medium text-gray-300">Flight #:</span> {traveler.flight.flightNumber}</div>
              <div><span className="font-medium text-gray-300">From:</span> {traveler.flight.from} <span className="mx-1">→</span> {traveler.flight.to}</div>
              <div><span className="font-medium text-gray-300">Departure:</span> {new Date(traveler.flight.departure).toLocaleString()}</div>
              <div><span className="font-medium text-gray-300">Arrival:</span> {new Date(traveler.flight.arrival).toLocaleString()}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
} 