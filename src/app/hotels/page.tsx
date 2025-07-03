import { hotels } from "@/data/trip";

export default function HotelsPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Hotels</h1>
      <ul className="space-y-6">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="border border-gray-600 rounded-lg p-4 shadow-sm bg-gray-900">
            <div className="font-semibold text-lg mb-1 text-white">{hotel.name}</div>
            <div className="text-sm text-gray-200 mb-2">
              <div><span className="font-medium text-gray-300">Location:</span> {hotel.location}</div>
              <div><span className="font-medium text-gray-300">Address:</span> {hotel.address}</div>
            </div>
            <div className="text-sm text-gray-200 mb-2">
              <div><span className="font-medium text-gray-300">Check-in:</span> {hotel.checkIn}</div>
              <div><span className="font-medium text-gray-300">Check-out:</span> {hotel.checkOut}</div>
              <div><span className="font-medium text-gray-300">Confirmation #:</span> {hotel.confirmationNumber}</div>
            </div>
            <div className="text-sm text-gray-200">
              <div><span className="font-medium text-gray-300">Phone:</span> {hotel.phone}</div>
              {hotel.website && (
                <div>
                  <span className="font-medium text-gray-300">Website:</span>{" "}
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
                    Visit website
                  </a>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
} 