import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PlaceDetailsPage({ places }) {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const handleClick = () => {

  }

  useEffect(() => {
    const found = places.find((p) => String(p.place_id) === String(id));
    setPlace(found || null);
  }, [id, places]);

  if (!place) {
    return (
      <div className="details-page page">
        <div className="panel">
          <Link to="/places"><button>Back</button></Link>
          <p>Place not found. Try searching again.</p>
        </div>
      </div>
    );
  }

  const img = place.thumbnail || place.serpapi_thumbnail;

  return (
    <div className="details-page page">
      <div className="panel">
        <Link to="/places"><button>Back</button></Link>
        <h3>{place.title}</h3>

        {img && (
          <img
            src={img}
            alt={place.title}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}

        <p><strong>Address:</strong> {place.address}</p>
        <p><strong>Description:</strong> {place.description || "No description available."}</p>
        <p><strong>Rating:</strong> {place.rating || "N/A"}</p>
        <p><strong>Reviews:</strong> {place.reviews || "N/A"}</p>
        <p> </p>
        <form className="saveform" onSubmit={handleClick}>
          <h2>Save this Place</h2>
          <p>Notes:</p>
          <textarea name="notes" rows="4" cols="50" placeholder="Add your notes here..."></textarea> {/*https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea */}
          <p>Budget:</p>
          <input type="number" name="budget" placeholder="Enter your budget" />
          <p></p>
          <Link to="/places">
          <button type="submit">Save Place</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
