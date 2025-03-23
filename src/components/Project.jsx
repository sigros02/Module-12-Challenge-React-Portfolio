import { projects } from "../data/Projects";

export default function Project() {
  return (
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card bg-dark text-white">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.gifLink}
                className="card-img-top"
                alt={`Demo of ${project.title}`}
                // make all cards same size
                style={{ height: "200px", width: "100%" }}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-info"
                >
                  {project.title}
                </a>
              </h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
