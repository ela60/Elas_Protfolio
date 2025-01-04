import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import image from "../assets/WhatsApp Image 2024-10-11 at 9.45.47 PM.jpeg";
import cv from "../assets/Resume of Ambia Khatun (1).pdf";

const Banner = () => {
  return (
    <Parallax
      bgImage="https://source.unsplash.com/1920x1080/?technology,gradient"
      strength={300}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section className="bg-gradient-to-r from-black via-purple-700 to-black flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-10 md:py-20 min-h-screen">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center lg:ml-24 md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Frontend Developer
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-4">
            Passionate about creating engaging, efficient, and beautiful user
            interfaces. Let's build something amazing together!
          </p>
          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://www.facebook.com/labbono.tasnuva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://github.com/ela60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/labonno-ela-b158a5213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400 transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/LabonnoEla047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </motion.div>
          <motion.a
            href={cv}
            download
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg mt-6 inline-block transform transition duration-500 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="relative w-72 h-72 mx-auto rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt="Banner"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default Banner;
