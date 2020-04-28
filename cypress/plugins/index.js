// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require("@cypress/browserify-preprocessor");
const environmentLocal = require('../environments/environment.local')
const environmentCi = require('../environments/environment.ci')
 
module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);

  on("file:preprocessor", cucumber(options));


  if (config.env.NODE_ENV === 'local') {
    const merged = Object.assign({}, config, environmentLocal);
    return merged;
  }

  if (config.env.NODE_ENV === 'ci') {
    const merged = Object.assign({}, config, environmentCi);
    return merged;
  }

  return config;
}
