import { defineNuxtPlugin } from '#app';
import Vant from 'vant';

export default defineNuxtPlugin((nuxtApp: any) => {
  const { vueApp } = nuxtApp;

  vueApp.use(Vant);
});
