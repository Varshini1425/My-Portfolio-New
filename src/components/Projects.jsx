import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import studentLove from "../assets/StudentLove.png";
import besnik from "../assets/besnik.png";
import deupload from "../assets/deupload.png";
import todo from "../assets/todo.png";
import moviebite from "../assets/moviebite.png";
import "../styles/projects.css"; // Add CSS here

const projects = [
  {
    title: "Student Love",
    description:
      "A web application designed to support students in connecting with peers and sharing resources.",
    link: "https://varshini1425.github.io/studentLove/",
    thumbnail: studentLove,
  },
  {
    title: "Besnik Blog",
    description:
      "A responsive and visually engaging blog platform designed for Besnik.",
    link: "https://varshini1425.github.io/besnik-blog/",
    thumbnail: besnik,
  },
  {
    title: "Deupload App",
    description:
      "A project management web application designed to facilitate team collaboration.",
    link: "https://varshini1425.github.io/deuploadAppHostProjectManagement/",
    thumbnail: deupload,
  },
  {
    title: "Dynamic Todo",
    description:
      "A sleek and efficient task management application designed to boost productivity.",
    link: "https://varshini1425.github.io/todo-javascript/",
    thumbnail: todo,
  },
  {
    title: "MovieBite",
    description:
      "MovieBite is a web application designed for movie enthusiasts to explore and review films.",
    link: "https://moviebite-8ab46.firebaseapp.com/signin",
    thumbnail: moviebite,
  },
];

const Projects = () => {
  const [flipped, setFlipped] = useState({});

  const handleMouseEnter = (index) => {
    setFlipped((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setFlipped((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  return (
    <section
      id="projects"
      className="py-20 bg-bgAnotherWhite dark:bg-tertiaryColor"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <ReactCardFlip
                isFlipped={flipped[index] || false}
                flipDirection="horizontal"
              >
                {/* Front Side */}
                <div className="project-card bg-white dark:bg-bgColor p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-textColorTeal dark:text-accentColor">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-textColor mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Back Side */}
                <div className="project-card bg-white dark:bg-bgColor p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="project-thumbnail"
                    />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:bg-accentColor bg-textColorTeal text-white dark:text-tertiaryColor px-4 py-2 rounded hover:bg-opacity-80 transition-colors inline-block mt-4"
                  >
                    View Project
                  </a>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
