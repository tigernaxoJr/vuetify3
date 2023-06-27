/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import SideMenu from '@/components/SideMenu'
import MyBtn from './MyBtn.vue'
import TextField from './TextField.vue'

const app = createApp(App)
app.component('SideMenu', SideMenu)
app.component('TextField',TextField)
app.component('Btn', MyBtn)

registerPlugins(app)

app.mount('#app')
