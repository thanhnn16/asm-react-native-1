import React, {useEffect} from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import RootStackNavigator from './navigation/RootStackNavigator.tsx';
import {styles} from './assets/styles/MyStyles.tsx';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store.ts';
import {PersistGate} from 'redux-persist/integration/react';

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
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
