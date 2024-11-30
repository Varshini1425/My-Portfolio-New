import React from 'react'
import {motion} from "framer-motion";
import education from "../assets/education.gif";

const Education = () => {


    const fadeInLeft = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.6 },
      };
    
     

      const educationData = [
        {
          year: '2018 - 2021',
          degree: 'BACHELOR DEGREE',
          institution: 'Paavai Arts and Science, Namakkal',
        },
        {
          year: '2017 - 2018',
          degree: 'HIGHER SECONDARY CERTIFICATE',
          institution: 'Vedhha Vikass, Salem',
        },
        {
          year: '2014 - 2015',
          degree: 'SECONDARY SCHOOL CERTIFICATE',
          institution: 'Jayarani Matriculation, Salem',
        },
      ];
      

  return (
    <section id="education" className="py-20 bg-white dark:bg-bgColor">
        <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-textColorTeal dark:text-accentColor"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-10">
            {/* Left Side - GIF with Slide-in Animation */}
          <motion.img
            src={education}
            alt="Experience GIF"
            className="w-52 h-48 md:w-72 md:h-72 rounded-full shadow-lg"
            initial={fadeInLeft.initial}
            animate={fadeInLeft.animate}
            transition={fadeInLeft.transition}
          />

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="dark:bg-gradient-to-r from-gray-900 to-gray-800  rounded-lg shadow-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white p-4 rounded-full">
                 
                </div>

                {/* Details */}
                <div>
                  <p className="text-sm text-textColorTeal dark:text-accentColor mb-2">{item.year}</p>
                  <h3 className="text-lg font-bold text-slate-600 dark:text-textColor">{item.degree}</h3>
                  <p className="text-sm text-slate-600 dark:text-textColor">{item.institution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
        </div>
    </section>
  )
}

export default Education