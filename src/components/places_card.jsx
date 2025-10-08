import { Link } from "react-router-dom";

export default function PlacesCard({ place }) {
  const img = place.thumbnail || place.serpapi_thumbnail;

  return (
    <div className="place-card">
      {img && (
        <img
          src={img}
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
