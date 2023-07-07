/* eslint-disable react/prop-types */
import "./projects.css";
import GitIcon from "../../assets/GitIcon";
import LiveIcon from "../../assets/LiveIcon.jsx";

const ProjectCard = ({ projectData: project }) => {
  return (
    <div className="project-card">
      <div className="project-thumbnail-container">
        <img className="project-thumbnail" src={project.thumbnail} />
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="icon-container">
        <div className="icon-wrapper">
          <a href={project.github} target="_blank" rel="noreferrer">
            <GitIcon />
          </a>
        </div>
        <div className="icon-wrapper">
          <a href={project.live} target="_blank" rel="noreferrer">
            <LiveIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
