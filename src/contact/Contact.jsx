import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    if (!email || !message) {
      alert("Please fill in all the fields!");
      return;
    }

    emailjs
      .sendForm(
        "service_h97h8il",
        "template_w8af4gl",
        form.current,
        "bYXVIuDz3ImmMrSJS"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
    e.target.reset(); // Clear form after submission
  };

  return (
    <section className="bg-gradient-to-r from-black via-purple-700 to-black py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Side: Social Links */}
        <div className="md:w-1/3 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-white text-nowrap">
            Connect with Me
          </h2>
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Social Links */}
            <a
              href="https://www.facebook.com/labbono.tasnuva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 text-3xl transition-all duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/labonno-ela-b158a5213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-800 text-3xl transition-all duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/ela60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-800 text-3xl transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="tel:+8801682239684"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-800 text-3xl transition-all duration-300"
            >
              <i className="fas fa-phone-alt"></i>
            </a>

            
            <a
              href="https://wa.me/8801682239684" // Your Bangladesh phone number
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 text-3xl transition-all duration-300"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Email.js Form */}
        <div className="md:w-2/3 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Get in Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Your Email Address"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
