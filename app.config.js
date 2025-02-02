module.exports = {
  "expo": {
    "experiments": {
      "tsconfigPaths": true
    },
    "extra": {
      "storybookEnabled": process.env.STORYBOOK_ENABLED,
    },
    "name": "learning-react-native-storybook",
    "slug": "learning-react-native-storybook",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*",
      "assets/fonts/Lato/*",
      "assets/images/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/images/favicon.png"
    }
  }
}
