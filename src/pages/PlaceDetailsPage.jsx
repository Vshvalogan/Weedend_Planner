import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PlaceDetailsPage({ places }) {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const found = places.find((p) => p.place_id === id);
    setPlace(found);
  }, [id, places]);

  if (!place) return <p>Loading...</p>;

  return (
    <div className="details-page page">
      <div className="panel">
        <Link to="/places">
          <button>Back</button>
        </Link>
        <h3>{place.title}</h3>

        {place.thumbnail && (
          <img
            src={place.thumbnail}
            alt={place.title}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}

        <p><strong>Address:</strong> {place.address}</p>
        <p><strong>Description:</strong> {place.description || "No description available."}</p>
      </div>
    </div>
  );
}
