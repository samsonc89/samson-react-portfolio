import "./navbar.css";

const NavLinks = () => (
  <div className="nav-links">
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#skills">Skills</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
  </div>
);

function isDark() {
  return localStorage.getItem("dark-mode");
}

function toggleDarkClass() {
  const root = document.querySelector(":root");
  root.classList.toggle("light");
}

function toggleLocalStorageItem() {
  if (isDark()) {
    localStorage.removeItem("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "set");
  }
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="toggle-menu">
          <span></span>
          <span className="middle-span"></span>
          <span></span>
        </div>

        <NavLinks />

        <button
          id="btn--theme-toggle"
          onClick={(e) => {
            e.preventDefault();
            toggleLocalStorageItem();
            toggleDarkClass();
          }}
        ></button>
      </div>
    </nav>
  );
};

export default Navbar;
