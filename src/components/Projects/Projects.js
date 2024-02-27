import { Link } from "react-router-dom";
import "./Projects.scss";

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <h2 className="project__header">Projects</h2>
      <p className="Projects__text">Click on a project to view Images</p>
      <div className="project-list">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
