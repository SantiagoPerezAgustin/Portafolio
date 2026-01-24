import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Proyects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  const projectsForSkills = [
    { tech: ["React", "Tailwind", "JavaScript"] },
    { tech: ["Node.js", "React", "MongoDB"] },
    { tech: ["React", "TypeScript", "Chart.js"] },
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
    </>
  );
};

export default Home;