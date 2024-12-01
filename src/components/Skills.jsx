import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faNodeJs,
  faGitAlt,
  faGithub,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import {
  SiTypescript,
  SiRedux,
  SiJest,
  SiReactrouter,
  SiGraphql,
  SiWebpack,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "React", icon: faReact, library: "fontawesome" },
  { name: "JavaScript", icon: faJs, library: "fontawesome" },
  { name: "CSS", icon: faCss3, library: "fontawesome" },
  { name: "HTML", icon: faHtml5, library: "fontawesome" },
  { name: "Node.js", icon: faNodeJs, library: "fontawesome" },
  { name: "Git", icon: faGitAlt, library: "fontawesome" },
  { name: "GitHub", icon: faGithub, library: "fontawesome" },
  { name: "TypeScript", icon: <SiTypescript />, library: "react-icons" },
  { name: "Redux", icon: <SiRedux />, library: "react-icons" },
  { name: "Sass", icon: faSass, library: "fontawesome" },
  { name: "Webpack", icon: <SiWebpack />, library: "react-icons" },
  { name: "Firebase", icon: <SiFirebase />, library: "react-icons" },
  { name: "Jest", icon: <SiJest />, library: "react-icons" },
  { name: "React Router", icon: <SiReactrouter />, library: "react-icons" },
  { name: "GraphQL", icon: <SiGraphql />, library: "react-icons" },
];

const Skills = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [scrollX, setScrollX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if(isHovered) return;
    const interval = setInterval(() => {
      setScrollX((prev) => (prev - 1 ) % (skills.length * 200)); // Adjust scroll speed and reset logic
    }, 30); // Animation smoothness interval
    return () => clearInterval(interval);
  }, [isHovered]);

  const repeatedSkills = [...skills, ...skills];
 

  return (
    <section
      id="skills"
      className="py-20 bg-bgAnotherWhite dark:bg-tertiaryColor overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="flex space-x-4"
          style={{
            transform: `translateX(${scrollX}px)`,
          }}
          animate={{ x: scrollX }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          {repeatedSkills.map((skill, index) => (
            <motion.div
            key={`${skill.name}-${index}`}
              className="bg-white dark:bg-bgColor p-6 rounded-lg text-center flex flex-col items-center justify-center flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/5"
              whileHover={{
                scale: 1.05,
                boxShadow: isDarkMode
                  ? "3px 10px 15px rgba(60, 255, 218, 0.3)" // Dark mode accent color shadow
                  : "3px 10px 15px rgba(90, 150, 151, 0.3)", // Light mode teal color shadow
              }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-4xl mb-2 text-textColorTeal dark:text-accentColor h-12 w-12 flex items-center justify-center">
                {skill.library === "fontawesome" ? (
                  <FontAwesomeIcon icon={skill.icon} />
                ) : (
                  skill.icon
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-textColor">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
