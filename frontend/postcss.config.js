module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// Custom logic to dynamically load different Tailwind CSS configurations
module.exports = ({ file }) => {
  const isHomeScreen = file.includes('HomeComponent.js');
  const tailwindConfig = isHomeScreen ? './tailwind.home.config.js' : './tailwind.config.js';
  return {
    plugins: {
      tailwindcss: tailwindConfig,
      autoprefixer: {},
    },
  };
};
