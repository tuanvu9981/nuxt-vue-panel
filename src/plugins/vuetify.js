// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
