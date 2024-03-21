import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  alignStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../../assets/styles/MyStyles';
import {TopLogo} from '../../../components/Logo';
import {PasswordInputField} from '../../../components/InputField';
import {PrimaryButton} from '../../../components/Button';
// import { register } from "../../../api/services/authService.ts";
import {SuccessModal} from '../../../components/Modal.tsx';
import {useUserRegisterMutation} from '../../../api/user/auth/auth.service.ts';
import {setCurrentUser, setToken} from '../../../api/user/user.slice.ts';

export const CreatePassword = ({route, navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(' ');
  const [confirmError, setConfirmError] = useState(' ');
  const [modalVisiable, setModalVisiable] = useState(false);
  const phoneNumber: string = route.params.phoneNumber;

  const [register] = useUserRegisterMutation();

  const handleCreatePassword = () => {
    if (password === confirmPassword) {
      setError(' ');
      setConfirmError(' ');
    } else {
      if (password.length < 8) {
        setError('Mật khẩu phải có ít nhất 8 ký tự');
      }
      setConfirmError('Mật khẩu không khớp');
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
        Tạo mật khẩu
      </Text>
      <Text
        style={[
          textStyles.h6,
          textStyles.secondary,
          marginStyles.mt8,
          textStyles.center,
          marginStyles.mh24,
        ]}>
        Bạn cần tạo mật khẩu để hoàn thành việc đăng ký. Vui lòng nhập một mật
        khẩu mạnh.
      </Text>
      <Text style={[textStyles.center, textStyles.secondary]}>
        Mật khẩu phải có ít nhất 8 ký tự
      </Text>

      <View style={marginStyles.mv8} />

      <PasswordInputField
        password={password}
        setPassword={setPassword}
        setError={setError}
        placeholder={'Nhập mật khẩu'}
      />
      <Text
        style={[
          textStyles.h6,
          textStyles.error,
          marginStyles.mt8,
          marginStyles.mh24,
        ]}>
        {error}
      </Text>

      <PasswordInputField
        password={confirmPassword}
        setPassword={setConfirmPassword}
        setError={setConfirmError}
        placeholder={'Nhập lại mật khẩu'}
      />

      <Text
        style={[
          textStyles.h6,
          textStyles.error,
          marginStyles.mt8,
          marginStyles.mh24,
        ]}>
        {confirmError}
      </Text>

      <PrimaryButton
        btnText="Hoàn tất đăng ký"
        onPress={async () => {
          handleCreatePassword();
          if (error === ' ' && confirmError === ' ') {
            try {
              const response = await register({
                phoneNumber,
                password,
              });
              if ('data' in response) {
                const {status, message, user} = response.data;
                console.log(status, message, user);
                setCurrentUser(user);
                setToken(user.token);
                setModalVisiable(true);
              }
              navigation.reset({
                index: 0,
                routes: [{name: 'BottomTabNavigator'}],
              });
            } catch (e) {
              console.error('Error: ', e);
            }
          }
        }}
      />
      <SuccessModal
        isVisible={modalVisiable}
        title={'Đăng ký thành công'}
        message={
          'Hãy tận hưởng những ưu đãi và dịch vụ mà Bông Tuyết Trắng mang tới cho bạn.'
        }
      />
    </SafeAreaView>
  );
};
