// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    "semi": "error",
    "curly": "error",
    "no-var": "error",
    "eqeqeq": "error",
    "eol-last": "error",
    "no-alert": "error",
    "no-console": "warn",
    "no-shadow": "error",
    "prefer-const": "warn",
    "default-case": "error",
    "no-unused-vars": "error",
    "space-infix-ops": "error",
    "no-trailing-spaces": "error",
    "linebreak-style": [2, "unix"],
    "space-before-blocks": "error",
    'generator-star-spacing': 'off',
    "newline-before-return": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "object-curly-spacing": ["error", "always"],
    'space-before-function-paren': ['error', 'never'],
    "camelcase": ["error", { "properties": "never" }],
    "spaced-comment": ["error", "always", { "exceptions": ["-"] }],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
