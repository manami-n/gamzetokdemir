import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createI18n } from "vue-i18n";
import en from "./i18n/en.json";
import tr from "./i18n/tr.json";
import './script.js';


// Detect language
const userLang = navigator.language.startsWith("tr") ? "tr" : "en";

export const i18n = createI18n({
  legacy: true,
  globalInjection: true,
  locale: userLang,
  fallbackLocale: "en",
  messages: {
    en, tr
  }
});


createApp(App).use(i18n).mount('#app')
