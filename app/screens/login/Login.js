import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CryptoJS from 'react-native-crypto-js';
import React, {useEffect, useState} from 'react';
import {JSHash, JSHmac, CONSTANTS} from 'react-native-hash';

import {Colors} from '../../constants';
import {fp, hp, wp} from '../../helpers/resDimensions';
import {Icon} from '../../assets/icon';

const JJMSECKEY = 'JJM!@#$1234';

const Login = () => {
  const [email, setEmail] = useState('');
  const [session, setSession] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptPass, setEncryptPass] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [reloadCaptcha, setReloadCaptcha] = useState(true);

  useEffect(() => {
    if (session) {
      JSHmac('message', JJMSECKEY, CONSTANTS.HmacAlgorithms.HmacSHA256)
        .then(hash =>
          JSHmac(
            hash,
            session?.data?.uuid,
            CONSTANTS.HmacAlgorithms.HmacSHA256,
          ).then(hash1 => setEncryptPass(hash1)),
        )
        .catch(e => console.log(e));
    }
  }, [password]);

  useEffect(() => {
    fetch('http://165.22.208.222/web/api/session/create')
      .then(r => r.json())
      .then(res => {
        setSession(res);
      });
  }, [reloadCaptcha]);

  const apiCall = () => {
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        session_id: session.data.id,
        captchaText: captcha,
        email: email,
        password: encryptPass,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    return fetch('http://165.22.208.222/web/api/login', data)
      .then(response => response.json()) // promise
      .then(json => alert(JSON.stringify(json, null, 2)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder={'User Id / Email'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder={'Password'}
      />
      <View style={styles.captchaCon}>
        <Image
          source={{
            uri: session?.data?.captcha,
          }}
          style={styles.captcha}
          resizeMode={'contain'}
        />
        <TextInput
          style={styles.captchaInput}
          onChangeText={setCaptcha}
          placeholder={'Captcha'}
        />
        <TouchableOpacity
          style={styles.reloadBtn}
          onPress={() => setReloadCaptcha(!reloadCaptcha)}>
          <Icon
            type="AntDesign"
            name="reload1"
            size={wp(5)}
            color={Colors.BLACK}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={apiCall}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: fp(8),
    fontWeight: 'bold',
    marginVertical: wp(10),
    color: Colors.BLACK,
    fontFamily: 'cursive',
  },
  input: {
    width: wp(90),
    borderWidth: 1,
    borderRadius: wp(5),
    marginVertical: wp(2),
    paddingHorizontal: wp(5),
  },
  captchaInput: {
    width: wp(40),
    borderWidth: 1,
    height: hp(6),
    borderTopLeftRadius: wp(5),
    borderBottomLeftRadius: wp(5),
    marginVertical: wp(2),
    paddingHorizontal: wp(5),
  },
  btn: {
    width: wp(90),
    borderWidth: 1,
    height: hp(6),
    borderRadius: wp(5),
    alignItems: 'center',
    marginVertical: wp(5),
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
  },
  btnTxt: {
    fontWeight: 'bold',
    color: Colors.WHITE,
    fontSize: fp(2),
  },
  captcha: {
    width: wp(40),
    height: hp(10),
  },
  captchaCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadBtn: {
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: hp(6),
    borderTopRightRadius: wp(5),
    borderBottomRightRadius: wp(5),
  },
});
