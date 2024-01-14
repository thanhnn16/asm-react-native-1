import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
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
import {WelcomeScreen} from './screens/WelcomeScreens/WelcomeScreen.tsx';
import {Onboarding} from './screens/WelcomeScreens/OnboardingScreen.tsx';
import {MyText, textStyles} from './components/MyStyles.tsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
});

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  SplashScreen: undefined;
  Welcome: undefined;
  Onboarding: undefined;
};

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
          name="Welcome"
          component={WelcomeScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bông Tuyết Trắng</Text>
      <Text style={styles.text}>Không ngại nắng mưa</Text>
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(true);
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
  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../src/assets/images/bootsplash/bootsplash_manifest.json'),
    logo: require('../src/assets/images/bootsplash/bootsplash_logo.png'),
    // darkLogo: require("../assets/bootsplash_dark_logo.png"),
    // brand: require("../assets/bootsplash_brand.png"),
    // darkBrand: require("../assets/bootsplash_dark_brand.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const {height} = Dimensions.get('window');

      Animated.stagger(850, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 700,
        delay: 1000,
      }).start(() => {
        onAnimationEnd();
        navigation.navigate('Onboarding');

        // const getData = async () => {
        //   try {
        //     const value = await AsyncStorage.getItem('onboarding');
        //     if (value !== null) {
        //       navigation.navigate('Welcome');
        //     }
        //   } catch (e) {
        //     console.log(e);
        //     navigation.navigate('Onboarding');
        //   }
        // };
        // getData().then(r => r);
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

export default App;
