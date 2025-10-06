import { Outlet } from "react-router-dom";
import PlacesList from "../components/places_list";

export default function PlacePage({ places }) {
  return (
    <div className="place-page page">
      <div className="panel">
        <h3>Places</h3>
        <PlacesList places={places} />
        <Outlet />
      </div>
    </div>
  );
}
