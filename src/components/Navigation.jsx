import { Link, useLocation } from "react-router-dom";

// SG: Use the useLocation hook from react-router-dom to get the pathname of the current URL and assign it to the currentPage variable
function Navigation() {
  const { pathname } = useLocation();

  // SG: Return a navigation bar with links to the home page, the portfolio page, the resume page, and the contact page
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={pathname === "/" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={pathname === "/Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={pathname === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
