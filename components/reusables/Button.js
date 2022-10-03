import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { withTheme } from 'react-native-paper';

const Button = props => {
  const { color, children, theme, customStyles } = props;
  const { colors } = theme;

  const manageRipple = () => {
    let data;
    switch (color) {
      case 'secondary':
        data = {
          color: '#616161',
          borderless: true
        };
        break;
      case 'light':
        data = {
          color: '#e6e6e6',
          borderless: true
        };
        break;
      case 'primary':
        data = {
          color: '#5c82f2',
          borderless: true
        };
        break;

      default:
        data = {
          color: '#e6e6e6',
          borderless: true
        };
        break;
    }

    return data;
  };

  return (
    <View style={styles.buttonView}>
      <Pressable
        {...props}
        android_ripple={manageRipple()}
        style={{
          ...styles.default,
          ...customStyles,
          backgroundColor: colors[color] ? colors[color] : colors.light
        }}
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 25,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 25
  },
  buttonView: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 10
  }
});

export default withTheme(Button);
