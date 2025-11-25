import { API_PATH } from "../api";

export async function fetchProfile() {
  try {
    const res = await fetch(`${API_PATH}/users/profile`, {
      method: "POST",
      credentials: "include" // sends cookies automatically
    });

    if (!res.ok) {
      return null; // user not authenticated
    }

    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
}
