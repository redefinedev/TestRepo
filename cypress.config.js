const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      config = await require("./Redefine.js").redefinePlugin(on, config);
      console.log("cypress spec pattern: ", config.specPattern)
      return cloudPlugin(config);
    },
  },
  projectId: 'test_proj_id',
});
