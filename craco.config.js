const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' to 'src' directory
    },
  },
  style: {
    postcss: {
      plugins: [require("@tailwindcss/postcss")],
    },
  }
};
