import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // This will get the slug from the URL

  // Example blog data (You would fetch or use real data here)
  const blogs = [
    {
      id: "how-to-build-react",
      title: "How to Build a React Application",
      content: "In this blog post, we will learn how to build a full-stack React app...",
    },
    {
      id: "javascript-es6",
      title: "JavaScript ES6 Features",
      content: "JavaScript ES6 brought many amazing features. In this post, we'll explore them...",
    },
    {
      id: "tailwind-css",
      title: "Tailwind CSS: A Game Changer",
      content: "Tailwind CSS is a utility-first CSS framework that makes styling easy...",
    },
  ];

  // Find the blog post based on the slug
  const blog = blogs.find((b) => b.id === id);

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{blog?.title}</h1>
        <p className="text-gray-600 mb-6">{blog?.content}</p>
      </div>
    </section>
  );
};

export default BlogDetail;
