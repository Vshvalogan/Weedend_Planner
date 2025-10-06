import { Link } from "react-router-dom";

export default function PlacesCard({ place }) {
  return (
    <div className="place-card">
      <p>{place.title}</p>
      <Link to={`/places/${place.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}
