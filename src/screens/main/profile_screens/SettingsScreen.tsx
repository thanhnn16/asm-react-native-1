import { Alert, SafeAreaView, Switch, Text, View } from "react-native";
import { alignStyles, marginStyles, styles, textStyles } from "../../../assets/styles/MyStyles.tsx";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "react-native-screens/native-stack";

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const [isShowBanner, setIsShowBanner] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("isShowBanner").then((value) => {
      if (value === null) {
        setIsShowBanner(true);
      } else {
        setIsShowBanner(value === "true");
      }
    });
  }, []);

  const toggleSwitch = () => {
    const newState = !isShowBanner;
    AsyncStorage.setItem("isShowBanner", newState ? "true" : "false").then(r => {
      setIsShowBanner(newState);
    });
  };

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top + 64}, {paddingBottom: insets.bottom}]}>
      <View style={marginStyles.mh32}>
        <View style={marginStyles.mt8} />
        <Text style={[textStyles.h4, textStyles.bold]}>Cài đặt chung</Text>
        <View style={marginStyles.mt16} />
        <View style={[alignStyles.rowSpaceBetween]}>
          <Text style={textStyles.h5}>Hiển thị Banner</Text>
          <Switch value={isShowBanner} onValueChange={toggleSwitch} />
        </View>
        <View style={marginStyles.mt16} />
        <View style={alignStyles.rowSpaceBetween}>
          <Text style={textStyles.h5}>Chế độ tối</Text>
          <Switch value={false} onValueChange={() => {
            Alert.alert("Chức năng đang được phát triển");
          }} />
        </View>
        <View style={marginStyles.mt16} />
        <View style={alignStyles.rowSpaceBetween}>
          <Text style={textStyles.h5}>Tiếng Anh</Text>
          <Switch value={false} onValueChange={() => {
            Alert.alert("Chức năng đang được phát triển");
          }} />
        </View>
        <View style={marginStyles.mt32} />
        <Text style={[textStyles.h4, textStyles.bold]}>Thông tin</Text>
        <View style={marginStyles.mt16} />
        <View style={alignStyles.rowSpaceBetween}>
          <Text style={textStyles.h5}>Phiên bản</Text>
          <Text style={textStyles.h5}>0.1 Dev</Text>
        </View>
        <View style={marginStyles.mt16} />
        <View style={alignStyles.rowSpaceBetween}>
          <Text style={textStyles.h5}>Hỗ trợ</Text>
          <Text style={textStyles.h5}>034 654 2636</Text>
        </View>
        <View style={marginStyles.mt16} />
        <View style={alignStyles.rowSpaceBetween}>
          <Text style={textStyles.h5}>Tác giả</Text>
          <Text style={textStyles.h5}>Nông Nguyễn Thành</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
