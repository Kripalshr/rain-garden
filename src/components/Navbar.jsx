import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsVisible(true);
      } else {
        // Hide navbar if scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      // Show navbar if the mouse moves to the top of the screen
      if (e.clientY <= 50) {
        setIsVisible(true);
      }
    };

    // Attach event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 overflow-hidden ${
        isVisible
          ? "translate-y-0 bg-white text-black shadow-md" // Default: white background and black text
          : "-translate-y-full" // Navbar is hidden
      }`}
    >
      <div className="container mx-auto p-8 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer ">
          Rain<span className="text-green-300">Garden</span>
        </h1>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <button
          className="md:hidden block text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav
          className={`md:flex gap-4 hidden ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row gap-4 text-lg">
            <li>
              <a href="#home" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#overview" className="hover:text-gray-600">
                Overview
              </a>
            </li>
            <li>
              <a href="#maps" className="hover:text-gray-600">
                Maps
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:text-gray-600">
                Methodology
              </a>
            </li>
            <li>
              <a href="#plants" className="hover:text-gray-600">
                Native Plants
              </a>
            </li>
            <li>
              <a href="#case" className="hover:text-gray-600">
                Case Studies
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        <ul className="flex flex-col gap-4 text-lg p-4">
          <li>
            <a
              href="#home"
              className="hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#overview"
              className="hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#guides"
              className="hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </a>
          </li>
          <li>
            <a
              href="#plants"
              className="hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Native Plants
            </a>
          </li>
          <li>
            <a
              href="#case"
              className="hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
