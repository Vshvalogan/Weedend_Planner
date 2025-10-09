
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE   = import.meta.env.VITE_AIRTABLE_TABLE;
// console.log("API KEY loaded?", import.meta.env.VITE_AIRTABLE_API_KEY);

//https://vite.dev/guide/env-and-mode.html

const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`;
const headers = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  "Content-Type": "application/json",
};

export async function fetchSavedPlaces() {
 
  const res = await fetch(BASE_URL, { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET failed ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data.records;
}

export async function createSavedPlace({ Place, Notes, Budget ,Image, Rating, Address}) {


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
  return data; 
}

export async function deleteSavedPlace(recordId) {

  const url = `${BASE_URL}/${recordId}`;
  const res = await fetch(url, { method: "DELETE", headers: { Authorization: headers.Authorization } });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DELETE failed ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data; 
}
