import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSavedPlace } from "../services/SavedPlacesService";

export default function PlaceDetailsPage({ places = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState(null);
  const [notes, setNotes] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const selected = places.find((p) => String(p.place_id) === String(id));
    setPlace(selected || null);
  }, [id, places]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!place) return alert("No place found!");

    try {
      await createSavedPlace({
        Place: place.title,
        Notes: notes,
        Budget: Number(budget || 0),
        Image: place.thumbnail || place.serpapi_thumbnail || "",
        Rating: place.rating || "",
        Address: place.address || "",
      });
      // alert("Place saved!");
      navigate("/places");
    } catch (error) {
      console.error(error);
      alert("Error saving place. Try again!");
    }
  };

 
  if (!place) {
    return (
      <div className="details-page page">
        <div className="panel">
          <Link to="/places">
            <button>Back</button>
          </Link>
          <p>Place not found.</p>
        </div>
      </div>
    );
  }

  const image = place.thumbnail || place.serpapi_thumbnail;

  return (
    <div className="details-page page">
      <div className="panel">
        <Link to="/places">
          <button>Back</button>
        </Link>

        <h3>{place.title}</h3>

        {image && (
          <img
            src={image}
            alt={place.title}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}

        <p><strong>Address:</strong> {place.address}</p>
        <p><strong>Description:</strong> {place.description || "No description available."}</p>
        <p><strong>Rating:</strong> {place.rating || "N/A"}</p>
        <p><strong>Reviews:</strong> {place.reviews || "N/A"}</p>

        <form onSubmit={handleSave} className="saveform">
          <h2>Save this Place</h2>
          <p>Notes:</p>
          <textarea
            rows="3"
            placeholder="Add your notes here"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <p>Budget:</p>
          <input
            type="number"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <p></p>
          <button type="submit">Save Place</button>
        </form>
      </div>
    </div>
  );
}
