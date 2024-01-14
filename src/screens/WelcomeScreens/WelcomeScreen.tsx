import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  alignStyles,
  customWidth,
  inputStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../components/MyStyles.tsx';
import {TopLogo} from '../../components/Logo.tsx';
import {MyButton} from '../../components/Button.tsx';

export const WelcomeScreen = () => {
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
          source={require('../../assets/images/icons/call.png')}
          style={inputStyles.icon}
        />
        <TextInput
          style={inputStyles.input}
          placeholder="+84 123 456 789"
          keyboardType="phone-pad"
          placeholderTextColor="#9CA3AF"
          inputMode={'numeric'}
        />
      </View>
      <View style={marginStyles.mt16} />
      <MyButton
        btnText="Đăng ký"
        props={{
          onPress: () => {
            console.log('Đăng ký');
          },
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
