import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { IoArrowUpSharp } from "react-icons/io5";

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Experience", "Skills","Education", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bgAnotherWhite dark:bg-bgColor opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          className="text-2xl font-bold font-orbitron text-textColorTeal dark:text-accentColor"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          href="/"
        >
          SwarnaVarshini
        </motion.a>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-bgColor text-sm dark:text-textColor hover:text-textColorTeal dark:hover:text-accentColor"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark:text-accentColor text-textColorTeal mr-4"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
          <button
            className="md:hidden text-textColorTeal dark:text-accentColor"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-bgColor"
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item} className="px-4 py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-bgColor dark:text-textColor hover:text-accentColor"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <div>
        <a className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-accentColor to-textColorTeal p-3 sm:p-4 text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ease-out"
        href="/">
        <IoArrowUpSharp   className="w-5 h-5 sm:w-6 sm:h-6"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
