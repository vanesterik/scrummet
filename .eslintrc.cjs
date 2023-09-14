module.exports = {
  extends: ['eslint-config-custom', 'eslint-config-custom/react'],
  ignorePatterns: [
    '.eslintrc.cjs',
    'postcss.config.cjs',
    'tailwind.config.cjs',
    'vite.config.ts',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
}
