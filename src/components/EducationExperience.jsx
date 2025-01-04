import React from "react";
import { motion } from "framer-motion";

const qualifications = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    year: "2020 - Present",
    description:
      "Currently pursuing a bachelor's degree in CSE, focusing on software development, algorithms, data structures and Software testing",
  },
];

const experiences = [
  {
    role: "Web Development ",
    year: "2024 (6 months)",
    description:
      "Worked on developing responsive web applications using React, Node.js, and MongoDB. On my project purpose, I worked for 6 months on my Software Engineering Subject.",
  },
];

const EducationExperience = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-white">
        {/* Educational Qualification */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Educational Qualification</h2>
          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-teal-600">{qual.degree}</h3>
                <p className="text-gray-600 font-medium">{qual.year}</p>
                <p className="text-gray-700 mt-3">{qual.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-teal-600">{exp.role}</h3>
                <p className="text-gray-600 font-medium">{exp.year}</p>
                <p className="text-gray-700 mt-3">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;
