import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  alignStyles,
  customFonts,
  inputStyles,
  marginStyles,
  styles,
  textStyles,
} from '../../../assets/styles/MyStyles.tsx';
import {TopLogo} from '../../../components/Logo';
import {
  GoogleButton,
  GuestButton,
  PrimaryButton,
} from '../../../components/Button';
import {LoadingModal} from '../../../components/Modal.tsx';
import {PasswordInputField} from '../../../components/InputField.tsx';
import {useUserLoginMutation} from '../../../api/user/auth/auth.service.ts';
import {Auth} from '../../../api/user/auth/auth.type.ts';
import {setCurrentUser, setToken} from '../../../api/user/user.slice.ts';
import {useDispatch} from 'react-redux';

export const LoginScreen = ({navigation}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(' ');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [login] = useUserLoginMutation();

  const handleLogin = async (phoneNumber: string, password: string) => {
    setLoading(true);
    try {
      const result = await login({phoneNumber, password});
      if ('data' in result) {
        const {status, user} = result.data as Auth;
        if (status === 'not_found') {
          setError('Số điện thoại không tồn tại');
          return;
        } else if (status === 'invalid') {
          setError('Mật khẩu không đúng');
          return;
        } else if (status === 'success') {
          dispatch(setCurrentUser(user));
          dispatch(setToken(user.token));
          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{name: 'BottomTabNavigator'}],
          });
        }
      } else if ('error' in result) {
        console.log(result.error);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('Mounted login');
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <TopLogo />
          <Text
            style={[
              textStyles.h3,
              alignStyles.center,
              textStyles.center,
              textStyles.bold,
            ]}>
            Chào mừng trở lại!
          </Text>
          <Text
            style={[
              textStyles.h6,
              textStyles.secondary,
              marginStyles.mt8,
              textStyles.center,
            ]}>
            Cảm ơn bạn đã tin tưởng chúng tôi
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
                  const secondPart =
                    digitsOnly.substring(6).match(/.{1,4}/g) || [];
                  formattedText = [...firstPart, ...secondPart]
                    .join(' ')
                    .trim();
                  setPhoneNumber(formattedText);
                  setError(phoneValidator(text));
                }
              }}
              maxLength={12}
            />
          </View>
          <View style={marginStyles.mt4} />

          <PasswordInputField
            password={password}
            placeholder={'********'}
            setPassword={setPassword}
            setError={setError}
          />

          <Text
            style={[
              textStyles.h6,
              textStyles.error,
              marginStyles.mt4,
              marginStyles.mh24,
            ]}>
            {error}
          </Text>
          <PrimaryButton
            btnText="Đăng nhập"
            onPress={() => {
              if (phoneNumber === '' || password === '') {
                setError('Vui lòng nhập đầy đủ thông tin');
                return;
              }
              const originalPhoneNum: string = phoneNumber.replace(/\s/g, '');
              handleLogin(originalPhoneNum, password).then(() =>
                setLoading(false),
              );
            }}
          />

          <LoadingModal isVisible={loading} title={'Đang đăng nhập...'} />
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

            <Text
              style={[textStyles.h5, textStyles.secondary, marginStyles.mh24]}>
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

          <GoogleButton btnText="Đăng nhập với Google" onPress={() => {}} />

          <View style={marginStyles.mt4} />

          <GuestButton
            btnText="Đăng nhập với tư cách khách"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'BottomTabNavigator'}],
              });
            }}
          />

          <View style={marginStyles.mt8} />

          <Text
            style={[
              textStyles.h6,
              textStyles.link,
              marginStyles.mt4,
              textStyles.center,
              customFonts.medium,
            ]}
            onPress={() => {
              navigation.navigate('AnimSelect');
            }}>
            Quên mật khẩu?
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
            Chưa có tài khoản?{' '}
            <Text
              style={[textStyles.h6, textStyles.primary]}
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}>
              Đăng ký
            </Text>
          </Text>
          <View style={marginStyles.mt8} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

export default LoginScreen;
