/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out", // Fade-in with upward motion
        "slide-in-right": "slideInRight 1s ease-out", // Slide-in from right
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      colors: {
        primary: "#1d4ed8", // Example custom color
        secondary: "#9333ea",
      },
    },
  },
  plugins: [],
};
