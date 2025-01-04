import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/IMG-20240301-WA0013.jpg'

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Build a React Application",
      image: "https://i.ibb.co/MRNww3b/Build-React-Project-with-Create-React-App-3.jpg",
      description: "Learn how to build a full-stack React app from scratch.",
      link: "/blog/how-to-build-react",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      image: "https://i.ibb.co/mD1G3Yn/ES6.jpg",
      description: "Discover the best ES6 features that every JavaScript developer should know.",
      link: "/blog/javascript-es6",
    },
    {
      id: 3,
      title: "Tailwind CSS: A Game Changer",
      image: "https://i.ibb.co/JQdcGY6/images-5.jpg",
      description: "How Tailwind CSS is revolutionizing the way we style websites.",
      link: "/blog/tailwind-css",
    },
  ];

  // State to handle card visibility
  const [visibleCards, setVisibleCards] = useState(0);

  // Handle left-angle button click
  const handleShowNextCard = () => {
    if (visibleCards < blogs.length) {
      setVisibleCards((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-gradient-to-r from-black via-purple-700 to-black  py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center">
      {/* Left Section with Cards */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-semibold text-teal-300 mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogs.slice(0, visibleCards).map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-3">{blog.description}</p>
                <Link
                  to={blog.link}
                  className="inline-block bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transform transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleShowNextCard}
          className="mt-6 inline-flex items-center bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-900 transition-all duration-300"
          disabled={visibleCards >= blogs.length}
        >
          <span className="mr-2">&larr;</span> Show Next Blog
        </button>
      </div>

      {/* Right Section with Image */}
      <div className="w-full lg:w-1/3 mt-12 lg:mt-0 lg:pl-12">
        <img
          src={img}
          alt="Blog Section"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default BlogSection;
