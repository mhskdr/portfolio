import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ onAboutClick, onProjectsClick, onContactClick }) => {
    return (
        <div className="bg-[#18242e] text-base-100">
            <footer className="text-base-content py-10 px-4 text-center container mx-auto">
            {/* Navigation Links */}
            <nav className="flex justify-center gap-6 mb-4 flex-wrap">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="link link-hover">
                    Home
                </button>
                <button onClick={onAboutClick} className="link link-hover">
                    About
                </button>
                <button onClick={onProjectsClick} className="link link-hover">
                    Projects
                </button>
                <button onClick={onContactClick} className="link link-hover">
                    Contact
                </button>
            </nav>

            {/* Social Media */}
            <div className="flex justify-center gap-6 text-xl mb-4">
                <a href="https://www.facebook.com/mhskdr" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <FaFacebookF />
                </a>
                <a href="https://www.github.com/mhskdr" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mobarakhosen" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <FaLinkedin />
                </a>
            </div>

            {/* Footer Text */}
            <p className="text-sm text-base-content/60">
                &copy; {new Date().getFullYear()} Md Mobarak Hosen. All rights reserved.
            </p>
        </footer>
        </div>
    );
};

export default Footer;
