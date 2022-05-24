module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        dark_primary: "var(--dark-primary)",
        dark_primary_next: "var(--dark-primary-next)",
        dark_text: "var(--dark-text)",
        dark_text_next: "var(--dark-text-next)",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
