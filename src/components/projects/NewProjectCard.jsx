/* eslint-disable react/prop-types */
import "./projectCard.css";
import GitIcon from "../../assets/GitIcon";
import LiveIcon from "../../assets/LiveIcon.jsx";
import newImg from "../../../public/newBenefits.png";

const NewProjectCard = ({ projectData: project }) => {
  return (
    <div className="new-project-card">
      <div className="new-project-thumbnail-container">
        <img className="project-thumbnail" src={newImg} />
        {/* <img className="project-thumbnail" src={project.thumbnail} /> */}
      </div>
      <div className="new-project-card-content-wrapper">
        <div className="new-project-card-content">
          <h2 className="new-project-title">{project.title}</h2>
          <p className="new-project-description">{project.description}</p>
        </div>
        <div className="project-card-bottom-wrapper">
          <div className="project-tech-wrapper"></div>
          <div className="icon-container">
            <div className="icon-wrapper">
              <a href={project.code} target="_blank" rel="noreferrer">
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
      </div>
    </div>
  );
};

export default NewProjectCard;
