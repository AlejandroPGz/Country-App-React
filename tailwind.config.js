/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        'blue-chill': {
          '50': '#f2f9f9',
          '100': '#ddeff0',
          '200': '#bfe0e2',
          '300': '#92cace',
          '400': '#5faab1',
          '500': '#438e96',
          '600': '#3b757f',
          '700': '#356169',
          '800': '#325158',
          '900': '#2d464c',
          '950': '#1a2c32',
      },
      },
      keyframes: {
        fadeIn: {
          '0%' : "opacity: 0",
          '100%' : 'opacity: 1'
        },
        fadeOut: {
          '0%' : "opacity: 1",
          '100%' : 'opacity: 0'
        },
      },
      animation: {
        'entrar': 'fadeIn 3s ease-in',
      },
      height: {
        'oneCountryTlf': "25rem"
      }
  },
  plugins: [],
}
}
