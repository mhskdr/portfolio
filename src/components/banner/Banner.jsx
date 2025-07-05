import React from 'react';
import Typewriter from "typewriter-effect";

const Banner = ({ onProjectsClick, onContactClick }) => {
    return (
        <div className="hero bg-[#121e28]">
            <div className="hero-content flex-col lg:flex-row w-full px-6 lg:px-12 gap-8">
                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left max-w-[600px]">
                    <h1 className="text-5xl font-bold">Hello<span className='text-primary'>.</span></h1>
                    <h1 className="text-5xl font-bold">I'm Mobarak</h1>
                    <div className="py-6 text-xl font-bold">
                        I'm a passionate Frontend Web Developer skilled with
                        <Typewriter
                            options={{
                                strings: [
                                    '<span class="text-primary">Frontend Developer</span>',
                                    '<span class="text-primary">React Enthusiast</span>',
                                    '<span class="text-primary">Problem Solver</span>',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                            }}
                        />
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <button onClick={onProjectsClick} className="btn btn-primary">View Project</button>
                        <button onClick={onContactClick} className="btn btn-primary btn-outline">Contact Now</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/banner.jpg"
                        className="max-w-xs lg:max-w-md w-full rounded-lg shadow-2xl object-cover"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
