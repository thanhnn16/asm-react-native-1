import React, {useEffect, useState} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import BootSplash from 'react-native-bootsplash';
import {
  NavigationContainer,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from './screens/AuthScreens/RegisterScreens/RegisterScreen.tsx';
import {Onboarding} from './screens/WelcomeScreens/OnboardingScreen.tsx';
import {MyText, textStyles} from './components/MyStyles.tsx';
import {OTPSignUpScreen} from './screens/AuthScreens/RegisterScreens/OTPSignUpScreen.tsx';

import RootStackParamList from './navigation/navigationTypes.tsx';

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
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={RegisterScreen}
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
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: '',
            headerBackTitleVisible: false,
            headerTransparent: true,
            // headerBackImageSource: require('../src/assets/images/icons/back-icon.png'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.textBrand}>Bông Tuyết Trắng</Text>
      <Text style={styles.textSlogan}>Không ngại nắng mưa</Text>
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </View>
  );
};

type Props = {
  onAnimationEnd: () => void;
};

const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));
  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../src/assets/images/bootsplash/bootsplash_manifest.json'),
    logo: require('../src/assets/images/bootsplash/bootsplash_logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      Animated.stagger(400, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: 0,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -100,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0.005,
        duration: 1500,
        delay: 500,
      }).start(() => {
        onAnimationEnd();
        const getData = async () => {
          // await AsyncStorage.clear();
          try {
            const value = await AsyncStorage.getItem('onboarding');
            if (value !== null) {
              navigation.reset({
                index: 0,
                routes: [{name: 'WelcomeScreen'}],
              });
            } else {
              navigation.reset({
                index: 0,
                routes: [{name: 'Onboarding'}],
              });
            }
          } catch (e) {
            console.log(e);
            navigation.reset({
              index: 0,
              routes: [{name: 'Onboarding'}],
            });
          }
        };
        getData().then(r => console.log('Get onboarding status: ', r));
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Animated.Image
        {...logo}
        style={[logo.style, {transform: [{translateY}]}]}
      />
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textBrand: {
    ...textStyles.regular,
    fontSize: 24,
    fontWeight: '700',
    margin: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Faustina-VariableFont_wght',
  },
  textSlogan: {
    ...textStyles.regular,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Faustina-VariableFont_wght',
  },
});

export default App;
