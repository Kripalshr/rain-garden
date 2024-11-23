import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Conclusion = () => {
  // Intersection Observer for scroll-triggered animations
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative min-h-screen bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8 min-h-screen">
        {/* Header */}
        <motion.div
          ref={textRef} // Attach scroll observer
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Conclusion
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            The suitability analysis for rain gardens within the Kathmandu
            district provides a framework for effective green infrastructure
            implementation.
          </p>
        </motion.div>

        {/* Conclusion Content */}
        <motion.div
          ref={textRef}
          className="mt-12 max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="border-l-4 border-black pl-4">
            <p className="text-gray-700 text-lg">
              The suitability analysis for rain gardens within the Kathmandu
              district has provided valuable insights into areas where these
              green infrastructure solutions can be most effectively
              implemented. The 10-meter resolution mapping has enabled a
              detailed assessment of key parameters such as land use, soil type,
              slope, curvature, aspect, and precipitation, which all play
              crucial roles in determining the suitability of locations for rain
              gardens.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              The results indicate that certain areas, particularly those with
              less slope, permeable soils, and high precipitation, are more
              suitable for rain garden implementation. In contrast, areas with
              high impervious surfaces or steep slopes were identified as less
              suitable. This mapping will serve as a guide for local authorities
              and citizens to prioritize locations where rain gardens can be
              integrated into the urban landscape to reduce runoff and mitigate
              flooding.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              By incorporating rain gardens into these identified locations,
              Kathmandu can benefit from improved stormwater management and
              increased green spaces, contributing to a more sustainable urban
              environment.
            </p>
          </div>
        </motion.div>

        {/* Recommendation Section */}
        <motion.div
          ref={textRef}
          className="mt-12 max-w-4xl space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-bold text-center">Recommendations</h2>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-green-600">1)</span> The
              government is advised to implement policies that integrate rain
              gardens as a part of water management strategies.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <span className="font-semibold text-green-600">2)</span> It is
              crucial for citizens to actively engage in advocacy, encouraging
              local authorities to adopt more sustainable water management
              solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Conclusion;
