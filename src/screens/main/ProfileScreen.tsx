import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { profileStyles } from "../../assets/styles/MyStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MenuItem, menuItems } from "../../components/item_layouts/ProfileItem";
import RootStackParamList from "../../navigation/NavigationTypes";
import { MyLogoutModal } from "../../components/Modal.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
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
          <View key={item.id}>
            <MenuItem
              id={item.id}
              key={item.id}
              icon={item.icon}
              title={item.title}
              route={item.route}
            />
            <View style={profileStyles.itemDivider} key={`divider + ${item.id}`} />
          </View>
        ))}
        <Pressable
          key='logout'
          onPress={() => {
            setModalVisible(true);
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
      <MyLogoutModal
        isVisible={modalVisible}
        onOkPress={() => {
          setModalVisible(false);
          try {
            AsyncStorage.multiRemove(['isLoggedIn', 'token', 'uid']).then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "LoginScreen" }]
              });
            });
          } catch (e) {
            console.error('Error: ', e);
          }
        }}
        onCancelPress={() => {
          setModalVisible(false);
        }}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
