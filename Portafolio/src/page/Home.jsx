import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Proyects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  const projectsForSkills = [
    { tech: ["React", "ASP.NET 8", "SQL Server", "Swagger", "xUnit"] },
    { tech: ["React", "TypeScript", "Vite", "Tailwind", "FastAPI", "ASP.NET 8", "Tesseract", "Mistral", "Adzuna API"] },
    { tech: ["React 19", "Vite", "Tailwind CSS", "React Router", ".NET 8", "Entity Framework", "SQL Server", "API REST"] },
  ];

  const allSkills = [...new Set(projectsForSkills.flatMap((p) => p.tech))];
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />

      {/* Skills fuera de Proyectos */}
      <Skills allSkills={allSkills} />

      {/* Proyectos — componente restaurado sin filtro */}
      <Projects />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;