/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}", "./index.html"],
  theme: {
    fontFamily: {
      sans : ["Ballo", "Confortaa", "sans-serif"]
    },
    extend: {
      colors: {
        purple: {
          500: '#6B47DC',  // Ajustar a cor do botão de postagem
        },
      },
    },
  },
  plugins: [],
}

