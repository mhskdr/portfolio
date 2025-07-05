import React, { forwardRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const About = forwardRef((props, ref) => {
    // Component for count up numbers
    const CountUpOnView = ({ end, suffix }) => {
        const { ref, inView } = useInView({
            triggerOnce: false,
            rootMargin: '0px 0px 0px 0px',
        });

        return (
            <span ref={ref}>
                {inView ? <CountUp end={end} duration={3} /> : 0}
                {suffix && <span className="text-red-500">{suffix}</span>}
            </span>
        );
    };

    return (
        <div className='bg-[#121e28]'>
            <section ref={ref} className="text-white py-16 px-6 container mx-auto">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    <div className="hidden lg:flex flex-col gap-8 justify-center w-1/2">
                        {[
                            { icon: <FaCode className="text-2xl text-white" />, label: 'Website Development' },
                            { icon: <FaMobileAlt className="text-2xl text-white" />, label: 'Website Upgrading' },
                            { icon: <FaServer className="text-2xl text-white" />, label: 'Website Hosting' },
                        ].map((service, index) => (
                            <div key={index} className="relative pl-10">
                                <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-red-400"></span>
                                <div className="flex items-center gap-4">
                                    {service.icon}
                                    <p className="text-lg font-semibold">{service.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl text-center md:text-start font-bold">About me</h2>
                        <p className="text-gray-300 text-center md:text-start">
                            🔹 I started my web development journey in early 2025 through Programming Hero's Level-1 course.
                            With no prior experience, I quickly upskilled and built 7+ real-world applications using the MERN Stack and Next.js.<br />
                            🔹 I'm a self-motivated developer who thrives on solving practical challenges with optimized backend logic and engaging UI/UX design.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-8">
                            <div className="w-24 text-center md:text-left">
                                <p className="text-3xl font-bold text-white">
                                    <CountUpOnView end={15} suffix="+" />
                                </p>
                                <p className="text-gray-400">Completed Projects</p>
                            </div>

                            <div className="w-24 text-center md:text-left">
                                <p className="text-3xl font-bold text-white">
                                    <CountUpOnView end={100} suffix="%" />
                                </p>
                                <p className="text-gray-400">Successful Assignment Done</p>
                            </div>

                            <div className="w-24 text-center md:text-left">
                                <p className="text-3xl font-bold text-white">
                                    <CountUpOnView end={6} suffix="+" />
                                </p>
                                <p className="text-gray-400">Months of Learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default About;
