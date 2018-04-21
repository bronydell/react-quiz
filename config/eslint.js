module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react-pug',
  ],
  extends: [
    'airbnb',
    'plugin:react-pug/all',
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': [
      'error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-undef': 'error',
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js'],
    }],
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        'everything-else',
      ],
    }],
    semi: ['error', 'never'],

    // Temporary because of pug
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
