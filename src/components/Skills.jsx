import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: "HTML", proficiency: 98 },
    { name: "CSS", proficiency: 95 },
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "Tailwind CSS", proficiency: 98 },
  ],
  Backend: [
    { name: "Node.js", proficiency: 78 },
    { name: "Express.js", proficiency: 85 },
    { name: "MongoDB", proficiency: 90 },
    { name: "REST API", proficiency: 85 },
    { name: "Java", proficiency: 85 },
    { name: "Python", proficiency: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", proficiency: 95 },
    { name: "VS Code", proficiency: 90 },
    { name: "Postman", proficiency: 80 },
    { name: "Figma", proficiency: 80 },
    { name: "SQA Testing Tools", proficiency: 75 },
  ],
};

const Skills = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-teal-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.keys(skills).map((category) => (
            <motion.div
              key={category}
              className="bg-white shadow-md rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {category}
              </h3>
              <div>
                {skills[category].map((skill, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-600">{skill.name}</p>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <motion.div
                        className="bg-teal-500 h-4 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Project Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-white mb-6 underline underline-offset-4">
            Featured Project: Java-Based Management System
          </h3>
          <p className="text-lg text-white mb-6">
            I developed a <span className="font-bold">Java-based Library Management System</span> that helps manage book
            inventory, track borrowing and return dates, and generate reports for librarians. The project highlights my
            proficiency in <span className="font-bold">Java</span>, <span className="font-bold">OOP principles</span>, and
            database integration with <span className="font-bold">MySQL</span>.
          </p>
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>CRUD operations for books and users.</li>
                <li>Dynamic report generation using JavaFX.</li>
                <li>Error handling and optimized performance.</li>
                          </ul>
                          <div className="mt-4">
                          <a className="underline mt-8 text-teal-600 font-bold" href="https://github.com/ela60/Software-Quality-Assurance-SQA-.git">All SQA Projects links</a>
                          </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
              <img
                src="https://i.ibb.co.com/X7PbQsq/Test-Cases-For-Library-Management-System-e1509734399337.jpg"
                alt="Library Management System"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Library Management System</h4>
             
              <button
                onClick={toggleModal}
                className="bg-teal-500 text-white py-2 px-4 rounded-lg text-center hover:bg-teal-600 transition"
              >
                View Details
              </button>
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Challenges</h4>
              <p className="text-gray-700">
                The biggest challenge was ensuring real-time updates to the database while minimizing latency. Through
                multithreading and proper indexing, I achieved significant performance improvements.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Future Improvements</h4>
              <p className="text-gray-700">
                Adding a web-based frontend using React or Angular for easier access across devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Java-Based Library Management System
            </h3>
            <p className="text-gray-700 mb-4">
                A Java-based Library Management System designed to manage book inventory, track borrowing and return dates,
                and generate reports for librarians. The project showcases my proficiency in Java, object-oriented programming,
                and database integration.
              </p>
            {/* <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4> */}
            <div className="mt-4">
                          <a className="underline mt-8 text-teal-600 font-bold" href="https://github.com/ela60/Software-Quality-Assurance-SQA-.git">Github Links</a>
                          </div>
            <h4 className="font-semibold text-gray-700 mb-2">Challenges:</h4>
            <p className="text-gray-700 mb-4">
              The main challenge was ensuring that the database updates in real time while minimizing latency. I overcame this by using multithreading techniques and optimizing queries.
            </p>
            <h4 className="font-semibold text-gray-700 mb-2">Future Improvements:</h4>
            <p className="text-gray-700">
              I plan to add a web-based frontend for easier access and a more user-friendly interface.
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={toggleModal}
                className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
