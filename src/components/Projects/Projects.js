import { Link } from "react-router-dom";
import "./Projects.scss";
import ProjectPage from "../ProjectsPage/ProjectsPage";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Social Circle",
      description: "Social Media App that uses React, NodeJS and MongoDB",
    },
    {
      id: 2,
      title: "Travel Site",
      description: "Travel Website made using HTML & CSS",
    },
    {
      id: 3,
      title: "InStock",
      description:
        "Stock Website for warehouses, made as a team using React, nodeJS, MySQL",
    },
    {
      id: 4,
      title: "Band Site",
      description:
        "Website made using HTML, Sass and Java Script. Website is used to see upcoming dates for the bands tour dates",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectPage
            projects={projects}
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectPage>
        ))}
      </div>
    </section>
  );
};

export default Projects;
