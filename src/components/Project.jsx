import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "TalkTrove",
    image: "https://i.ibb.co.com/d4LmkqNV/DALL-E-2025-02-06-06-37-40-A-modern-social-media-dashboard-similar-to-Facebook-named-Talk-Trove-The.webp",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB","Nodejs"],
    description:
      "ForumApp is an interactive platform that allows users to share their thoughts, engage in discussions, vote on posts, and comment on topics of interest. Whether you’re passionate about a subject or looking to join the conversation, ForumApp provides a space for community interaction.",
    liveLink: "https://bistro-boss-2368b.web.app/",
    githubLink_Client: "https://github.com/ela60/Created-ForumHub-or-Facebook-Website.git",
    githubLink_Server: "https://github.com/ela60/Created-ForumHub-or-Facebook-Website.git",
    details: `
     🚀 An interactive social platform with admin and user dashboards, inspired by Facebook's UI.

🔹 Overview:
TalkTrove is a feature-rich social networking dashboard that allows users to post, like, comment, and connect in an intuitive Facebook-style interface. Admins have a separate panel to manage users, content, and platform settings efficiently.
🖼️ Features:
👥 User Dashboard
✅ User Authentication: Sign up/login using email, Google, or Facebook authentication.
✅ Profile Management: Edit profile, update cover & profile pictures.
✅ News Feed: View, like, and comment on posts from other users.
✅ Media Sharing: Upload images, videos, and GIFs.
✅ Friend System: Send, accept, and decline friend requests.
✅ Chat System: Real-time messaging with seen/unseen status.
✅ Notifications: Get notified about likes, comments, and friend requests.
✅ Dark/Light Mode: Toggle between light and dark themes.
✅ Post Privacy Settings: Choose between public, friends, or private visibility.

🛠️ Admin Dashboard
🔹 User Management: View, edit, delete, or ban users.
🔹 Content Moderation: Approve, edit, or remove posts violating policies.
🔹 Analytics Dashboard: Monitor user activity, engagement, and trends.
🔹 Reports & Complaints: Manage flagged posts and handle user complaints.
🔹 Ad Management: Insert and track advertisements on the platform.
🔹 Role-Based Access: Assign different permissions to moderators, admins, or users.


    `,
  },
  {
    id: 2,
    name: "SilverScreen Hub",
    image: "https://i.ibb.co/6wmG57y/movie.jpg",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB","Nodejs"],
    description:
      "A movie database and recommendation platform where users can explore movies, add them to their favorite list, and get recommendations based on their preferences.",
    liveLink: "https://assignment-10-1d469.web.app/",
    githubLink_Client: "https://github.com/ela60/Movie-Portal-Client.git",
    githubLink_Server: "https://github.com/ela60/Movie-Portal-Server.git",
    details: `
      - Developed with React for a seamless user experience
      - Utilized Tailwind CSS for a modern and responsive layout
      - Backend built with Express.js and MongoDB for storing movie data, user preferences, and favorites
      - Features include movie search, favorites list, movie details, and dynamic recommendations
      - Integrated third-party APIs for up-to-date movie information and ratings
      - Deployed on Vercel hosting platform to handle large-scale traffic
    `,
  },
  {
    id: 3,
    name: "Food Sharing Website",
    image: "https://i.ibb.co/kygDnLs/1.webp",
    technologies: ["React", "Tailwind", "Express.js", "MongoDB","Nodejs"],
    description:
      "A platform to share food with others in the community. Users can post available food items for sharing, browse listings, and connect with others to help reduce food waste.",
    liveLink: "https://food-sharing-fde2a.web.app/",
    githubLink_Client: "https://github.com/ela60/Food-Sharing-Website-Client.git",
    githubLink_Server: "https://github.com/ela60/Food-Sharing-Website-Server.git",
    details: `
      - Built with React for a fast and responsive frontend
      - Utilized Tailwind CSS for custom, mobile-first design
      - Backend developed using Express.js and MongoDB for storing user data and food listings
      - Features include posting food listings, browsing available food, and a simple user authentication system
      - Real-time notifications and email integration for users
      - Deployed on Vercel & Firebase hosting platform to handle large-scale traffic
    `,
  },
  {
    id: 4,
    name: "Gadget Haven",
    image: "https://i.ibb.co/JH6Kt5g/cluttered-tech-haven-stockcake.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    description: "An e-commerce platform for gadgets with wishlist and cart features.",
    liveLink: "https://gadgethaven.example.com",
    githubLink: "https://github.com/username/gadget-haven",
    details: `
      Building Gadget Haven was an exciting experience. The main challenge was optimizing the wishlist and cart functionality to sync seamlessly with localStorage.
      Future improvements include advanced filtering options and enhancing the dashboard.
    `,
  },
 
  {
    id: 5,
    name: "Dublin Bus",
    image: "https://i.ibb.co/yyZCKnt/images.jpg",
    technologies: ["Javascript", "Tailwind", "JavaScript DOM"],
    description:
      "A bus ticket booking system for Dublin, built using JavaScript DOM for dynamic content manipulation and Tailwind CSS for styling.",
    liveLink: "https://ela60.github.io/Bus-Ticket-Buying-System-Using-Dom/",
    githubLink: "https://github.com/ela60/Bus-Ticket-Buying-System-Using-Dom.git",
    details: `
      - Built using pure JavaScript DOM to manipulate elements and manage ticket bookings
      - Tailwind CSS was used for a responsive and modern design
      - Features include ticket selection, seat reservation, and total price calculation
      - Provides a smooth, interactive user experience with no backend, just front-end logic
      - Deployed on Netlify Pages for easy access and sharing
    `,
  },
  {
    id: 6,
    name: "Peddy Adoption Website",
    image: "https://i.ibb.co/hsv3bHk/heartwarming-moment-between-dog-cat-600nw-2432338827.webp",
    technologies: ["IoT", "JavaScript", "Tailwind"],
    description:
      "A website designed for pet adoption, integrating IoT concepts to enable pet tracking and adoption functionality. Built with JavaScript for dynamic behavior and Tailwind CSS for styling.",
    liveLink: "https://ela60.github.io/Peddy-Adption-Website/",
    githubLink: "https://github.com/ela60/Peddy-Adption-Website.git",
    details: `
      - Created a pet adoption website to help users find and adopt pets
      - Implemented IoT features for pet tracking and integration with adoption services
      - Developed with JavaScript to handle user interactions and Tailwind CSS for a responsive and modern design
      - The website allows users to browse available pets, view details, and submit adoption applications
      - Hosted on GitHub Pages for easy access and sharing
    `,
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 My <span className="text-teal-400">Projects</span>
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative bg-gray-800/70 backdrop-blur-md border border-teal-500 shadow-lg rounded-2xl p-6 overflow-hidden transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-teal-300">{project.name}</h3>

              {/* Technologies */}
              <p className="text-gray-300 text-sm mt-2">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>

              {/* View More Button */}
              <button
                className="mt-4 w-full bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-all"
                onClick={() => setSelectedProject(project)}
              >
                View More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4 border border-teal-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-teal-400">
                  {selectedProject.name}
                </h2>
                <button
                  className="text-gray-300 hover:text-red-500 text-xl"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-3">{selectedProject.description}</p>

              {/* Technologies Used */}
              <p className="text-gray-400 mb-3">
                <strong>Technologies:</strong> {selectedProject.technologies.join(", ")}
              </p>

              {/* Links */}
              <div className="flex flex-wrap space-x-4 mt-4 justify-center">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                {selectedProject.githubLink_Client && (
                  <a
                    href={selectedProject.githubLink_Client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
                  >
                    <FaGithub />
                    GitHub Client
                  </a>
                )}

                {selectedProject.githubLink_Server && (
                  <a
                    href={selectedProject.githubLink_Server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
                  >
                    <FaGithub />
                    GitHub Server
                  </a>
                )}
              </div>

              {/* Close Button */}
              <button
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all w-full"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
