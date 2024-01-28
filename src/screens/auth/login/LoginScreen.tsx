import React, { useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import {
  alignStyles,
  customFonts,
  inputStyles,
  marginStyles,
  styles,
  textStyles
} from "../../../assets/styles/MyStyles.tsx";
import { TopLogo } from "../../../components/Logo";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { GoogleButton, GuestButton, PrimaryButton } from "../../../components/Button";
import { LoadingModal, SuccessModal } from "../../../components/Modal.tsx";
import RootStackParamList from "../../../navigation/NavigationTypes.tsx";
import { login } from "../../../api/services/authService";
import { setAuthToken } from "../../../api/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PasswordInputField } from "../../../components/InputField.tsx";

export const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleLogin = async (phone_number: string, password: string) => {
    try {
      const data = {
        phone_number: phone_number,
        password: password
      };

      const response = await login(data);

      const uid = response.userId;
      await AsyncStorage.multiSet([['token', response.token], ['isLoggedIn', 'true'], ['uid', String(uid)]]);

      setAuthToken(response.token);

      navigation.reset({
        index: 0,
        routes: [{ name: "BottomTabNavigator" }]
      });
    } catch (error) {
      // @ts-ignore
      if (error.response.status === 401) {
        setError("Số điện thoại hoặc mật khẩu không đúng");
      }
    }
  };

  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

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
        Chào mừng trở lại!
      </Text>
      <Text
        style={[
          textStyles.h6,
          textStyles.secondary,
          marginStyles.mt8,
          textStyles.center
        ]}>
        Cảm ơn bạn đã tin tưởng chúng tôi
      </Text>

      <View style={[inputStyles.inputContainer, marginStyles.mt32]}>
        <Image
          source={require("../../../assets/images/icons/call.png")}
          style={inputStyles.icon}
        />
        <TextInput
          style={inputStyles.input}
          placeholder="0123 456 789"
          keyboardType="phone-pad"
          placeholderTextColor="#9CA3AF"
          inputMode={"numeric"}
          value={phoneNumber}
          onChangeText={text => {
            let formattedText: string;
            if (text != null) {
              const digitsOnly = text.replace(/\D/g, "");
              const firstPart =
                digitsOnly.substring(0, 6).match(/.{1,3}/g) || [];
              const secondPart = digitsOnly.substring(6).match(/.{1,4}/g) || [];
              formattedText = [...firstPart, ...secondPart].join(" ").trim();
              setPhoneNumber(formattedText);
              setError(phoneValidator(text));
            }
          }}
          maxLength={12}
        />
      </View>
      <View style={marginStyles.mt4} />

      <PasswordInputField password={password} placeholder={'********'} setPassword={setPassword} setError={setError} />

      <Text
        style={[
          textStyles.h6,
          textStyles.error,
          marginStyles.mt4,
          marginStyles.mh24
        ]}>
        {error}
      </Text>
      <PrimaryButton
        btnText="Đăng nhập"
        onPress={() => {
          if (phoneNumber === "" || password === "") {
            setError("Vui lòng nhập đầy đủ thông tin");
            return;
          }
          const originalPhoneNum: string = phoneNumber.replace(/\s/g, "");
          handleLogin(originalPhoneNum, password).then(() => {
            setLoading(true);
            timeoutId.current = setTimeout(() => {
              setLoading(false);
            }, 1000);
          }).catch((error) => {
            console.log(error);
          });
        }}
      />
      <SuccessModal
        isVisible={modalVisible}
        title={"Đăng nhập thành công"}
        message={"Vui lòng chờ giay lát, hệ thống sẽ chuyển hướng sau 3s..."}
      />
      <LoadingModal isVisible={loading} title={"Đang đăng nhập..."} />
      <View
        style={[
          marginStyles.mt24,
          alignStyles.center,
          marginStyles.mh24,
          { flexDirection: "row" }
        ]}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#979797"
          }}
        />

        <Text style={[textStyles.h5, textStyles.secondary, marginStyles.mh24]}>
          hoặc
        </Text>

        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#979797"
          }}
        />
      </View>

      <View style={marginStyles.mt8} />

      <GoogleButton
        btnText="Đăng nhập với Google"
        onPress={() => {
          setLoading(true);
          timeoutId.current = setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      />

      <View style={marginStyles.mt4} />

      <GuestButton
        btnText="Đăng nhập với tư cách khách"
        onPress={() => {
          AsyncStorage.setItem("isLoggedIn", "true").then(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "BottomTabNavigator" }]
            });
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
          customFonts.medium
        ]}
        onPress={() => {
          console.log("Forgot password clicked");
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
          textStyles.center
        ]}>
        Chưa có tài khoản?{" "}
        <Text
          style={[textStyles.h6, textStyles.primary]}
          onPress={() => {
            navigation.navigate("RegisterScreen");
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
    return "Số điện thoại không được để trống";
  }
  if (phoneNumber.substring(0, 1) !== "0") {
    return "Số điện thoại phải bắt đầu bằng 0";
  }
  if (phoneNumber.length < 12) {
    return "Số điện thoại không được nhỏ hơn 10 số";
  }
  return " ";
}

function passwordValidator(password: string) {
  if (!password) {
    return "Mật khẩu không được để trống";
  }
  if (password.length < 8) {
    return "Mật khẩu phải có ít nhất 8 ký tự";
  }
  return " ";
}


export default LoginScreen;
