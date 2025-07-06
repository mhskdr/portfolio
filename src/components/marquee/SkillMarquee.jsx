import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillMarquee = () => {
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Git",
        "GitHub",
        "DaisyUI",
        "Framer",
    ];
    return (
        <div className="bg-[#17232d] py-4">
            <Marquee direction="left" speed={50} infinite={true}>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="mx-6 text-lg font-bold text-primary"
                    >
                        {skill}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default SkillMarquee;