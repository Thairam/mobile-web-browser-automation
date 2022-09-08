const server = require('./server/server')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        deviceName: 'pixel',
        platformVersion: '9',
        automationName: 'UiAutomator2',
        browserName: 'Chrome'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    products_page: './pages/products_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start()
  },
  teardown: async () => {
    await server.stop()
  },
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/login_step.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'qazando-automation',
  tests: './features/*.feature',
}