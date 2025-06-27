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
    background: '#090F22',
    'bg-navegacao': '#1C2541',
    'icones-navegacao': '#3A506B'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'temaPersonalizado',
    themes: {
      temaPersonalizado
    }
  },
})
