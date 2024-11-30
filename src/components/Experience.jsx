import React from 'react';
import { motion } from 'framer-motion';
import experience from '../assets/experience.gif';

const Experience = () => {
  // Animation Variants for Framer Motion
  const fadeInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.3 }, // Add delay for staggered effect
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-bgColor">
      <div className="container mx-auto px-4">
        {/* Heading with Animation */}
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        {/* Flex Container for Content */}
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-10">
          {/* Left Side - GIF with Slide-in Animation */}
          <motion.img
            src={experience}
            alt="Experience GIF"
            className="w-52 h-48 md:w-72 md:h-72 rounded-full shadow-lg"
            initial={fadeInLeft.initial}
            animate={fadeInLeft.animate}
            transition={fadeInLeft.transition}
          />

          {/* Right Side - Experience Details with Slide-in Animation */}
          <motion.div
            className="text-left text-slate-600 dark:text-textColor space-y-4"
            initial={fadeInRight.initial}
            animate={fadeInRight.animate}
            transition={fadeInRight.transition}
          >
            {/* Role and Company */}
            <div>
              <h3 className="text-xl  font-semibold">Systems Associate</h3>
              <p className="text-sm text-textColorTeal dark:text-accentColor">Infosys | May 2022 - June 2024</p>
            </div>

            {/* Work Experience Description */}
            <p>
              Contributed to front-end development by building reusable React components,
              optimizing performance using lazy loading, and integrating APIs to ensure a
              seamless user experience. Collaborated with cross-functional teams, achieving
              a 99% success rate in production deployments.
            </p>

            {/* Key Projects */}
            <div>
              <h4 className="text-base font-medium">Key Projects:</h4>
              <ul className="list-disc text-sm pl-5 space-y-2">
                <li>
                  <em>Payroll Processing System - Walmart Inc:</em> Built responsive
                  interfaces and optimized Redux state management, improving data retrieval speed
                  by 1.3x.
                </li>
                <li>
                  <em>BNSF Shipment Tracking Enhancements:</em> Developed new features
                  like MapView and Save Search, reducing customer support inquiries by 500
                  monthly.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
