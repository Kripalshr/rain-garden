import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import garden from "../assets/image.png";

const Landingpage = () => {
  // Intersection Observer for scroll-triggered animations
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative min-h-screen bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly px-4 md:px-8 min-h-screen">
        {/* Left Content */}
        <motion.div
          ref={textRef} // Attach scroll observer
          className="flex flex-col justify-center max-w-lg text-center md:text-left min-h-screen md:min-h-0" // Adjust height for mobile
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate every time in view
          transition={{ duration: 1.5 }} // Long animation duration
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Urban Rain Garden for
            <br /> Sustainable Cities
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            From Runoff to Recharge: Rain Gardens as a Sustainable Urban
            Solution
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-black text-white font-medium border border-black hover:bg-gray-800 transition"
            >
              Get started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-transparent border border-black text-black font-medium hover:bg-gray-100 transition"
            >
              Explore success stories
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={imageRef} // Attach scroll observer
          className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/3"
          initial={{ opacity: 0, x: 100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate every time in view
          transition={{ duration: 1.5 }} // Long animation duration
        >
          <img
            src={garden}
            alt="Urban Rain Garden"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landingpage;
