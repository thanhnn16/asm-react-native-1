import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import AppointmentScreen from '../screens/main/AppointmentScreen';
import ShopScreen from '../screens/main/ShopScreen';
import BottomTabBar from '../components/BottomTabBar';
import {View} from 'react-native';

import HomeIcon from '../assets/images/icons/bottom_navigation/home.svg';
import ShopIcon from '../assets/images/icons/bottom_navigation/shop.svg';
import AppointmentIcon from '../assets/images/icons/bottom_navigation/appointment.svg';
import ProfileIcon from '../assets/images/icons/bottom_navigation/profile.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      key="BottomTabNavigator"
      initialRouteName="HomeScreen"
      backBehavior="none"
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        key="HomeScreen"
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Trang chủ',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <HomeIcon
                width={24}
                height={24}
                fill={focused ? '#4B5563' : '#FFF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        key="ShopScreen"
        name="ShopScreen"
        component={ShopScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Cửa hàng',
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <ShopIcon
                width={24}
                height={24}
                fill={focused ? '#4B5563' : '#FFF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        key="AppointmentScreen"
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Lịch hẹn',
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <AppointmentIcon
                width={24}
                height={24}
                fill={focused ? '#4B5563' : '#FFF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        key="ProfileScreen"
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Hồ sơ',
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <ProfileIcon
                width={24}
                height={24}
                fill={focused ? '#4B5563' : '#FFF'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
