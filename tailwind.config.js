/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Figma se mila primary color (agar single color ho)
        primary: '#0067FF', 
      },
      backgroundImage: {
        // Figma se mila primary gradient
        'primary-gradient': 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)',
      },
    },
  },
  plugins: [],
}