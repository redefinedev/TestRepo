const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      console.log("cypress spec pattern: ", config.specPattern)
      return config;
    },
  },
});