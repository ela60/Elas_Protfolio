import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Upper Section */}
        <div className="  grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className=" text-2xl font-bold mb-4 text-teal-400">About Me</h3>
            <p className="text-gray-400 leading-relaxed">
              I am a passionate MERN stack and frontend developer specializing
              in building dynamic, user-friendly web applications. Let's create
              something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-teal-400"></i>
                <a
                  href="mailto:ambiaela7275@gmail.com"
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  ambiaela7275@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-teal-400"></i>
                <a
                  href="tel:+8801682239684"
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  +8801682239684
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-teal-400"></i>
                <span className="text-gray-400">Khulna, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ela60"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition duration-300"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/labonno-ela-b158a5213/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition duration-300"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://x.com/LabonnoEla047"
              target="_blank"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition duration-300"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>

          {/* Footer Bottom */}
          <p className="mt-8 text-gray-500">
            © 2025 <span className="font-semibold text-teal-400">Ambia Ela</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
