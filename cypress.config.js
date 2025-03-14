const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    application_base_url: 'https://demo.spikerz.com/'
  },

  video:true,
  videoCompression:true,
  
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
