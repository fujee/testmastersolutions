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
        navBg: '#111'
      },
      boxShadow: {
        contactItem: '1px 1px 6px 1px #00000042',
        resultItem: '0px 5px 10px rgba(37, 37, 49, 0.1)',
        resultGroupItem: '0px 0px 1px #a68968a6',
        teammate: '0px -2px 9px 0px #00000042'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        teko: ["Teko", "sans-serif"]
      },
      animation: {
        flipInY: 'flipInY 1s ease-in-out'
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
      },
      dropShadow: {
        teamImage: '-1px 0px 6px #00000042',
      },
    },
  },
  plugins: [],
} satisfies Config;
