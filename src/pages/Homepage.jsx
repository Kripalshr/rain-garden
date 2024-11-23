import React, { useState, useEffect } from "react";
import CaseStudies from "../components/CaseStudies";
import Conclusion from "../components/conclusion";
import Guides from "../components/Guides";
import Landingpage from "../components/LandingPage";
import Maps from "../components/Maps";
import NativePlants from "../components/NativePlants";
import Overview from "../components/Overview";
import Photos from "../components/Photos";
import Calculations from "../components/Calculations";

const Homepage = () => {
  const [currentSection, setCurrentSection] = useState("home"); // Track current section

  // Update the current section when scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  // Smooth scroll to the next or previous section on scroll
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scroll down
        goToNextSection();
      } else if (e.deltaY < 0) {
        // Scroll up
        goToPreviousSection();
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentSection]);

  const goToNextSection = () => {
    const sections = [
      "home",
      "overview",
      "maps",
      "guides",
      "calculations",
      "plants",
      "case",
      "photos",
      "conclusion",
    ];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = document.getElementById(sections[currentIndex + 1]);
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPreviousSection = () => {
    const sections = [
      "home",
      "overview",
      "maps",
      "guides",
      "calculations",
      "plants",
      "case",
      "photos",
      "conclusion",
    ];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      const prevSection = document.getElementById(sections[currentIndex - 1]);
      prevSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="min-h-screen">
        <section id="home">
          <Landingpage />
        </section>

        <section id="overview">
          <Overview />
        </section>

        <section id="maps">
          <Maps />
        </section>

        <section id="guides">
          <Guides />
        </section>

        <section id="calculations">
          <Calculations />
        </section>

        <section id="plants">
          <NativePlants />
        </section>

        <section id="case">
          <CaseStudies />
        </section>

        <section id="photos">
          <Photos />
        </section>

        <section id="conclusion">
          <Conclusion />
        </section>
      </main>
    </>
  );
};

export default Homepage;
