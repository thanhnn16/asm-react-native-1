import React from 'react';
import {marginStyles, onboardingStyles} from '../assets/styles/MyStyles.tsx';
import {Image, Pressable, PressableProps, Text} from 'react-native';

export const PrimaryButton = ({
  btnText,
  onPress,
  ...props
}: {
  btnText: string;
  onPress: () => void;
} & PressableProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'blue' : '#3c444b',
        },
        onboardingStyles.button,
      ]}
      onPress={onPress}
      {...props}
      android_ripple={{
        color: 'rgba(255,255,255,0.26)',
      }}
      accessibilityRole="button"
      accessibilityLabel={btnText}
      accessibilityHint={btnText}>
      <Text style={onboardingStyles.buttonText}>{btnText}</Text>
    </Pressable>
  );
};

export const GoogleButton = ({
  btnText,
  onPress,
  ...props
}: {
  btnText: string;
  onPress: () => void;
} & PressableProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'blue' : '#3c444b',
        },
        onboardingStyles.loginWithButton,
      ]}
      onPress={onPress}
      {...props}
      android_ripple={{
        color: 'rgba(255,255,255,0.26)',
      }}
      accessibilityRole="button"
      accessibilityLabel={btnText}
      accessibilityHint={btnText}>
        <Image source={require('../assets/images/icons/google.png')} style={marginStyles.mh8} />
      <Text style={onboardingStyles.loginWithText}>{btnText}</Text>
    </Pressable>
  );
};

export const GuestButton = ({
  btnText,
  onPress,
  ...props
}: {
  btnText: string;
  onPress: () => void;
} & PressableProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'blue' : '#3c444b',
        },
        onboardingStyles.loginWithButton,
      ]}
      onPress={onPress}
      {...props}
      android_ripple={{
        color: 'rgba(255,255,255,0.26)',
      }}
      accessibilityRole="button"
      accessibilityLabel={btnText}
      accessibilityHint={btnText}>
        <Image source={require('../assets/images/icons/user-square.png')} style={marginStyles.mh8} />
      <Text style={onboardingStyles.loginWithText}>{btnText}</Text>
    </Pressable>
  );
};
