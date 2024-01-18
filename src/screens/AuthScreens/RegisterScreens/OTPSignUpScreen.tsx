import React, { createRef, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import {
  alignStyles,
  inputStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../../assets/styles/MyStyles.tsx';
import { TopLogo } from '../../../components/Logo.tsx';
import { PrimaryButton } from '../../../components/Button.tsx';
import {SuccessModal} from '../../../components/Modal.tsx';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RootStackParamList from '../../../navigation/NavigationTypes.tsx';

export const OTPSignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [error, setError] = useState(' ');
  const [visible, setVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const otpInputs = Array(6)
    .fill(0)
    .map(() => createRef<TextInput>());
  const focusNextField = (id: number) => {
    if (id < otpInputs.length - 1 && otpInputs[id + 1]) {
      otpInputs[id + 1].current?.focus();
    }
  };
  const focusPrevField = (id: number) => {
    if (id > 0 && otpInputs[id - 1]) {
      otpInputs[id - 1].current?.focus();
    }
  };

  function validateOtp() {
    if (otp.length < 6) {
      setError('Vui lòng nhập mã OTP');
      return;
    }
    setError(' ');
  }

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
        Nhập mã xác nhận
      </Text>
      <Text
        style={[
          textStyles.h6,
          textStyles.secondary,
          marginStyles.mt8,
          marginStyles.mh24,
          textStyles.center,
        ]}>
        Vui lòng nhập mã mà chúng tôi đã gửi tới Số điện thoại của bạn. Vui lòng
        không cung cấp mà cho bất kỳ ai!
      </Text>
      <View style={[marginStyles.mt32, inputStyles.otpInputContainer]}>
        {otpInputs.map((input, i) => (
          <TextInput
            key={i}
            ref={input}
            style={[
              inputStyles.otpInput,
              textStyles.center,
              textStyles.h3,
              textStyles.bold,
            ]}
            maxLength={1}
            keyboardType="number-pad"
            numberOfLines={1}
            inputMode={"numeric"}
            onChangeText={text => {
              if (text) {
                focusNextField(i);
                setOtp(otp + text);
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                focusPrevField(i);
                setOtp(otp.slice(0, -1));
              }
            }}
          />
        ))}
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
      <PrimaryButton
        btnText="Xác nhận"
        onPress={() => {
          validateOtp();
          if (error === ' ') {
            setVisible(true);
            setTimeout(() => {
              setVisible(false);
              navigation.navigate('HomeScreen');
            }, 3000);
          }
        }}
      />
      <View
        style={[{ flexDirection: 'row' }, alignStyles.center, marginStyles.mt24]}>
        <Text style={[textStyles.h6, textStyles.secondary]}>
          Không nhận được mã?{' '}
        </Text>
        <Text style={[textStyles.h6, textStyles.link]}>Gửi lại</Text>
      </View>
      <SuccessModal
        isVisible={visible}
        message={'Bạn đã tạo tài khoản thành công. Hãy tận hưởng những ưu đãi và dịch vụ mà Bông Tuyết Trắng mang tới cho bạn...'} title={'Đăng ký thành công'}      />
    </SafeAreaView>
  );
};
