import React from "react";
import { FaYoutube, FaBeer, FaLaptopCode, FaCalculator } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
import img from "../assets/IMG-20240301-WA0013.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-black via-purple-700 to-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Side: Text Section with Animations */}
        <div className="space-y-6 w-full md:w-1/2">
          {/* Card 1: Programming */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-teal-500 mb-4">
              <FaLaptopCode className="inline-block mr-2 text-teal-500" />
              Programming Passion
            </h3>
            <p className="text-gray-600">
              Hi, I'm Ambia Khatun Ela, a current student of Computer Science
              and Engineering (CSE). My programming journey began when I was
              fascinated by the idea of building something from scratch, just by
              writing code. Initially, I was overwhelmed, but the more I
              learned, the more I fell in love with it. Today, I’m passionate
              about solving problems and writing clean, efficient code that
              makes an impact.
            </p>
          </motion.div>

          {/* Card 2: YouTube */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              <FaYoutube className="inline-block mr-2 text-red-500" />
              YouTube Adventures
            </h3>
            <p className="text-gray-600">
              In addition to my tech interests, I'm also a little YouTuber with
              a focus on food reviews and vlogging about anything that excites
              me! 🤩 I believe in having fun and not taking life too seriously,
              which is why my YouTube channel often reflects my quirky and
              humorous side.
            </p>
          </motion.div>

          {/* Card 3: Personality */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              <FaBeer className="inline-block mr-2 text-yellow-500" />
              My Personality
            </h3>
            <p className="text-gray-600">
              My personality is a blend of curiosity and humor. I always try to
              look at the lighter side of things, even in tough situations. My
              friends describe me as mischievous, always ready for a fun
              challenge!
            </p>
          </motion.div>

          {/* Card 4: Math */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              <FaCalculator className="inline-block mr-2 text-blue-500" />
              Math Enthusiast
            </h3>
            <p className="text-gray-600">
              When I'm not exploring the world of technology, you can find me
              solving math puzzles. Math has always been something I find both
              challenging and fun. It allows me to think logically and
              creatively, which often complements my programming skills.
            </p>
          </motion.div>

          {/* Card 5: SQA */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              <FaBeer className="inline-block mr-2 text-yellow-500" />
              Software Quality Assurance (SQA)
            </h3>
            <p className="text-gray-600">
              Additionally, I have a strong interest in Software Quality
              Assurance (SQA). I find immense satisfaction in ensuring that the
              software I work on is reliable, bug-free, and gives users a smooth
              experience. It’s the perfectionist in me that loves finding flaws
              and fixing them.
            </p>
          </motion.div>

          {/* Card 6: Personal Story */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              My Story
            </h3>
            <p className="text-gray-600">
              My name is Ambia Khatun Ela. Since my childhood, I have been
              fascinated by technology. Initially, programming felt a little
              overwhelming, but over time it became a creative art form for me.
              Whenever I solve a problem, it feels like I’m unlocking a new
              world. Besides programming, I also love drawing. It helps me relax
              and sparks new ideas.
            </p>
            <p className="text-gray-600">
              Additionally, I enjoy playing football. There’s something
              refreshing about sports that helps me stay energized. I believe
              it’s crucial for a programmer to stay both physically and mentally
              healthy, as it enhances creativity and productivity at work.
            </p>
          </motion.div>

          {/* Connect Button */}
          <div className="mt-6">
            <Link to="/contact">
              {" "}
              {/* Replace with your desired path */}
              <motion.button
                className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transform transition duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Let's Connect!
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <motion.div
  className="md:w-1/2"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.img
    src={img}
    alt="About Me"
    className="rounded-lg shadow-2xl"  // No hover animation here
  />
</motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
