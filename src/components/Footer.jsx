import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaHackerrank, FaDev } from "react-icons/fa"; // Import HackerRank and DEV icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-bgAnotherWhite dark:bg-tertiaryColor py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/Varshini1425"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/swarna-varrsini-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/varshinisugavan1" // Replace 'yourusername' with your HackerRank username
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FaHackerrank size="2em" />
          </a>
          <a
            href="https://dev.to/swarna_varshini_s" // Replace 'yourusername' with your DEV Community username
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FaDev size="2em" />
          </a>
        </div>
        <p className="text-sm text-slate-600 dark:text-textColor">
          &copy; {new Date().getFullYear()} Swarna Varshini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
