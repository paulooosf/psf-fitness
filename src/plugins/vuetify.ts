/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const temaPersonalizado = {
  dark: true,
  colors: {
    'background': '#202020',
    'bg-navegacao': '#333533',
    'amarelo-primario': '#FFD100',
    'amarelo-secundario': '#FFEE32',
    'cinza-claro': '#D6D6D6',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'temaPersonalizado',
    themes: {
      temaPersonalizado,
    },
  },
})
