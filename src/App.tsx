import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Animated,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BootSplash from 'react-native-bootsplash';

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

const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // set transparent status bar
    StatusBar.setBarStyle('dark-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <>
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
    </>
  );
};

type Props = {
  onAnimationEnd: () => void;
};

const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const navigation = useNavigation();
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

      Animated.stagger(700, [
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
        duration: 1500,
        delay: 900,
      }).start(() => {
        onAnimationEnd();
        navigation.navigate('Welcome');
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Animated.Image
        {...logo}
        style={[logo.style, {transform: [{translateY}]}]}
      />

      {/* <Animated.Image {...brand} style={[brand.style, { opacity }]} /> */}
    </Animated.View>
  );
};

export default App;
