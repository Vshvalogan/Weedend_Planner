import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSavedPlaces, deleteSavedPlace } from "../services/SavedPlacesService";

export default function SavePlacesPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchSavedPlaces();
      setRows(data || []);
    }
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteSavedPlace(id);
    setRows(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="saved-page">
      <h3>Saved Places</h3>
      {rows.map((r) => (
        <div key={r.id} className="saved-card">
          <p>Place: {r.fields.Place}</p> 
          <img src ={r.fields.Image} alt={r.fields.Place} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
          <p>Rating: {r.fields.Rating}</p>
          <p>Address: {r.fields.Address}</p>
          <p>Notes: {r.fields.Notes}</p>
          <p>Budget: {r.fields.Budget}</p>
          <button onClick={() => handleDelete(r.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
