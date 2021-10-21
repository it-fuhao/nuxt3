import { defineNuxtConfig } from 'nuxt3'

// 服务端接口域名
const serverUrl = 'https://uatinsured.mingya.com.cn'; // 测试

export default defineNuxtConfig({
  meta: {
    meta: [
      { "charset": "utf-8" },
      { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
      { "name": "viewport", "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover, user-scalable=no" },
    ],
    script: [
      { src: "/js/rem.js"},
    ],
  },
  // buildDir: "/project/.nuxt",
  axios: {
    proxy: true, // 表示开启代理
    // prefix: '/api', // 表示给请求url加个前缀 /api
  },
  proxy: {
    '/apigateway': {
      target: serverUrl,
      changeOrigin: true,
      // rewrite: path => path.replace(/^\/apigateway/, '/apigateway')
    }
  },
  modules: [
    // '@nuxtjs/axios', // TODO nuxt3集成axios 引发报错
  ],
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
  ],
  plugins: [

  ],
  css: [
    /**
     * default alisa
     * "~~": "/project"
     * "@@": "/project"
     * "~": "/project"
     * "@": "/project"
     * "assets": "/project/assets"
     * "public": "/project"
     */
    "@/assets/styles/common.scss",
    // "vant/lib/index.scss",
  ],
  loading: {
    color: "#59cc93"
  },
  build: {
    extractCSS: true,
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
          }
        },
      }
    }
  },
  
})
