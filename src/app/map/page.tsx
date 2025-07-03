import TripMap from '@/components/TripMap';
import { stops } from '@/data/trip';

export default function MapPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Trip Map</h1>
      <div className="mb-6">
        <TripMap />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 text-white">Trip Stops</h2>
        <ul className="space-y-3">
          {stops.map((stop) => (
            <li key={stop.id} className="border border-gray-600 rounded-lg p-3 shadow-sm bg-gray-900">
              <div className="font-semibold text-lg text-white">{stop.name}</div>
              <div className="text-sm text-gray-200">{stop.location}</div>
              <div className="text-sm text-gray-300">{stop.description}</div>
              <div className="text-sm font-medium text-gray-400">Duration: {stop.duration}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 