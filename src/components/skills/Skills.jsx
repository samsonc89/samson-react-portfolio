/* eslint-disable react/no-unescaped-entities */
import "./skills.css";
import HtmlIcon from "../../assets/HtmlIcon";
import CssIcon from "../../assets/CssIcon";
import JavascriptIcon from "../../assets/JavascriptIcon";
import ReactIcon from "../../assets/ReactIcon";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="section-heading">Skills & Tools</h1>
      <div className="skills-container">
        <HtmlIcon name={"HTML5"} />
        <CssIcon name={"CSS3"} />
        <JavascriptIcon name={"JavaScript"} />
        <ReactIcon name={"React"} />
      </div>
      <div className="skills-angle"></div>
    </section>
  );
};

export default Skills;
