import {Alert, Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  alignStyles,
  inputStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../../components/MyStyles.tsx';
import {TopLogo} from '../../../components/Logo.tsx';
import {MyButton} from '../../../components/Button.tsx';
import {useNavigation} from '@react-navigation/native';
import { hide } from "react-native-bootsplash";

export const RegisterScreen = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [error, setError] = React.useState(' ');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TopLogo />
      <Text
        style={[
          textStyles.h3,
          alignStyles.center,
          textStyles.center,
          textStyles.bold,
        ]}>
        Đăng ký tài khoản
      </Text>
      <Text
        style={[
          textStyles.h6,
          textStyles.secondary,
          marginStyles.mt8,
          textStyles.center,
        ]}>
        Đăng ký ngay nhận ưu đãi khách hàng mới
      </Text>

      <View style={[inputStyles.inputContainer, marginStyles.mt32]}>
        <Image
          source={require('../../../assets/images/icons/call.png')}
          style={inputStyles.icon}
        />
        <TextInput
          style={inputStyles.input}
          placeholder="0123 456 789"
          keyboardType="phone-pad"
          placeholderTextColor="#9CA3AF"
          inputMode={'numeric'}
          value={phoneNumber}
          onChangeText={text => {
            let formattedText: string;
            if (text != null) {
              const digitsOnly = text.replace(/\D/g, '');
              const firstPart =
                digitsOnly.substring(0, 6).match(/.{1,3}/g) || [];
              const secondPart = digitsOnly.substring(6).match(/.{1,4}/g) || [];
              formattedText = [...firstPart, ...secondPart].join(' ').trim();
              setPhoneNumber(formattedText);
              setError(phoneValidator(text));
            }
          }}
          maxLength={12}
        />
      </View>
      <Text
        style={[
          textStyles.h6,
          textStyles.error,
          marginStyles.mt8,
          marginStyles.mh24,
        ]}>
        {error}
      </Text>
      <View style={marginStyles.mt8} />
      <MyButton
        btnText="Đăng ký"
        onPress={() => {
          if (error !== ' ' || phoneNumber.length === 0) {
            setError('Vui lòng nhập số điện thoại hợp lệ')
            return;
          }
          console.log('Clicked');
          const originalPhoneNum: string = phoneNumber.replace(/\s/g, '');
          console.log('Original phone number: ', originalPhoneNum);
          if (originalPhoneNum === '0346542636') {
            Alert.alert(
              'Đã gửi OTP',
              'Mã OTP đã được gửi tới số điện thoại của quý khách, vui lòng nhập mã để tiếp tục',
              [
                {
                  text: 'Đồng ý',
                  onPress: () => {
                    navigation.navigate('OTPSignUpScreen');
                  },
                },
                {
                  text: 'Hủy',
                  onPress: () => hide(),
                },
              ],
            );
          }
        }}
      />

      <View
        style={[
          marginStyles.mt24,
          alignStyles.center,
          marginStyles.mh24,
          {flexDirection: 'row'},
        ]}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#979797',
          }}
        />

        <Text style={[textStyles.h5, textStyles.secondary, marginStyles.mh24]}>
          hoặc
        </Text>

        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#979797',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

function phoneValidator(phoneNumber: string) {
  if (!phoneNumber) {
    return 'Số điện thoại không được để trống';
  }
  if (phoneNumber.substring(0, 1) !== '0') {
    return 'Số điện thoại phải bắt đầu bằng 0';
  }
  if (phoneNumber.length < 12) {
    return 'Số điện thoại không được nhỏ hơn 10 số';
  }
  return ' ';
}
