import React, {useCallback, useRef, useState} from 'react';
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

export const Onboarding = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  let [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = onboardingData.length;
  const flatListRef = useRef<FlatList>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const AnimatedFlatList = Animated.createAnimatedComponent(
    FlatList<OnboardingItemProps>,
  );

  const onScrollHandler = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {
      useNativeDriver: true,
      listener: event => {
        if (!isScrolling) {
          let newIndex: number;
          // @ts-ignore
          newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }
      },
    },
  );

  const onPressHandler = useCallback(() => {
    console.log(currentIndex, totalPages);
    if (currentIndex === totalPages - 1) {
      // @ts-ignore
      navigation.navigate('WelcomeScreen');
    } else {
      const newIndex = currentIndex + 1;
      setIsScrolling(true);
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: newIndex * width,
      });
      setCurrentIndex(newIndex);
      console.log('currentIndex', currentIndex);
      setTimeout(() => setIsScrolling(false), 300);
    }
  }, [currentIndex, totalPages, navigation]);

  return (
    <View style={onboardingStyles.onboardingScreen}>
      <AnimatedFlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={({item}) => onboardingItem(item)}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => {
          return item.id;
        }}
        pagingEnabled={true}
        scrollEventThrottle={16}
        onScroll={onScrollHandler}
      />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flex: 1.5}}>
        <Pressable style={onboardingStyles.button} onPress={onPressHandler}>
          <Text style={onboardingStyles.buttonText}>
            {currentIndex === totalPages - 1 ? 'Bắt đầu' : 'Tiếp tục'}
          </Text>
        </Pressable>
        <View style={onboardingStyles.indicatorContainer}>
          {onboardingData.map((_item, index) => {
            return (
              <View
                key={index}
                style={
                  index === currentIndex
                    ? onboardingStyles.indicatorActive
                    : onboardingStyles.indicatorDisabled
                }
              />
            );
          })}
        </View>
        <Text
          style={onboardingStyles.skipText}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('WelcomeScreen');
          }}>
          Bỏ qua
        </Text>
      </View>
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

type OnboardingItemProps = {
  id: string;
  title: string;
  description: string;
  animation: any;
};

const onboardingItem = (item: OnboardingItemProps) => {
  return (
    <View style={onboardingStyles.container}>
      <LottieView
        source={item.animation}
        autoPlay
        loop
        style={{
          width: width - 20,
          height: height / 2,
        }}
      />
      <View style={onboardingStyles.containerText}>
        <Text style={onboardingStyles.title}>{item.title}</Text>
        <Text style={onboardingStyles.text}>{item.description}</Text>
      </View>
    </View>
  );
};
