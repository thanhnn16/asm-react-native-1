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
  error: {
    color: '#EF4444',
  },
  link: {
    color: '#3461FD',
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
  otpInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginHorizontal: 20,
  },
  otpInput: {
    height: 48,
    width: 48,
    marginHorizontal: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
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
    justifyContent: 'center',
    margin: 'auto',
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
  loginWithButton: {
    marginHorizontal: 24,
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  loginWithText: {
    ...textStyles.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#1C2A3A',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Faustina-VariableFont_wght',
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
  lottieAnimation: {
    width: screenWidth - 40,
    height: 350,
  },
});

export const imageStyles = StyleSheet.create({
  topLogo: {
    width: 180,
    height: 110,
    marginTop: 32,
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

export const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 48,
    width: screenWidth - 48,
    alignSelf: 'center',
  },
  modalImage: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginVertical: 20,
    objectFit: 'contain',
  },
  modalTitle: {
    ...textStyles.bold,
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalText: {
    ...textStyles.regular,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#1C2A3A',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  modalButtonText: {
    ...textStyles.bold,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  loadingAnimation: {
    width: 56,
    height: 56,
    alignSelf: 'center',
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

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 168,
    height: 168,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 32,
    position: 'relative',
  },
  avatarImage: {
    width: 168,
    height: 168,
    borderRadius: 168 / 2,
  },
  iconEditAvatar: {
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 2,
    right: 0,
    zIndex: 1,
  },
  userName: {
    ...textStyles.bold,
    fontSize: 24,
    color: '#1F2A37',
    textAlign: 'center',
    marginTop: 16,
  },
  phoneNumber: {
    ...textStyles.regular,
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  itemsContainer: {
    marginVertical: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  itemTitle: {
    ...textStyles.regular,
    fontSize: 18,
    color: '#6B7280',
    lineHeight: 27,
    marginHorizontal: 16,
    textAlign: 'left',
  },
  itemIcon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    tintColor: '#1C2A3A',
  },
  itemIconArrow: {
    width: 14,
    height: 14,
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  itemDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 24,
  },
});

export const MyText: React.FC<TextProps> = ({children, style}: any) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
