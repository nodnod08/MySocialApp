import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Container from './Container';

const Main = ({ children }) => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Container>{children}</Container>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

export default Main;
