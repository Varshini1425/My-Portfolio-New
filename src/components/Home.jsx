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
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-textColor">
          Front-end Developer with 2+ years of experience, specializing in React
          and JavaScript. Passionate about crafting efficient, user-centric web
          experiences.
        </p>
        <motion.button
          className="bg-textColorTeal dark:bg-accentColor text-slate-200 dark:text-tertiaryColor px-6 py-3 rounded-full text-lg hover:bg-opacity-80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
