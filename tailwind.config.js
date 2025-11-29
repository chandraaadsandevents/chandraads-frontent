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
  dark: '#1a1a1a',
  light: '#f9f9f9',
  accent: '#ffb400',
  purple: {
    300: '#a78bfa',
    400: '#c4b5fd',
    500: '#8b5cf6',
    600: '#6e44ff',
    700: '#5a2fff',
  },
  black: 'rgb(0 0 0)',
  white: 'rgb(255 255 255)',

},
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'helvetica neue', 'sans-serif'],
        marvin: ['"Marvin Visions Variable"', 'sans-serif'],
      },
      fontSize: {
        default: '1.8rem',
        '4.5xl': '4.5rem',
      },
      spacing: {
        '15': '3.75rem',
        logo: '18rem',
        icon: '3rem',
        'full-w': '100%',
        'full-h': '100%',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease forwards',
        'float': 'float 20s linear infinite',
        'orbit': 'orbit 30s linear infinite',
        'draw-path': 'drawPath 2s ease-in-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'scale-in-ver-center': 'scale-in-ver-center 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'scale-in-out': 'scale-in-hor-center 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards, scale-out-hor-left 0.5s cubic-bezier(0.55,0.085,0.68,0.53) 5.5s forwards',
        'bounce-in': 'bounce-in-fwd 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'image-in-out': 'scale-in-ver-center 0.5s cubic-bezier(0.25,0.46,0.45,0.94) 2s forwards, slit-out-vertical 1s ease-in 4.5s forwards',
        'bounce-in-delayed': 'bounce-in 0.5s ease forwards',
        'scale-in-delayed': 'scale-in 0.6s ease forwards',
        'slide-in-top-delayed': 'slide-in-top 0.6s ease forwards',
        'scale-fade-in': 'scale-fade-in 1s ease forwards',
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
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-40px) rotate(0deg)' },
          '75%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        drawPath: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'scale-in-ver-center': {
          '0%': { transform: 'scaleY(0)', opacity: '1' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        'scale-in-hor-center': {
          '0%': { transform: 'scaleX(0)', opacity: '1' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        'scale-out-hor-left': {
          '0%': { transform: 'scaleX(1)', transformOrigin: '0 0', opacity: '1' },
          '100%': { transform: 'scaleX(0)', transformOrigin: '0 0', opacity: '1' },
        },
        'bounce-in-fwd': {
          '0%': { transform: 'scale(0)', animationTimingFunction: 'ease-in', opacity: '0' },
          '38%': { transform: 'scale(1)', animationTimingFunction: 'ease-out', opacity: '1' },
          '55%': { transform: 'scale(0.7)', animationTimingFunction: 'ease-in' },
          '72%': { transform: 'scale(1)', animationTimingFunction: 'ease-out' },
          '81%': { transform: 'scale(0.84)', animationTimingFunction: 'ease-in' },
          '89%': { transform: 'scale(1)', animationTimingFunction: 'ease-out' },
          '95%': { transform: 'scale(0.95)', animationTimingFunction: 'ease-in' },
          '100%': { opacity: '1', transform: 'scale(1)', animationTimingFunction: 'ease-out' },
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slit-out-vertical': {
          '0%': { transform: 'translateZ(0) rotateY(0)', opacity: '1' },
          '54%': { transform: 'translateZ(-160px) rotateY(87deg)', opacity: '1' },
          '100%': { transform: 'translateZ(-800px) rotateY(90deg)', opacity: '0' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        md: '8px',
      },
      scale: {
        '175': '1.75',
      },
      transitionDuration: {
        '350': '350ms',
      },
      transitionDelay: {
        200: '200ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1000: '1000ms',
        1200: '1200ms',
        1400: '1400ms',
      },
      zIndex: {
        20: '20',
        30: '30',
      },
    },
  },
  plugins: [],
}