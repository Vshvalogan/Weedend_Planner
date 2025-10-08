import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import PlacePage from "./pages/PlacePage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import SavePlacesPage from "./pages/SavePlacesPage";


function App() {
  const [places, setPlaces] = useState([]);
  const [mapImage, setMapImage] = useState(null);
  return (
    <>
      <NavBar />
      <Routes>
  <Route
    path="/"
    element={<Homepage setPlaces={setPlaces} setMapImage={setMapImage} />}
  >
    <Route
      path="places"
      element={<PlacePage places={places} mapImage={mapImage} />}
    >
      <Route path=":id" element={<PlaceDetailsPage places={places} />} />
    </Route>
  </Route>

  
  <Route path="/savedplaces" element={<SavePlacesPage />} />
</Routes>
<p></p>
    </>
  );
}

export default App;
