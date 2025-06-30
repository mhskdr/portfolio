import React, { useRef } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import SkillMarquee from '../components/marquee/SkillMarquee';
import About from '../components/about/About';
import Project from '../components/projects/Project';
import Contact from '../components/contact/Contact';

const Home = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar
                onAboutClick={() => scrollToSection(aboutRef)}
                onProjectsClick={() => scrollToSection(projectsRef)}
                onContactClick={() => scrollToSection(contactRef)}
            />
            <Banner
                onProjectsClick={() => scrollToSection(projectsRef)}
                onContactClick={() => scrollToSection(contactRef)}
            />
            <SkillMarquee />
            <About ref={aboutRef} />
            <Project ref={projectsRef} />
            <Contact ref={contactRef} />
            <Footer
                onAboutClick={() => scrollToSection(aboutRef)}
                onProjectsClick={() => scrollToSection(projectsRef)}
                onContactClick={() => scrollToSection(contactRef)}
            />
        </div>
    );
};

export default Home;