import React, {useEffect} from 'react';
import {Modal, View, Text, ActivityIndicator} from 'react-native';

type CongratsModalProps = {
  isVisible: boolean;
  text: string;
};

const CongratsModal: React.FC<CongratsModalProps> = ({
  isVisible,
  text, // Destructure text prop
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Load done');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal visible={isVisible} onRequestClose={() => {}}>
      <View>
        <View>
          <Text>{text}</Text>
        </View>
      </View>
      <ActivityIndicator size="large" />
    </Modal>
  );
};

export default CongratsModal;
