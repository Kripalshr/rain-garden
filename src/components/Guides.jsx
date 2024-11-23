import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import guideImage from "../assets/guide.png"; // Replace with your image path
import methodology from "../assets/flowchart.png";

const Guides = () => {
  // Intersection Observers for scroll-triggered animations
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative min-h-screen py-16">
      {/* Title in the middle */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">Methodology</h2>
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly px-4 md:px-8 gap-8">
        {/* Left Image */}
        <motion.div
          ref={imageRef}
          className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2" // Adjusted width to make it bigger
          initial={{ opacity: 0, x: -100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={methodology}
            alt="Guide Illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          ref={textRef}
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold">Analytic Hierarchical Process:</span>{" "}
            The Analytic Hierarchy Process (AHP) is a decision-making technique
            that helps users rank or select the best alternatives from a set of
            options.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold">Software used:</span> QGIS, Visual
            Studio Code
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Guides;
