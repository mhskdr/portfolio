import React, { forwardRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const About = forwardRef((props, ref) => {
    // Component for count up numbers
    const CountUpOnView = ({ end, suffix }) => {
        const { ref, inView } = useInView({
            triggerOnce: false,
            rootMargin: '0px 0px -200px 0px', // similar to offset bottom 200
        });

        return (
            <span ref={ref}>
                {inView ? <CountUp end={end} duration={3} /> : 0}
                {suffix && <span className="text-red-500">{suffix}</span>}
            </span>
        );
    };

    return (
        <div className='bg-gray-900'>
            <section ref={ref} className="text-white py-16 px-6 container mx-auto">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    <div className="hidden lg:flex flex-col gap-8 w-1/2">
                        {[
                            { icon: <FaCode className="text-2xl text-white" />, label: 'Website Development' },
                            { icon: <FaMobileAlt className="text-2xl text-white" />, label: 'App Development' },
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
                            I started my software journey from photography. Through that, I
                            learned to love the process of creating from scratch. Since then,
                            this has led me to software development as it fulfills my love for
                            learning and building things.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-8">
                            <div className="w-24 text-center md:text-left">
                                <p className="text-3xl font-bold text-white">
                                    <CountUpOnView end={120} suffix="+" />
                                </p>
                                <p className="text-gray-400">Completed Projects</p>
                            </div>

                            <div className="w-24 text-center md:text-left">
                                <p className="text-3xl font-bold text-white">
                                    <CountUpOnView end={95} suffix="%" />
                                </p>
                                <p className="text-gray-400">Client satisfaction</p>
                            </div>

                            <div className="w-24 text-center md:text-left">
                                <p className="text-3xl font-bold text-white">
                                    <CountUpOnView end={10} suffix="+" />
                                </p>
                                <p className="text-gray-400">Years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default About;
