/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    // Get Started button (desktop)
    keyframes: {
      bounce: {
        '0%': { 
          transform: 'translateY(-10%)',
          'animation-timing-function': 'cubic-bezier(0.65, -0.11, 1, 1.3)' 
        },
        '50%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
        },
        '100%': { 
          transform: 'translateY(-10%)',
          'animation-timing-function': 'cubic-bezier(0.65, -0.11, 1, 1.3)' 
        }
      }
    }
  },
  plugins: [],
};