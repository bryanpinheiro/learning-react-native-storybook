import registerRootComponent from 'expo/build/launch/registerRootComponent';
import Constants from 'expo-constants';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './App.styles';

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('.storybook/index').default;
}

registerRootComponent(AppEntryPoint);