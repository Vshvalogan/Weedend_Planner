export default function SavedPlacesCard({ place, deletePlace }) {
  const f = place.fields || {};
  return (
    
    <div className="saved-card">
      
      <p><strong>Place:</strong> {f.Place}</p>

      {f.Image && (
        <img
          src={f.Image}
          alt={f.Place}
          style={{ width: 100, height: 100, objectFit: "cover" }}
        />
      )}

      <p>Rating: {f.Rating ?? "N/A"}</p>
      <p>Address: {f.Address || "N/A"}</p>
      <p>Notes: {f.Notes || "-"}</p>
      <p>Budget: {f.Budget ?? "-"}</p>

      <button onClick={() => deletePlace(place.id)}>Delete</button>
    </div>
  );
}
