import { Navbar, Home, Projects, Skills, About, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
