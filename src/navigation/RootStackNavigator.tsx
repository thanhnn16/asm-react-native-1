import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/AuthScreens/LoginScreens/LoginScreen";
import { OTPSignUpScreen } from "../screens/AuthScreens/RegisterScreens/OTPSignUpScreen";
import { RegisterScreen } from "../screens/AuthScreens/RegisterScreens/RegisterScreen";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";
import { Onboarding } from "../screens/WelcomeScreens/OnboardingScreen";
import SplashScreen from "../screens/WelcomeScreens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="OTPSignUpScreen"
                component={OTPSignUpScreen}
                options={{
                    headerShown: true,
                    title: '',
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    // headerBackImageSource: require('../src/assets/images/icons/back-icon.png'),
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ForgotPasswordScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStackNavigator;
