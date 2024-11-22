import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import guideImage from "../assets/guide.png"; // Replace with your image path

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
        <h2 className="text-4xl md:text-5xl font-bold">Guides</h2>
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly px-4 md:px-8 gap-8">
        {/* Left Image */}
        <motion.div
          ref={imageRef}
          className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={guideImage}
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
            Follow these steps to create your rain garden:
          </p>
          <ul className="list-decimal list-inside space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-bold">Choose the Right Location:</span>{" "}
              Select a spot where water naturally flows, like near downspouts or
              driveways, at least 10 feet away from buildings and utility lines.
            </li>
            <li>
              <span className="font-bold">Measure and Dig:</span> Mark the area
              and dig a shallow depression, 4-8 inches deep.
            </li>
            <li>
              <span className="font-bold">Prepare the Soil:</span> Mix native
              soil with compost to improve drainage. Consider adding sand or
              gravel if necessary, especially in areas with heavy clay soil.
            </li>
            <li>
              <span className="font-bold">Select and Plant Native Plants:</span>{" "}
              Choose deep-rooted native plants that thrive in both wet and dry
              conditions.
            </li>
            <li>
              <span className="font-bold">Add Mulch:</span> Apply mulch to
              prevent weeds and protect plant roots.
            </li>
            <li>
              <span className="font-bold">Maintain the Garden:</span> Regularly
              check for weeds, litter, and plant health, ensuring proper
              drainage and making adjustments as needed.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Guides;
