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
              src={project.image_Hero}
              alt="Warehouse"
              className="project-image"
            />
            <img
              src={project.image_Cards}
              alt="Warehouse Edit"
              className="project-image"
            />
            <img
              src={project.image_Hawaii}
              alt="Warehouse Stock"
              className="project-image"
            />
            <img
              src={project.image_Iceland}
              alt="Inventory"
              className="project-image"
            />
            <img
              src={project.image_Greece}
              alt="Inventory Add"
              className="project-image"
            />
            <img
              src={project.image_Footer}
              alt="Inventory Stock"
              className="project-image"
            />
          </>
        )}

        {project.id === 3 && (
          <>
            <img
              src={project.image_Warehouse}
              alt="Warehouse"
              className="project-image"
            />
            <img
              src={project.image_WarehouseEdit}
              alt="Warehouse Edit"
              className="project-image"
            />
            <img
              src={project.image_WarehouseStock}
              alt="Warehouse Stock"
              className="project-image"
            />
            <img
              src={project.image_Inventory}
              alt="Inventory"
              className="project-image"
            />
            <img
              src={project.image_InventoryAdd}
              alt="Inventory Add"
              className="project-image"
            />
            <img
              src={project.image_InventoryStock}
              alt="Inventory Stock"
              className="project-image"
            />
          </>
        )}
        {project.id === 4 && (
          <>
            <img
              src={project.image_Home}
              alt="BS Home 1"
              className="project-image"
            />
            <img
              src={project.image_Home2}
              alt="BS Home2"
              className="project-image"
            />
            <img
              src={project.image_Gallary}
              alt="BS Gallary"
              className="project-image"
            />
            <img
              src={project.image_About}
              alt="BS About"
              className="project-image"
            />
            <img
              src={project.image_Shows}
              alt="BS Shows"
              className="project-image"
            />
            <img
              src={project.image_Comments}
              alt="BS Comments"
              className="project-image"
            />
            <img
              src={project.image_Footer}
              alt="BS Footer"
              className="project-image"
            />
          </>
        )}

        {project.id === 5 && (
          <>
            <img
              src={project.image_Home}
              alt="TP Home"
              className="project-image"
            />
            <img
              src={project.image_Details}
              alt="TP Details"
              className="project-image"
            />
            <img
              src={project.image_About}
              alt="TP About"
              className="project-image"
            />
            <img
              src={project.image_Post}
              alt="TP Post"
              className="project-image"
            />
            <img
              src={project.image_Footer}
              alt="TP Footer"
              className="project-image"
            />
          </>
        )}
      </div>
      {project.id === 1 && (
        <>
          <p className="github">{project.Github}</p>
          <p className="github">{project.Github_backend}</p>
        </>
      )}
      {project.id === 2 && <p className="github">{project.Github}</p>}
      {project.id === 3 && (
        <>
          <p className="github">{project.Github}</p>
          <p className="github">{project.Github_backend}</p>
        </>
      )}
      {project.id === 4 && (
        <>
          <p className="github">{project.Github}</p>
        </>
      )}
      {project.id === 5 && (
        <>
          <p className="github">{project.Github}</p>
          <p className="github">{project.Github_backend}</p>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
