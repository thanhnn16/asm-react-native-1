import React, {useEffect} from 'react';
import {Modal, View, Text, ActivityIndicator, Image} from 'react-native';
import {modalStyles} from './MyStyles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import navigationTypes from '../navigation/navigationTypes.tsx';

type SuccessModalProps = {
  isVisible: boolean;
  text: string;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
  isVisible,
  text,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Load done');
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <Modal visible={isVisible} onRequestClose={() => {}}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Image
            style={modalStyles.modalImage}
            source={require('../../src/assets/images/icons/congrats.png')}
          />
          <Text style={modalStyles.modalTitle}>Chúc mừng</Text>
          <Text style={modalStyles.modalText}>{text}</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
