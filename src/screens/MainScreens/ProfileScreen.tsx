import React from 'react';
import { View, Text, Image, Pressable, ScrollView, ImageSourcePropType } from 'react-native';
import { profileStyles } from '../../components/MyStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const ProfileScreen = () => {
    return (
        <ScrollView style={profileStyles.container}>
            <View style={profileStyles.avatar}>
                <Image style={profileStyles.avatarImage} source={require('../../assets/images/icons/congrats.png')} />
                <Pressable>
                    <Image style={profileStyles.iconEditAvatar} source={require('../../assets/images/icons/pencil-edit.png')} />
                </Pressable>
            </View>
            <Text style={profileStyles.userName}>Nông Nguyễn Thành</Text>
            <Text style={profileStyles.phoneNumber}>034 654 2636</Text>
            <View style={profileStyles.itemsContainer}>
                {menuItems.map((item) => (
                    <>
                        <MenuItem
                            key={item.id}
                            id={item.id}
                            icon={item.icon}
                            title={item.title}
                            route={item.route}
                        />
                        <View style={profileStyles.itemDivider} />
                    </>
                ))}
                <Pressable onPress={logoutPress} style={profileStyles.item}>
                    <Text style={profileStyles.itemTitle}>Đăng xuất</Text>
                    <Image style={profileStyles.itemIcon} source={require('../../../src/assets/images/icons/call.png')} />
                </Pressable>

            </View>
        </ScrollView>
    );
};

function logoutPress() {
    throw new Error('Function not implemented.');
}

type RootStackParamList = {
    ProfileScreen: undefined;
    EditProfile: undefined;
    Favorite: undefined;
    OrderHistory: undefined;
    Notification: undefined;
    Setting: undefined;
    Support: undefined;
    Terms: undefined;
};

const MenuItem: React.FC<MenuItemProps> = ({ id, icon, title, route }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProfileScreen'>>();
    const handlePress = () => {
        navigation.navigate(route);
    };
    return (
        <Pressable onPress={handlePress} style={profileStyles.item}>
            <Image style={profileStyles.itemIcon} source={icon as ImageSourcePropType} />
            <Text style={profileStyles.itemTitle}>{title}</Text>
            <Image style={profileStyles.itemIconArrow} source={require('../../assets/images/icons/arrow-right.png')} />
        </Pressable>
    );
}

type MenuItemProps = {
    id: string;
    icon: string;
    title: string;
    route: any;
};

const menuItems = [
    {
        id: '1',
        icon: require('../../assets/images/icons/user.png'),
        title: 'Sửa hồ sơ',
        route: 'EditProfile',
    },
    {
        id: '2',
        icon: require('../../assets/images/icons/heart.png'),
        title: 'Mục yêu thích',
        route: 'Favorite',
    },
    {
        id: '3',
        icon: require('../../assets/images/icons/history.png'),
        title: 'Lịch sử đặt hàng',
        route: 'OrderHistory',
    },
    {
        id: '4',
        icon: require('../../assets/images/icons/bell.png'),
        title: 'Thông báo',
        route: 'Notification',
    },
    {
        id: '5',
        icon: require('../../assets/images/icons/settings.png'),
        title: 'Cài đặt',
        route: 'Setting',
    },
    {
        id: '6',
        icon: require('../../assets/images/icons/support.png'),
        title: 'Liên hệ hỗ trợ',
        route: 'Support',
    },
    {
        id: '7',
        icon: require('../../assets/images/icons/terms.png'),
        title: 'Điều khoản và dịch vụ',
        route: 'Terms',
    },
];

export default ProfileScreen;
