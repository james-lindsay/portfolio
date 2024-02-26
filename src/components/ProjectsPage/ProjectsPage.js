import React from "react";
import "./ProjectsPage.scss";
import { useParams } from "react-router-dom";

const ProjectPage = ({ projects }) => {
  const { id } = useParams();

  const projectId = parseInt(id);

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">Description: {project.description}</p>
      <div className="project-images">
        {project.id === 1 && (
          <>
            <img src={project.image_reg} alt="Reg" className="project-image" />
            <img
              src={project.image_auth}
              alt="Auth"
              className="project-image"
            />
            <img
              src={project.image_home}
              alt="Home"
              className="project-image"
            />
            <img
              src={project.image_homeDark}
              alt="Dark Home"
              className="project-image"
            />
            <img
              src={project.image_user}
              alt="User"
              className="project-image"
            />
            <img
              src={project.image_userDark}
              alt="Dark User"
              className="project-image"
            />
          </>
        )}
        {project.id === 2 && (
          <>
            <img
              src={project.image_home}
              alt="Home"
              className="project-image"
            />
            <img
              src={project.image_homeDark}
              alt="Dark Home"
              className="project-image"
            />
            <img
              src={project.image_user}
              alt="User"
              className="project-image"
            />
            <img
              src={project.image_userDark}
              alt="Dark User"
              className="project-image"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
