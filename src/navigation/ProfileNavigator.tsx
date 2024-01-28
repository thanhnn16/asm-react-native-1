import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/main/profile_screens/SettingsScreen.tsx";
import EditProfileScreen from "../screens/main/profile_screens/EditProfileScreen.tsx";
import FavoritesScreen from "../screens/main/profile_screens/FavoritesScreen.tsx";
import OrderHistoryScreen from "../screens/main/profile_screens/OrderHistoryScreen.tsx";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: "Sửa hồ sơ",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#374151",
          headerBackVisible: true,
          headerBackImageSource: require("../../src/assets/images/icons/arrow-left.png")        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Mục yêu thích",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#374151",
          headerBackVisible: true,
          headerBackImageSource: require("../../src/assets/images/icons/arrow-left.png")        }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          title: "Lịch sử đặt hàng",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#374151",
          headerBackVisible: true,
          headerBackImageSource: require("../../src/assets/images/icons/arrow-left.png")        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Cài đặt",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#374151",
          headerBackVisible: true,
          headerBackImageSource: require("../../src/assets/images/icons/arrow-left.png")
        }} />

    </Stack.Navigator>
  );
};

export default ProfileNavigator;
