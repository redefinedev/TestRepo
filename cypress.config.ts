import { defineConfig } from "cypress";
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      // implement node event listeners here
      return config;
    },
  },
});
