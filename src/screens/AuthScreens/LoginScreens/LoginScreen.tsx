import React, { useState } from 'react';
import { View, TextInput, Button, Text, SafeAreaView, Alert, Image } from 'react-native';
import { alignStyles, inputStyles, marginStyles, styles, textStyles } from '../../../components/MyStyles';
import { TopLogo } from '../../../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { hide } from 'react-native-bootsplash';
import { PrimaryButton, GoogleButton, GuestButton } from '../../../components/Button';

const LoginScreen: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
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
                            const secondPart = digitsOnly.substring(6).match(/.{1,4}/g) || [];
                            formattedText = [...firstPart, ...secondPart].join(' ').trim();
                            setPhoneNumber(formattedText);
                            setError(phoneValidator(text));
                        }
                    }}
                    maxLength={12}
                />
            </View>
            <View style={[inputStyles.inputContainer, marginStyles.mt32]}>
                <Image
                    source={require('../../../assets/images/icons/call.png')}
                    style={inputStyles.icon}
                />
                <TextInput
                    style={inputStyles.input}
                    placeholder="******"
                    keyboardType="visible-password"
                    placeholderTextColor="#9CA3AF"
                    inputMode={'text'}
                    value={password}
                    onChangeText={text => {
                        let formattedText: string;
                        if (text != null) {
                            console.log('Password: ', text);
                        }
                    }}
                    maxLength={50}
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
                btnText="Đăng nhập"
                onPress={() => {
                    passwordValidator(password);
                    if (error !== ' ' || phoneNumber.length === 0) {
                        setError('Sai số điện thoại hoặc mật khẩu')
                        return;
                    }
                    console.log('Clicked');
                    const originalPhoneNum: string = phoneNumber.replace(/\s/g, '');
                    console.log('Original phone number: ', originalPhoneNum);
                    if (originalPhoneNum === '0346542636') {
                        console.log('Correct phone number');
                    }
                }}
            />

            <View
                style={[
                    marginStyles.mt24,
                    alignStyles.center,
                    marginStyles.mh24,
                    { flexDirection: 'row' },
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
                style={[textStyles.h6, textStyles.link, marginStyles.mt8, marginStyles.mh24, textStyles.center, textStyles.bold]}
                onPress={() => {
                    console.log('Clicked');
                }}>
                Đăng ký
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
                        console.log('Clicked');
                    }}>
                    Đăng ký
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

function passwordValidator(password: string) {
    if (!password) {
        return 'Mật khẩu không được để trống';
    }
    if (password.length < 6) {
        return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    return ' ';
}

export default LoginScreen;