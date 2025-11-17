import { API_PATH } from '../api'; // adjust relative path

export async function register(data) {
  const response = await fetch(`${API_PATH}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
}
