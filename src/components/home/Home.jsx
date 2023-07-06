/* eslint-disable react/no-unescaped-entities */
import "./home.css";

const Home = () => {
  return (
    <div id="home">
      <h1>Hello, I'm Samson</h1>
      <h2>I'm a restaurant owner turned frontend web developer.</h2>
      <h2>
        Read more{" "}
        <span className="highlight-container highlight-about">
          <span className="highlight">
            <a href="#about"> about me </a>
          </span>
        </span>{" "}
        or{" "}
        <span className="highlight-container highlight-work">
          <span className="highlight">
            <a href="#projects"> see my work.</a>
          </span>
        </span>
      </h2>
    </div>
  );
};

export default Home;
