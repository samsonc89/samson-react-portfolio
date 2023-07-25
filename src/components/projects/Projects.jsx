/* eslint-disable react/no-unescaped-entities */
import "./projects.css";
import ProjectCard from "./ProjectCard";
import projectData from "../../projects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="section-heading">Projects</h1>
      <div className="projects-container">
        {projectData.map((project) => {
          return <ProjectCard projectData={project} key={project.id} />;
        })}
      </div>
      <div className="project-angle"></div>
    </section>
  );
};

export default Projects;
