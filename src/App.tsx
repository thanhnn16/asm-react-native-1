import React, {useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;
