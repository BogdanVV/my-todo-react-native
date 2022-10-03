module.exports = {
  root: true,
  extends: ['@react-native-community', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    semi: ['error', 'never'],
    'react-hooks/exhaustive-deps': 'off',
  },
}
