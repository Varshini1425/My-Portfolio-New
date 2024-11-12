import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div
        className="text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-textColorTeal dark:text-accentColor">
          Web Developer
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-textColor text-center  md:px-24 px-10">
          As a Front-End Engineer, I create intuitive, responsive web
          applications that prioritize user experience and performance.
          Leveraging my expertise in React, JavaScript, and modern front-end
          technologies, I turn ideas into seamless digital experiences.
        </p>
        <motion.a
          className="bg-textColorTeal dark:bg-accentColor text-slate-200 dark:text-tertiaryColor px-6 py-3 rounded-full text-lg hover:bg-opacity-80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/#about"
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
