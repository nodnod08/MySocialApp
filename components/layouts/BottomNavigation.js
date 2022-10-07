import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { withTheme } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BottomNavigation = props => {
  const { colors } = props.theme;
  const ripple = {
    color: colors.secondary1,
    borderless: true
  };

  const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      bottom: '2%',
      left: '4%',
      width: '92%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 50,
      backgroundColor: colors.grey,
      borderRadius: 50,
      elevation: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch'
    },
    navigator: {
      flex: 1,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  return (
    <View style={styles.bottom}>
      <Pressable style={styles.navigator} android_ripple={ripple}>
        <AntDesign name='home' size={24} color='black' />
      </Pressable>
      <Pressable style={styles.navigator} android_ripple={ripple}>
        <MaterialCommunityIcons
          name='view-dashboard-edit-outline'
          size={24}
          color='black'
        />
      </Pressable>
      <Pressable style={styles.navigator} android_ripple={ripple}>
        <Ionicons
          name='ios-chatbubble-ellipses-outline'
          size={24}
          color='black'
        />
      </Pressable>
      <Pressable style={styles.navigator} android_ripple={ripple}>
        <Ionicons name='ios-settings-outline' size={24} color='black' />
      </Pressable>
    </View>
  );
};

export default withTheme(BottomNavigation);
