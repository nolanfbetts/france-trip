import { events, reservations } from "@/data/trip";
import { Calendar, Clock, MapPin, Users, Euro, ExternalLink } from "lucide-react";

export default function EventsPage() {
  // Combine events and reservations and sort by date
  const allItems = [
    ...events.map(event => ({ ...event, itemType: 'event' as const })),
    ...reservations.map(reservation => ({ ...reservation, itemType: 'reservation' as const }))
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Group items by date
  const groupedItems = allItems.reduce((groups, item) => {
    const date = item.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {} as Record<string, typeof allItems>);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'restaurant':
        return '🍽️';
      case 'museum':
        return '🏛️';
      case 'tour':
        return '🎫';
      case 'activity':
        return '🎯';
      case 'transport':
        return '🚗';
      default:
        return '📅';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'restaurant':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'museum':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tour':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'activity':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'transport':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Events & Reservations (This is work in progress ignore for now)</h1>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
          <div className="text-lg font-bold text-blue-600">{Object.keys(groupedItems).length}</div>
          <div className="text-sm text-gray-700">Days with Events</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <Clock className="w-6 h-6 mx-auto mb-2 text-green-600" />
          <div className="text-lg font-bold text-green-600">{events.length}</div>
          <div className="text-sm text-gray-700">Events</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" />
          <div className="text-lg font-bold text-orange-600">{reservations.length}</div>
          <div className="text-sm text-gray-700">Reservations</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <Euro className="w-6 h-6 mx-auto mb-2 text-purple-600" />
          <div className="text-lg font-bold text-purple-600">€1,200+</div>
          <div className="text-sm text-gray-700">Total Budget</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {Object.entries(groupedItems).map(([date, items]) => (
          <div key={date} className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              {formatDate(date)}
            </h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-400">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{getTypeIcon(item.type)}</span>
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(item.type)}`}>
                          {item.itemType === 'event' ? 'Event' : 'Reservation'}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(item.type)}`}>
                          {item.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.time}
                        </div>
                        {item.itemType === 'reservation' && item.partySize && (
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {item.partySize} people
                          </div>
                        )}
                      </div>

                      {'description' in item && item.description && (
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      )}

                      <div className="flex flex-wrap gap-4 text-sm">
                        {item.confirmationNumber && (
                          <div className="text-gray-400">
                            <span className="font-medium">Confirmation:</span> {item.confirmationNumber}
                          </div>
                        )}
                        {item.price && (
                          <div className="text-gray-400">
                            <span className="font-medium">Price:</span> {item.price}
                          </div>
                        )}
                      </div>

                      {item.notes && (
                        <p className="text-gray-400 text-sm mt-2 italic">{item.notes}</p>
                      )}
                    </div>

                    {item.website && (
                      <a 
                        href={item.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 