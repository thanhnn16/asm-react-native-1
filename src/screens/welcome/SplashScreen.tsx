import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {splashStyles} from '../../assets/styles/MyStyles';
import RootStackParamList from '../../navigation/NavigationTypes';
import BootSplash from 'react-native-bootsplash';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';

const useGetData = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const token = useSelector((state: RootState) =>
    state.user.currentUser ? state.user.currentUser.token : null,
  );
  return async () => {
    try {
      let isLoggedIn = false;
      token !== null ? (isLoggedIn = true) : (isLoggedIn = false);
      if (isLoggedIn) {
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTabNavigator'}],
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
};

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={splashStyles.container}>
      <Text style={splashStyles.textBrand}>Bông Tuyết Trắng</Text>
      <Text style={splashStyles.textSlogan}>Không ngại nắng mưa</Text>
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
  const getData = useGetData();

  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));
  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../assets/images/bootsplash/bootsplash_manifest.json'),
    logo: require('../../assets/images/bootsplash/bootsplash_logo.png'),

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

        getData().then(() => console.log('Done'));
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

export default SplashScreen;
