import SavedPlacesList from "../components/saved_places_list";

export default function SavePlacesPage({ savedPlaces, deletePlace }) {
  return (
    <div className="saved-page page">
      <div className="panel">
        <h3>Saved Places</h3>
        {savedPlaces.length > 0 ? (
          <SavedPlacesList savedPlaces={savedPlaces} deletePlace={deletePlace} />
        ) : (
          <p>No plans yet</p>
        )}
      </div>
    </div>
  );
}
