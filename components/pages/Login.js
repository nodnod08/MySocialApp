import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import { withTheme } from 'react-native-paper';

import TextInput from '../reusables/TextInput';
import Logo from '../../assets/logo.png';
import Google from '../../assets/google.png';
import Github from '../../assets/github.png';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = props.theme;

  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={Logo} />
      <View marginBottom={10}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View marginBottom={45}>
        <TextInput
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.login}>
        <TouchableOpacity
          style={{
            ...styles.default,
            backgroundColor: '#fff',
            borderColor: colors.secondary,
            borderWidth: 0.5
          }}
        >
          <Text style={{ fontSize: 15, color: colors.secondary }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <TouchableOpacity
          style={{
            ...styles.social,
            backgroundColor: colors.secondary
          }}
        >
          <Image style={styles.google} source={Google} />
          <Text style={{ fontSize: 15, color: '#fff' }}>
            {' '}
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <TouchableOpacity
          style={{
            ...styles.social2,
            backgroundColor: '#fff',
            borderColor: colors.secondary,
            borderWidth: 0.5
          }}
        >
          <Image style={styles.google} source={Github} />
          <Text style={{ fontSize: 15, color: colors.secondary }}>
            {' '}
            Login With Github
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 20, marginBottom: 10, alignSelf: 'center' }}>
          OR
        </Text>
      </View>
      <View style={styles.login}>
        <TouchableOpacity
          style={{
            ...styles.default,
            backgroundColor: '#fff',
            borderColor: colors.secondary,
            borderWidth: 0.5
          }}
        >
          <Text style={{ fontSize: 15, color: colors.secondary }}>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const buttons = {
  fontSize: 25,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 80,
    height: '100%',
    width: 300
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  login: {
    marginBottom: 15
  },
  social: {
    ...buttons,
    paddingVertical: 9
  },
  social2: {
    ...buttons,
    paddingVertical: 8
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
