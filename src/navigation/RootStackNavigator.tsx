import LoginScreen from '../screens/auth/login/LoginScreen';
import {OTPSignUpScreen} from '../screens/auth/register/OTPSignUpScreen';
import {RegisterScreen} from '../screens/auth/register/RegisterScreen';
import {Onboarding} from '../screens/welcome/OnboardingScreen';
import SplashScreen from '../screens/welcome/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ForgotPasswordScreen from '../screens/auth/forgot_password/ForgotPasswordScreen';
import {CreatePassword} from '../screens/auth/register/CreatePassword.tsx';
import BookAppointment from '../screens/service/BookAppointment.tsx';
import NotificationScreen from '../screens/main/NotificationScreen.tsx';
import EditProfileScreen from '../screens/main/profile_screens/EditProfileScreen.tsx';
import FavoritesScreen from '../screens/main/profile_screens/FavoritesScreen.tsx';
import OrderHistoryScreen from '../screens/main/profile_screens/OrderHistoryScreen.tsx';
import SettingsScreen from '../screens/main/profile_screens/SettingsScreen.tsx';
import ProductDetail from '../screens/product/ProductDetail.tsx';

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
        name="CreatePassword"
        component={CreatePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        key="ForgotPasswordScreen"
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        key="BottomTabNavigator"
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        key="BookAppointment"
        name="BookAppointment"
        component={BookAppointment}
        options={{
          title: 'Đặt lịch hẹn',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          title: 'Thông báo',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Sửa hồ sơ',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Mục yêu thích',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          title: 'Lịch sử đặt hàng',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Cài đặt',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Chi tiết sản phẩm',
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: '#374151',
          headerBackVisible: true,
          headerBackImageSource: require('../../src/assets/images/icons/arrow-left.png'),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
