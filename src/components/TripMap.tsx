'use client';

import { useEffect, useState } from 'react';
import { stops } from '@/data/trip';
import type { ComponentType } from 'react';

// Dynamic import to avoid SSR issues
const TripMapComponent = () => {
  const [MapContainer, setMapContainer] = useState<ComponentType<any> | null>(null);
  const [TileLayer, setTileLayer] = useState<ComponentType<any> | null>(null);
  const [Marker, setMarker] = useState<ComponentType<any> | null>(null);
  const [Popup, setPopup] = useState<ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const L = await import('leaflet');
        const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
        
        // Fix for default markers in react-leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setMapContainer(() => MapContainer);
        setTileLayer(() => TileLayer);
        setMarker(() => Marker);
        setPopup(() => Popup);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading map:', error);
        setIsLoading(false);
      }
    };

    loadMap();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[500px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  if (!MapContainer || !TileLayer || !Marker || !Popup) {
    return null;
  }

  // Calculate center point of all stops
  const centerLat = stops.reduce((sum, stop) => sum + stop.coordinates[0], 0) / stops.length;
  const centerLng = stops.reduce((sum, stop) => sum + stop.coordinates[1], 0) / stops.length;

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={6}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {stops.map((stop) => (
        <Marker key={stop.id} position={stop.coordinates}>
          <Popup>
            <div>
              <h3 className="font-bold text-lg">{stop.name}</h3>
              <p className="text-sm text-gray-600">{stop.location}</p>
              <p className="text-sm">{stop.description}</p>
              <p className="text-sm font-medium">Duration: {stop.duration}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default function TripMap() {
  return <TripMapComponent />;
} 