import React from "react";
import Swal from "sweetalert2";

const Navbar = ({ onAboutClick, onProjectsClick, onContactClick }) => {
    const handleResumeClick = () => {
        Swal.fire({
            title: "Resume Download",
            text: "You can download my resume from here.",
            icon: "info",
            confirmButtonText: "Open Resume",
            confirmButtonColor: "#6366f1",
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("/resume.pdf", "_blank");
            }
        });
    };

    return (
        <div className="bg-[#121e28] sticky top-0 z-50 shadow-lg">
            <div className="navbar container mx-auto">
                {/* Left - Logo + Name */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="navbar-start cursor-pointer flex items-center gap-2"
                >
                    <img src="/mh3d.png" alt="Logo" className="w-[60px]" />
                    <span className="font-semibold text-lg text-white">Md Mobarak Hosen</span>
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
                    <button onClick={handleResumeClick} className="btn btn-primary hidden sm:inline-flex">
                        My Resume
                    </button>

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
                                <button onClick={handleResumeClick} className="btn bg-[#605DFF] w-full">
                                    My Resume
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
