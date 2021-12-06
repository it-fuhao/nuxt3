module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 1.1 js中默认单引号 warn 级别 【自动fix】
    quotes: [1, 'single'],

    // 1.2 强制分号 warn 级别 【自动fix】
    semi: [1, 'always'],

    // 1.4 关闭强制使用全等 http://eslint.cn/docs/rules/eqeqeq
    eqeqeq: [0],

    // 2.2 .vue 的name属性 warn 使用短横线 【自动fix】
    'vue/name-property-casing': ['warn', 'kebab-case'],

    // 2.3 Vue组件中Prop名称强制使用驼峰 error 级别
    'vue/prop-name-casing': [2, 'camelCase'],

    // 2.4 prop定义应始终尽可能详细，至少指定类型 不允许用数组接收 .error 级别
    'vue/require-prop-types': [2],

    // 2.7 属性顺序,遵循vue风格指南 warn 级别 【自动fix】
    'vue/attributes-order': [
      1,
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false // 关闭按字母顺序
      }
    ],
    //  关闭 prop属性强制需要默认值
    'vue/require-default-prop': [0],

    //  关闭 强制实行单标签
    'vue/html-self-closing': [0],

    // 关闭标签属性强制使用短横线。
    'vue/attribute-hyphenation': [0],

    // 关闭单行html折行
    'vue/singleline-html-element-content-newline': 0,

    'vue/multi-word-component-names': [0],

    // 未使用 变量进行警告，不error
    'no-unused-vars': [
      1,
      {
        vars: 'all', // 检测所有变量
        args: 'none', // 参数未使用，可不检测
        caughtErrors: 'none' // 不检测catch中的
        // argsIgnorePattern:'^_',//忽略_开头的
      }
    ],
    'no-useless-catch': [0],
    'no-inner-declarations': [0], // 函数申明可以放在函数的最下方
    'require-atomic-updates': [0],
    'space-before-function-paren': ['error', 'never'] // 禁止函数圆括号之前有一个空格
  }
};
