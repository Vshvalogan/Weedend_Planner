import SavedPlacesCard from "./saved_places_card";

export default function SavedPlacesList({ savedPlaces, deletePlace }) {
  return (
    <div className="saved-places-list">
      {savedPlaces.map((rec) => (
        <SavedPlacesCard
          key={rec.id}
          place={rec}           
          deletePlace={deletePlace}
        />
      ))}
    </div>
  );
}
