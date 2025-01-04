import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p>
              I am a passionate MERN stack and frontend developer specializing in building dynamic, user-friendly web applications. Let's create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="hover:text-teal-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-teal-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-teal-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-teal-500"
                >
                 ambiaela7275@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-teal-500"
                >
                  +8801682239684
                </a>
              </li>
              <li>Location:Khulna,Bangladesh </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/ela60"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/labonno-ela-b158a5213/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://x.com/LabonnoEla047"
            target="_blank"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <p>© 2025 Ambia Ela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
