import React from "react";
import { motion } from "framer-motion";
import YourPhoto from "../assets/your-photo.jpeg"; // Make sure to add your photo to the assets folder

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-bgAnotherWhite dark:bg-tertiaryColor"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <motion.img
            src={YourPhoto}
            alt="Your Name"
            className="w-48 h-48 rounded-full mb-8 md:mb-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-slate-600 dark:text-textColor text-lg max-w-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dedicated Software Engineer with over 2 years of experience in
            Front-end Development, specializing in JavaScript and React. Skilled
            in optimizing user interfaces and enhancing web performance, with
            hands-on experience in leading integration projects. Seeking a
            challenging role to apply my technical expertise and contribute to
            organizational growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
