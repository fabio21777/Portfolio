import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { themeOptions } from '@/themes/my-theme/theme'


const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(router)

app.use(PrimeVue, {
	theme: themeOptions
});

app.mount('#app')

