'use client';

import React from 'react';
import { FaHistory, FaRegStar } from 'react-icons/fa';
import { TiTime } from 'react-icons/ti';
import { motion } from 'framer-motion';

const History = () => {
  const historyData = [
    {
      year: '2015',
      title: 'The Vision Begins',
      description: 'The idea for our restaurant was born with a passion for Australian coastal cuisine and fine dining.',
      icon: <FaHistory />,
    },
    {
      year: '2017',
      title: 'Grand Opening',
      description: 'Our flagship restaurant opened its doors to the public, bringing a unique dining experience to the local community.',
      icon: <FaRegStar />,
    },
    {
      year: '2019',
      title: 'Award Recognition',
      description: 'We received our first industry award for excellence in culinary craftsmanship, marking a major milestone.',
      icon: <TiTime />,
    },
    {
      year: '2021',
      title: 'Expansion to New Locations',
      description: 'Our second location opened in another iconic coastal city, bringing our signature dining experience to a wider audience.',
      icon: <FaRegStar />,
    },
    {
      year: '2023',
      title: 'Michelin Star Recognition',
      description: 'Achieving a Michelin star, we cemented our place as one of the top fine dining establishments in the country.',
      icon: <FaHistory />,
    },
    {
      year: '2025',
      title: 'Global Recognition',
      description: 'We’re now recognized globally, attracting food enthusiasts and culinary experts from around the world.',
      icon: <TiTime />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-pink-400 font-bold mb-8">Our Journey Through Time</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 bg-amber-400 h-full"></div>
          </div>
          <div className="flex flex-col space-y-12">
            {historyData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center md:flex-row md:justify-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-400 text-black shadow-lg mb-6 md:mb-0 md:mr-12">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-8"> {/* Padding to shift content right */}
                  <h3 className="text-2xl text-pink-400 font-semibold mb-2">{item.year} - {item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
