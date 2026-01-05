/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#0a0a0a', // Almost black
          100: '#1a1a1a', // Very dark grey
          200: '#2a2a2a', // Dark grey
          300: '#3a3a3a', // Medium dark grey
          400: '#4a4a4a', // Medium grey
          500: '#6a6a6a', // Light grey
          900: '#000000', // Pure black
        },
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          400: '#818cf8', // Cool indigo
          500: '#6366f1', // Rich purple
          600: '#4f46e5', // Deep indigo
          700: '#3730a3', // Royal purple
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee', // Bright cyan
          500: '#06b6d4', // Teal
          600: '#0891b2', // Deep teal
          700: '#0e7490', // Dark teal
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          400: '#c084fc', // Soft purple
          500: '#a855f7', // Vibrant purple
          600: '#9333ea', // Rich violet
          700: '#7c3aed', // Deep purple
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
