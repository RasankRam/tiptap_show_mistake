/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'

import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'

const VuetifyProTipTap = createVuetifyProTipTap({
  vuetify,
  lang: 'en',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
})

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(VuetifyProTipTap)
    .use(router)
}
