import { SafeAreaView, Switch, Text, View } from "react-native";
import { alignStyles, styles } from "../../../assets/styles/MyStyles.tsx";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {
  const [isShowBanner, setIsShowBanner] = useState(() => {
    AsyncStorage.getItem("isShowBanner").then((value) => {
      return value !== "false";
    });
  });

  const toggleSwitch = () => setIsShowBanner(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={alignStyles.row}>
        <Text>Hiển thị Banner</Text>
        <Switch value={toggleSwitch} onValueChange={event => {
          AsyncStorage.setItem("isShowBanner", event ? "true" : "false");
          AsyncStorage.getItem("isShowBanner").then((value) => {
            console.log(value);
          });
        }} />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
