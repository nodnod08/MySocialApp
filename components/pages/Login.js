import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  StatusBar
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID, EXPO_CLIENT_ID } from '@env';
import * as GoogleProvider from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import TextInput from '../reusables/TextInput';
import Button from '../reusables/Button';
import Logo from '../../assets/logo.png';
import Google from '../../assets/google.png';
import Github from '../../assets/github.png';

WebBrowser.maybeCompleteAuthSession();

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = props.theme;
  const { navigation } = props;

  const [request, response, promptAsync] = GoogleProvider.useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      navigation.navigate('Home');
    }
  }, [response]);

  return (
    <View style={styles.source}>
      <StatusBar
        barStyle={`${Platform.OS == 'ios' ? 'light' : 'dark'}-content`}
        backgroundColor='#fff'
      />
      <View style={styles.main}>
        <Image style={styles.logo} source={Logo} />
        <View marginBottom={10}>
          <TextInput
            label='Email'
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View marginBottom={45}>
          <TextInput
            secureTextEntry={true}
            label='Password'
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.login}>
          <Button customStyles={{ paddingVertical: 14 }}>
            <Text style={{ fontSize: 15, color: colors.secondary }}>LOGIN</Text>
          </Button>
        </View>
        <View style={styles.login}>
          <Button
            color='secondary'
            onPress={() => {
              promptAsync();
            }}
          >
            <Image style={styles.google} source={Google} />
            <Text style={{ fontSize: 15, color: '#fff' }}>
              {' '}
              Login With Google
            </Text>
          </Button>
        </View>
        <View style={styles.login}>
          <Button color='light'>
            <Image style={styles.google} source={Github} />
            <Text style={{ fontSize: 15, color: colors.secondary }}>
              {' '}
              Login With Github
            </Text>
          </Button>
        </View>
        <View>
          <Text style={{ fontSize: 20, marginBottom: 10, alignSelf: 'center' }}>
            OR
          </Text>
        </View>
        <View style={styles.login}>
          <Button
            customStyles={{ paddingVertical: 14 }}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={{ fontSize: 15, color: colors.secondary }}>
              CREATE ACCOUNT
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const buttons = {
  fontSize: 25,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  source: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height
  },
  main: {
    width: 300,
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  login: {
    marginBottom: 15
  },
  default: {
    ...buttons,
    paddingVertical: 11
  },
  google: {
    height: 25,
    width: 25
  }
});

export default withTheme(Login);
