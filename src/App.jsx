import { Navbar, Home, Projects, Skills, About } from "./components";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
    </div>
  );
}

export default App;
