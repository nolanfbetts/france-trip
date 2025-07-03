"use client";
import { travelers } from "@/data/trip";
import { useState } from "react";
import { Search } from "lucide-react";

export default function TravelersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter travelers based on search term
  const filteredTravelers = travelers.filter(traveler =>
    traveler.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Travelers</h1>
      
      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search travelers by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {searchTerm && (
          <div className="mt-2 text-sm text-gray-400">
            Showing {filteredTravelers.length} of {travelers.length} travelers
          </div>
        )}
      </div>

      <ul className="space-y-6">
        {filteredTravelers.map((traveler) => (
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

      {filteredTravelers.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <div className="text-gray-400 text-lg">No travelers found matching &quot;{searchTerm}&quot;</div>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}
    </main>
  );
} 