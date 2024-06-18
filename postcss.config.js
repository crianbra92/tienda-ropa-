module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    extends: [
      'stylelint-config-standard',
      'stylelint-config-recommended',
      'stylelint-config-recess-order',
    ],
    rules: {
      // Añade cualquier regla específica que necesites
    },
    ignoreFiles: ['node_modules/**/*.css'],
  }