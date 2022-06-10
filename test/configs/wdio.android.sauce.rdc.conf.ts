import config from './wdio.shared.sauce.conf';

const buildName = `Android DoFasting: ${new Date().toLocaleString()}`;
const slack = require('wdio-slack-service');


// Capabilities
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    platformName: 'Android',
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    // We're using dynamic device allocation
    // See https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/#dynamic-device-allocation
    'appium:deviceName': '(Samsung Galaxy S.*)|(Google Pixel.*)',
    'appium:automationName': 'UIAutomator2',
    // The name of the App in the Sauce Labs storage, for more info see
    // https://docs.saucelabs.com/mobile-apps/app-storage/
    'appium:app': 'storage:filename=app-release.apk',
    // 'appium:appWaitActivity': 'MainActivity',
    'appium:newCommandTimeout': 240,
    // This will adjust the Appium server in such a way that it will return all
    // non visible elements so we can assert against it.
    // @ts-ignore
    'appium:allowInvisibleElements': true,
    // All vendor specific, in this case Sauce specific capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    'sauce:options': {
      build: buildName,
      // Select only phone devices
      // @ts-ignore
      phoneOnly: true,
      resigningEnabled: true,
      allowTouchIdEnroll: true,
      sauceLabsImageInjectionEnabled: true,
    },
  },
];

// Max instances of the same device in the cloud
config.maxInstances = 10;

config.services = [
  [slack, {
    webHookUrl: "https://hooks.slack.com/services/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", // Used to post notification to a particular channel
    notifyOnlyOnFailure: false, // Send notification only on test failure
    messageTitle: '-----------------------' + buildName + '-----------------------' // Name of the notification
}]
];

exports.config = config;
