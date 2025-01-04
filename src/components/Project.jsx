import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
   
        {
          id: 1,
          name: "Food Sharing Website",
          image: "https://i.ibb.co.com/kygDnLs/1.webp", 
          technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
          description: "A platform to share food with others in the community. Users can post available food items for sharing, browse listings, and connect with others to help reduce food waste.",
          liveLink: "https://food-sharing-fde2a.web.app/",
          githubLink_Client: "https://github.com/ela60/Food-Sharing-Website-Client.git", 
          githubLink_Server: "https://github.com/ela60/Food-Sharing-Website-Server.git", 
          details: `
            - Built with React for a fast and responsive frontend
            - Utilized Tailwind CSS for custom, mobile-first design
            - Backend developed using Express.js and MongoDB for storing user data and food listings
            - Features include posting food listings, browsing available food, and a simple user authentication system
            - Real-time notifications and email integration for users
            - Deployed on [Vercel & firebase hosting platform] to handle large-scale traffic
          `,
    },
    {
        id: 2,
        name: "Movie Portal",
        image: "https://i.ibb.co.com/6wmG57y/movie.jpg", 
        technologies: ["React", "Tailwind", "Express.js", "MongoDB"],
        description: "A movie database and recommendation platform where users can explore movies, add them to their favorite list, and get recommendations based on their preferences.",
        liveLink: "https://assignment-10-1d469.web.app/", 
        githubLink_Client: "https://github.com/ela60/Movie-Portal-Client.git", 
        githubLink_Server: "https://github.com/ela60/Movie-Portal-Server.git",  
        details: `
          - Developed with React for a seamless user experience
          - Utilized Tailwind CSS for a modern and responsive layout
          - Backend built with Express.js and MongoDB for storing movie data, user preferences, and favorites
          - Features include movie search, favorites list, movie details, and dynamic recommendations
          - Integrated third-party APIs for up-to-date movie information and ratings
          - Deployed on [Vercel hosting platform] to handle large-scale traffic
        `,
      },
      
  {
    id: 3,
    name: "Gadget Haven",
    image: "https://i.ibb.co.com/JH6Kt5g/cluttered-tech-haven-stockcake.jpg",
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
    id: 4,
    name: "Eco-Adventure Experiences",
    image: "https://i.ibb.co.com/qBcSTYv/Pakse-eco-tours-experience-1024x585.jpg",
    technologies: ["React", "Tailwind", "Firebase"],
    description: "A travel blog showcasing eco-friendly adventures.",
    liveLink: "https://jocular-wisp-eaa3ba.netlify.app/",
    githubLink: "https://github.com/ela60/Eco-Adventure.git",
    details: `
      This project focused on presenting detailed information about eco-travel experiences. A major challenge was integrating map APIs for location-based features.
      Future plans include adding a user review system and interactive adventure planning tools.
    `,
  },
 
 
  {
    id: 5,
    name: "Dublin Bus",
    image: "https://i.ibb.co.com/yyZCKnt/images.jpg", 
    technologies: ["Javascript", "Tailwind", "JavaScript DOM"],
    description: "A bus ticket booking system for Dublin, built using JavaScript DOM for dynamic content manipulation and Tailwind CSS for styling.",
    liveLink: "https://ela60.github.io/Bus-Ticket-Buying-System-Using-Dom/", // Replace with your live project URL
    githubLink: "https://github.com/ela60/Bus-Ticket-Buying-System-Using-Dom.git", // Replace with your GitHub repo URL
    details: `
      - Built using pure JavaScript DOM to manipulate elements and manage ticket bookings
      - Tailwind CSS was used for a responsive and modern design
      - Features include ticket selection, seat reservation, and total price calculation
      - Provides a smooth, interactive user experience with no backend, just front-end logic
      - Deployed on netlify Pages for easy access and sharing
    `,
  },
  {
    id: 6,
    name: "Peddy Adoption Website",
    image: "https://i.ibb.co.com/hsv3bHk/heartwarming-moment-between-dog-cat-600nw-2432338827.webp", // Replace with the actual path to your project image
    technologies: ["IoT", "JavaScript", "Tailwind"],
    description: "A website designed for pet adoption, integrating IoT concepts to enable pet tracking and adoption functionality. Built with JavaScript for dynamic behavior and Tailwind CSS for styling.",
    liveLink: "https://ela60.github.io/Peddy-Adption-Website/", // Replace with your live project URL
    githubLink: "https://github.com/ela60/Peddy-Adption-Website.git", // Replace with your GitHub repo URL
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
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-teal-600 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white shadow-md rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
                  {project.name}
                </h3>
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 text-sm sm:text-base"
                  onClick={() => setSelectedProject(project)}
                >
                  View More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
  
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {selectedProject.name}
              </h2>
              <p className="text-gray-600 mb-3">
                <strong>Main Technologies:</strong> {selectedProject.technologies.join(", ")}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Brief Description:</strong> {selectedProject.description}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Challenges & Future Plans:</strong> {selectedProject.details}
              </p>
              <div className="flex flex-wrap space-x-4 mt-4 justify-center">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-2"
                >
                  Live Demo
                </a>
                {selectedProject.githubLink_Client && (
                  <a
                    href={selectedProject.githubLink_Client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 mb-2"
                  >
                    GitHub Client
                  </a>
                )}
                {selectedProject.githubLink_Server && (
                  <a
                    href={selectedProject.githubLink_Server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 mb-2"
                  >
                    GitHub Server
                  </a>
                )}
                {selectedProject.githubLink && !selectedProject.githubLink_Client && !selectedProject.githubLink_Server && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 mb-2"
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
              <button
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </section>
    );
  };
  
  export default Project;