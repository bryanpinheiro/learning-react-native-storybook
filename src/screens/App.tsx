import { useCallback } from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import Constants from 'expo-constants';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import theme from '@/themes/theme';
import { styles } from './App.styles';

SplashScreen.preventAutoHideAsync();

function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Lato-Regular': require('../../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Italic': require('../../assets/fonts/Lato/Lato-Italic.ttf'),
    'Lato-Bold': require('../../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('../../assets/fonts/Lato/Lato-BoldItalic.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={ { fontFamily: theme.textFontFamily, fontSize: 24 } }>
        Life is good.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('.storybook/index').default;
}

registerRootComponent(AppEntryPoint);