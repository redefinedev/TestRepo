const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      config = await require("./Redefine.js").redefinePlugin(on, config);
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      });
      return config;
    },
  },
});
