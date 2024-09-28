module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:cypress/recommended',
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  "plugins": ["prettier"],
  rules: {
    "prettier/prettier": "error" ,
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": ["state"]
      }
    ],
    "no-console": "off",
  }
};
