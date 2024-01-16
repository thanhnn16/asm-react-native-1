import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import ShopScreen from './ShopScreen';


const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
    return (
        <View>
            <Text>Home Page</Text>
        </View>
    );
};


const HomeTab: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Appointment" component={AppointmentScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default HomeScreen;
