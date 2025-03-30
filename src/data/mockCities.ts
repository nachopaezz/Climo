export interface City {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  weather: {
    temp: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
}

export const mockCities: City[] = [
  {
    id: "tokyo-jp",
    name: "Tokio",
    country: "JP",
    lat: 35.6762,
    lon: 139.6503,
    weather: {
      temp: 22,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 65,
      windSpeed: 3.5
    }
  },
  {
    id: "paris-fr",
    name: "París",
    country: "FR",
    lat: 48.8566,
    lon: 2.3522,
    weather: {
      temp: 18,
      description: "Soleado",
      icon: "01d",
      humidity: 55,
      windSpeed: 4.2
    }
  },
  {
    id: "new-york-us",
    name: "Nueva York",
    country: "US",
    lat: 40.7128,
    lon: -74.0060,
    weather: {
      temp: 25,
      description: "Despejado",
      icon: "01d",
      humidity: 48,
      windSpeed: 5.1
    }
  },
  {
    id: "buenos-aires-ar",
    name: "Buenos Aires",
    country: "AR",
    lat: -34.6037,
    lon: -58.3816,
    weather: {
      temp: 28,
      description: "Soleado",
      icon: "01d",
      humidity: 60,
      windSpeed: 3.8
    }
  },
  {
    id: "madrid-es",
    name: "Madrid",
    country: "ES",
    lat: 40.4168,
    lon: -3.7038,
    weather: {
      temp: 23,
      description: "Cielo claro",
      icon: "01d",
      humidity: 45,
      windSpeed: 2.5
    }
  },
  {
    id: "london-uk",
    name: "Londres",
    country: "UK",
    lat: 51.5074,
    lon: -0.1278,
    weather: {
      temp: 15,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 75,
      windSpeed: 6.2
    }
  },
  {
    id: "rome-it",
    name: "Roma",
    country: "IT",
    lat: 41.9028,
    lon: 12.4964,
    weather: {
      temp: 26,
      description: "Soleado",
      icon: "01d",
      humidity: 50,
      windSpeed: 3.1
    }
  },
  {
    id: "moscow-ru",
    name: "Moscú",
    country: "RU",
    lat: 55.7558,
    lon: 37.6173,
    weather: {
      temp: 10,
      description: "Nublado",
      icon: "04d",
      humidity: 70,
      windSpeed: 4.8
    }
  },
  {
    id: "sydney-au",
    name: "Sídney",
    country: "AU",
    lat: -33.8688,
    lon: 151.2093,
    weather: {
      temp: 24,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 62,
      windSpeed: 5.5
    }
  },
  {
    id: "rio-br",
    name: "Río de Janeiro",
    country: "BR",
    lat: -22.9068,
    lon: -43.1729,
    weather: {
      temp: 30,
      description: "Soleado",
      icon: "01d",
      humidity: 70,
      windSpeed: 3.2
    }
  },
  {
    id: "mexico-city-mx",
    name: "Ciudad de México",
    country: "MX",
    lat: 19.4326,
    lon: -99.1332,
    weather: {
      temp: 22,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 55,
      windSpeed: 2.8
    }
  },
  {
    id: "berlin-de",
    name: "Berlín",
    country: "DE",
    lat: 52.5200,
    lon: 13.4050,
    weather: {
      temp: 17,
      description: "Nublado",
      icon: "04d",
      humidity: 65,
      windSpeed: 4.5
    }
  },
  {
    id: "amsterdam-nl",
    name: "Ámsterdam",
    country: "NL",
    lat: 52.3676,
    lon: 4.9041,
    weather: {
      temp: 16,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 78,
      windSpeed: 5.8
    }
  },
  {
    id: "dubai-ae",
    name: "Dubái",
    country: "AE",
    lat: 25.2048,
    lon: 55.2708,
    weather: {
      temp: 35,
      description: "Soleado",
      icon: "01d",
      humidity: 40,
      windSpeed: 4.2
    }
  },
  {
    id: "singapore-sg",
    name: "Singapur",
    country: "SG",
    lat: 1.3521,
    lon: 103.8198,
    weather: {
      temp: 29,
      description: "Tormentas dispersas",
      icon: "11d",
      humidity: 85,
      windSpeed: 2.5
    }
  },
  {
    id: "barcelona-es",
    name: "Barcelona",
    country: "ES",
    lat: 41.3851,
    lon: 2.1734,
    weather: {
      temp: 24,
      description: "Soleado",
      icon: "01d",
      humidity: 58,
      windSpeed: 3.1
    }
  },
  {
    id: "lisbon-pt",
    name: "Lisboa",
    country: "PT",
    lat: 38.7223,
    lon: -9.1393,
    weather: {
      temp: 22,
      description: "Cielo claro",
      icon: "01d",
      humidity: 65,
      windSpeed: 4.8
    }
  },
  {
    id: "vienna-at",
    name: "Viena",
    country: "AT",
    lat: 48.2082,
    lon: 16.3738,
    weather: {
      temp: 19,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 62,
      windSpeed: 3.4
    }
  },
  {
    id: "stockholm-se",
    name: "Estocolmo",
    country: "SE",
    lat: 59.3293,
    lon: 18.0686,
    weather: {
      temp: 12,
      description: "Nublado",
      icon: "04d",
      humidity: 75,
      windSpeed: 5.2
    }
  },
  {
    id: "athens-gr",
    name: "Atenas",
    country: "GR",
    lat: 37.9838,
    lon: 23.7275,
    weather: {
      temp: 27,
      description: "Soleado",
      icon: "01d",
      humidity: 45,
      windSpeed: 3.7
    }
  },
  {
    id: "warsaw-pl",
    name: "Varsovia",
    country: "PL",
    lat: 52.2297,
    lon: 21.0122,
    weather: {
      temp: 16,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 72,
      windSpeed: 4.1
    }
  },
  {
    id: "budapest-hu",
    name: "Budapest",
    country: "HU",
    lat: 47.4979,
    lon: 19.0402,
    weather: {
      temp: 20,
      description: "Despejado",
      icon: "01d",
      humidity: 58,
      windSpeed: 3.3
    }
  },
  {
    id: "prague-cz",
    name: "Praga",
    country: "CZ",
    lat: 50.0755,
    lon: 14.4378,
    weather: {
      temp: 17,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 65,
      windSpeed: 3.9
    }
  },
  {
    id: "copenhagen-dk",
    name: "Copenhague",
    country: "DK",
    lat: 55.6761,
    lon: 12.5683,
    weather: {
      temp: 14,
      description: "Lluvia moderada",
      icon: "10d",
      humidity: 78,
      windSpeed: 6.1
    }
  },
  {
    id: "oslo-no",
    name: "Oslo",
    country: "NO",
    lat: 59.9139,
    lon: 10.7522,
    weather: {
      temp: 11,
      description: "Nieve ligera",
      icon: "13d",
      humidity: 82,
      windSpeed: 4.7
    }
  },
  {
    id: "helsinki-fi",
    name: "Helsinki",
    country: "FI",
    lat: 60.1699,
    lon: 24.9384,
    weather: {
      temp: 9,
      description: "Nublado",
      icon: "04d",
      humidity: 79,
      windSpeed: 5.8
    }
  },
  {
    id: "dublin-ie",
    name: "Dublín",
    country: "IE",
    lat: 53.3498,
    lon: -6.2603,
    weather: {
      temp: 13,
      description: "Lluvia intermitente",
      icon: "10d",
      humidity: 85,
      windSpeed: 7.2
    }
  },
  {
    id: "brussels-be",
    name: "Bruselas",
    country: "BE",
    lat: 50.8503,
    lon: 4.3517,
    weather: {
      temp: 15,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 76,
      windSpeed: 4.9
    }
  },
  {
    id: "beijing-cn",
    name: "Pekín",
    country: "CN",
    lat: 39.9042,
    lon: 116.4074,
    weather: {
      temp: 20,
      description: "Bruma",
      icon: "50d",
      humidity: 55,
      windSpeed: 2.8
    }
  },
  {
    id: "seoul-kr",
    name: "Seúl",
    country: "KR",
    lat: 37.5665,
    lon: 126.9780,
    weather: {
      temp: 21,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 60,
      windSpeed: 3.4
    }
  },
  {
    id: "bangkok-th",
    name: "Bangkok",
    country: "TH",
    lat: 13.7563,
    lon: 100.5018,
    weather: {
      temp: 32,
      description: "Tormentas dispersas",
      icon: "11d",
      humidity: 75,
      windSpeed: 2.6
    }
  },
  {
    id: "mumbai-in",
    name: "Mumbai",
    country: "IN",
    lat: 19.0760,
    lon: 72.8777,
    weather: {
      temp: 31,
      description: "Caluroso",
      icon: "01d",
      humidity: 70,
      windSpeed: 3.8
    }
  },
  {
    id: "delhi-in",
    name: "Delhi",
    country: "IN",
    lat: 28.6139,
    lon: 77.2090,
    weather: {
      temp: 33,
      description: "Bruma",
      icon: "50d",
      humidity: 45,
      windSpeed: 2.9
    }
  },
  {
    id: "istanbul-tr",
    name: "Estambul",
    country: "TR",
    lat: 41.0082,
    lon: 28.9784,
    weather: {
      temp: 23,
      description: "Soleado",
      icon: "01d",
      humidity: 55,
      windSpeed: 4.6
    }
  },
  {
    id: "cairo-eg",
    name: "El Cairo",
    country: "EG",
    lat: 30.0444,
    lon: 31.2357,
    weather: {
      temp: 34,
      description: "Despejado",
      icon: "01d",
      humidity: 35,
      windSpeed: 4.8
    }
  },
  {
    id: "cape-town-za",
    name: "Ciudad del Cabo",
    country: "ZA",
    lat: -33.9249,
    lon: 18.4241,
    weather: {
      temp: 22,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 65,
      windSpeed: 6.7
    }
  },
  {
    id: "nairobi-ke",
    name: "Nairobi",
    country: "KE",
    lat: -1.2921,
    lon: 36.8219,
    weather: {
      temp: 25,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 70,
      windSpeed: 3.2
    }
  },
  {
    id: "lagos-ng",
    name: "Lagos",
    country: "NG",
    lat: 6.5244,
    lon: 3.3792,
    weather: {
      temp: 31,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 75,
      windSpeed: 3.9
    }
  },
  {
    id: "casablanca-ma",
    name: "Casablanca",
    country: "MA",
    lat: 33.5731,
    lon: -7.5898,
    weather: {
      temp: 25,
      description: "Soleado",
      icon: "01d",
      humidity: 65,
      windSpeed: 5.2
    }
  },
  {
    id: "melbourne-au",
    name: "Melbourne",
    country: "AU",
    lat: -37.8136,
    lon: 144.9631,
    weather: {
      temp: 20,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 60,
      windSpeed: 5.8
    }
  },
  {
    id: "auckland-nz",
    name: "Auckland",
    country: "NZ",
    lat: -36.8485,
    lon: 174.7633,
    weather: {
      temp: 18,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 75,
      windSpeed: 4.9
    }
  },
  {
    id: "vancouver-ca",
    name: "Vancouver",
    country: "CA",
    lat: 49.2827,
    lon: -123.1207,
    weather: {
      temp: 15,
      description: "Lluvia moderada",
      icon: "10d",
      humidity: 80,
      windSpeed: 4.2
    }
  },
  {
    id: "toronto-ca",
    name: "Toronto",
    country: "CA",
    lat: 43.6532,
    lon: -79.3832,
    weather: {
      temp: 12,
      description: "Nublado",
      icon: "04d",
      humidity: 70,
      windSpeed: 5.1
    }
  },
  {
    id: "montreal-ca",
    name: "Montreal",
    country: "CA",
    lat: 45.5017,
    lon: -73.5673,
    weather: {
      temp: 11,
      description: "Nieve ligera",
      icon: "13d",
      humidity: 75,
      windSpeed: 4.8
    }
  },
  {
    id: "chicago-us",
    name: "Chicago",
    country: "US",
    lat: 41.8781,
    lon: -87.6298,
    weather: {
      temp: 18,
      description: "Ventoso",
      icon: "04d",
      humidity: 55,
      windSpeed: 7.2
    }
  },
  {
    id: "los-angeles-us",
    name: "Los Ángeles",
    country: "US",
    lat: 34.0522,
    lon: -118.2437,
    weather: {
      temp: 24,
      description: "Soleado",
      icon: "01d",
      humidity: 50,
      windSpeed: 3.6
    }
  },
  {
    id: "miami-us",
    name: "Miami",
    country: "US",
    lat: 25.7617,
    lon: -80.1918,
    weather: {
      temp: 29,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 75,
      windSpeed: 4.5
    }
  },
  {
    id: "san-francisco-us",
    name: "San Francisco",
    country: "US",
    lat: 37.7749,
    lon: -122.4194,
    weather: {
      temp: 19,
      description: "Niebla",
      icon: "50d",
      humidity: 80,
      windSpeed: 5.7
    }
  },
  {
    id: "santiago-cl",
    name: "Santiago",
    country: "CL",
    lat: -33.4489,
    lon: -70.6693,
    weather: {
      temp: 25,
      description: "Soleado",
      icon: "01d",
      humidity: 45,
      windSpeed: 3.4
    }
  },
  {
    id: "lima-pe",
    name: "Lima",
    country: "PE",
    lat: -12.0464,
    lon: -77.0428,
    weather: {
      temp: 23,
      description: "Nublado",
      icon: "04d",
      humidity: 80,
      windSpeed: 3.1
    }
  },
  {
    id: "bogota-co",
    name: "Bogotá",
    country: "CO",
    lat: 4.7110,
    lon: -74.0721,
    weather: {
      temp: 20,
      description: "Lluvia ligera",
      icon: "10d",
      humidity: 75,
      windSpeed: 2.8
    }
  },
  {
    id: "quito-ec",
    name: "Quito",
    country: "EC",
    lat: -0.1807,
    lon: -78.4678,
    weather: {
      temp: 21,
      description: "Parcialmente nublado",
      icon: "02d",
      humidity: 65,
      windSpeed: 2.5
    }
  }
];

export const searchCities = (query: string): City[] => {
  const normalizedQuery = query.toLowerCase();
  return mockCities.filter(city => 
    city.name.toLowerCase().includes(normalizedQuery) ||
    city.country.toLowerCase().includes(normalizedQuery)
  );
}; 