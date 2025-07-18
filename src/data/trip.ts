export type Flight = {
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  from: string;
  to: string;
};

export type Traveler = {
  name: string;
  flights: Flight[];
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

export type Event = {
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  description: string;
  type: "restaurant" | "museum" | "tour" | "activity" | "transport" | "other";
  confirmationNumber?: string;
  price?: string;
  notes?: string;
  website?: string;
};

export type Reservation = {
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  type: "restaurant" | "museum" | "tour" | "activity" | "transport" | "other";
  confirmationNumber?: string;
  partySize?: number;
  price?: string;
  notes?: string;
  website?: string;
};

export const travelers: Traveler[] = [
  {
    name: "Robert Betts",
    flights: [
      {
        airline: "Jet Blue",
        flightNumber: "B6 1786",
        departure: "2025-09-23T16:32:00",
        arrival: "2025-09-23T18:08:00",
        from: "PIT",
        to: "BOS",
      },
      {
        airline: "Jet Blue",
        flightNumber: "B6 33",
        departure: "2025-09-23T20:07:00",
        arrival: "2025-09-24T09:15:00",
        from: "BOS",
        to: "CDG",
      },
      {
        airline: "Jet Blue",
        flightNumber: "B6 34",
        departure: "2025-10-13T11:15:00",
        arrival: "2025-10-13T13:16:00",
        from: "CDG",
        to: "BOS",
      },
      {
        airline: "Jet Blue",
        flightNumber: "B6 2185",
        departure: "2025-10-13T19:15:00",
        arrival: "2025-10-13T21:10:00",
        from: "BOS",
        to: "PIT",
      },
    ],
  },
  {
    name: "Paulette Betts",
    flights: [
      {
        airline: "Jet Blue",
        flightNumber: "B6 1786",
        departure: "2025-09-23T16:32:00",
        arrival: "2025-09-23T18:08:00",
        from: "PIT",
        to: "BOS",
      },
      {
        airline: "Jet Blue",
        flightNumber: "B6 33",
        departure: "2025-09-23T20:07:00",
        arrival: "2025-09-24T09:15:00",
        from: "BOS",
        to: "CDG",
      },
      {
        airline: "Jet Blue",
        flightNumber: "B6 34",
        departure: "2025-10-13T11:15:00",
        arrival: "2025-10-13T13:16:00",
        from: "CDG",
        to: "BOS",
      },
      {
        airline: "Jet Blue",
        flightNumber: "B6 2185",
        departure: "2025-10-13T19:15:00",
        arrival: "2025-10-13T21:10:00",
        from: "BOS",
        to: "PIT",
      },
    ],
  },
  {
    name: "Brandon Betts",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Amanda Betts",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Bennett Betts",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Alden Betts",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Cody Brenner",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Francesca Brenner",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Nolan Betts",
    flights: [
      {
        airline: "Air France",
        flightNumber: "AF3577",
        departure: "2025-09-24T19:25:00",
        arrival: "2025-09-25T09:05:00",
        from: "JFK",
        to: "CDG",
      },
      {
        airline: "Delta",
        flightNumber: "DL8682",
        departure: "2025-10-12T20:30:00",
        arrival: "2025-10-12T22:40:00",
        from: "CDG",
        to: "JFK",
      },
    ],
  },
  {
    name: "Maggie Wang",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Scott Holden",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Penny Holden",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
  },
  {
    name: "Fred Pugliano",
    flights: [
      {
        airline: "Delta",
        flightNumber: "DL5775",
        departure: "2025-10-03T16:40:00",
        arrival: "2025-10-03T20:08:00",
        from: "STL",
        to: "JFK",
      },
      {
        airline: "Delta",
        flightNumber: "DL264",
        departure: "2025-10-03T22:40:00",
        arrival: "2025-10-04T12:10:00",
        from: "JFK",
        to: "CDG",
      },
      {
        airline: "Delta",
        flightNumber: "DL267",
        departure: "2025-10-12T09:30:00",
        arrival: "2025-10-12T12:00:00",
        from: "CDG",
        to: "JFK",
      },
      {
        airline: "Delta",
        flightNumber: "DL5782",
        departure: "2025-10-12T14:15:00",
        arrival: "2025-10-12T16:00:00",
        from: "JFK",
        to: "STL",
      },
    ],
  },
  {
    name: "Frank Pugliano",
    flights: [
      {
        airline: "United Airlines",
        flightNumber: "UA 102",
        departure: "2025-09-30T16:45:00",
        arrival: "2025-10-01T09:45:00",
        from: "IAH",
        to: "MUC",
      },
      {
        airline: "Swiss International Air Lines",
        flightNumber: "LX 1123",
        departure: "2025-10-01T11:05:00",
        arrival: "2025-10-01T12:20:00",
        from: "MUC",
        to: "GVA",
      },
      {
        airline: "Swiss International Air Lines",
        flightNumber: "LX 1122",
        departure: "2025-10-15T09:05:00",
        arrival: "2025-10-15T10:20:00",
        from: "GVA",
        to: "MUC",
      },
      {
        airline: "United Airlines",
        flightNumber: "UA 160",
        departure: "2025-10-15T12:20:00",
        arrival: "2025-10-15T16:35:00",
        from: "MUC",
        to: "IAH",
      },
    ],
  },
  {
    name: "Susan Pugliano",
    flights: [
      {
        airline: "United Airlines",
        flightNumber: "UA 102",
        departure: "2025-09-30T16:45:00",
        arrival: "2025-10-01T09:45:00",
        from: "IAH",
        to: "MUC",
      },
      {
        airline: "Swiss International Air Lines",
        flightNumber: "LX 1123",
        departure: "2025-10-01T11:05:00",
        arrival: "2025-10-01T12:20:00",
        from: "MUC",
        to: "GVA",
      },
      {
        airline: "Swiss International Air Lines",
        flightNumber: "LX 1122",
        departure: "2025-10-15T09:05:00",
        arrival: "2025-10-15T10:20:00",
        from: "GVA",
        to: "MUC",
      },
      {
        airline: "United Airlines",
        flightNumber: "UA 160",
        departure: "2025-10-15T12:20:00",
        arrival: "2025-10-15T16:35:00",
        from: "MUC",
        to: "IAH",
      },
    ],
  },
  {
    name: "Sarah Pugliano",
    flights: [
      {
        airline: "TBD",
        flightNumber: "TBD",
        departure: "2024-07-01T11:30:00",
        arrival: "2024-07-01T19:30:00",
        from: "TBD",
        to: "TBD",
      },
    ],
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

export const events: Event[] = [
  {
    id: "louvre-museum",
    name: "Louvre Museum",
    location: "Paris",
    date: "2025-09-25",
    time: "09:00",
    description: "Visit the world's largest art museum",
    type: "museum",
    price: "€17",
    notes: "Skip-the-line tickets recommended",
    website: "https://www.louvre.fr/en",
  },
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    location: "Paris",
    date: "2025-09-25",
    time: "14:00",
    description: "Iconic Paris landmark",
    type: "activity",
    price: "€26",
    notes: "Book in advance to avoid long queues",
    website: "https://www.toureiffel.paris/en",
  },
  {
    id: "versailles-palace",
    name: "Palace of Versailles",
    location: "Versailles",
    date: "2025-09-26",
    time: "10:00",
    description: "Royal palace and gardens",
    type: "museum",
    price: "€20",
    notes: "Includes access to gardens and Trianon",
    website: "https://en.chateauversailles.fr/",
  },
  {
    id: "beaune-wine-tasting",
    name: "Beaune Wine Tasting",
    location: "Beaune",
    date: "2025-09-30",
    time: "15:00",
    description: "Burgundy wine tasting experience",
    type: "activity",
    price: "€45",
    notes: "Includes 6 wine tastings and cheese pairing",
  },
  {
    id: "avignon-palace",
    name: "Palais des Papes",
    location: "Avignon",
    date: "2025-10-01",
    time: "11:00",
    description: "Medieval papal palace",
    type: "museum",
    price: "€12",
    notes: "Historic center of Avignon",
    website: "https://www.palais-des-papes.com/en/",
  },
  {
    id: "nice-promenade",
    name: "Promenade des Anglais",
    location: "Nice",
    date: "2025-10-02",
    time: "16:00",
    description: "Famous seaside promenade",
    type: "activity",
    price: "Free",
    notes: "Perfect for sunset walk",
  },
  {
    id: "lyon-food-tour",
    name: "Lyon Food Tour",
    location: "Lyon",
    date: "2025-10-03",
    time: "18:00",
    description: "Culinary capital of France tour",
    type: "tour",
    price: "€85",
    notes: "Includes 6 food stops and wine",
  },
  {
    id: "mont-st-michel-tour",
    name: "Mont Saint-Michel Guided Tour",
    location: "Mont Saint-Michel",
    date: "2025-10-07",
    time: "14:00",
    description: "Medieval abbey and village",
    type: "tour",
    price: "€35",
    notes: "2-hour guided tour of the abbey",
  },
];

export const reservations: Reservation[] = [
  {
    id: "le-comptoir-du-relais",
    name: "Le Comptoir du Relais",
    location: "Paris",
    date: "2025-09-24",
    time: "19:30",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-001",
    notes: "Traditional French bistro in Saint-Germain",
    website: "https://www.hotel-paris-relais-saint-germain.com/en/restaurant",
  },
  {
    id: "l-ami-louis",
    name: "L'Ami Louis",
    location: "Paris",
    date: "2025-09-25",
    time: "20:00",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-002",
    notes: "Famous for roast chicken and foie gras",
  },
  {
    id: "la-tour-d-argent",
    name: "La Tour d'Argent",
    location: "Paris",
    date: "2025-10-11",
    time: "19:00",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-003",
    price: "€200-300 per person",
    notes: "Michelin-starred restaurant with Seine views",
    website: "https://www.latourdargent.com/",
  },
  {
    id: "le-chateaubriand",
    name: "Le Chateaubriand",
    location: "Paris",
    date: "2025-10-12",
    time: "20:30",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-004",
    price: "€85 tasting menu",
    notes: "Modern French cuisine, tasting menu only",
  },
  {
    id: "beaune-restaurant",
    name: "Restaurant Loiseau des Vignes",
    location: "Beaune",
    date: "2025-09-29",
    time: "19:00",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-005",
    price: "€120 per person",
    notes: "Michelin-starred restaurant in Beaune",
    website: "https://www.bernard-loiseau.com/en/restaurants/loiseau-des-vignes",
  },
  {
    id: "nice-restaurant",
    name: "Le Chantecler",
    location: "Nice",
    date: "2025-10-02",
    time: "20:00",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-006",
    price: "€150 per person",
    notes: "Two Michelin stars, Mediterranean cuisine",
  },
  {
    id: "lyon-restaurant",
    name: "Paul Bocuse",
    location: "Lyon",
    date: "2025-10-03",
    time: "19:30",
    type: "restaurant",
    partySize: 14,
    confirmationNumber: "RES-2025-007",
    price: "€180 per person",
    notes: "Legendary restaurant of Paul Bocuse",
    website: "https://www.bocuse.fr/en/",
  },
  {
    id: "car-rental-strasbourg",
    name: "Enterprise Car Rental",
    location: "Strasbourg",
    date: "2025-09-28",
    time: "18:00",
    type: "transport",
    confirmationNumber: "S75L9Y",
    price: "$1,151.03",
    notes: "Peugeot 5008 or similar, 7 passengers, unlimited mileage. Pick up at Strasbourg Gare.",
  },
  {
    id: "car-return-paris",
    name: "Enterprise Car Rental Return",
    location: "Paris",
    date: "2025-10-10",
    time: "18:00",
    type: "transport",
    confirmationNumber: "S75L9Y",
    notes: "Drop off at 181 Bd Vincent Auriol, Paris, FRA, PARIS.",
  },
]; 