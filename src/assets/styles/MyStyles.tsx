import {Dimensions, StyleSheet} from 'react-native';

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
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    height: 48,
    marginHorizontal: 24,
  },
  enabledBackground: {
    backgroundColor: '#F9FAFB',
  },
  disabledBackground: {
    backgroundColor: 'rgba(180,180,180,0.49)',
  },
  onFocus: {
    borderColor: '#769cf6',
    borderWidth: 1.3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 8,
    height: 40,
    marginHorizontal: 24,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 8,
    fontFamily: 'Inter-VariableFont_slnt,wght',
  },
  icon: {
    width: 24,
    height: 24,
    marginStart: 14,
    marginEnd: 8,
  },
  endIcon: {
    width: 24,
    height: 24,
    marginEnd: 24,
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
  mt64: {
    marginTop: 64,
  },
  mt32: {
    marginTop: 32,
  },
  mt24: {
    marginTop: 24,
  },
  mt16: {
    marginTop: 16,
  },
  mt12: {
    marginTop: 12,
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
  mh4: {
    marginHorizontal: 4,
  },
  mv32: {
    marginVertical: 32,
  },
  mv24: {
    marginVertical: 24,
  },
  mv16: {
    marginVertical: 16,
  },
  mv8: {
    marginVertical: 8,
  },
  mv4: {
    marginVertical: 4,
  },
  mb64: {
    marginBottom: 64,
  },
  mb32: {
    marginBottom: 32,
  },
  mb24: {
    marginBottom: 24,
  },
  mb16: {
    marginBottom: 16,
  },
  mb8: {
    marginBottom: 8,
  },
  mb4: {
    marginBottom: 4,
  },
  ph32: {
    paddingHorizontal: 32,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  pv32: {
    paddingVertical: 32,
  },
  pv24: {
    paddingVertical: 24,
  },
  pv16: {
    paddingVertical: 16,
  },
  pv8: {
    paddingVertical: 8,
  },
  pt64: {
    paddingTop: 64,
  },
});

export const alignStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  left: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: 'Inter-VariableFont_slnt,wght',
  },
  button: {
    marginHorizontal: 24,
    marginTop: 16,
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
    fontFamily: 'Inter-VariableFont_slnt,wght',
  },
  buttonText: {
    ...textStyles.medium,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Inter-VariableFont_slnt,wght',
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
    fontFamily: 'Inter-VariableFont_slnt,wght',
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
    marginTop: 48,
    marginBottom: 32,
    objectFit: 'contain',
    alignSelf: 'center',
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: screenWidth,
  },
  text: {
    ...textStyles.regular,
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter-VariableFont_slnt,wght',
  },
});

export const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  modalContent: {
    backgroundColor: 'rgb(255,255,255)',
    padding: 8,
    borderRadius: 32,
    width: screenWidth - 96,
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
  },
  modalButton: {
    backgroundColor: '#1C2A3A',
    padding: 10,
    borderRadius: 8,
  },
  modalButtonText: {
    ...textStyles.bold,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  loadingAnimation: {
    width: 48,
    height: 48,
    alignSelf: 'center',
  },
  bottomModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bottomModal: {
    position: 'absolute',
    bottom: 0,
    padding: 24,
    width: screenWidth,
    backgroundColor: '#fff',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomModalPrimaryButton: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 78,
    backgroundColor: '#1C2A3A',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    display: 'flex',
  },
  bottomModalPrimaryButtonText: {
    ...textStyles.bold,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  bottomModalSecondaryButton: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 78,
    backgroundColor: '#E5E7EB',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    display: 'flex',
  },
  bottomModalSecondaryButtonText: {
    ...textStyles.bold,
    fontSize: 16,
    color: '#1C2A3A',
    textAlign: 'center',
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
  screenWidth: {
    width: screenWidth,
  },
  screenWidthM24: {
    width: screenWidth - 48,
  },
});

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: screenWidth,
    flexDirection: 'column',
  },
  infoContainer: {
    width: '100%',
    height: 'auto',
  },
  avatar: {
    width: 148,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 8,
  },
  avatarImage: {
    width: 148,
    height: 148,
    borderRadius: 148 / 2,
  },
  iconEditAvatar: {
    width: 28,
    height: 28,
    position: 'absolute',
    bottom: 4,
    right: 14,
    zIndex: 1,
  },
  userName: {
    ...textStyles.bold,
    fontSize: 20,
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

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textBrand: {
    ...textStyles.regular,
    fontSize: 24,
    fontWeight: '700',
    margin: 12,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter-VariableFont_slnt,wght',
  },
  textSlogan: {
    ...textStyles.regular,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter-VariableFont_slnt,wght',
  },
});

export const bottomTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    height: 56,
    paddingTop: 6,
    paddingHorizontal: 24,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonIcon: {
    width: 48,
    height: 48,
    borderRadius: 38,
    justifyContent: 'center',
  },
});

export const buttonType = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#1C2A3A',
    borderWidth: 1,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 14,
    color: '#1C2A3A',
    textAlign: 'center',
    alignSelf: 'center',
  },
  selectedContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#1C2A3A',
    borderRadius: 60,
    borderColor: '#1C2A3A',
    borderWidth: 1,
    marginHorizontal: 4,
  },
  selectedText: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
