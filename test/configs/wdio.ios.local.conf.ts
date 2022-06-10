import config from './wdio.shared.conf';

/**
* Appium server port
*/
config.port = 4723;

/**
* Capabilities for iOS
*/
config.capabilities = [
   {
      // Default capabilties for ios platform 
      platformName: "ios",
      "appium:automationName": "XCUITest",

      // Parametrs of your device or emulator
      "appium:deviceName": "iPhone 11",
      "appium:platformVersion": "15.2",

      //Path to app on your your computer
      "appium:app": "/Users/ilja.aleksejevs/Library/Developer/Xcode/DerivedData/dofasting-dbsynxdmnszmjoaondzqiihdsjqh/Build/Products/Debug-iphonesimulator/dofasting.app"
   }
]

config.services = ['appium'];
config.path = "/wd/hub"



exports.config = config;