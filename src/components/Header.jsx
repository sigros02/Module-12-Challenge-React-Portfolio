import Navigation from "./Navigation";

function Header() {
  return (
    <header className="header bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h1 className="display-4 mb-0">Stuart Gross</h1>
          <p className="lead mb-0">End-to-End Developer</p>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
