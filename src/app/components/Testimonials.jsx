'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CEO, Global Tech Co.",
      image: "/assets/girlImage1.jpeg",
      text: "Exceptional service and a refined dining experience. Perfect for anyone seeking premium Australian cuisine.",
    },
    {
      id: 2,
      name: "David Brown",
      title: "Founder, Luxe Resorts",
      image: "/assets/boyImage1.jpeg",
      text: "Impressive ambiance, flawless flavors, and world-class service. A must-visit for fine dining lovers.",
    },
    {
      id: 3,
      name: "Emily Clark",
      title: "VP Marketing, Elite Digital",
      image: "/assets/girlImage2.jpeg",
      text: "Elegant presentation and personal attention made our evening unforgettable. Truly top-tier.",
    },
    {
      id: 4,
      name: "Michael Collins",
      title: "Director, Global Investments",
      image: "assets/boyImage2.jpeg",
      text: "A luxurious culinary experience with precise execution and impeccable service.",
    },
    {
      id: 5,
      name: "Isabella Martinez",
      title: "CMO, Prestige Fashion Group",
      image: "/assets/girlImage3.jpeg",
      text: "Stylish, seamless, and delicious. The restaurant captured true elegance in every course.",
    },
    {
      id: 6,
      name: "James Lee",
      title: "Managing Partner, Opulent Ventures",
      image: "assets/boyImage3.jpeg",
      text: "Every detail was flawless—from the food to the ambiance. Truly elevated dining.",
    },
    {
      id: 7,
      name: "Olivia Bennett",
      title: "Head of PR, Stellar Media",
      image: "/assets/girlImage4.jpeg",
      text: "A sophisticated space with curated flavors and thoughtful service. Loved every moment.",
    },
    {
      id: 8,
      name: "Alexander White",
      title: "CTO, Infinity Holdings",
      image: "assets/boyImage4.jpeg",
      text: "Timeless taste, stunning design, and a smooth experience from start to finish.",
    },
  ];
  
  

const Testimonials = () => {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPosition((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-4 text-center text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-400 italic">
          Discover how our premium service has helped businesses like yours thrive.
        </p>
      </div>

      <div className="h-[500px] flex flex-col-reverse items-center justify-between">
        {/* Dot Navigation */}
        <div className="flex gap-3 mt-4">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => setPosition(index)}
      className={`w-3 h-3 rounded-full ${
        position === index ? 'bg-yellow-400 scale-125' : 'bg-gray-600'
      } transition-all duration-300`}
      aria-label={`Go to testimonial ${index + 1}`}
    />
  ))}
</div>


        <main
          className={`row-start-1 row-end-2 col-start-1 col-end-8 w-full h-[400px] flex items-center justify-center overflow-hidden [transform-style:preserve-3d] [perspective:600px] pointer-events-none relative ${
            isTransitioning ? 'transition-all duration-200 ease-linear' : ''
          }`}
        >
          {testimonials.map((t, index) => {
            const r = position - index;
            const abs = Math.max(Math.abs(r), r);
            const transformStyle = {
              transform: `rotateY(${-10 * r}deg) translateX(${-300 * r}px)`,
              zIndex: 999 - abs,
            };

            return (
                <div
                key={t.id}
                className="absolute text-center p-6 rounded-3xl w-[350px] h-[350px] border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl transition-transform duration-700 ease-in-out"
                style={transformStyle}
              >
              
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[100px] h-[100px] rounded-full mx-auto mt-3 border-4 border-yellow-400 shadow-md object-cover"
                />
                <h3 className="text-yellow-400 mt-4 mb-2 font-bold text-lg">{t.name}</h3>
                <p className="italic text-sm text-gray-300">{t.title}</p>
                <p className="mt-4 text-sm text-gray-200 leading-relaxed">"{t.text}"</p>
              </div>
            );
          })}
        </main>
      </div>
    </section>
  );
};

export default Testimonials;
