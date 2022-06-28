module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'platzi-blue': '#121f3d',
        'text-white': '#eff3f8',
        'light-gray': '#f1f3f4',
        'bg-card': '#f8f9fa',
      },
      minHeight: {
        fixed: 'calc(100vh - 160px)',
      },
    },
  },
  plugins: [],
};
