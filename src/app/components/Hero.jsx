'use client';  // Make sure this is at the very top of the file

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false); // State to control the overlay visibility
  const line1 = "WELCOME TO".split(" ");
  const line2 = "BANKSIA BISTRO".split(" ");

  // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
  src="/assets/heroImage.jpeg"
  alt="Banksia Background"
  className="absolute inset-0 h-full w-full object-cover z-0 sm:h-auto sm:w-full sm:max-h-[70%] md:max-h-full"
/>


      {/* Dark Overlay with Transparency */}
      <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Adjusted opacity here */}

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

 {/* First Line */}
<div className="text-4xl sm:text-5xl md:text-7xl font-light tracking-wide flex gap-2 font-[Bungee]">
  {line1.map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.8, ease: 'easeOut' }}
      className="inline-block"
    >
      {word}
    </motion.span>
  ))}
</div>

{/* Second Line */}
<div className="mt-2 sm:mt-4 text-4xl sm:text-5xl md:text-8xl font-light tracking-widest flex gap-1 sm:gap-2 md:gap-4 font-[Bungee] leading-tight sm:leading-snug md:leading-normal">
  {line2.map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + index * 0.3, duration: 1.0, ease: 'easeOut' }}
      className="inline-block"
    >
      {word}
    </motion.span>
  ))}
</div>


      </div>

      {/* Overlay Navigation (Full-screen) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 z-40 transform transition-transform duration-500 ease-in-out ${
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
    </section>
    

    
  );
}
