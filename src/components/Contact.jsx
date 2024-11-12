import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-bgColor">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          action="https://getform.io/f/aejjlryb"
          method="POST"
          className="max-w-md mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full mb-4 p-2 rounded bg-bgAnotherWhite dark:bg-tertiaryColor text-slate-600 dark:text-textColor"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-4 p-2 rounded bg-bgAnotherWhite dark:bg-tertiaryColor text-slate-600 dark:text-textColor"
          />
          <textarea
          name="message"
            placeholder="Message"
            rows="4"
            className="w-full mb-4 p-2 rounded bg-bgAnotherWhite dark:bg-tertiaryColor text-slate-600 dark:text-textColor"
          ></textarea>
          <motion.button
            className="dark:bg-accentColor bg-textColorTeal text-white dark:text-tertiaryColor px-6 py-3 rounded-full w-full text-lg hover:bg-opacity-80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
