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

import TextInput from '../reusables/TextInput';
import Button from '../reusables/Button';
import Logo from '../../assets/logo.png';

const Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const { colors } = props.theme;
  const { navigation } = props;

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
            label='First Name'
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>
        <View marginBottom={10}>
          <TextInput
            label='Last Name'
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
        <View marginBottom={10}>
          <TextInput
            label='Email'
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View marginBottom={10}>
          <TextInput
            secureTextEntry={true}
            label='Password'
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View marginBottom={25}>
          <TextInput
            secureTextEntry={true}
            label='Confirm Password'
            value={cpassword}
            onChangeText={text => setCPassword(text)}
          />
        </View>
        <View style={styles.login}>
          <Button customStyles={{ paddingVertical: 14 }} color='primary'>
            <Text style={{ fontSize: 15, color: colors.light }}>
              CREATE ACCOUNT
            </Text>
          </Button>
        </View>
        <View style={styles.login}>
          <Button
            customStyles={{ paddingVertical: 14 }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ fontSize: 15, color: colors.secondary }}>
              BACK TO LOGIN
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
  flexDirection: 'row',
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

export default withTheme(Signup);
