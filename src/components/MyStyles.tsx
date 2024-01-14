import { Dimensions, StyleSheet, Text, TextProps } from "react-native";
import React from 'react';

const screenWidth = Dimensions.get('window').width;
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
  onboardingScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  containerText: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    ...textStyles.bold,
    fontSize: 18,
    color: '#374151',
    textAlign: 'center',
    marginTop: 30,
  },
  text: {
    ...textStyles.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#6B7280',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 8,
    marginHorizontal: 40,
    fontFamily: 'Faustina-VariableFont_wght',
  },
  button: {
    marginHorizontal: 40,
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 78,
    backgroundColor: '#1C2A3A',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  buttonText: {
    ...textStyles.medium,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Faustina-VariableFont_wght',
    alignSelf: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  indicatorDisabled: {
    backgroundColor: '#9B9B9B',
    width: 8,
    height: 8,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  indicatorActive: {
    backgroundColor: '#26232F',
    width: 30,
    height: 8,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  skipText: {
    ...textStyles.regular,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 30,
    color: '#6B7280',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 32,
    marginHorizontal: 40,
    fontFamily: 'Faustina-VariableFont_wght',
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
    fontFamily: 'Faustina-VariableFont_wght',
  },
});

export const MyText: React.FC<TextProps> = ({children, style}: any) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
