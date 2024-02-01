import { NavigationProp, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TextInput, Button, Alert } from "react-native";
import { styles, textStyles, alignStyles, marginStyles, inputStyles } from "../../../assets/styles/MyStyles";
import { TopLogo } from "../../../components/Logo";
import RootStackParamList from "../../../navigation/NavigationTypes";
import { PasswordInputField } from "../../../components/InputField";
import { hide } from "react-native-bootsplash";
import { PrimaryButton } from "../../../components/Button";
import { register } from "../../../api/services/authService.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SuccessModal } from "../../../components/Modal.tsx";


export const CreatePassword = ({ route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(" ");
  const [confirmError, setConfirmError] = useState(" ");
  const [modalVisiable, setModalVisiable] = useState(false);
  const phoneNumber: string = route.params.phoneNumber;

  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleCreatePassword = () => {
    if (password === confirmPassword) {
      console.log("Match");
      setError(" ");
      setConfirmError(" ");
    } else {
      if (password.length < 8) {
        setError("Mật khẩu phải có ít nhất 8 ký tự");
      }
      setConfirmError("Mật khẩu không khớp");
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
          textStyles.bold
        ]}>
        Tạo mật khẩu
      </Text>
      <Text
        style={[
          textStyles.h6,
          textStyles.secondary,
          marginStyles.mt8,
          textStyles.center,
          marginStyles.mh24
        ]}>
        Bạn cần tạo mật khẩu để hoàn thành việc đăng ký. Vui lòng nhập một mật khẩu mạnh.
      </Text>
      <Text style={
        [textStyles.center,
          textStyles.secondary]
      }>Mật khẩu phải có ít nhất 8 ký tự</Text>

      <View style={marginStyles.mv8} />

      <PasswordInputField password={password} setPassword={setPassword} setError={setError}
                          placeholder={"Nhập mật khẩu"} />
      <Text
        style={[
          textStyles.h6,
          textStyles.error,
          marginStyles.mt8,
          marginStyles.mh24
        ]}>
        {error}
      </Text>

      <PasswordInputField password={confirmPassword} setPassword={setConfirmPassword} setError={setConfirmError}
                          placeholder={"Nhập lại mật khẩu"} />

      <Text
        style={[
          textStyles.h6,
          textStyles.error,
          marginStyles.mt8,
          marginStyles.mh24
        ]}>
        {confirmError}
      </Text>

      <PrimaryButton
        btnText="Hoàn tất đăng ký"
        onPress={async () => {
          handleCreatePassword();
          if (error === " " && confirmError === " ") {
            try {
              const data = {
                phone_number: phoneNumber,
                password: password
              };
              console.log("Data: ", data);
              const response = await register(data);
              console.log("Response: ", response);

              const token = response.token;
              const uid = response.userId.toString();

              await AsyncStorage.multiSet([["isLoggedIn", "true"], ["token", token], ["uid", uid]]);

              navigation.reset({
                index: 0,
                routes: [{ name: "BottomTabNavigator" }]
              });

            } catch (e) {
              console.error("Error: ", e);
            }
          }
        }}
      />
      <SuccessModal isVisible={modalVisiable} title={'Đăng ký thành công'} message={
        'Hãy tận hưởng những ưu đãi và dịch vụ mà Bông Tuyết Trắng mang tới cho bạn.'
      } />
    </SafeAreaView>
  );
};
