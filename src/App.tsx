import React, { useEffect } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./navigation/RootStackNavigator.tsx";
import { styles } from "./assets/styles/MyStyles.tsx";
import { useHeaderHeight } from "react-native-screens/native-stack";

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
