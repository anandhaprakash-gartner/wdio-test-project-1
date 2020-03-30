require('dotenv').config();
const browsersList = require('./src/config/browsers.ts');
const cliarguments = require('yargs')
    .default('browserName', 'chrome')
    .argv;
const browserName = cliarguments.browserName;

const bstackUserName = process.env.BROWSERSTACK_USERNAME;
const bstackPassword =  process.env.BROWSERSTACK_ACCESS_KEY;

exports.config = {
    user: bstackUserName,
    key: bstackPassword,
    specs: [
        './dist/src/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: browsersList['DEFAULT_BROWSERLIST'][browserName],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services:
      [
       ['browserstack',
        {
          browserstackLocal: true,
          browserstackOpts: { key: bstackPassword, forceLocal: true },
        }
        ]
      ] ,
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000, // For applitools
    },
}
