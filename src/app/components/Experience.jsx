
'use client'
import React from "react";
import { FaWineGlassAlt, FaChair, FaUtensils, FaWater, FaStar, FaMusic } from "react-icons/fa";

const Experience = () => {
  const highlights = [
    {
      icon: <FaChair size={30} className="text-[#C9A54E]" />,
      title: "Private Dining",
      description: "Exclusive rooms for intimate gatherings and VIP experiences.",
    },
    {
      icon: <FaWater size={30} className="text-[#C9A54E]" />,
      title: "Waterfront Views",
      description: "Stunning seaside views with every table setting.",
    },
    {
      icon: <FaWineGlassAlt size={30} className="text-[#C9A54E]" />,
      title: "Fine Wine Pairings",
      description: "Expertly selected wines to complement every dish.",
    },
    {
      icon: <FaUtensils size={30} className="text-[#C9A54E]" />,
      title: "Curated Tasting Menus",
      description: "Multi-course menus crafted by our award-winning chefs.",
    },
    {
      icon: <FaStar size={30} className="text-[#C9A54E]" />,
      title: "Impeccable Service",
      description: "Luxury hospitality that exceeds expectations at every touchpoint.",
    },
    {
      icon: <FaMusic size={30} className="text-[#C9A54E]" />,
      title: "Live Music & Ambience",
      description: "Soothing live performances to enhance your fine dining moments.",
    }
  ];

  return (
    <section className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-pink-400 mb-10">
          Luxury Experience Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(201,165,78,0.3)] hover:bg-gray-850"
          >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
