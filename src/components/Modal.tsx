import React, { useEffect } from 'react';
import { Modal, View, Text, ActivityIndicator, Image } from 'react-native';
import { modalStyles } from '../assets/styles/MyStyles.tsx';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import navigationTypes from '../navigation/NavigationTypes.tsx';
import { PrimaryButton } from './Button.tsx';

type SuccessModalProps = {
  isVisible: boolean;
  title: string;
  message: string;
};

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isVisible,
  title,
  message: message,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Load done');
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <Modal animationType='fade' visible={isVisible} onRequestClose={() => { }}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Image
            style={modalStyles.modalImage}
            source={require('../../src/assets/images/icons/congrats.png')}
          />
          <Text style={modalStyles.modalTitle}>{title}</Text>
          <Text style={modalStyles.modalText}>{message}</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

export const LogoutModal = () => {
  const navigation = useNavigation<NavigationProp<navigationTypes>>();
  return (
    <Modal animationType="fade" visible={true} onRequestClose={() => { }}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalTitle}>Đăng xuất</Text>
          <Text style={modalStyles.modalText}>
            Bạn có chắc chắn muốn đăng xuất?
          </Text>
          <View style={modalStyles.modalButtonContainer}>
            <PrimaryButton
              btnText="Đăng xuất"
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'LoginScreen' }],
                });
              }}
            />
            <PrimaryButton
              btnText="Hủy"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const LoadingModal = () => {
  return (
    <Modal animationType="fade" visible={true} onRequestClose={() => { }}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
}
