# Do Fasting Mobile Automation

## Installation

Run command:

```sh
  npm install
```

Run scripts:

```sh
  npm run script_name
```

## Script execution commands

For local runs:

```sh
  npm run androidLocal
  npm run iosLocal
```

For soucelabs runs:

```sh
  npm run androidSouceLabs
  npm run iosSouceLabs
```

## Installations (For local execution):

- node.js (v17.4.0)
- Java JDK 11 (java 11.0.13)
  -Set JAVA_HOME path (export JAVA_HOME=$(/usr/libexec/java_home))
- Android studio
  -Set ANDROID_HOME path (export ANDROID_HOME=/Users/$USER/Library/Android/sdk)
  -set path to platform_tools (export PATH=${PATH}:$ANDROID_HOME/platform-tools:$PATH
  -set path to tools (export PATH=${PATH}:$ANDROID_HOME/tools:$PATH)
- XCode
- Xcode command line tools (xcode-selext --install)
- Carthage (brew install carthage)
- Appium Desktop inspector (https://github.com/appium/appium-inspector/releases/tag/v2021.9.1)
- Appium (2.0.0-beta.25)

**Check setup using appium doctor.**

Install Appium doctor:

```sh
npm install -g appium-doctor
```

Run commands in terminal:

```sh
appium-doctor --android
appium-doctor --ios
```

# Git Branch Strategy

The main idea behind the Git branching strategy is to isolate your work into different types of branches. There will be different branch types like:

- Feature
- Hotfix
- Maintenance

**Example : feature/ + “ticket number” (example: feature/QA-13)**

Jira board: https://kilohealth.atlassian.net/jira/software/projects/QA/boards/83

Repository: https://git.kilo.dev/qa/app-automation/dofasting-mobile-automation

> Note: `Best practice to have one commit in one merge request`

# App upload using curl command:

```sh
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"<path/to/your/file>"' \
--form 'name="<filename.ext>"'
```

//for more info see: https://docs.saucelabs.com/mobile-apps/app-storage/
**(Or custom_id=DoFastingIOS)**

# Reference links

#### Reference working repository

https://git.kilo.dev/qa/app-automation/dofasting-mobile-automation-soucelabs

#### Upload to soucelabs

https://git.kilo.dev/kilomobile/qa/saucelabs-upload

#### YAML test execution pipeline

https://git.kilo.dev/other/doc/-/blob/mobile-qa/DevOps/Pipelines/Mobile/e2e.yml

Have fun!
