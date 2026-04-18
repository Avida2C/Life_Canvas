/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    // line-clamp is built into Tailwind 3.3+; omitting avoids duplicate-plugin warnings
    require('@tailwindcss/typography'),
  ],
};
