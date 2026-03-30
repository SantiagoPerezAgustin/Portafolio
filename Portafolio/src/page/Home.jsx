import { lazy, Suspense } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Carga diferida: estas secciones se descargan después del Hero (carga más rápida en móviles)
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Proyects"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />

      {/* Fallback vacío: evita spinner pesado; las secciones aparecen al cargar cada chunk */}
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;
