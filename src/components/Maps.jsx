import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pageVariants = {
  initial: { opacity: 0, y: -50 }, // Start above the viewport
  animate: { opacity: 1, y: 0 }, // Slide into the viewport
  exit: { opacity: 0, y: 50 }, // Slide out below the viewport
};

const Maps = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  const handleButtonClick = () => {
    // Navigate to the specified URL in a new tab
    window.open("https://suitability-map.netlify.app/", "_blank");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold py-10"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        Kathmandu Valley Suitability Map
      </motion.h1>

      {/* Iframe Container */}
      <motion.div
        className="relative w-full max-w-7xl px-4"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2 }}
      >
        {/* Disabled Iframe */}
        <iframe
          src="/mapsdata/app.html" // Path to your index.html file
          className="w-full h-[80vh] rounded-md border border-gray-300 shadow-md pointer-events-none"
          title="Kathmandu Valley Map"
        ></iframe>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Centered Button */}
          <button
            onClick={handleButtonClick}
            className="bg-white text-black font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            View Kathmandu Valley Suitability Map
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Maps;
