'use client';

import React, { useState } from 'react';
import Footer from '../components/Footer';
import History from '../components/History';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full min-w-full">
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

        <div className="bg-gray-950 text-white min-h-screen pt-0 w-full">
          {/* Hero Section */}
          <section className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/assets/signatureDish.jpeg')" }}>
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 text-center px-6">
              <h1 className="text-5xl md:text-7xl font-extrabold text-pink-400 mb-4">Crafted Elegance</h1>
              <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Redefining fine dining on the Australian coast.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-12 items-center w-full">
              <img src="/assets/ambience3.jpeg" alt="Restaurant Interior" className="rounded-3xl shadow-lg w-full md:w-1/2 object-cover" />
              <div className="md:w-1/2">
                <h2 className="text-3xl text-pink-400 font-semibold mb-4">Our Story</h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Nestled along Australia's breathtaking coastline, our restaurant was born from a desire to blend elevated dining with coastal warmth. Guided by a love for local ingredients and intentional hospitality, every plate tells a story — and every guest is part of it.
                </p>
                <p className="mt-4 text-gray-400 italic">
                  “Fine dining should be immersive, heartfelt, and unforgettable.”
                </p>
              </div>
            </div>
          </section>

          {/* History Section */}
          <History />

          {/* Culinary Leadership */}
          <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl w-full">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center w-full">
              <img src="/assets/chef.jpeg" alt="Head Chef" className="rounded-3xl shadow-lg w-full md:w-1/2 object-cover" />
              <div className="md:w-1/2">
                <h2 className="text-3xl text-pink-400 font-semibold mb-4">Culinary Leadership</h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Led by a team of globally acclaimed chefs, our kitchen bridges the best of technique and terroir. We champion Australian ingredients through bold tasting menus, exclusive seasonal creations, and an award-winning wine and spirits program.
                </p>
                <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                  <li>✔ Michelin-starred expertise</li>
                  <li>✔ Locally sourced, globally inspired</li>
                  <li>✔ Curated wine & spirits by certified sommeliers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto text-center w-full">
            <h2 className="text-3xl text-pink-400 font-bold mb-6">Our Philosophy</h2>
            <p className="text-gray-300 text-lg leading-loose">
              Luxury isn’t just visual — it’s emotional. We craft moments with care, believing that the smallest detail can leave the deepest impression. From menu to music, ambiance to interaction, every sense is considered.
            </p>
          </section>

          {/* Ambience */}
          <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-12 items-center w-full">
              <img src="/assets/ambience2.jpeg" alt="Lounge Interior" className="rounded-3xl shadow-lg w-full md:w-1/2 object-cover" />
              <div className="md:w-1/2">
                <h2 className="text-3xl text-pink-400 font-semibold mb-4">Designed to Delight</h2>
                <p className="text-gray-300 leading-loose text-lg">
                  Our interiors are inspired by the coastal landscape — rich textures, ambient light, and an effortless blend of luxury and comfort. Whether enjoying an intimate dinner or a private celebration, the space enhances every experience.
                </p>
              </div>
            </div>
          </section>

          {/* Our Guests */}
          <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto text-center w-full">
            <h2 className="text-3xl text-pink-400 font-bold mb-6">Trusted by Leaders, Loved by All</h2>
            <p className="text-gray-300 text-lg leading-loose">
              From world travelers to local legends, our guests return for a reason — thoughtful service, unforgettable flavors, and an ambiance that lingers long after the last course.
            </p>
          </section>

          {/* Call to Action */}
          <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-t from-gray-950 to-black rounded-t-3xl w-full">
            <h2 className="text-4xl font-bold text-pink-400 mb-6">Experience the Extraordinary</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Reserve your table and indulge in an evening designed to elevate every sense.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold text-black bg-pink-400 hover:bg-pink-300 transition-all duration-300 rounded-full shadow-md"
            >
              Book a Table
            </a>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
