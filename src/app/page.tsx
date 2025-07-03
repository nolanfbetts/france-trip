import { travelers, stops, hotels, travelTimes, events, reservations } from '@/data/trip';
import { Plane, MapPin, Hotel, Clock, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">France Trip 2025</h1>
          <p className="text-xl text-gray-200">Your complete travel companion</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Plane className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-blue-600">{travelers.length}</div>
            <div className="text-sm text-gray-700">Travelers</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-green-600">{stops.length}</div>
            <div className="text-sm text-gray-700">Destinations</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Hotel className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-purple-600">{hotels.length}</div>
            <div className="text-sm text-gray-700">Hotels</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold text-orange-600">{travelTimes.length}</div>
            <div className="text-sm text-gray-700">Travel Segments</div>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-pink-600" />
            <div className="text-2xl font-bold text-pink-600">{events.length + reservations.length}</div>
            <div className="text-sm text-gray-700">Events & Reservations</div>
          </div>
        </div>

        {/* Trip Itinerary & Travelers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Stops Overview */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
              <MapPin className="w-5 h-5 mr-2" />
              Trip Itinerary
            </h2>
            <div className="space-y-4">
              {stops.map((stop, index) => (
                <div key={stop.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{stop.name}</div>
                    <div className="text-sm text-gray-800">{stop.duration}</div>
                    <div className="text-sm text-gray-700">{stop.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Travelers Overview */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
              <Plane className="w-5 h-5 mr-2" />
              Travelers & Flights
            </h2>
            <div className="space-y-3">
              {travelers.map((traveler) => (
                <div key={traveler.name} className="border-l-4 border-blue-200 pl-3">
                  <div className="font-semibold text-gray-900">{traveler.name}</div>
                  {traveler.flights.length > 0 && (
                    <>
                      <div className="text-sm text-gray-800">
                        {traveler.flights[0].airline} {traveler.flights[0].flightNumber}
                      </div>
                      <div className="text-sm text-gray-700">
                        {traveler.flights[0].from} → {traveler.flights[0].to}
                      </div>
                      {traveler.flights.length > 1 && (
                        <div className="text-xs text-gray-600">
                          +{traveler.flights.length - 1} more flight{traveler.flights.length > 2 ? 's' : ''}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <a href="/travelers" className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:shadow-md transition-shadow text-center text-white hover:bg-gray-700">
              <Plane className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <div className="font-medium">View All Travelers</div>
            </a>
            <a href="/map" className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:shadow-md transition-shadow text-center text-white hover:bg-gray-700">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-green-400" />
              <div className="font-medium">Interactive Map</div>
            </a>
            <a href="/hotels" className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:shadow-md transition-shadow text-center text-white hover:bg-gray-700">
              <Hotel className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <div className="font-medium">Hotel Details</div>
            </a>
            <a href="/travel-times" className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:shadow-md transition-shadow text-center text-white hover:bg-gray-700">
              <Clock className="w-6 h-6 mx-auto mb-2 text-orange-400" />
              <div className="font-medium">Travel Times</div>
            </a>
            <a href="/events" className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 hover:shadow-md transition-shadow text-center text-white hover:bg-gray-700">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-pink-400" />
              <div className="font-medium">Events</div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
