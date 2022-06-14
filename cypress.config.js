const { defineConfig } = require('cypress')
const { addVisualRegressionTrackerPlugin } = require('@visual-regression-tracker/agent-cypress/dist/plugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addVisualRegressionTrackerPlugin(on, config)
    }
  }
})
