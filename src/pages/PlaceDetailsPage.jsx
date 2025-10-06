import { useParams, Link } from "react-router-dom";

export default function PlaceDetailsPage({ savePlace }) {
  const { id } = useParams();
  const dummy = {
    id: Number(id),
    title: "Café Aroma",
    address: "123 Orchard Road",
    description: "A cozy café with great desserts",
  };

  const handleSaveClick = () => {
    savePlace(dummy);
  };

  return (
    <div className="details-page page">
      <div className="panel">
        <Link to="/places">Back</Link>
        <h3>{dummy.title}</h3>
        <p>Address: {dummy.address}</p>
        <p>Description: {dummy.description}</p>

        <label>Note: <input placeholder="Add a note" /></label>
        <label>Budget: <input placeholder="Add budget" /></label>
        <button onClick={handleSaveClick}>Save Place</button>

        <p>Links: <a href="#">Website</a> | <a href="#">Direction</a></p>
      </div>
    </div>
  );
}
