'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
  // State to track the form submission status
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const errors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    };

    setFormErrors(errors);

    // If there are errors, don't submit
    if (Object.values(errors).includes(true)) return;

    // Set message sent state to true
    setIsMessageSent(true);

    // Optionally, reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Hide the notification after a delay (3 seconds)
    setTimeout(() => setIsMessageSent(false), 3000);
  };

  // Menu Component
  const Menu = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control the overlay visibility
  
    // Toggle function for the hamburger menu
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        {/* Dark Overlay with Transparency, only visible when menu is open */}
        {isOpen && (
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        )}

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
          
          {/* Hamburger Menu */}
          <div className={`absolute top-6 ${isOpen ? 'left-6' : 'right-6'} z-50`}>
            <button
              className="text-white text-4xl cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
            >
              {isOpen ? '' : ' ☰' }
            </button>
          </div>

          {/* Overlay Navigation (Full-screen) */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black/90 z-40 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            {/* Close Button inside the overlay */}
            <div className="absolute top-6 right-6 z-50">
              <button
                className="text-white text-4xl cursor-pointer"
                onClick={toggleMenu}
                aria-label="Close Navigation"
              >
                X
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full text-white">
              <nav>
                <ul className="space-y-8 text-4xl font-bold tracking-wide text-white max-w-xs mx-auto w-full">
                  <li>
                    <a
                      href="/home"
                      onClick={toggleMenu}
                      className="w-full block text-center px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-amber-400/20 hover:text-amber-300 transition-all duration-300 ease-in-out shadow-md hover:shadow-amber-400/30"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      onClick={toggleMenu}
                      className="w-full block text-center px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-amber-400/20 hover:text-amber-300 transition-all duration-300 ease-in-out shadow-md hover:shadow-amber-400/30"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/menu"
                      onClick={toggleMenu}
                      className="w-full block text-center px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-amber-400/20 hover:text-amber-300 transition-all duration-300 ease-in-out shadow-md hover:shadow-amber-400/30"
                    >
                      Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      onClick={toggleMenu}
                      className="w-full block text-center px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-amber-400/20 hover:text-amber-300 transition-all duration-300 ease-in-out shadow-md hover:shadow-amber-400/30"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* End of hamburger menu with overlay */}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <section className="min-h-screen bg-gray-950 text-white px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif font-semibold text-center mb-6 text-pink-400"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto"
          >
            Whether you’re planning your next escape or have questions about our resort, we’re here to help you with personalized support.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.name ? 'border-red-500' : ''}`}
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {formErrors.name && <p className="text-sm text-red-500">Name is required</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.email ? 'border-red-500' : ''}`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {formErrors.email && <p className="text-sm text-red-500">Email is required</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Message</label>
                <textarea
                  rows="5"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${formErrors.message ? 'border-red-500' : ''}`}
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {formErrors.message && <p className="text-sm text-red-500">Message is required</p>}
              </div>

              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-pink-500 transition"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-serif font-semibold mb-2 text-pink-400">Contact Details</h2>
                <p className="text-gray-300">📍 123 Serenity Beach, Queensland, Australia</p>
                <p className="text-gray-300">📞 +61 123 456 789</p>
                <p className="text-gray-300">✉️ contact@bistro.com</p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.954264307836!2d153.02430691506178!3d-27.47012508289111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a051c20d9f3%3A0x504ef4c7b61fa5!2sQueensland%2C%20Australia!5e0!3m2!1sen!2sin!4v1649729499844!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-60 border-0"
                />
              </div>
            </motion.div>
          </div>

          {/* Notification */}
          {isMessageSent && (
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              <p>Message Sent!</p>
            </div>
          )}
        </div>
      </section>

      <Footer/>
    </div>
  );
}
