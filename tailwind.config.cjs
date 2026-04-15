module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#c94a26',
        softbg: '#f6f6f7'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15,15,15,0.06)'
      },
      borderRadius: {
        xl: '18px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
