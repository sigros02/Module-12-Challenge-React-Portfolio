import { Link, useLocation } from "react-router-dom";

// SG: Use the useLocation hook from react-router-dom to get the pathname of the current URL and assign it to the currentPage variable
function Navigation() {
  const { pathname } = useLocation();

// SG: Return a navigation bar with links to the home page, the portfolio page, the resume page, and the contact page
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
                className={`nav-link ${pathname === "/Contact" ? "active" : ""}`}
              >
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={`nav-link ${pathname === "/Portfolio" ? "active" : ""}`}
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
