import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import veProgress from 'vue-ellipse-progress'
import { IonicVue } from '@ionic/vue';

const app = createApp(App);

// Installieren Sie das "vue-ellipse-progress" Plugin
app.use(veProgress)

app.use(IonicVue)

// Starten Sie die Anwendung
app.mount('#app');
