import React from 'react';
import LottieView from 'lottie-react-native';
import { onboardingStyles } from './MyStyles';
// animations.js
export const animations = {
  hotro: require('../../src/assets/animations/onboarding/hotro.json'),
  muaban: require('../../src/assets/animations/onboarding/muaban.json'),
  suachua: require('../../src/assets/animations/onboarding/suachua.json'),
  baoduong: require('../../src/assets/animations/onboarding/baoduong.json'),
};


export function MuaBanAnimation() {
  return (
    <LottieView
      source={animations.muaban}
      autoPlay
      loop
      style={onboardingStyles.lottieAnimation}
    />
  );
}

export function SuaChuaAnimation() {
  return (
    <LottieView
      source={animations.suachua}
      autoPlay
      loop
      style={onboardingStyles.lottieAnimation}
    />
  );
}

export function BaoDuongAnimation() {
  return (
    <LottieView
      source={animations.baoduong}
      autoPlay
      loop
      style={onboardingStyles.lottieAnimation}
    />
  );
}

export function HoTroAnimation() {
  return (
    <LottieView
      source={animations.hotro}
      autoPlay
      loop
      style={onboardingStyles.lottieAnimation}
    />
  );
}
