import React from 'react';
import {onboardingStyles} from './MyStyles.tsx';
import {Pressable, PressableProps, Text} from 'react-native';

export const MyButton = ({
  btnText,
  ...props
}: {
  btnText: string;
  props: PressableProps;
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#2a3a4d' : '#3c444b',
        },
        onboardingStyles.button,
      ]}
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
