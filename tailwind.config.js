/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6ddb9e",
        
"secondary": "#87a7f2",
        
"accent": "#a549fc",
        
"neutral": "#1E1E24",
        
"base-100": "#36363A",
        
"info": "#8CC6E3",
        
"success": "#2FCA73",
        
"warning": "#F1B637",
        
"error": "#EE1733",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

