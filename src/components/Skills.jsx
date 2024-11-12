// Skills.js

import React from "react";
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
  faNpm,
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
  // Determine dark mode using media query or context
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-bgColor">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-bgAnotherWhite dark:bg-tertiaryColor p-6 rounded-lg text-center flex flex-col items-center justify-center "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: isDarkMode
                  ? "3px 10px 15px rgba(60, 255, 218, 0.3)" // Dark mode accent color shadow
                  : "3px 10px 15px rgba(90 , 150, 151, 0.3)", // Light mode teal color shadow
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Conditionally render icon based on library */}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
