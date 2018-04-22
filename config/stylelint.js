module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  syntax: 'scss',
  rules: {
    indentation: 2,

    // Does not work with React Native
    'font-family-no-missing-generic-family-keyword': null,
  },
}
