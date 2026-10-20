import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Student<span>Hub</span>
      </div>

      <div className="nav-links">

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/students">
          Students
        </NavLink>

        <NavLink to="/add-student">
          Add Student
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;