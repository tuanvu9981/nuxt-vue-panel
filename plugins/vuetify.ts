// plugins/vuetify.ts
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from "vuetify/iconsets/mdi"
import { createVuetify } from 'vuetify'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
      VDataTable,
      VDataTableServer,
      VDataTableVirtual,
    },
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi
      }
    }
  })
  app.vueApp.use(vuetify)
})
