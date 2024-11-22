import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lantant from "../assets/nepalese_lantana.png";
import poppy from "../assets/himalyan_blue_poppy.png";
import bamboo from "../assets/bamboo.png";
import indian from "../assets/indian.png";
import marigold from "../assets/marigold.png";
import susans from "../assets/susans.png";

const plants = [
  { name: "Nepalese Lantant", image: Lantant },
  { name: "Himalyan Blue Poppy", image: poppy },
  { name: "Bamboo", image: bamboo },
  { name: "Indian Pennywort", image: indian },
  { name: "Marigold", image: marigold },
  { name: "Black-eyed Susans", image: susans },
];

// Page animation variants
const pageVariants = {
  initial: { opacity: 0, y: -50 }, // Start above the viewport
  animate: { opacity: 1, y: 0 }, // Slide into the viewport
  exit: { opacity: 0, y: 50 }, // Slide out below the viewport
};

const NativePlants = () => {
  return (
    <motion.div
      className="relative min-h-screen flex flex-col py-10"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Title */}
      <motion.div
        className="flex-none text-center pt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Native Plants</h2>
      </motion.div>

      {/* Grid Container */}
      <div className="flex-1 container mx-auto flex items-center justify-center">
        <div
          className="grid w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gridTemplateRows: "repeat(2, 1fr)", // 2 rows
            height: "75vh", // Grid fits within 75vh
            gap: "0", // No gaps between images
          }}
        >
          {plants.map((plant, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false, // Allow animations to repeat
              threshold: 0.2, // Trigger when 20% of the element is in view
            });

            return (
              <motion.div
                key={index}
                ref={ref} // Attach the observer to the card
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2, // Stagger animation for each plant
                }}
              >
                {/* Image */}
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }} // Show overlay on hover
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-lg font-semibold">
                    {plant.name}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default NativePlants;
