module.exports = {
  extends: ['eslint-config-custom', 'eslint-config-custom/react'],
  ignorePatterns: [
    '.eslintrc.js',
    'postcss.config.js',
    'tailwind.config.js',
    'vite.config.ts',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
}
