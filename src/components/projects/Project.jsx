import React, { forwardRef } from 'react';

const Project = forwardRef((props, ref) => {
    return (
        <div className='bg-base-200'>
            <section ref={ref} className="py-12 px-4 md:px-16 container mx-auto space-y-12">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                {/* 1st showCard */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Left - Project Details */}
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-semibold">Tularampur School</h3>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "Javascript", "Node.js"].map((tech) => (
                                <span key={tech} className="badge badge-outline">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-base-content/70">
                            Used components of Html,Tailwind CSS with Daisyui basic structures.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/mhskdr/TularampurHighSchool" className="btn btn-primary">
                                View Github
                            </a>
                            <a href="https://mhskdr.github.io/TularampurHighSchool" className="btn btn-outline">
                                View project ↗
                            </a>
                        </div>
                    </div>

                    {/* Right - Screenshot */}
                    <div className="md:w-1/2">
                        <img
                            src="/1.png"
                            alt="Battleship terminal screenshot"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                {/* 2nd showCard */}
                <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10">
                    {/* Left - Project Details */}
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-semibold">SurveyWala</h3>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "TailwindCSS", "ExpressJS", "Vite", "Firebse"].map((tech) => (
                                <span key={tech} className="badge badge-outline">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-base-content/70">
                            Used components of Tailwind CSS with Daisyui, Firebase for authentication, Express for BackEnd MongoDb for Database.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/mhskdr/surveywala" className="btn btn-primary">
                                View Github
                            </a>
                            <a href="https://surveywala.netlify.app" className="btn btn-outline">
                                View project ↗
                            </a>
                        </div>
                    </div>

                    {/* Right - Screenshot */}
                    <div className="md:w-1/2">
                        <img
                            src="/2.png"
                            alt="Battleship terminal screenshot"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                {/* 3rd showCard */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Left - Project Details */}
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-semibold"></h3>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "Javascript", "Node.js"].map((tech) => (
                                <span key={tech} className="badge badge-outline">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-base-content/70">
                            Used components of Html,Tailwind CSS with Daisyui basic structures.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/mhskdr/roomie-client-side" className="btn btn-primary">
                                View Github
                            </a>
                            <a href="https://roomie-connect.netlify.app" className="btn btn-outline">
                                View project ↗
                            </a>
                        </div>
                    </div>

                    {/* Right - Screenshot */}
                    <div className="md:w-1/2">
                        <img
                            src="/3.png"
                            alt="Battleship terminal screenshot"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
});

export default Project;