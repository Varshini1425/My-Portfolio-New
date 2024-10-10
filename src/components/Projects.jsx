import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    link: "https://project3.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-bgAnotherWhite dark:bg-tertiaryColor"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-bgColor p-6 rounded-lg shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2 text-textColorTeal dark:text-accentColor">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-textColor mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:bg-accentColor bg-textColorTeal text-white dark:text-tertiaryColor px-4 py-2 rounded hover:bg-opacity-80 transition-colors inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
