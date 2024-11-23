import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rainGardenImage from "../assets/rp2.jpg"; // Replace with the path to your image

const Overview = () => {
  // Intersection Observer for scroll-triggered animations
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mt-8 mb-12">
        Overview
      </h2>
      {/* Centered Content */}
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 items-center"
        ref={sectionRef} // Attach scroll observer
      >
        {/* Left: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={
            sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 1.5 }}
          className="flex justify-center"
        >
          <img
            src={rainGardenImage}
            alt="Rain Garden"
            className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto"
          />
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1.5 }}
        >
          {/* What is a Rain Garden */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            What is a Rain Garden?
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            A rain garden is a shallow, landscaped area designed to manage
            stormwater runoff from surfaces like streets, roofs, and driveways.
            It is planted with deep-rooted native plants and grasses that absorb
            and filter water.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            Why Kathmandu?
          </h3>

          {/* Benefits of Rain Gardens */}
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Rain gardens provide numerous benefits for urban areas like
            Kathmandu. Here’s how they contribute to sustainability:
          </p>
          <ul className="list-disc list-inside space-y-4 text-base md:text-lg text-gray-700">
            <li>
              <span className="font-semibold">Manage Stormwater Runoff:</span>{" "}
              Rain gardens absorb excess water from streets, roofs, and
              driveways, reducing the risk of flooding and waterlogging during
              monsoon seasons.
            </li>
            <li>
              <span className="font-semibold">More Green Spaces:</span> Rain
              gardens enhance urban biodiversity and create much-needed green
              spaces for growing cities.
            </li>
            <li>
              <span className="font-semibold">
                Improve Air Quality and Reduce Heat:
              </span>{" "}
              They help improve air quality and combat the urban heat island
              effect, making cities cooler and healthier.
            </li>
            <li>
              <span className="font-semibold">Reduce Flooding:</span> By slowing
              down and filtering stormwater, rain gardens help prevent floods in
              low-lying urban areas.
            </li>
            <li>
              <span className="font-semibold">Filter Pollutants:</span> Rain
              gardens filter out pollutants before water enters the groundwater,
              ensuring cleaner water systems.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
