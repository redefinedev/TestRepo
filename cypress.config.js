const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
  },
});