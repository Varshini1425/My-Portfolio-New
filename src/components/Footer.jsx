import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-bgAnotherWhite dark:bg-tertiaryColor py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-accentColor text-textColorTeal hover:text-opacity-80 transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <p className="text-sm text-slate-600 dark:text-textColor">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
