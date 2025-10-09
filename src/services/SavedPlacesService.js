// src/services/SavedPlacesService.js
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE   = import.meta.env.VITE_AIRTABLE_TABLE;
console.log("API KEY loaded?", import.meta.env.VITE_AIRTABLE_API_KEY);

function ensureEnv() {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE) {
    throw new Error("Airtable env vars missing. Check .env.local and restart dev server.");
  }
}

const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`;
const headers = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  "Content-Type": "application/json",
};

export async function fetchSavedPlaces() {
  ensureEnv();
  const res = await fetch(BASE_URL, { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET failed ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data.records; // [{ id, fields: { Place, Notes, Budget, ID }, ... }]
}

export async function createSavedPlace({ Place, Notes, Budget ,Image, Rating, Address}) {
  ensureEnv();

  const body = JSON.stringify({
    fields: {
      Place,
      Notes,
      Budget,
      Image,
      Rating,
      Address
    },
  });

  const res = await fetch(BASE_URL, { method: "POST", headers, body });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST failed ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data; // { id: "rec...", fields: {...} }
}

export async function deleteSavedPlace(recordId) {
  ensureEnv();
  const url = `${BASE_URL}/${recordId}`;
  const res = await fetch(url, { method: "DELETE", headers: { Authorization: headers.Authorization } });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DELETE failed ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data; // { deleted: true, id: "rec..." }
}
