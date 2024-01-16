import React, {createRef, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {
  alignStyles,
  inputStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../../components/MyStyles.tsx';
import {TopLogo} from '../../../components/Logo.tsx';
import {PrimaryButton} from '../../../components/Button.tsx';
import CongratsModal from '../../../components/CongratsModal.tsx';

export const OTPSignUpScreen = () => {
  const [error, setError] = useState(' ');
  const [visible, setVisible] = useState(false);
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
            inputMode={'numeric'}
            onChangeText={text => {
              if (text) {
                focusNextField(i);
              }
            }}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                focusPrevField(i);
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
          if (error !== ' ') {
            setError('Vui lòng nhập mã OTP');
            return;
          }
          setVisible(true);
        }}
      />
      <View
        style={[{flexDirection: 'row'}, alignStyles.center, marginStyles.mt24]}>
        <Text style={[textStyles.h6, textStyles.secondary]}>
          Không nhận được mã?{' '}
        </Text>
        <Text style={[textStyles.h6, textStyles.link]}>Gửi lại</Text>
      </View>
      <CongratsModal isVisible={visible} text={'Chúc mừng nhé!!'} />
    </SafeAreaView>
  );
};
