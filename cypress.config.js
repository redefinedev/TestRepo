const { defineConfig } = require("cypress");

const registerPlugin = (on, config) => {
  on("after:run", (results) => {
    console.log("after run 1");
  });
  on("after:spec", (spec, results) => {
    console.log("after spec 1");
  });
  on("before:browser:launch", (browser = {}, launchOptions) => {
    console.log("before browser launch 1");
  });
  on("before:run", (results) => {
    console.log("before run 1");
  });
  on("before:spec", (spec, results) => {
    console.log("before spec 1");
  });
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
