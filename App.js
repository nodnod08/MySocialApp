import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Container from './components/layouts/Container';
import Login from './components/pages/Login';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4269f5',
    secondary: '#404040'
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <SafeAreaView>
          <Container>
            <Login />
          </Container>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
}
