import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";
import AppointmentScreen from "../screens/MainScreens/AppointmentScreen";
import ShopScreen from "../screens/MainScreens/ShopScreen";
import BottomTabBar from "../components/BottomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="HomeScreen" backBehavior="none"tabBar={(props) => <BottomTabBar {...props} />} >
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen name="ShopScreen" component={ShopScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'Cửa hàng',
                    headerShadowVisible: false,
                }} />
            <Tab.Screen name="AppointmentScreen" component={AppointmentScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'Lịch hẹn',
                    headerShadowVisible: false,
                }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'Hồ sơ',
                    headerShadowVisible: false,
                }} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
