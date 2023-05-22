const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      var specFiles = [];
      specFiles = await require("./Redefine.js").redefinePlugin(on, config);
      config.specPattern = specFiles;
      return config;
    },
  },
});
