'use client';

import { useState } from 'react';
import PremiumExperience from '../components/PremiumExperience';
import LuxuryMenu from '../components/LuxuryMenu';
import Footer from '../components/Footer';

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
          className={`fixed top-0 left-0 w-full h-full bg-black/90 z-40 transform transition-all duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
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



        
        {/* Original Page code start from here */}
        
        <LuxuryMenu />
        <PremiumExperience />
        <Footer/>
      </div>
    </div>
  );
};

export default Menu;
