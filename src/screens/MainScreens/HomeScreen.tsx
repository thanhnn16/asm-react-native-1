import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable, Alert} from 'react-native';
import ShopScreen from './ShopScreen';
import AppointmentScreen from './AppointmentScreen.tsx';
import ProfileScreen from './ProfileScreen.tsx';
import {
  alignStyles, customWidth,
  modalStyles,
  onboardingStyles,
  styles

} from "../../components/MyStyles.tsx";

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  const a: number = Math.floor(Math.random() * 100);
  const b: number = Math.floor(Math.random() * 100);
  const c: number = Math.floor(Math.random() * 100);
  const ab = a + b;
  const [result, setResult] = useState(' ');
  const onResultHanlder = (key: string) => {
    console.log('Key: ', key);
    console.log('ab: ', ab);
    console.log('c: ', c);
    if (key === 'true') {
      if (ab === c) {
        Alert.alert('Chúc mừng', 'Bạn đã trả lời đúng', [
          {
            text: 'Choi lai',
            onPress: () => {
              setResult('Ket qua cu: dung');
            },
          },
        ]);
      } else {
        Alert.alert('Sai roif', 'Sai roi', [
          {
            text: 'Choi lai',
            onPress: () => {
              setResult('Ket qua cu: sai');
            },
          },
        ]);
      }
    } else if (ab === c) {
      Alert.alert('Sai roif', 'Sai roi', [
        {
          text: 'Choi lai',
          onPress: () => {
            setResult('Ket qua cu: sai');
          },
        },
      ]);
    } else {
      Alert.alert('Chúc mừng', 'Bạn đã trả lời đúng', [
        {
          text: 'Lai',
          onPress: () => {
            setResult('Ket qua cu: dung');
          },
        },
      ]);
    }
  };
  return (
    <SafeAreaView style={[styles.container, alignStyles.center, customWidth.w100]}>
      <Text style={modalStyles.modalTitle}>Bạn giỏi phép cộng?</Text>
      <Text>
        {a} + {b} = {c} ?
      </Text>
      <Text>{result}</Text>
      <Pressable
        style={onboardingStyles.button}
        onPress={() => onResultHanlder('true')}>
        <Text style={onboardingStyles.buttonText}>Đúng</Text>
      </Pressable>
      <Pressable
        style={onboardingStyles.button}
        onPress={() => onResultHanlder('false')}>
        <Text style={onboardingStyles.buttonText}>Sai</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const HomeTab: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
