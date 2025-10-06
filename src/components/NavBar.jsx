import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2>WeekEnd Planner</h2>
      <div>
        <Link to="/">Home</Link> | <Link to="/places/savedplaces">Saved Places</Link>
      </div>
    </nav>
  );
}
