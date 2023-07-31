const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      config = await require("./Redefine.js").redefinePlugin(on, config);
      // implement node event listeners here
      return config
    },
  },
});
