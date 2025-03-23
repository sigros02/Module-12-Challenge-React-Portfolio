import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();

  // SG: https://getbootstrap.com/docs/4.3/components/navbar/#responsive-behaviors (see toggler button)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-hidden"
          aria-controls="navbar-hidden"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-hidden">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
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
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={`nav-link ${pathname === "/Resume" ? "active" : ""}`}
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
