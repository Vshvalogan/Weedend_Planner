import PlacesCard from "./places_card";

export default function PlacesList({ places }) {
  return (
    <div className="places-list">
      {places.map((place) => (
        <PlacesCard key={place.place_id} place={place} />
      ))}
    </div>
  );
}
