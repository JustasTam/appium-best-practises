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
       // Default capabilties for android platform 
       platformName: "Android",
       "appium:automationName": "UiAutomator2",
 
       // Parametrs of your device or emulator
       "appium:deviceName": "Pixel 5",
       "appium:platformVersion": "10.0",
 
       //Path to app on your your computer
       "appium:app": "/Users/ilja.aleksejevs/Downloads/app-release (1).apk",
 
       //App Activity and Package using to remove multiple activities error
       "appium:appActivity": ".MainActivity",
       "appium:appPackage": "com.kilofasting"
    }
 ]

config.services = ['appium'];
config.path = "/wd/hub"



exports.config = config;