import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// pages
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';

// partials
import HeaderToggler from './components/layouts/HeaderToggler';

import * as pages from './constants/layouts';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4269f5',
    secondary: '#404040',
    secondary1: '#919191',
    light: '#fff',
    background: 'white',
    grey: '#fafafa'
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
            initialRouteName={pages.LOGIN}
            screenOptions={{
              headerMode: 'float',
              headerStyle: {
                backgroundColor: theme.colors.secondary
              },
              headerTintColor: theme.colors.light,
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen
              name={pages.HOME}
              component={Home}
              options={{
                headerMode: 'float',
                headerStyle: {
                  backgroundColor: theme.colors.light
                },
                headerTintColor: theme.colors.secondary,
                headerTitleStyle: {
                  fontWeight: 'light'
                },
                headerRight: () => <HeaderToggler />
              }}
            />
            <Stack.Screen
              name={pages.SIGNUP}
              component={Signup}
              options={{
                title: 'Create Account'
              }}
            />
            <Stack.Screen
              name={pages.LOGIN}
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
