import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4269f5',
    secondary: '#404040',
    light: '#fff',
    background: 'white'
  }
};

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerMode: 'float',
              headerStyle: {
                backgroundColor: '#404040'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                title: 'Create Account'
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                transitionSpec: {
                  open: config,
                  close: config
                }
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
