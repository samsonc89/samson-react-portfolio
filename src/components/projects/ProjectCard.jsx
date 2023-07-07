import "./projects.css";

const ProjectCard = ({ projectData: project }) => {
  return (
    <div className="project-card">
      <div className="project-thumbnail-container">
        <img className="project-thumbnail" src={project.thumbnail} />
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="icon-wrapper">
        <div className="git-wrapper">
          <a href={project.github} target="_blank" rel="noreferrer">
            {/* <GitIcon /> */}
          </a>
        </div>
        <div className="live-wrapper">
          <a href={project.live} target="_blank" rel="noreferrer">
            {/* <LiveIcon /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
