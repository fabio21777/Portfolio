import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import '@/assets/styles.scss'
import '@/assets/tailwind.css'
import '@/assets/main.css'

const myPresent = definePreset(Aura, {
  primary: {
    50: '{emerald.50}',
    100: '{emerald.100}',
    200: '{emerald.200}',
    300: '{emerald.300}',
    400: '{emerald.400}',
    500: '{emerald.500}',
    600: '{emerald.600}',
    700: '{emerald.700}',
    800: '{emerald.800}',
    900: '{emerald.900}',
    950: '{emerald.950}'
  },
  semantic: {

    formField: {
      paddingX: "1rem",
      paddingY: "1rem",
    },
    myButton: {
      paddingX: "1rem",
      paddingY: "1rem",
    },
    colorScheme: { //customizar para os temas espcifico
      light: {
        formField: {
          hoverBorderColor: '{primary.color}'
        },
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        }
      },
      dark: {
        formField: {
          hoverBorderColor: '{primary.color}'
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        }
      }
    },
  },
  components: {
    button: {
      paddingX: "{my.button.padding.x}",
      paddingY: "{my.button.padding.y}",

    }
  }
})

export const themeOptions = {
  preset: myPresent,
    options: {
  // cssLayer: {
  // 	name: 'primevue',
  // 	order: 'primevue, tailwind-base, tailwind-utilities'
  // },
  prefix: 'p',
    darkModeSelector: '.my-app-dark',
}
}
