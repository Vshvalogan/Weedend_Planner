import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import PlacePage from "./pages/PlacePage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import SavePlacesPage from "./pages/SavePlacesPage";

function App() {
  const [places, setPlaces] = useState([]);      // search results
  const [savedPlaces, setSavedPlaces] = useState([]);  // saved list

  const savePlace = (place) => {
    setSavedPlaces([...savedPlaces, place]);
  };

  const deletePlace = (id) => {
    const newList = savedPlaces.filter((p) => p.id !== id);
    setSavedPlaces(newList);
  };

  return (
    <>
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Homepage setPlaces={setPlaces} />} />
        <Route path="/places" element={<PlacePage places={places} />} />
        <Route
          path="/places/:id"
          element={<PlaceDetailsPage savePlace={savePlace} />}
        />
        <Route
          path="/places/savedplaces"
          element={<SavePlacesPage savedPlaces={savedPlaces} deletePlace={deletePlace} />}
        />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Homepage setPlaces={setPlaces} />}>
          <Route path="places" element={<PlacePage places={places} />}>
            <Route path=":id" element={<PlaceDetailsPage savePlace={savePlace} />} />
          </Route>
        </Route>

        <Route
          path="/places/savedplaces"
          element={<SavePlacesPage savedPlaces={savedPlaces} deletePlace={deletePlace} />}
        />
      </Routes>
    </>
  );
}

export default App;
