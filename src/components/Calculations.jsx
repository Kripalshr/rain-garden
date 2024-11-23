import React from "react";
import { motion } from "framer-motion";
import leftImage from "../assets/data1.png"; // Replace with your left image path
import rightImage from "../assets/data2.png"; // Replace with your right image path

const TwoImages = () => {
  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0, y: -50 }, // Start above the viewport
    animate: { opacity: 1, y: 0 }, // Slide into the viewport
    exit: { opacity: 0, y: 50 }, // Slide out below the viewport
  };

  return (
    <motion.div
      className="relative min-h-screen bg-white flex flex-col items-center justify-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Calculations</h2>
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-4 md:px-8">
        {/* Left Image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={leftImage}
            alt="Left Content"
            className="w-full max-w-md h-auto object-contain rounded-lg shadow-md"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={rightImage}
            alt="Right Content"
            className="w-full max-w-md h-auto object-contain rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TwoImages;
