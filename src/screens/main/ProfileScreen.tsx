import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { profileStyles } from "../../assets/styles/MyStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MenuItem, menuItems } from "../../components/item_layouts/ProfileItem";
import RootStackParamList from "../../navigation/NavigationTypes";
import { MyLogoutModal } from "../../components/Modal.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api, { setAuthToken } from "../../api/apiConfig.ts";
import { getUser } from "../../api/services/userService.ts";

const ProfileScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('Khách');
  const [phoneNumber, setPhoneNumber] = useState('000 0000 000');

  useEffect(() => {
    AsyncStorage.multiGet(['uid', 'token']).then((response) => {
      const uid = response[0][1];
      const token = response[1][1];
      if (uid === null || token === null) {
        Alert.alert('Chưa đăng nhập', 'Vui lòng đăng nhập để sử dụng chức năng này',[
          {
            text: 'Đồng ý',
            onPress: () => {
              navigation.navigate('LoginScreen');
            }
          },
          {
            text: 'Để sau',
            style: 'cancel'
          }
        ]);
        return;
      }
      setAuthToken(token);
      getUser(uid).then((res) => {
        const user = res.user;
        setUserName(user.full_name);
        setPhoneNumber(user.phone_number);
      }).catch((err) => {
        console.log('Error:', err);
      });
      // api.get(`/user/${uid}`).then((res) => {
      //   const user = res.data.user;
      //   setUserName(user.full_name);
      //   setPhoneNumber(user.phone_number);
      // }).catch((err) => {
      //   console.log('Error:', err);
      // });
    });
  }, []);
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
      <Text style={profileStyles.userName}>Chào, {userName}</Text>
      <Text style={profileStyles.phoneNumber}>{phoneNumber}</Text>
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
