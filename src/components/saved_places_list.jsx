import SavedPlacesCard from "./saved_places_card";

export default function SavedPlacesList({ savedPlaces, deletePlace }) {
  return (
    <div className="saved-places-list">
      {savedPlaces.map((place) => (
        <SavedPlacesCard key={place.id} place={place} deletePlace={deletePlace} />
      ))}
    </div>
  );
}
