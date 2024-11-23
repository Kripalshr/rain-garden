import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CaseStudies = () => {
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
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Explore insights and research highlighting the efficiency of rain
            gardens in stormwater management and urban runoff control.
          </p>
        </motion.div>

        {/* Case Studies Content */}
        <motion.div
          ref={textRef}
          className="mt-12 max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          {/* Case Study 1 */}
          <div className="border-l-4 border-black pl-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              1) Scenario 4 Efficiency in Suryabinayak Municipality
            </h2>
            <p className="text-gray-700 text-lg">
              Rain gardens demonstrated the most effective LID (Low Impact
              Development) performance in Scenario 4, achieving the highest
              flood volume and runoff reduction, with nearly a 50% decrease in
              flood volume compared to other scenarios like rain barrels and
              green roofs. This suggests rain gardens are the most efficient and
              feasible LID option for Suryabinayak Municipality.
            </p>
            <p className="text-gray-500 italic mt-2">
              Cited from: Anish Ghimire et al., Evaluation of Runoff Reduction
              After the Deployment of LID through SWMM: A Case Study in
              Suryabinayak Municipality in Nepal.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="border-l-4 border-black pl-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              2) Rain Gardens in Pokhara
            </h2>
            <p className="text-gray-700 text-lg">
              The SWMM simulation indicates that implementing rain gardens on
              just 2% of impervious surfaces within each sub-catchment reduces
              peak runoff by 15-20% and total runoff by 6-7%. This showcases
              rain gardens' potential for effective stormwater management in
              urban areas.
            </p>
            <p className="text-gray-500 italic mt-2">
              Cited from: Stormwater Analysis and Drainage Management in
              Pokhara.
            </p>
          </div>

          {/* Case Study 3 */}
          <div className="border-l-4 border-black pl-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              3) Effectiveness vs. Rainfall Intensity
            </h2>
            <p className="text-gray-700 text-lg">
              The effectiveness of rain gardens in controlling urban runoff
              decreases as rainfall intensity increases. However, increasing the
              area dedicated to rain gardens improves their ability to manage
              stormwater runoff. Larger areas of rain gardens result in better
              control of urban runoff in stormwater management systems, as
              detailed in the study by researchers using the SWMM (Storm Water
              Management Model).
            </p>
            <p className="text-gray-500 italic mt-2">
              Cited from: ResearchGate, 2016.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
