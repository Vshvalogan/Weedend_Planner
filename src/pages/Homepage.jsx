import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Homepage({ setPlaces }) {
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const Results = [
      { id: 1, title: "cafe" },
      { id: 2, title: "Beach" },
      { id: 3, title: "Garden" },
      { id: 4, title: "Theatre" },
    ];
    setPlaces(Results);
    navigate("places"); 
  };

  return (
    <div className="homepage page">
      <div className="panel">
        <h3>Welcome</h3>
        <label>City: <input value={city} onChange={(e) => setCity(e.target.value)} /></label>
        <label>Keyword: <input value={keyword} onChange={(e) => setKeyword(e.target.value)} /></label>
        <button onClick={handleClick}>Search</button>
        <Outlet />
      </div>
    </div>
  );
}
