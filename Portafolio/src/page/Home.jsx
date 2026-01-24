import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Proyects";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;