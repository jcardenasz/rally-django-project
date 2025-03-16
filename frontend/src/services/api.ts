const API_URL = "http://127.0.0.1:8000/api"; // Change if needed

export const fetchDrivers = async () => {
  const response = await fetch(`${API_URL}/drivers/`);
  return response.json();
};

export const fetchCars = async () => {
  const response = await fetch(`${API_URL}/cars/`);
  return response.json();
};

export const fetchVenues = async () => {
  const response = await fetch(`${API_URL}/venues/`);
  return response.json();
};

export const fetchRaces = async () => {
  const response = await fetch(`${API_URL}/races/`);
  return response.json();
};
