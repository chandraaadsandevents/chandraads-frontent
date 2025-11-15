/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#95001e',
          light: '#c1121f',
          dark: '#730016',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95001e',
        'primary-light': '#c5002a',
        dark: '#1a1a1a',
        light: '#f9f9f9',
        accent: '#ffb400',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'scale-in': 'scaleIn 0.8s ease forwards',
        'float': 'float 2s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95001e',
        'primary-light': '#c5002a',
        dark: '#1a1a1a',
        light: '#f9f9f9',
        accent: '#ffb400',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      columns: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95001e',
        'primary-light': '#c5002a',
        dark: '#1a1a1a',
        light: '#f9f9f9',
        accent: '#ffb400',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95001e',
        'primary-light': '#c5002a',
        dark: '#1a1a1a',
        light: '#f9f9f9',
        accent: '#ffb400',
      },
      animation: {
        'float': 'float 20s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-20px) rotate(5deg)',
          },
          '50%': { 
            transform: 'translateY(-40px) rotate(0deg)',
          },
          '75%': { 
            transform: 'translateY(-20px) rotate(-5deg)',
          },
        },
      },
    },
  },
  plugins: [],
}