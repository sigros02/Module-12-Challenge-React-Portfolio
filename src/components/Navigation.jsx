import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/"></Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                onClick={() => setIsCollapsed(true)}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={`nav-link ${
                  pathname === "/Contact" ? "active" : ""
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={`nav-link ${
                  pathname === "/Portfolio" ? "active" : ""
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={`nav-link ${pathname === "/Resume" ? "active" : ""}`}
                onClick={() => setIsCollapsed(true)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
