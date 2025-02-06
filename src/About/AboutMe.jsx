import React from "react";
import { FaCode, FaPaintBrush, FaBasketballBall, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 py-20 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Floating Glows for a Stunning Effect */}
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-purple-500 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-teal-500 opacity-30 blur-3xl"></div>

        {/* Introduction Card */}
        <motion.div
          className="bg-gray-800/50 p-8 rounded-lg shadow-lg border-l-4 border-teal-400 backdrop-blur-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold flex items-center gap-2 text-teal-400 drop-shadow-lg">
            <FaCode />
            My Programming Journey
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Hi, I'm <span className="text-teal-400 font-bold">Ambia Khatun Ela</span>, a passionate **Frontend Developer** and Computer Science student. My journey into programming started with curiosity—how can simple lines of code create something powerful? Over time, I fell in love with **building sleek, interactive user experiences** and bringing ideas to life.
          </p>
        </motion.div>

        {/* Work Preferences */}
        <motion.div
          className="bg-gray-800/50 p-8 rounded-lg shadow-lg border-l-4 border-purple-400 backdrop-blur-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold flex items-center gap-2 text-purple-400 drop-shadow-lg">
            <FaCode />
            The Work I Enjoy
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            I specialize in **React, Tailwind CSS, and JavaScript**, creating visually stunning and functional web applications. I love crafting seamless user experiences and optimizing performance for smooth, engaging interactions.
          </p>
        </motion.div>

        {/* Hobbies & Interests */}
        {[
          {
            title: "🎨 Creative Passion - Painting & Art",
            icon: <FaPaintBrush className="text-yellow-400" />,
            text: "Art allows me to express myself beyond code. I love painting—it fuels my creativity and inspires my web design aesthetics.",
            border: "border-yellow-400",
          },
          {
            title: "🏀 Sports & Adventure",
            icon: <FaBasketballBall className="text-orange-400" />,
            text: "I believe in staying active and pushing limits. I enjoy basketball and exploring new places, which refreshes my mind and brings fresh perspectives to my work.",
            border: "border-orange-400",
          },
          {
            title: "😆 Fun & Personality",
            icon: <FaSmile className="text-pink-400" />,
            text: "I'm a fun-loving person with a great sense of humor! I love engaging in deep conversations, sharing laughs, and making unforgettable memories.",
            border: "border-pink-400",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`bg-gray-800/50 p-8 rounded-lg shadow-lg border-l-4 ${item.border} backdrop-blur-md transform transition duration-500 hover:scale-105 hover:shadow-xl`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
          >
            <h3 className="text-3xl font-bold flex items-center gap-2 drop-shadow-lg">
              {item.icon}
              {item.title}
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}

        {/* Connect Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Link to="/contact">
            <motion.button
              className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Let's Connect!
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
