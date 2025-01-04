import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Build a React Application",
      image: "https://i.ibb.co.com/MRNww3b/Build-React-Project-with-Create-React-App-3.jpg",
      description: "Learn how to build a full-stack React app from scratch.",
      link: "/blog/how-to-build-react",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      image: "https://i.ibb.co.com/mD1G3Yn/ES6.jpg",
      description: "Discover the best ES6 features that every JavaScript developer should know.",
      link: "/blog/javascript-es6",
    },
    {
      id: 3,
      title: "Tailwind CSS: A Game Changer",
      image: "https://i.ibb.co.com/JQdcGY6/images-5.jpg",
      description: "How Tailwind CSS is revolutionizing the way we style websites.",
      link: "/blog/tailwind-css",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <Link
                to={blog.link} // Use react-router Link to navigate to the blog page
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transform transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
