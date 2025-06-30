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
        "GitHub"
    ];
    return (
        <div className="bg-base-200 py-4">
            <Marquee direction="left" speed={50} gradient={false}>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="mx-6 text-lg font-semibold text-primary whitespace-nowrap"
                    >
                        {skill}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default SkillMarquee;