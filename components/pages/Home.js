import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme } from 'react-native-paper';

import BottomNavigations from '../layouts/BottomNavigation';
import HeaderToggler from '../layouts/HeaderToggler';
import Main from '../layouts/Main';

const Home = props => {
  const { colors } = props.theme;

  const styles = StyleSheet.create({
    main: {
      backgroundColor: colors.light,
      height: '100%',
      width: '100%',
      justifyContent: 'center'
    }
  });

  return (
    <View style={styles.main}>
      <Main></Main>
      <BottomNavigations />
    </View>
  );
};

export default withTheme(Home);
