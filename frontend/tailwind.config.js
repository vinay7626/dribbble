/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dribble-orange': '#f4d086',
        'dribbble-orange-text': '#886217',
        'input-bg-grey': '#f3f3f3',
        'dribbble-text':'#a8843a',
        'my-gray': '#fafafa',
      },
      backgroundImage: {
        'app-window-art': "url('/src/assets/appWindowArt.png')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}

