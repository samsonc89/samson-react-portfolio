/* eslint-disable react/no-unescaped-entities */
import "./skills.css";
import HtmlIcon from "../../assets/HtmlIcon";
import CssIcon from "../../assets/CssIcon";
import JavascriptIcon from "../../assets/JavascriptIcon";
import ReactIcon from "../../assets/ReactIcon";

const Skills = () => {
  return (
    <div className="section-container" id="skills">
      <h1 className="section-heading">Skills</h1>
      <div className="skills-container">
        <HtmlIcon />
        <CssIcon />
        <JavascriptIcon />
        <ReactIcon />
      </div>
    </div>
  );
};

export default Skills;
