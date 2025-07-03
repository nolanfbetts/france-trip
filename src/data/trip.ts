export type Traveler = {
  name: string;
  flight: {
    airline: string;
    flightNumber: string;
    departure: string;
    arrival: string;
    from: string;
    to: string;
  };
};

export type Stop = {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  duration: string; // e.g., "3 days"
};

export type Hotel = {
  id: string;
  name: string;
  location: string;
  address: string;
  checkIn: string;
  checkOut: string;
  confirmationNumber: string;
  phone: string;
  website?: string;
};

export type TravelTime = {
  from: string;
  to: string;
  mode: string; // "train", "car", "plane", etc.
  duration: string;
  distance?: string;
  notes?: string;
};

export const travelers: Traveler[] = [
  {
    name: "Robert Betts",
    flight: {
      airline: "Air France",
      flightNumber: "AF123",
      departure: "2024-07-01T10:00:00",
      arrival: "2024-07-01T18:00:00",
      from: "JFK",
      to: "CDG",
    },
  },
  {
    name: "Paulette Betts",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Brandon Betts",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Amanda Betts",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Bennett Betts",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Alden Betts",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Cody Brenner",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Francesca Brenner",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Nolan Betts",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Maggie Wang",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Scott Holden",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Penny Holden",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Fred Pugliano",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Frank Pugliano",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Susan Pugliano",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },
  {
    name: "Sarah Pugliano",
    flight: {
      airline: "TBD",
      flightNumber: "TBD",
      departure: "2024-07-01T11:30:00",
      arrival: "2024-07-01T19:30:00",
      from: "TBD",
      to: "TBD",
    },
  },

];

export const stops: Stop[] = [
  {
    id: "paris-montmartre",
    name: "Paris (Montmartre)",
    location: "Paris, France",
    coordinates: [48.8867, 2.3380],
    description: "Arrive in Paris, stay at Timhotel Montmartre.",
    duration: "1 night (9/24/25)",
  },
  {
    id: "munich",
    name: "Munich",
    location: "Munich, Germany",
    coordinates: [48.1351, 11.5820],
    description: "Stay with Maggie.",
    duration: "2 nights (9/25–9/27/25)",
  },
  {
    id: "strasbourg",
    name: "Strasbourg",
    location: "Strasbourg, France",
    coordinates: [48.5734, 7.7521],
    description: "Pick up car, stay at Hôtel de l'Europe by HappyCulture.",
    duration: "1 night (9/28/25)",
  },
  {
    id: "beaune",
    name: "Beaune",
    location: "Beaune, France",
    coordinates: [47.0226, 4.8378],
    description: "Stay at La Maison d'Hippolyte - town center.",
    duration: "2 nights (9/29–9/30/25)",
  },
  {
    id: "avignon",
    name: "Avignon",
    location: "Avignon, France",
    coordinates: [43.9493, 4.8055],
    description: "Stay at HOTEL BOQUIER.",
    duration: "1 night (10/1/25)",
  },
  {
    id: "nice",
    name: "Nice",
    location: "Nice, France",
    coordinates: [43.7102, 7.2620],
    description: "Stay at Hotel Villa Rivoli.",
    duration: "1 night (10/2/25)",
  },
  {
    id: "lyon",
    name: "Lyon",
    location: "Lyon, France",
    coordinates: [45.7578, 4.8320],
    description: "Stay at Hotel Vaubecour.",
    duration: "1 night (10/3/25)",
  },
  {
    id: "azay-sur-cher",
    name: "Azay-Sur Cher",
    location: "Azay-sur-Cher, France",
    coordinates: [47.3222, 0.8881],
    description: "Stay at Castle of Beauvais (house for 14).",
    duration: "3 nights (10/4–10/7/25)",
  },
  {
    id: "mont-st-michel",
    name: "Mont St Michel",
    location: "Mont Saint-Michel, France",
    coordinates: [48.6361, -1.5115],
    description: "Stay at Auberge Saint-Pierre.",
    duration: "1 night (10/7/25)",
  },
  {
    id: "caen",
    name: "Caen",
    location: "Caen, France",
    coordinates: [49.1829, -0.3707],
    description: "Stay at Restaurant-Hôtel-Spa Ivan Vautier.",
    duration: "1 night (10/8/25)",
  },
  {
    id: "etretat",
    name: "Étretat",
    location: "Étretat, France",
    coordinates: [49.7061, 0.2042],
    description: "Stay at Dormy House.",
    duration: "1 night (10/9/25)",
  },
  {
    id: "paris-maitre-albert",
    name: "Paris (Maître Albert)",
    location: "Paris, France",
    coordinates: [48.8494, 2.3496],
    description: "Stay at AIRBNB, 8 Rue Maître Albert.",
    duration: "2 nights (10/10–10/12/25)",
  },
  {
    id: "paris-prince-des-galles",
    name: "Paris (Prince Des Galles)",
    location: "Paris, France",
    coordinates: [48.8686, 2.3005],
    description: "Stay at Prince Des Galles.",
    duration: "1 night (10/12/25)",
  },
];

export const hotels: Hotel[] = [
  {
    id: "timhotel-montmartre",
    name: "Timhotel Montmartre",
    location: "Paris (Montmartre)",
    address: "11 Rue Ravignan, Place Emile Goudeau, 75018 Paris, France",
    checkIn: "2025-09-24",
    checkOut: "2025-09-25",
    confirmationNumber: "947150769",
    phone: "N/A",
    website: "https://www.timhotel.com/en/timhotel-montmartre-paris-18",
  },
  {
    id: "munich-maggie",
    name: "Stay with Maggie",
    location: "Munich",
    address: "Munich, Germany",
    checkIn: "2025-09-25",
    checkOut: "2025-09-27",
    confirmationNumber: "N/A",
    phone: "N/A",
  },
  {
    id: "strasbourg-europe",
    name: "Hôtel de l'Europe by HappyCulture",
    location: "Strasbourg",
    address: "38 rue du Fossé des Tanneurs, 67000 Strasbourg, France",
    checkIn: "2025-09-28",
    checkOut: "2025-09-29",
    confirmationNumber: "S75L9Y",
    phone: "N/A",
    website: "https://www.hotel-europe.com/",
  },
  {
    id: "beaune-maison-hippolyte",
    name: "La Maison d'Hippolyte",
    location: "Beaune",
    address: "4 Rue Hippollyte Michaud, 21200 Beaune, France",
    checkIn: "2025-09-29",
    checkOut: "2025-10-01",
    confirmationNumber: "AIRBNB",
    phone: "N/A",
  },
  {
    id: "avignon-boquier",
    name: "HOTEL BOQUIER",
    location: "Avignon",
    address: "6 Rue du Portail Boquier, 84000 Avignon, France",
    checkIn: "2025-10-01",
    checkOut: "2025-10-02",
    confirmationNumber: "13336",
    phone: "N/A",
  },
  {
    id: "nice-villa-rivoli",
    name: "Hotel Villa Rivoli",
    location: "Nice",
    address: "10 Rue de Rivoli, 06000 Nice, France",
    checkIn: "2025-10-02",
    checkOut: "2025-10-03",
    confirmationNumber: "1338987",
    phone: "N/A",
    website: "https://www.villa-rivoli.com/",
  },
  {
    id: "lyon-vaubecour",
    name: "Hotel Vaubecour",
    location: "Lyon",
    address: "28 Rue Vaubecour, 69002 Lyon, France",
    checkIn: "2025-10-03",
    checkOut: "2025-10-04",
    confirmationNumber: "SH8MJZ",
    phone: "N/A",
  },
  {
    id: "azay-beauvais",
    name: "Castle of Beauvais",
    location: "Azay-Sur Cher",
    address: "Azay-sur-Cher, France",
    checkIn: "2025-10-04",
    checkOut: "2025-10-07",
    confirmationNumber: "HA-HN1TS5 VRBO",
    phone: "N/A",
  },
  {
    id: "mont-st-michel-auberge",
    name: "Auberge Saint-Pierre",
    location: "Mont St Michel",
    address: "Grande Rue BP 16, 50170 Mont Saint-Michel, France",
    checkIn: "2025-10-07",
    checkOut: "2025-10-08",
    confirmationNumber: "2-473-30617",
    phone: "N/A",
    website: "https://www.auberge-saint-pierre.fr/",
  },
  {
    id: "caen-ivan-vautier",
    name: "Restaurant-Hôtel-Spa Ivan Vautier",
    location: "Caen",
    address: "3 avenue Henry Chéron, 14000 Caen, France",
    checkIn: "2025-10-08",
    checkOut: "2025-10-09",
    confirmationNumber: "SL4BJ7",
    phone: "N/A",
    website: "https://www.ivanvautier.com/",
  },
  {
    id: "etretat-dormy-house",
    name: "Dormy House",
    location: "Étretat",
    address: "20 Route du Havre, 76790 Étretat, France",
    checkIn: "2025-10-09",
    checkOut: "2025-10-10",
    confirmationNumber: "SLP8Q3",
    phone: "N/A",
    website: "https://www.dormy-house.com/",
  },
  {
    id: "paris-maitre-albert-airbnb",
    name: "AIRBNB (Maître Albert)",
    location: "Paris (Maître Albert)",
    address: "8 Rue Maître Albert, 75005 Paris, France",
    checkIn: "2025-10-10",
    checkOut: "2025-10-12",
    confirmationNumber: "HMJR4SAFJP",
    phone: "N/A",
  },
  {
    id: "paris-prince-des-galles",
    name: "Prince Des Galles",
    location: "Paris (Prince Des Galles)",
    address: "33 George Cinq, 75008 Paris, France",
    checkIn: "2025-10-12",
    checkOut: "2025-10-13",
    confirmationNumber: "N/A",
    phone: "N/A",
    website: "https://www.marriott.com/en-us/hotels/parlc-prince-de-galles-a-luxury-collection-hotel-paris/overview/",
  },
];

export const travelTimes: TravelTime[] = [
  {
    from: "Paris (Montmartre)",
    to: "Munich",
    mode: "train/plane",
    duration: "~6h (estimate)",
    notes: "Travel from Paris to Munich. Stay with Maggie.",
  },
  {
    from: "Munich",
    to: "Strasbourg",
    mode: "train/drive",
    duration: "~5h (estimate)",
    notes: "Pick up car at Strasbourg Gare, 9/28/25 6PM. Peugeot 5008 or similar, 7 passengers, unlimited mileage. $1,151.03 Not Yet Paid. EXPEDIA Enterprise Rental.",
  },
  {
    from: "Strasbourg",
    to: "Beaune",
    mode: "car",
    duration: "3h 30m",
    distance: "320 km",
  },
  {
    from: "Beaune",
    to: "Avignon",
    mode: "car",
    duration: "3h 45m",
    distance: "350 km",
  },
  {
    from: "Avignon",
    to: "Nice",
    mode: "car",
    duration: "2h 30m",
    distance: "260 km",
  },
  {
    from: "Nice",
    to: "Lyon",
    mode: "car",
    duration: "4h 30m",
    distance: "470 km",
  },
  {
    from: "Lyon",
    to: "Azay-Sur Cher",
    mode: "car",
    duration: "4h 30m",
    distance: "420 km",
  },
  {
    from: "Azay-Sur Cher",
    to: "Mont St Michel",
    mode: "car",
    duration: "3h 30m",
    distance: "320 km",
  },
  {
    from: "Mont St Michel",
    to: "Caen",
    mode: "car",
    duration: "1h 30m",
    distance: "130 km",
  },
  {
    from: "Caen",
    to: "Étretat",
    mode: "car",
    duration: "1h 30m",
    distance: "110 km",
  },
  {
    from: "Étretat",
    to: "Paris (Maître Albert)",
    mode: "car",
    duration: "2h 30m",
    distance: "200 km",
    notes: "Drop off car in Paris, 10/10/25 6PM, 181 Bd Vincent Auriol, Paris, FRA, PARIS. EXPEDIA Enterprise Rental.",
  },
  {
    from: "Paris (Maître Albert)",
    to: "Paris (Prince Des Galles)",
    mode: "taxi/metro/walk",
    duration: "15m",
    notes: "Final night in Paris.",
  },
]; 