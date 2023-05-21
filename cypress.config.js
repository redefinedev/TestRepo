const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = require("./Redefine.js").redefinePlugin(on, config);
      console.log("received spec files to run - ",  config?.specPattern)
      return config;
    },
  },
});
