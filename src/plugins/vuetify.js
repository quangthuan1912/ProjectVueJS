// Styles
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    iconfont: 'md' || 'fa' || 'md'
  },
  theme: {
    themes: {
      light: {
        
      }
    }
  }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
