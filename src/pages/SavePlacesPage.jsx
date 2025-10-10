import { useEffect, useState } from "react";
import { fetchSavedPlaces, deleteSavedPlace } from "../services/SavedPlacesService";
import SavedPlacesList from "../components/saved_places_list";

export default function SavePlacesPage() {
  const [savedPlaces, setSavedPlaces] = useState([]);

  useEffect(() => {
    async function load() {
      const rows = await fetchSavedPlaces();
      setSavedPlaces(rows || []);
    }
    load();
  }, []);

  async function handleDelete(id) {
    await deleteSavedPlace(id);
    setSavedPlaces(prev => prev.filter(r => r.id !== id));
  }

  return (
    <div className="saved-page">
      <h3>Saved Places</h3>
      <SavedPlacesList savedPlaces={savedPlaces} deletePlace={handleDelete} />
    </div>
  );
}
