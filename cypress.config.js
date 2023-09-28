const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("after:run", (results) => {
        console.log(results);
      });
      on("after:spec", (spec, results) => {
        console.log(results);
      });
      on("before:browser:launch", (browser = {}, launchOptions) => {
        console.log(browser, launchOptions);
      });
      on("before:run", (results) => {
        console.log(results);
      });
      on("before:spec", (spec, results) => {
        console.log(results);
      });

      return config;
    },
  },
});
