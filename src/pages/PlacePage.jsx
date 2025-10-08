import { Outlet } from "react-router-dom";
import PlacesList from "../components/places_list";

export default function PlacePage({ places, mapImage }) {
  return (
    <div className="place-page page">
      <div className="panel">
        <h3>Places Found</h3>

        {mapImage && (
          <img
            src={mapImage}
            alt="Map"
            style={{ width: "90%", borderRadius: "10px", marginBottom: "15px" }}
          />
        )}

        {places.length === 0 ? (
          <p>No places found. Try searching again.</p>
        ) : (
          <PlacesList places={places} />
        )}

        <Outlet />
      </div>
    </div>
  );
}
