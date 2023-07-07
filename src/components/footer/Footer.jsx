/* eslint-disable react/no-unescaped-entities */
import EmailIcon from "../../assets/EmailIcon";
import GitIcon from "../../assets/GitIcon";
import LinkedInIcon from "../../assets/LinkedInIcon";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-icon">
        <a href="https://github.com/samsonc89" target="_blank" rel="noreferrer">
          <GitIcon />
        </a>
      </div>
      <div className="footer-icon">
        <a
          href="https://www.linkedin.com/in/samsoncheung13/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="footer-icon">
        <a href="mailto:samsonbcheung@gmail.com">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
