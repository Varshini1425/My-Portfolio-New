import React from "react";
import { motion } from "framer-motion";
import studentLove from "../assets/StudentLove.png";
import besnik from "../assets/besnik.png";
import deupload from "../assets/deupload.png";
import todo from "../assets/todo.png";
import moviebite from "../assets/moviebite.png";


const projects = [
  {
    title: "Student Love",
    description:
      "A web application designed to support students in connecting with peers, sharing resources, and engaging in academic discussions. This platform includes features for creating study groups, organizing events, and a resource library for sharing notes, tutorials, and other helpful materials.",
    link: "https://varshini1425.github.io/studentLove/",
    thumbnail: studentLove, // Replace with actual image URL
  },
  {
    title: "Besnik Blog",
    description:
      "A responsive and visually engaging blog platform designed for Besnik, a digital marketing agency. The blog serves as a content hub, showcasing marketing insights, client success stories, and industry trends. Built with a modern design and user-friendly layout, it emphasizes readability and easy navigation, making it an ideal platform for sharing content and enhancing audience engagement.",
    link: "https://varshini1425.github.io/besnik-blog/",
    thumbnail: besnik, // Replace with actual image URL
  },
  {
    title: "Deupload App",
    description:
      "A project management web application designed to facilitate efficient team collaboration and task tracking. With an intuitive user interface, it enables users to organize projects, assign tasks, and monitor progress seamlessly. Built with responsive design principles, this platform is optimized for use across various devices, making it an ideal solution for remote and hybrid teams aiming to enhance productivity and streamline workflows.",
    link: "https://varshini1425.github.io/deuploadAppHostProjectManagement/",
    thumbnail: deupload, // Replace with actual image URL
  },
  {
    title: "Dynamic Todo",
    description:
      "The 'Dynamic Todo' project is a sleek and efficient task management application designed to boost productivity. It features an intuitive interface, dynamic theme switching between light and dark modes, and utilizes local storage to ensure tasks persist even after closing the browser. Users can easily create, read, update, and delete tasks, with a responsive design that looks great on both desktop and mobile devices. The application is built using HTML5, CSS3 with custom properties for theming, vanilla JavaScript, and Materialize CSS for a modern, polished look.",
    link: "https://varshini1425.github.io/todo-javascript/",
    thumbnail: todo, // Replace with actual image URL
  },
  {
    title: "MovieBite",
    description:
      "MovieBite is a web application designed for movie enthusiasts to explore, save, and review their favourite films. It features user authentication, personalized watchlists, and a streamlined interface for easy navigation. Built with Firebase for seamless authentication and data storage, MovieBite provides a dynamic experience that allows users to sign in, rate movies, and discover trending films.",
    link: "https://moviebite-8ab46.firebaseapp.com/signin",
    thumbnail: moviebite, // Replace with actual image URL
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
              {/* Thumbnail Image with link */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                />
              </a>
              <h3 className="text-xl font-bold mb-2 text-textColorTeal dark:text-accentColor">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-textColor mb-4 line-clamp-3">
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
