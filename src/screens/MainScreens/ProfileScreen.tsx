import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {profileStyles} from '../../assets/styles/MyStyles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { menuItems, MenuItem } from '../../components/item_layouts/ProfileItem';
import RootStackParamList from '../../navigation/NavigationTypes';
const ProfileScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
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

export default ProfileScreen;
