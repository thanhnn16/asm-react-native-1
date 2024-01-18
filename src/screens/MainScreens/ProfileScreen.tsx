import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {profileStyles} from '../../components/MyStyles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={profileStyles.container}>
      <View style={profileStyles.avatar}>
        <Image
          style={profileStyles.avatarImage}
          source={require('../../assets/images/icons/congrats.png')}
        />
        <Pressable>
          <Image
            style={profileStyles.iconEditAvatar}
            source={require('../../assets/images/icons/pencil-edit.png')}
          />
        </Pressable>
      </View>
      <Text style={profileStyles.userName}>Nông Nguyễn Thành</Text>
      <Text style={profileStyles.phoneNumber}>034 654 2636</Text>
      <View style={profileStyles.itemsContainer}>
        {menuItems.map(item => (
          <>
            <MenuItem
              id={item.id}
              key={item.id}
              icon={item.icon}
              title={item.title}
              route={item.route}
            />
            <View style={profileStyles.itemDivider} />
          </>
        ))}
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'LoginScreen'}],
            });
          }}
          style={profileStyles.item}>
          <Image
            style={profileStyles.itemIcon}
            source={require('../../../src/assets/images/icons/logout.png')}
          />
          <Text style={profileStyles.itemTitle}>Đăng xuất</Text>
          <Image
            style={profileStyles.itemIconArrow}
            source={require('../../assets/images/icons/arrow-right.png')}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

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

const MenuItem: React.FC<MenuItemProps> = ({icon, title, route}) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'ProfileScreen'>>();
  const handlePress = () => {
    navigation.navigate(route);
  };
  return (
    <Pressable onPress={handlePress} style={profileStyles.item}>
      <Image
        style={profileStyles.itemIcon}
        source={icon as ImageSourcePropType}
      />
      <Text style={profileStyles.itemTitle}>{title}</Text>
      <Image
        style={profileStyles.itemIconArrow}
        source={require('../../assets/images/icons/arrow-right.png')}
      />
    </Pressable>
  );
};

type MenuItemProps = {
  id: string;
  icon: string;
  title: string;
  route: any;
};

const menuItems = [
  {
    id: '1',
    icon: require('../../assets/images/icons/user-edit.png'),
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
    icon: require('../../assets/images/icons/receipt-text.png'),
    title: 'Lịch sử đặt hàng',
    route: 'OrderHistory',
  },
  {
    id: '4',
    icon: require('../../assets/images/icons/notification.png'),
    title: 'Thông báo',
    route: 'Notification',
  },
  {
    id: '5',
    icon: require('../../assets/images/icons/setting-2.png'),
    title: 'Cài đặt',
    route: 'Setting',
  },
  {
    id: '6',
    icon: require('../../assets/images/icons/message-question.png'),
    title: 'Liên hệ hỗ trợ',
    route: 'Support',
  },
  {
    id: '7',
    icon: require('../../assets/images/icons/security-safe.png'),
    title: 'Điều khoản và dịch vụ',
    route: 'Terms',
  },
];

export default ProfileScreen;
