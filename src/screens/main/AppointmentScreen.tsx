import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../../assets/styles/MyStyles.tsx';

const AppointmentScreen = () => {
  return (
    <View style={[noNotiContainer.container]}>
      <LottieView
        autoPlay={true}
        loop={true}
        source={require('../../assets/animations/no_notifications.json')}
        style={{width: 200, height: 200}}
      />
      <Text style={[styles.text, {fontSize: 20}]}>
        Chức năng đang phát triển
      </Text>
    </View>
  );
};

const noNotiContainer = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default AppointmentScreen;
