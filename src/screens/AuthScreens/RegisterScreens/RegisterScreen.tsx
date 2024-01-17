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
import {
  GoogleButton,
  GuestButton,
  PrimaryButton,
} from '../../../components/Button.tsx';
import {useNavigation} from '@react-navigation/native';
import {hide} from 'react-native-bootsplash';

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
      <PrimaryButton
        btnText="Đăng ký"
        onPress={() => {
          if (error !== ' ' || phoneNumber.length === 0) {
            setError('Vui lòng nhập số điện thoại hợp lệ');
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
                    // @ts-ignore
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

      <View style={marginStyles.mt8} />

      <GoogleButton
        btnText="Đăng nhập với Google"
        onPress={() => {
          console.log('Clicked');
        }}
      />

      <View style={marginStyles.mt8} />

      <GuestButton
        btnText="Đăng nhập với tư cách khách"
        onPress={() => {
          console.log('Clicked');
        }}
      />

      <View style={marginStyles.mt8} />

      <Text
        style={[
          textStyles.h7,
          textStyles.secondary,
          marginStyles.mt4,
          marginStyles.mh24,
          textStyles.center,
        ]}>
        Bằng cách đăng ký, bạn đã đồng ý với
      </Text>
      <Text
        style={[
          textStyles.h7,
          textStyles.secondary,
          marginStyles.mt4,
          marginStyles.mh24,
          textStyles.center,
          textStyles.link,
        ]}>
        Điều khoản dịch vụ và Chính sách bảo mật của chúng tôi
      </Text>

      <View style={marginStyles.mt8} />

      <Text
        style={[
          textStyles.h6,
          textStyles.secondary,
          marginStyles.mt8,
          marginStyles.mh24,
          textStyles.center,
        ]}>
        Bạn đã có tài khoản?{' '}
        <Text
          style={[textStyles.h6, textStyles.primary]}
          onPress={() => {
            console.log('Clicked');
          }}>
          Đăng nhập
        </Text>
      </Text>
      <View style={marginStyles.mt8} />
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