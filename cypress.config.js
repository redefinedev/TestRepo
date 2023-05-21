const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      var specFiles = [];
      specFiles = await require("./Redefine.js").redefinePlugin(on, config);
      console.log("received spec files to run - ",  specFiles)
      config.specPattern = specFiles;
      return config;
    },
  },
});
