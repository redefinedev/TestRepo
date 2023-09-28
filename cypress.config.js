const { defineConfig } = require("cypress");
const { plugin: replayPlugin } = require("@replayio/cypress")

const registerPlugin = (on, config) => {
  replayPlugin(on, config);
  return config;
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return registerPlugin(on, config);
    },
  },
});
