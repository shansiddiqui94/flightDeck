const API_BASE = 'http://api.aviationstack.com/v1';

export async function getFlights() {
  const response = await fetch(`${API_BASE}/flights?access_key=${import.meta.env.VITE_AVIATIONSTACK_API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch flights');
  const data = await response.json();
  return data.data;
}
