import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Pressable, Image, ImageSourcePropType, Text } from "react-native";
import RootStackParamList from "../../navigation/NavigationTypes";
import { profileStyles } from "../../assets/styles/MyStyles";

export const MenuItem: React.FC<MenuItemProps> = ({icon, title, route}) => {
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

export const menuItems = [
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
      route: 'Favorites',
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
      route: 'Notifications',
    },
    {
      id: '5',
      icon: require('../../assets/images/icons/setting-2.png'),
      title: 'Cài đặt',
      route: 'Settings',
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
