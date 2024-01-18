import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";
import AppointmentScreen from "../screens/MainScreens/AppointmentScreen";
import ShopScreen from "../screens/MainScreens/ShopScreen";
import BottomTabBar from "../components/BottomTabBar";
import { View } from "react-native";


// @ts-ignore
import HomeIcon from "../assets/images/icons/bottom_navigation/home.svg";
// @ts-ignore
import ShopIcon from "../assets/images/icons/bottom_navigation/shop.svg";
// @ts-ignore
import AppointmentIcon from "../assets/images/icons/bottom_navigation/appointment.svg";
// @ts-ignore
import ProfileIcon from "../assets/images/icons/bottom_navigation/profile.svg";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      backBehavior="none"
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Trang chủ",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <HomeIcon
                width={24}
                height={24}
                fill={focused ? "#4B5563" : "#FFF"}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "Cửa hàng",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <ShopIcon
                width={24}
                height={24}
                fill={focused ? "#4B5563" : "#FFF"}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "Lịch hẹn",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <AppointmentIcon
                width={24}
                height={24}
                fill={focused ? "#4B5563" : "#FFF"}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "Hồ sơ",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <ProfileIcon
                width={24}
                height={24}
                fill={focused ? "#4B5563" : "#FFF"}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
