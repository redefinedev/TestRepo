const { defineConfig } = require("cypress");
const { plugin: replayPlugin } = require("@replayio/cypress");
module.exports = defineConfig({
  e2e: {
    
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      replayPlugin(on, config);
      console.log("cypress spec pattern: ", config.specPattern)
      return config;
    },
  },
  chromeWebSecurity: false,
});