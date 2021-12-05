module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "sourceType": "module"
  },
  "extends": [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  "plugins": ["prettier"],
  "rules": {
    "quotes": [1, "single"],
    "semi": [1, "always"],
    // 未使用 变量进行警告，不error
    "no-unused-vars": [
      1,
      {
        "vars": "all", // 检测所有变量
        "args": "none", // 参数未使用，可不检测
        "caughtErrors": "none" // 不检测catch中的
        // argsIgnorePattern:'^_',//忽略_开头的
      }
    ]
  }
}
