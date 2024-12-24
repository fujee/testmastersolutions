import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#a68968',
        secondary: '#1e2236',
        navBg: '#111',
        mainLogoBg: 'rgba(255, 255, 255, 0.95)'
      },
      boxShadow: {
        contactItem: '1px 1px 6px 1px #00000042',
        resultItem: '0px 5px 10px rgba(37, 37, 49, 0.1)',
        resultGroupItem: '0px 0px 1px #a68968a6',
        teammate: '0px -2px 9px 0px #00000042',
        brand: '0 0 45px rgba(10, 10, 10, 0.06)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        teko: ["Teko", "sans-serif"]
      },
      animation: {
        flipInY: 'flipInY 1s ease-in-out',
        fadeInUp: 'fadeInUp 0.3s ease-in-out',
        tada: 'tada 1s ease-in-out',
        fadeInDown: 'fadeInDown 0.3s ease-in-out',
        flipInX: 'flipInX 0.5s ease-in-out'
      },
      keyframes: {
        flipInY: {
          '0%': {
            transform: 'perspective(400px) rotateY(90deg)',
            opacity: '0',
          },
          '40%': {
            transform: 'perspective(400px) rotateY(-10deg)',
          },
          '70%': {
            transform: 'perspective(400px) rotateY(10deg)',
          },
          '100%': {
            transform: 'perspective(400px) rotateY(0)',
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': {
            transform: 'translateY(200px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        tada: {
          '0%': {
            transform: 'scale(1)'
          },
          '10%, 20%': {
            transform: 'scale(0.9) rotate(-3deg)'
          },
          '30%, 50%, 70%, 90%': {
            transform: 'scale(1.1) rotate(3deg)'
          },
          '40%, 60%, 80%': {
            transform: 'scale(0.9) rotate(-3deg)'
          },
          '100%': {
            transform: 'scale(1) rotate(0)'
          },
        },
        fadeInDown: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        flipInX: {
          '0%': {
            transform: 'perspective(400px) rotateX(90deg)',
            opacity: '0'
          },
          '40%': {
            transform: 'perspective(400px) rotateX(-10deg)',
          },
          '70%': {
            transform: 'perspective(400px) rotateX(10deg)',
          },
          '100%': {
            transform: 'perspective(400px) rotateX(0deg)',
            opacity: '1'
          },
        }
      },
      dropShadow: {
        teamImage: '-1px 0px 6px #00000042',
      },
    },
  },
  plugins: [],
} satisfies Config;
