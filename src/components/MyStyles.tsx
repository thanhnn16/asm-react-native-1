import {Dimensions, StyleSheet, Text, TextProps} from 'react-native';
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
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});

export const inputStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    height: 48,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 8,
    fontFamily: 'Faustina-VariableFont_wght',
  },
  icon: {
    width: 24,
    height: 24,
    marginStart: 14,
    marginEnd: 8,
  },
});
export const marginStyles = StyleSheet.create({
  mt32: {
    marginTop: 32,
  },
  mt24: {
    marginTop: 24,
  },
  mt16: {
    marginTop: 16,
  },
  mt8: {
    marginTop: 8,
  },
  mt4: {
    marginTop: 4,
  },
  mh32: {
    marginHorizontal: 32,
  },
  mh24: {
    marginHorizontal: 24,
  },
  mh16: {
    marginHorizontal: 16,
  },
  mh8: {
    marginHorizontal: 8,
  },
});

export const alignStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    alignSelf: 'center',
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
    paddingTop: 20,
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
    marginHorizontal: 24,
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

export const imageStyles = StyleSheet.create({
  topLogo: {
    width: 180,
    height: 110,
    marginTop: 64,
    marginBottom: 32,
    objectFit: 'contain',
    alignSelf: 'center',
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

export const customWidth = StyleSheet.create({
  w100: {
    width: '100%',
  },
  w90: {
    width: '90%',
  },
  w80: {
    width: '80%',
  },
  w70: {
    width: '70%',
  },
  w60: {
    width: '60%',
  },
  w50: {
    width: '50%',
  },
  w40: {
    width: '40%',
  },
  w30: {
    width: '30%',
  },
  w20: {
    width: '20%',
  },
  w10: {
    width: '10%',
  },
});

export const MyText: React.FC<TextProps> = ({children, style}: any) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
