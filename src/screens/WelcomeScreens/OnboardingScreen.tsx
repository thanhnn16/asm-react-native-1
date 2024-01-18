import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, Text, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {onboardingStyles} from '../../assets/styles/MyStyles.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PrimaryButton} from '../../components/Button.tsx';

const {width, height} = Dimensions.get('window');

export const Onboarding = () => {
  const navigation = useNavigation();
  const totalPages = onboardingData.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const onScrollHandler = useCallback(
    (event: {nativeEvent: {contentOffset: {x: number}}}) => {
      if (isScrolling) {
        return;
      }
      const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      if (currentIndex !== newIndex) {
        console.log('currentIndex', currentIndex);
        console.log('newIndex', newIndex);
        setCurrentIndex(newIndex);
      }
    },
    [currentIndex, isScrolling],
  );

  const onPressHandler = useCallback(() => {
    if (currentIndex === totalPages - 1) {
      saveOnboardingStatus();
      navigation.reset({
        index: 0,
        routes: [{name: 'WelcomeScreen'}],
      });
    } else {
      setIsScrolling(true);
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  }, [currentIndex, totalPages, navigation, setCurrentIndex]);

  return (
    <View style={onboardingStyles.onboardingScreen}>
      <FlatList
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
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width,
          );
          setCurrentIndex(newIndex);
        }}
      />
      <View style={{flex: 1.5}}>
        <PrimaryButton
          btnText={currentIndex === totalPages - 1 ? 'Bắt đầu' : 'Tiếp tục'}
          onPress={() => {
            onPressHandler();
            console.log('Clicked');
          }} />
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
            setIsScrolling(true);
            flatListRef.current?.scrollToIndex({
              index: totalPages - 1,
              animated: true,
            });
            setCurrentIndex(totalPages - 1);
            setTimeout(() => {
              setIsScrolling(false);
            }, 500);
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
          width: width - 40,
          height: height / 2.5,
        }}
      />
      <View style={onboardingStyles.containerText}>
        <Text style={onboardingStyles.title}>{item.title}</Text>
        <Text style={onboardingStyles.text}>{item.description}</Text>
      </View>
    </View>
  );
};

function saveOnboardingStatus() {
  AsyncStorage.setItem('onboarding', 'true').then(r => console.log(r));
}
