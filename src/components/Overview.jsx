import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Overview = () => {
  // Intersection Observer for scroll-triggered animations
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative bg-gray-50 min-h-screen flex items-center py-16">
      <div
        className="container mx-auto px-4 md:px-8"
        ref={sectionRef} // Attach scroll observer
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Overview
          </h2>
        </motion.div>

        {/* What is a Rain Garden? */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={
            sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            What is a Rain Garden?
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            A rain garden is a shallow, landscaped area designed to manage
            stormwater runoff from surfaces like streets, roofs, and driveways.
            It is planted with deep-rooted native plants and grasses that absorb
            and filter water.
          </p>
        </motion.div>

        {/* Why a Rain Garden in Kathmandu? */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            Why a Rain Garden in Kathmandu?
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Rain gardens are an essential part of making Kathmandu more
            resilient to climate change and improving its urban sustainability:
          </p>
          <ul className="list-disc list-inside space-y-4 text-base md:text-lg text-gray-700">
            <li>
              <span className="font-semibold">Manage Stormwater Runoff:</span>{" "}
              Kathmandu experiences intense rainfall during the monsoon season,
              often leading to flash floods and waterlogging. Rain gardens help
              absorb excess water from streets, roofs, and driveways, reducing
              the pressure on drainage systems and preventing flooding.
            </li>
            <li>
              <span className="font-semibold">More Green Spaces:</span> As the
              city grows, there is an increasing need for green spaces. Rain
              gardens, planted with native plants, provide environmental
              benefits such as enhancing biodiversity, creating urban green
              spaces, improving air quality, and reducing the urban heat island
              effect.
            </li>
            <li>
              <span className="font-semibold">Reduce Flooding:</span> With
              Kathmandu's rapid urbanization and impermeable surfaces, water
              drainage has become a challenge. Rain gardens help slow down and
              filter stormwater, reducing the likelihood of flooding in
              low-lying areas. This sustainable approach is a vital tool for
              managing the city’s flood risk.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
