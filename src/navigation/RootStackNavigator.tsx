import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/login/LoginScreen";
import { OTPSignUpScreen } from "../screens/auth/register/OTPSignUpScreen";
import { RegisterScreen } from "../screens/auth/register/RegisterScreen";
import HomeScreen from "../screens/main/HomeScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import { Onboarding } from "../screens/welcome/OnboardingScreen";
import SplashScreen from "../screens/welcome/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ForgotPasswordScreen from "../screens/auth/forgot_password/ForgotPasswordScreen";
import { CreatePassword } from "../screens/auth/register/CreatePassword.tsx";

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="OTPSignUpScreen"
        component={OTPSignUpScreen}
        options={{
          headerShown: true,
          title: "",
          headerBackTitleVisible: false,
          headerTransparent: true
          // headerBackImageSource: require('../src/assets/images/icons/back-icon.png'),
        }}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        key="ForgotPasswordScreen"
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        key="BottomTabNavigator"
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
