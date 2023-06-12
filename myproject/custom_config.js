const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
    supportFile: "cypress/test/custom_support.js"
  },
});
