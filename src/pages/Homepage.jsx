import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { index } from "../services/PlacesService";

export default function Homepage({ setPlaces, setMapImage }) {
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    setError("");
    setPlaces([]);
    setMapImage(null);

    if (!city || !keyword) {
      setError("Please enter both city and keyword");
      return;
    }

    try {
      const data = await index(keyword, city);

      if (!data) {
        setError("No data received from API.");
        return;
      }

      const results = data.local_results || [];
      const mapImage = data.local_map ? data.local_map.image : null;

      if (results.length > 0) {
        setPlaces(results);
        setMapImage(mapImage);
        navigate("places");
      } else {
        setError("No places found. Try another search.");
      }
    } catch (err) {
      console.error("Search failed:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="homepage page">
      <div className="panel">
        <h3>Weekend Plan Wizard</h3>

        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>

        <button onClick={handleSearch}>Search</button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <Outlet />
      </div>
    </div>
  );
}
