import { defineNuxtPlugin } from '#app'
import Vant from 'vant'

export default defineNuxtPlugin(async (nuxt: any) => {
  
  const { app } = nuxt

  app.use(Vant)

})