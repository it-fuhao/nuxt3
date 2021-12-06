import Vant from 'vant';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp: any) => {
  const { vueApp } = nuxtApp;

  vueApp.use(Vant);
});
