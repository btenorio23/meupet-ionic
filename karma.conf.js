// Karma configuration
// Generated on Sat Oct 07 2017 17:41:56 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'angular-cli'],
    
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('karma-mocha-reporter'),
      require('angular-cli/plugins/karma')
    ],

    files: [
      { pattern: './src/test.ts', watched: false }
    ],

    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    
    mime: {
      'text/x-typescript': ['ts','tsx']
    },

   remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['mocha', 'karma-remap-istanbul']
              : ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}


