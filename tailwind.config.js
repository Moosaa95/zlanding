/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#007ace",
        'brand-dark': '#034769',
        'brand-light': '#68b6f3',
        'neutral-dark': '#333333',
        'neutral-light': '#f5f5f5',
        'neutral': '#dddddd',
        'accent-1': '#e63946',
        'accent-2': '#f4a261',
        'success': '#4CAF50',
        'warning': '#ffca28',
        'error': '#f44336',
        'info': '#2196f3',
      },
      fontFamily: {
        switzer: ["Switzer", "sans-serif"],
        switzerLight: ["SwitzerLight", "sans-serif"],
        switzerBlackItalic: ["SwitzerBlackItalic", "sans-serif"],
        SwitzerLightItalic: ["SwitzerLightItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
};
