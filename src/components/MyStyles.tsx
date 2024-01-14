import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';

export const customFonts = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  medium: {
    fontWeight: '500',
  },
  regular: {
    fontWeight: '400',
  },
  light: {
    fontWeight: '300',
  },
  thin: {
    fontWeight: '100',
  },
});

export const colors = StyleSheet.create({
  primary: {
    color: '#007bff',
  },
  secondary: {
    color: '#6c757d',
  },
  success: {
    color: '#28a745',
  },
  danger: {
    color: '#dc3545',
  },
  warning: {
    color: '#ffc107',
  },
  info: {
    color: '#17a2b8',
  },
  light: {
    color: '#f8f9fa',
  },
  dark: {
    color: '#343a40',
  },
  muted: {
    color: '#6c757d',
  },
  white: {
    color: '#fff',
  },
  black: {
    color: '#000',
  },
  transparent: {
    color: 'transparent',
  },
});

export const sizes = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 18,
  },
  h5: {
    fontSize: 16,
  },
  h6: {
    fontSize: 14,
  },
  h7: {
    fontSize: 12,
  },
  h8: {
    fontSize: 10,
  },
  h9: {
    fontSize: 8,
  },
});

export const textStyles = StyleSheet.create({
  bold: {
    ...customFonts.bold,
  },
  medium: {
    ...customFonts.medium,
  },
  regular: {
    ...customFonts.regular,
  },
  thin: {
    ...customFonts.thin,
  },
  primary: {
    ...colors.primary,
  },
  secondary: {
    ...colors.secondary,
  },
  success: {
    ...colors.success,
  },
  danger: {
    ...colors.danger,
  },
  warning: {
    ...colors.warning,
  },
  info: {
    ...colors.info,
  },
  light: {
    ...colors.light,
  },
  dark: {
    ...colors.dark,
  },
  muted: {
    ...colors.muted,
  },
  white: {
    ...colors.white,
  },
  black: {
    ...colors.black,
  },
  transparent: {
    ...colors.transparent,
  },
  h1: {
    ...sizes.h1,
  },
  h2: {
    ...sizes.h2,
  },
  h3: {
    ...sizes.h3,
  },
  h4: {
    ...sizes.h4,
  },
  h5: {
    ...sizes.h5,
  },
  h6: {
    ...sizes.h6,
  },
  h7: {
    ...sizes.h7,
  },
  h8: {
    ...sizes.h8,
  },
  h9: {
    ...sizes.h9,
  },
});

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    ...textStyles.regular,
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Faustina',
  },
  text: {
    ...textStyles.regular,
    fontSize: 18,
    fontWeight: '400',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Faustina',
    alignSelf: 'center',
  },
  button: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#007bff',
  },
  buttonText: {
    ...textStyles.regular,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 30,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Faustina',
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    ...textStyles.regular,
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Faustina',
  },
});

export const MyText: React.FC<TextProps> = ({children, style}: any) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
