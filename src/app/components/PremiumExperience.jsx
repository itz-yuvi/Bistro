'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Music, Leaf, Wine, User } from 'lucide-react';

const highlights = [
  {
    icon: <Sparkles size={32} />,
    title: "Chef-Curated Menu",
    description: "Seasonal Australian cuisine crafted by award-winning chefs.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Sustainability First",
    description: "Locally sourced produce, ethical meats, and zero-waste kitchens.",
  },
  {
    icon: <Music size={32} />,
    title: "Live Entertainment",
    description: "Enjoy jazz, acoustic, or First Nations performances weekly.",
  },
  {
    icon: <Wine size={32} />,
    title: "Private Dining & Wine",
    description: "Sommelier-guided wine tastings and intimate event spaces.",
  },
];

const PremiumExperience = () => {
  return (
    <section className="bg-gray-950 text-white py-24 px-6 md:px-20">
      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 font-[Bungee]">The Premium Experience</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Dive into the finest Australian hospitality — where gourmet dining, sustainable practices,
          and sophisticated ambiance meet.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-pink-500">{item.icon}</div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chef Section */}
      <div className="flex flex-col md:flex-row items-center mb-24 gap-10">
        <Image src="/assets/chef.jpeg" width={300} height={300} className="rounded-xl shadow-lg" alt="Chef" />
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold mb-2">Meet Chef Amelia Stone</h3>
          <p className="text-gray-400 text-lg">
            With over 10 years in fine dining, Chef Amelia brings her signature flair for modern Australian flavors.
            Trained in Paris, inspired by native ingredients.
          </p>
        </div>
      </div>

      {/* Ambience Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        <Image src="/assets/ambience1.jpeg" width={500} height={300} alt="Ambience 1" className="rounded-xl" />
        <Image src="/assets/ambience2.jpeg" width={500} height={300} alt="Ambience 2" className="rounded-xl" />
        <Image src="/assets/ambience3.jpeg" width={500} height={300} alt="Ambience 3" className="rounded-xl" />
      </div>

      {/* Private Dining */}
      <div className="bg-gradient-to-r from-pink-600/30 to-yellow-600/30 p-12 rounded-xl text-center shadow-xl">
        <h3 className="text-3xl font-semibold mb-4">Private Dining & Events</h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Book our exclusive dining suites for special events, executive meetings, or romantic evenings. Custom menus, fine wines, and unforgettable service await.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-pink-600 text-white rounded-full text-lg font-medium hover:bg-yellow-500 transition-all duration-300"
        >
          Reserve Now
        </a>
      </div>
    </section>
  );
};

export default PremiumExperience;
