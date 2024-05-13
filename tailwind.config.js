/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'Borange': '#78350f',
      'hoverBorange': '#4d2209',
      'BBackground' : '#fffcee',
      'BSecondBackground': '#0f172a',
      'BThirdBackground': '#fefcf2',
      'BShadowColor' : 'rgba(255, 255, 255, 0.3)',
    },},
  },
  plugins: [],
}

