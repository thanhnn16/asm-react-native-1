import React, {createRef, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {
  alignStyles,
  inputStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../../assets/styles/MyStyles.tsx';
import {TopLogo} from '../../../components/Logo.tsx';
import {PrimaryButton} from '../../../components/Button.tsx';
import {LoadingModal} from '../../../components/Modal.tsx';

export const OTPSignUpScreen = ({route, navigation}) => {
  const [error, setError] = useState(' ');
  const [visible, setVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const phoneNumber: string = route.params.phoneNumber;
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
        Nhập mã OTP. Vui lòng không cung cấp OTP cho bất kỳ ai! (OTP: 123456)
      </Text>
      <Text
        style={[
          textStyles.h6,
          marginStyles.mt8,
          marginStyles.mh24,
          textStyles.center,
        ]}>
        {phoneNumber}
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
            inputMode={'numeric'}
            onChangeText={text => {
              if (text) {
                focusNextField(i);
                setOtp(otp + text);
              }
            }}
            onKeyPress={({nativeEvent}) => {
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
              navigation.navigate('CreatePassword', {
                phoneNumber: phoneNumber,
              });
            }, 1000);
          }
        }}
      />
      <View
        style={[{flexDirection: 'row'}, alignStyles.center, marginStyles.mt24]}>
        <Text style={[textStyles.h6, textStyles.secondary]}>
          Không nhận được mã?{' '}
        </Text>
        <Text style={[textStyles.h6, textStyles.link]}>Gửi lại</Text>
      </View>
      <LoadingModal isVisible={visible} title={'Đang xác nhận...'} />
    </SafeAreaView>
  );
};
