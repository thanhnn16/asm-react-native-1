import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  Text,
  View,
  Animated,
  FlatList,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {onboardingStyles} from '../../components/MyStyles.tsx';

const {width, height} = Dimensions.get('window');
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const Onboarding = () => {
  const navigation = useNavigation();
  const [opacity] = React.useState(() => new Animated.Value(0));
  const [translateY] = React.useState(() => new Animated.Value(100));
  const [translateX] = React.useState(() => new Animated.Value(100));
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const totalPages = onboardingData.length;
  let [currentIndex, setCurrentIndex] = useState(0);

  const [buttonText, setButtonText] = useState('Tiếp tục');

  useEffect(() => {
    Animated.timing(opacity, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1000,
      delay: 500,
    }).start();
  }, [opacity]);

  useEffect(() => {
    Animated.timing(translateY, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1000,
      delay: 500,
    }).start();
  }, [translateY]);

  useEffect(() => {
    Animated.timing(translateX, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1000,
      delay: 500,
    }).start();
  }, [translateX]);

  const onScrollHandler = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: true},
  );

  const onPressHandler = () => {
    if ((currentIndex = totalPages - 1)) {
      setButtonText('Bắt đầu');
      // navigation.navigate('Welcome');
      console.log('navigate to Welcome');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View>
      <AnimatedFlatList
        data={onboardingData}
        renderItem={onboardingItem}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={item => {
          return item.id;
        }}
        bounces={true}
        pagingEnabled={true}
        bouncesZoom={true}
        scrollEventThrottle={16}
        onScroll={onScrollHandler}
      />
      <Pressable style={onboardingStyles.button} onPress={onPressHandler}>
        <Text style={onboardingStyles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const onboardingData = [
  {
    id: '1',
    title: 'Mua - Bán',
    description:
      'Khám phá thiết bị điện lạnh chất lượng, giá tốt từ ứng dụng của chúng tôi. Nhiều hình thức thanh toán với giá ưu đãi!',
    animation: require('../../../src/assets/animations/onboarding/muaban.json'),
  },
  {
    id: '2',
    title: 'Sửa chữa',
    description:
      'Yêu cầu dịch vụ sửa chữa nhanh chóng, uy tín từ ứng dụng của chúng tôi. Đặt trước lịch, không lo về thời gian.',
    animation: require('../../../src/assets/animations/onboarding/suachua.json'),
  },
  {
    id: '3',
    title: 'Bảo dưỡng',
    description:
      'Đặt lịch bảo dưỡng định kỳ, theo dõi trạng thái thiết bị từ ứng dụng của chúng tôi. Cam kết bảo hành cho mọi sản phẩm.',
    animation: require('../../../src/assets/animations/onboarding/baoduong.json'),
  },
  {
    id: '4',
    title: 'Hỗ trợ',
    description:
      'Liên hệ qua chat trên app để nhận hỗ trợ và tư vấn. Hoặc gọi Hotline luôn hỗ trợ 24/7!',
    animation: require('../../../src/assets/animations/onboarding/hotro.json'),
  },
];

const onboardingItem = ({item}: any) => {
  return (
    <View>
      <LottieView
        source={item.animation}
        autoPlay
        loop
        style={{width: width - 20, height: height / 2}}
      />
      <Text style={onboardingStyles.text}>{item.title}</Text>
      <Text style={onboardingStyles.text}>{item.description}</Text>
    </View>
  );
};
