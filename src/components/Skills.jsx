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
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "React", icon: faReact },
  { name: "JavaScript", icon: faJs },
  { name: "CSS", icon: faCss3 },
  { name: "HTML", icon: faHtml5 },
  { name: "Node.js", icon: faNodeJs },
  { name: "Git", icon: faGitAlt },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-bgAnotherWhite dark:bg-tertiaryColor p-4 rounded-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: isDarkMode
                  ? "3px 10px 15px rgba(60, 255, 218, 0.3)" // Dark mode accent color shadow
                  : "3px 10px 15px rgba(90 , 150, 151, 0.3)", // Light mode teal color shadow
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-4xl mb-2 text-textColorTeal dark:text-accentColor"
              />
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
