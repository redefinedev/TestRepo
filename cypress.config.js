const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log("cypress spec pattern: ", config.specPattern)
      return config;
    },
  },
});
