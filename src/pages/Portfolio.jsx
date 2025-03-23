import Project from "../components/Project";

function Portfolio() {
  return (
    <section className="portfolio flex-grow-1 min-vh-100 bg-light text-dark py-5">
      <div className="container">
        <section className="portfolio bg-secondary text-white py-5">
          <div className="container">
            <h2 className="text-center mb-4">My Projects</h2>
            <Project></Project>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;
