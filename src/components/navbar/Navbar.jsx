import React from "react";

const Navbar = ({ onAboutClick, onProjectsClick, onContactClick }) => {
    return (
        <div className="bg-base-200">
            <div className="navbar container mx-auto">
                {/* Left - Logo + Name */}
                <div className="navbar-start">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-xl flex items-center gap-2 btn btn-ghost"
                    >
                        <img src="/mh3d.png" alt="Logo" className="h-8 w-8" />
                        <span className="font-semibold text-lg">Md Mobarak Hosen</span>
                    </button>
                </div>

                {/* Center - Large screen menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={onAboutClick}>About</button>
                        </li>
                        <li>
                            <button onClick={onProjectsClick}>Projects</button>
                        </li>
                        <li>
                            <button onClick={onContactClick}>Contact</button>
                        </li>
                    </ul>
                </div>

                {/* Right - Resume + Mobile Menu */}
                <div className="navbar-end flex items-center gap-2">
                    <a href="/resume.pdf" download className="btn hidden sm:inline-flex">
                        My Resume
                    </a>

                    {/* Mobile dropdown */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={onAboutClick}>About</button>
                            </li>
                            <li>
                                <button onClick={onProjectsClick}>Projects</button>
                            </li>
                            <li>
                                <button onClick={onContactClick}>Contact</button>
                            </li>
                            <li className="sm:hidden">
                                <a href="/resume.pdf" download>My Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
