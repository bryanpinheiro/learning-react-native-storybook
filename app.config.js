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
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
