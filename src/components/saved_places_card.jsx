import { Link } from "react-router-dom";

export default function PlacesCard({ place }) {
  return (
    <div className="place-card">
      {place.thumbnail && (
        <img
          src={place.thumbnail}
          alt={place.title}
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      )}
      <p>{place.title}</p>
      <Link to={`/places/${place.place_id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}
