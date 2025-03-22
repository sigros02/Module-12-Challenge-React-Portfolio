function Portfolio() {
  return (
    <section className="portfolio flex-grow-1 min-vh-100 bg-light text-dark py-5">
      <div className="container">
        <section className="portfolio bg-secondary text-white py-5">
          <div className="container">
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">Description of Project 1.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title">Project 2</h5>
                    <p className="card-text">Description of Project 2.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">Description of Project 3.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">Description of Project 4.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title">Project 2</h5>
                    <p className="card-text">Description of Project 5.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-white">
                  <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">Description of Project 6.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;
