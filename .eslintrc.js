module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 0,
        semi: 0,
        'comma-dangle': 0,
        'no-unused-vars': 0,
        'react/self-closing-comp': 0,
        'no-trailing-spaces': 0,
        quotes: 0,
      },
    },
  ],
};
