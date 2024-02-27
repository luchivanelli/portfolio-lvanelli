export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      'colors': {
        'card': '#00000070',
        'modal': '#000000b3',
        'violeta': '#c501e2',
        'azul': '#6664ff',
        'celeste': '#01c4e7',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

