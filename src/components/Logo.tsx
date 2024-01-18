import React from 'react';
import {imageStyles} from '../assets/styles/MyStyles.tsx';
import {Image, View} from 'react-native';

export const TopLogo = () => {
  return (
    <Image
      source={require('../assets/images/logo.png')}
      style={imageStyles.topLogo}
    />
  );
};
