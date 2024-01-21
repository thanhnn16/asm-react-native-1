import { NavigationProp, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TextInput, Button, Alert } from "react-native";
import { styles, textStyles, alignStyles, marginStyles, inputStyles } from "../../../assets/styles/MyStyles";
import { TopLogo } from "../../../components/Logo";
import RootStackParamList from "../../../navigation/NavigationTypes";
import { PasswordInputField } from "../../../components/InputField";
import { hide } from "react-native-bootsplash";
import { PrimaryButton } from "../../../components/Button";


export const CreatePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(' ');
    const [confirmError, setConfirmError] = useState(' ');

    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    // const route = useRoute<RouteProp<RootStackParamList, 'CreatePassword'>>();

    const handleCreatePassword = () => {
        if (password === confirmPassword) {
            console.log('Match');
            setError(' ');
            setConfirmError(' ');
        } else {
            if (password.length < 6) {
                setError('Mật khẩu phải có ít nhất 6 ký tự');
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
                Bạn cần tạo mật khẩu để hoàn thành việc đăng ký. Vui lòng nhập một mật khẩu mạnh.
            </Text>
          <Text style={
            [textStyles.center,
            textStyles.secondary]
          }>Mật khẩu phải có ít nhất 6 ký tự</Text>

          <View style={marginStyles.mv8} />

            <PasswordInputField password={password} setPassword={setPassword} setError={setError} placeholder={"Nhập mật khẩu"} />
            <Text
                style={[
                    textStyles.h6,
                    textStyles.error,
                    marginStyles.mt8,
                    marginStyles.mh24,
                ]}>
                {error}
            </Text>

            <PasswordInputField password={confirmPassword} setPassword={setConfirmPassword} setError={setConfirmError} placeholder={"Nhập lại mật khẩu"}/>

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
                onPress={() => {
                    handleCreatePassword();
                    console.log('Clicked');
                    if (error === ' ' && confirmError === ' ') {
                        Alert.alert(
                            'Thành công',
                            'Đăng ký thành công. Bạn sẽ được chuyển đến trang chủ',
                            [
                                {
                                    text: 'Đồng ý',
                                    onPress: () => {
                                        // @ts-ignore
                                        navigation.navigate('BottomTabNavigator');
                                    },
                                },
                            ],
                        );
                    }
                }}
            />
        </SafeAreaView>
    );
}
