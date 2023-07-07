import { Navbar, Home, Projects, Skills, About, Footer } from "./components";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
