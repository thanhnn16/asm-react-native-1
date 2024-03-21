import React, {useEffect, useState} from 'react';
import {Alert, Image, Pressable, ScrollView, Text, View} from 'react-native';
import {profileStyles} from '../../assets/styles/MyStyles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MenuItem, menuItems} from '../../components/item_layouts/ProfileItem';
import RootStackParamList from '../../navigation/NavigationTypes';
import {MyLogoutModal} from '../../components/Modal.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import api, { API_URL, avatarUrl, setAuthToken } from "../../api/apiConfig.ts";
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
// import axios from "axios";

const ProfileScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('Khách');
  const [phoneNumber, setPhoneNumber] = useState('000 0000 000');
  const [avatar, setAvatar] = useState('');

  const user = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    if (user) {
      setPhoneNumber(user.phoneNumber);
      setUserName(user.info.fullName);
    }
  }, [user]);

  const loginWarning = () => {
    Alert.alert(
      'Chưa đăng nhập',
      'Vui lòng đăng nhập để sử dụng chức năng này',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            navigation.navigate('LoginScreen');
          },
        },
        {
          text: 'Để sau',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <ScrollView style={profileStyles.container}>
      <View style={profileStyles.avatar}>
        <Image
          style={profileStyles.avatarImage}
          source={
            avatar
              ? {uri: avatar}
              : require('../../assets/images/icons/congrats.png')
          }
          defaultSource={require('../../assets/images/icons/congrats.png')}
        />
        <Pressable
          onPress={() => {
            if (!user) {
              loginWarning();
              return;
            }
            Alert.alert('Chọn ảnh', 'Tải lên ảnh của bạn, chọn ảnh từ: ', [
              {
                text: 'Thư viện ảnh',
                onPress: () => {
                  ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                  })
                    .then(image => {
                      const formData = new FormData();
                      const fileName = image.path.split('/').pop();
                      formData.append('avatar', {
                        uri: image.path,
                        type: image.mime,
                        name: fileName,
                      });
                    })
                    .catch(() => {
                      Alert.alert('Người dùng hủy', 'Bạn không chọn ảnh nào');
                    });
                },
              },
              {
                text: 'Máy ảnh',
                onPress: () => {
                  ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                  })
                    .then(image => {
                      console.log(image);
                    })
                    .catch(err => {
                      console.log('Error: ', err);
                    });
                },
              },
              {
                text: 'Hủy',
                style: 'cancel',
              },
            ]);
            // axios
            //   .post(API_URL + '/user/upload-avatar', formData, {
            //     headers: {
            //       'Content-Type': 'multipart/form-data',
            //     },
            //   })
            //   .then(res => {
            //     console.log('Upload avatar success: ', res.data);
            //     setAvatar(avatarUrl(res.data.avatar));
            //   })
            //   .catch(err => {
            //     console.log('Upload avatar error: ', err);
            //   });
          }}>
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
            <View
              style={profileStyles.itemDivider}
              key={`divider + ${item.id}`}
            />
          </View>
        ))}
        <Pressable
          key="logout"
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
            AsyncStorage.multiRemove(['isLoggedIn', 'token', 'uid']).then(
              () => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'LoginScreen'}],
                });
              },
            );
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
