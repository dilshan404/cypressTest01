const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
  },
  env: {
    standard_username: "standard_user",
    standard_password: "secret_sauce"
  },
  reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: true
}

});
