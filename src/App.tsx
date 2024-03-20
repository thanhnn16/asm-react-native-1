import React, {useEffect} from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import RootStackNavigator from './navigation/RootStackNavigator.tsx';
import {styles} from './assets/styles/MyStyles.tsx';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
