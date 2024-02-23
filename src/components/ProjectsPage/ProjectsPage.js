import { useParams } from "react-router-dom";
import "./ProjectsPage.scss";
const ProjectPage = ({ projects }) => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
