import React, {useEffect, useState} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {
  NavigationContainer,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from './screens/AuthScreens/RegisterScreens/RegisterScreen.tsx';
import {Onboarding} from './screens/WelcomeScreens/OnboardingScreen.tsx';
import {MyText, textStyles} from './assets/styles/MyStyles.tsx';
import {OTPSignUpScreen} from './screens/AuthScreens/RegisterScreens/OTPSignUpScreen.tsx';

import RootStackParamList from './navigation/NavigationTypes.tsx';
import HomeScreen from './screens/MainScreens/HomeScreen.tsx';
import ProfileScreen from "./screens/MainScreens/ProfileScreen.tsx";
import LoginScreen from "./screens/AuthScreens/LoginScreens/LoginScreen.tsx";
import SplashScreen from './screens/WelcomeScreens/SplashScreen.tsx';
import RootStackNavigator from './navigation/RootStackNavigator.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
