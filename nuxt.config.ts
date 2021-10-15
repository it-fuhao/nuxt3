import { defineNuxtConfig } from 'nuxt3'

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
    prefix: '/api', // 表示给请求url加个前缀 /api
  },
  // proxy: {
  //   '/api': {
  //     target: '', // 目标接口域名
  //     // target: process.env.API_PATH || '', // 目标接口域名
  //     changeOrigin: true,
  //     pathRewrite: {
  //        '^/api': '' // 把 /api 替换成‘’
  //     }
  //   }
  // },
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
  plugins: [
    // { src: "@/plugins/vant.ts", ssr: true },
  ]
})
