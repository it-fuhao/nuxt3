module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // parserOptions: {
  //   parser: '@babel/eslint-parser',
  //   sourceType: 'module',
  //   requireConfigFile: false
  // },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 1.1 js中默认单引号 warn 级别 【自动fix】
    quotes: [1, 'single'],

    // 1.2 强制分号 warn 级别 【自动fix】
    semi: [1, 'always'],

    '@typescript-eslint/no-explicit-any': 'off', // 关闭any报错

    'vue/multi-word-component-names': [0], // 关闭组件名强制使用驼峰

    'no-useless-catch': [0], // 关闭catch检测

    'comma-dangle': [0], // 忽略尾随逗号

    'vue/no-v-model-argument': [0], // v-model参数不报错
  }
};
