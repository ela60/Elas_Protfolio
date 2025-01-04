import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'I specialize in building responsive, user-friendly websites using modern technologies like React, Node.js, and MongoDB. From designing intuitive interfaces to optimizing user experience, I can help you bring your ideas to life.',
    icon: 'https://i.ibb.co.com/D5q9rK3/web-development-programming-resized.jpg', 
    animation: 'animate__fadeInUp', // Animation class (using animate.css library)
  },
  {
    title: 'Frontend Development',
    description: 'Creating beautiful and functional user interfaces with a focus on performance and accessibility. I work with React and Tailwind CSS to deliver fast, scalable, and visually appealing web applications.',
    icon: 'https://i.ibb.co.com/g95mCck/images-2.jpg', // Replace with your own icon or image
    animation: 'animate__fadeInUp', // Animation class (using animate.css library)
  },
  {
    title: 'Software Testing & QA',
    description: 'Ensure the quality of your software with thorough testing. I provide manual and automated testing solutions to identify bugs, improve functionality, and ensure your applications perform smoothly.',
    icon: 'https://i.ibb.co.com/dcF9rS2/images-1.jpg', // Replace with your own icon or image
    animation: 'animate__fadeInUp', // Animation class (using animate.css library)
  },
  {
    title: 'Problem Solving',
    Description: 'To help you solve a specific code problem, I will need a bit more detail. Could you share the exact issue  facing with your code?For example, if your having trouble with an API call, a React component, or routing in your app, please provide the relevant code or error message, and I will walk you through the solution',
    icon: 'https://i.ibb.co.com/3NXn7kb/images-4.jpg', 
    animation: 'animate__fadeInUp', // Animation class (using animate.css library)
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-purple-700 to-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">My Services</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 text-center hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${service.animation}`}
            >
              <div className="mb-4 text-4xl text-teal-500">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-16 h-16 md:w-56 md:h-32 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
