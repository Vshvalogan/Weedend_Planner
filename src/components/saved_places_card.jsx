import { Link } from "react-router-dom";

export default function SavedPlacesCard({ place, deletePlace }) {
  return (
    <div className="saved-card">
      <p>{place.title}</p>
      <p>Note: {place.note || "—"}</p>
      <p>Budget: {place.budget || "—"}</p>
      <div>
        <Link to={`/places/${place.id}`}>
          <button>Details</button>
        </Link>
        <button onClick={() => deletePlace(place.id)}>Delete</button>
      </div>
    </div>
  );

}
