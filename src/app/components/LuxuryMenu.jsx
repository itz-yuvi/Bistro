'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Utensils, Wine, Sparkles } from 'lucide-react';

const menuItems = [
    {
      category: 'Starters',
      items: [
        { name: "Tasmanian Scallops", description: "Seared scallops with native lemon myrtle butter", price: "$28" },
        { name: "Kangaroo Tartare", description: "With quail egg, charred shallots & bush tomato", price: "$32" },
        { name: "Saltbush Lamb Skewers", description: "Marinated lamb with mint and wattleseed", price: "$26" },
        { name: "Emu Carpaccio", description: "Thin-sliced emu with caperberries and lemon aspen", price: "$30" },
        { name: "Crocodile Bites", description: "Tempura crocodile with finger lime aioli", price: "$27" },
        
      ],
    },
    {
      category: 'Mains',
      items: [
        { name: "Wagyu Striploin", description: "Grilled wagyu with wattleseed jus and truffle mash", price: "$68" },
        { name: "Barramundi Fillet", description: "Pan-seared with finger lime beurre blanc", price: "$54" },
        { name: "Smoked Emu Fillet", description: "With pepperberry glaze and native greens", price: "$60" },
        { name: "Charred Kangaroo Loin", description: "With macadamia purée and Davidson plum jus", price: "$58" },
        { name: "Spiced Lamb Rack", description: "With lemon myrtle crust and wild mint sauce", price: "$64" },
        
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: "Davidson Plum Soufflé", description: "With macadamia praline", price: "$24" },
        { name: "Bush Honey Gelato", description: "With aniseed myrtle and shortbread", price: "$20" },
        { name: "Quandong Cheesecake", description: "With native fruit coulis and wild mint", price: "$22" },
        { name: "Wattleseed Pavlova", description: "With finger lime pearls and whipped cream", price: "$23" },
        { name: "Kakadu Plum Tart", description: "With vanilla bean and almond crust", price: "$21" },
        
      ],
    },
    {
      category: 'Wines',
      items: [
        { name: "Penfolds Grange 2018", description: "South Australian Shiraz – bold & complex", price: "$220" },
        { name: "Leeuwin Estate Chardonnay", description: "Margaret River – citrus and toasted almond notes", price: "$110" },
        { name: "Henschke Hill of Grace", description: "Intense and elegant with deep spice", price: "$310" },
        { name: "Voyager Estate Sauvignon Blanc", description: "Tropical fruit with crisp acidity", price: "$80" },
        { name: "Clonakilla Shiraz Viognier", description: "Floral, spicy, and medium-bodied", price: "$150" },
        
      ],
    },
  ];
  
  const LuxuryMenu = () => {
    return (
      <section className="bg-gray-950 text-white py-24 px-6 md:px-20">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[Bungee] mb-4">Luxury Menu</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A celebration of native ingredients, modern techniques, and world-class presentation. Curated to perfection.
          </p>
        </div>
  
        {/* Menu Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {menuItems.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">{section.category}</h3>
              <ul className="space-y-6">
                {section.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <div>
                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                    <span className="text-pink-300 font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
  
        {/* Signature Dish Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <Image
            src="/assets/signatureDish.jpeg"
            width={400}
            height={300}
            alt="Signature Dish"
            className="rounded-xl shadow-xl w-full md:w-1/2"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-3xl font-semibold mb-2 text-yellow-400">Chef’s Signature: Smoked Emu Fillet</h3>
            <p className="text-gray-400 text-lg">
            A harmonious blend of native Australian ingredients, "Uluru Sunset" is a vibrant vegetarian dish that captures the breathtaking beauty of the Australian outback. This signature dish features a Quandong and Bush Tomato Tartlet, topped with a Wattleseed-infused Cauliflower Purée, Finger Lime Caviar, and microgreens grown with Native Herb-infused soil. The tartlet is garnished with a Davidson's Plum reduction, adding a deep, rich flavor
            </p>
          </div>
        </div>
  
        {/* Wine Pairing */}
        <div className="bg-gradient-to-r from-yellow-700/30 to-pink-700/30 p-12 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
            <Wine size={24} /> Sommelier Pairing Experience
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Let our in-house sommelier guide you through exquisite wine pairings with every course — from sparkling to robust reds and rare vintages.
          </p>
          <a
            href="#reserve"
            className="inline-block px-8 py-3 bg-pink-600 text-white rounded-full text-lg font-medium hover:bg-yellow-500 transition-all duration-300"
          >
            Book Wine Experience
          </a>
        </div>
      </section>
    );
  };
  

export default LuxuryMenu;
