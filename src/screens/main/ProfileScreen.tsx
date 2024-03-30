import React, {useEffect, useState} from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import {profileStyles} from '../../assets/styles/MyStyles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MenuItem, menuItems} from '../../components/item_layouts/ProfileItem';
import RootStackParamList from '../../navigation/NavigationTypes';
import {MyLogoutModal} from '../../components/Modal.tsx';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {WEB_URL} from '../../utils/apiUrl.ts';
import {removeCurrentUser, setEditAvatar} from '../../api/user/user.slice.ts';
import {useUploadAvatarMutation} from '../../api/user/user.service.ts';

import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ProfileScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('Khách');
  const [phoneNumber, setPhoneNumber] = useState('000 0000 000');
  const [avatar, setAvatar] = useState('');

  const user = useSelector((state: RootState) => state.user.currentUser);
  const [uploadAvatar] = useUploadAvatarMutation();

  const scrollY = useSharedValue(0);

  const avatarScale = useSharedValue(1);
  const avatarPosition = useSharedValue(0);

  const avatarTranslateX = useSharedValue(0);
  const nameTranslateX = useSharedValue(0);

  const nameScale = useSharedValue(1);
  const namePosition = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const offsetY = event.contentOffset.y;
      scrollY.value = offsetY;

      //   initial value
      const startScale = 1;
      const endScale = 0.8;
      const scaleRange = startScale - endScale;
      const avatarMoveRange = -70;
      const nameMoveRange = 75;

      if (offsetY > 0) {
        const move = offsetY < avatarMoveRange ? offsetY : avatarMoveRange;
        avatarPosition.value = withTiming(-move, {duration: 400});

        const scale = startScale - scaleRange;
        avatarScale.value = scale < endScale ? endScale : scale;

        avatarTranslateX.value = withTiming(-100, {duration: 400});

        const nameMove = offsetY < nameMoveRange ? offsetY : nameMoveRange;
        namePosition.value = withTiming(-nameMove, {duration: 400});

        nameTranslateX.value = withTiming(160, {duration: 400});
      } else {
        avatarScale.value = startScale;
        avatarPosition.value = 0;
        avatarTranslateX.value = withTiming(0);

        nameScale.value = startScale;
        namePosition.value = 0;
        nameTranslateX.value = withTiming(0);
      }
    },
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: avatarPosition.value},
        {translateX: avatarTranslateX.value},
        {scale: avatarScale.value},
      ],
    };
  });

  const nameStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: namePosition.value},
        {translateX: nameTranslateX.value},
      ],
    };
  });

  const dispatch = useDispatch();

  const handlerUpload = (data: FormData) => {
    uploadAvatar(data)
      .then(result => {
        console.log(result);
        if ('data' in result) {
          result.data.status === 'success'
            ? dispatch(setEditAvatar(result.data.avatar))
            : Alert.alert('Lỗi', result.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setAvatar('');
    if (user) {
      setPhoneNumber(user.phoneNumber);
      setUserName(user.info.fullName);
      const avatarUrl = WEB_URL + 'uploads/avatar/' + user.avatar;
      setAvatar(avatarUrl);
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
    <Animated.ScrollView
      style={profileStyles.container}
      onScroll={scrollHandler}
      scrollEventThrottle={16}>
      <Animated.View style={[profileStyles.avatar, avatarStyle]}>
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
                    maxFiles: 1,
                  })
                    .then(r => {
                      let formData = new FormData();
                      // @ts-ignore
                      formData.append('userId', user._id);
                      formData.append('avatar', {
                        uri: r.path,
                        type: r.mime,
                        name: r.path.split('/').pop(),
                      });
                      handlerUpload(formData);
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
                    useFrontCamera: true,
                    waitAnimationEnd: true,
                  })
                    .then(r => {
                      let formData = new FormData();
                      // @ts-ignore
                      formData.append('userId', user._id);
                      formData.append('avatar', {
                        uri: r.path,
                        type: r.mime,
                        name: r.path.split('/').pop(),
                      });
                      handlerUpload(formData);
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
          }}>
          <Image
            style={profileStyles.iconEditAvatar}
            source={require('../../assets/images/icons/pencil-edit.png')}
          />
        </Pressable>
        <Animated.View style={[{width: '100%'}, nameStyle]}>
          <Text style={[profileStyles.userName]}>Chào, {userName}</Text>
          <Text style={[profileStyles.phoneNumber]}>{phoneNumber}</Text>
        </Animated.View>
      </Animated.View>
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
          dispatch(removeCurrentUser());
          navigation.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          });
        }}
        onCancelPress={() => {
          setModalVisible(false);
        }}
      />
    </Animated.ScrollView>
  );
};

export default ProfileScreen;
