import { travelers } from "@/data/trip";

export default function TravelersPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Travelers</h1>
      <ul className="space-y-6">
        {travelers.map((traveler) => (
          <li key={traveler.name} className="border border-gray-600 rounded-lg p-4 shadow-sm bg-gray-900">
            <div className="font-semibold text-lg mb-3 text-white">{traveler.name}</div>
            {traveler.flights.length === 0 ? (
              <div className="text-sm text-gray-400">No flights booked yet</div>
            ) : (
              <div className="space-y-3">
                {traveler.flights.map((flight, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-3">
                    {traveler.flights.length > 1 && (
                      <div className="text-xs text-gray-400 mb-1">Flight {index + 1}</div>
                    )}
                    <div className="text-sm text-gray-200">
                      <div><span className="font-medium text-gray-300">Airline:</span> {flight.airline}</div>
                      <div><span className="font-medium text-gray-300">Flight #:</span> {flight.flightNumber}</div>
                      <div><span className="font-medium text-gray-300">From:</span> {flight.from} <span className="mx-1">→</span> {flight.to}</div>
                      <div><span className="font-medium text-gray-300">Departure:</span> {new Date(flight.departure).toLocaleString()}</div>
                      <div><span className="font-medium text-gray-300">Arrival:</span> {new Date(flight.arrival).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
} 