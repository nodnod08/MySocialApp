import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { withTheme } from 'react-native-paper';

import { SimpleLineIcons } from '@expo/vector-icons';

const HeaderToggler = props => {
  const { colors } = props.theme;
  const ripple = {
    color: colors.secondary1,
    borderless: true
  };

  const styles = StyleSheet.create({
    default: {
      backgroundColor: colors.light,
      marginRight: 10,
      fontSize: 25,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 15,
      elevation: 10
    },
    buttonView: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderRadius: 15,
      paddingHorizontal: 9,
      paddingVertical: 9
    }
  });

  return (
    <View style={styles.default}>
      <Pressable style={styles.buttonView} android_ripple={ripple}>
        <SimpleLineIcons name='menu' size={24} color='black' />
      </Pressable>
    </View>
  );
};

export default withTheme(HeaderToggler);
