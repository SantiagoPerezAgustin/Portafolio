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

const Fallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <span className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
  </div>
);

const Home = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />

      <Suspense fallback={<Fallback />}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;
