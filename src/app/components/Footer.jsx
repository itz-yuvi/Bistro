import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 px-6 md:px-20 w-full">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-pink-400">About Us</h4>
          <p className="text-gray-400 mb-4">
            We offer an unparalleled dining experience, celebrating native ingredients and innovative techniques in a luxurious setting. Join us for a journey into Australia’s unique culinary world.
          </p>
          <div className="flex gap-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-pink-300 transition-colors">
              <i className="fab fa-facebook"></i> {/* Facebook Icon */}
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-pink-300 transition-colors">
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-300 transition-colors">
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-pink-400">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a href="/home" className="text-gray-400 hover:text-pink-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-pink-300 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/menu" className="text-gray-400 hover:text-pink-300 transition-colors">Menu</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-pink-300 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-pink-400">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates, special offers, and exclusive events.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-white rounded-md mb-4 placeholder-gray-400"
            />
            <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded-md hover:bg-pink-500 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-16 text-gray-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} Luxury Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
