import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {InputWithIcon} from '../../../components/InputField.tsx';
import {
  marginStyles,
  profileStyles,
  textStyles,
} from '../../../assets/styles/MyStyles.tsx';
import ImagePicker from 'react-native-image-crop-picker';
// import api, { API_URL, avatarUrl, setAuthToken } from "../../../api/apiConfig.ts";
import DatePicker from 'react-native-date-picker';
import {LoadingModal} from '../../../components/Modal.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store.ts';
import {
  useUpdateUserMutation,
  useUploadAvatarMutation,
} from '../../../api/user/user.service.ts';
import {WEB_URL} from '../../../utils/apiUrl.ts';
import {setCurrentUser, setEditAvatar} from '../../../api/user/user.slice.ts';

const EditProfileScreen = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState(3);
  const [avatar, setAvatar] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const [loading, setLoading] = useState(false);

  const user = useSelector((state: RootState) => state.user.currentUser);

  const [uploadAvatar] = useUploadAvatarMutation();

  const [updateUser] = useUpdateUserMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setDob(user.info.dob || '');
      setName(user.info.fullName);
      setEmail(user.email || '');
      setAddress(user.info.address || '');
      setGender(user.info.gender);
      setLoading(false);
      const avatarUrl = WEB_URL + 'uploads/avatar/' + user.avatar;
      setAvatar(avatarUrl);
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={profileStyles.avatar}>
        <Image
          style={profileStyles.avatarImage}
          source={
            avatar
              ? {uri: avatar}
              : require('../../../assets/images/icons/congrats.png')
          }
          defaultSource={require('../../../assets/images/icons/congrats.png')}
        />
        <Pressable
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            })
              .then(r => {
                setAvatar(r.path);
                console.log(r.path);
                let formData = new FormData();
                // @ts-ignore
                formData.append('userId', user._id);
                formData.append('avatar', {
                  uri: r.path,
                  type: r.mime,
                  name: r.path.split('/').pop(),
                });
                console.log('Form data', formData);
                uploadAvatar(formData)
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
              })
              .catch(err => {
                Alert.alert('Lỗi', 'Không thể tải ảnh lên');
                console.error(err);
              });
          }}>
          <Image
            style={profileStyles.iconEditAvatar}
            source={require('../../../assets/images/icons/pencil-edit.png')}
          />
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <InputWithIcon
          icon={require('../../../assets/images/icons/input_field_icons/profile.png')}
          placeholder={'Họ và tên'}
          value={name}
          setValue={setName}
          editable={isEditing}
        />

        <InputWithIcon
          icon={require('../../../assets/images/icons/input_field_icons/sms.png')}
          placeholder={'Email'}
          value={email}
          setValue={setEmail}
          editable={isEditing}
        />

        <InputWithIcon
          icon={require('../../../assets/images/icons/input_field_icons/map.png')}
          placeholder={'Địa chỉ'}
          value={address}
          setValue={setAddress}
          editable={isEditing}
        />

        {isEditing && (
          <Text
            style={[textStyles.secondary, marginStyles.mt4, marginStyles.mh24]}>
            Nhập đúng địa chỉ để được hỗ trợ tốt nhất
          </Text>
        )}

        <Pressable
          style={{width: '100%', zIndex: 2}}
          onPress={() => {
            setOpen(true);
            console.log('Date of birth');
          }}>
          <InputWithIcon
            icon={require('../../../assets/images/icons/input_field_icons/calendar-2.png')}
            placeholder={'Ngày sinh'}
            value={dob}
            setValue={setDob}
            editable={false}
          />
          {isEditing && (
            <Text
              style={[
                textStyles.secondary,
                marginStyles.mt4,
                marginStyles.mh24,
              ]}>
              Chạm vào icon để chọn ngày
            </Text>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('Giới tính', 'Chọn giới tính của bạn', [
              {
                text: 'Nam',
                onPress: () => {
                  setGender(1);
                },
              },
              {
                text: 'Nữ',
                onPress: () => {
                  setGender(2);
                },
              },
              {
                text: 'Khác',
                onPress: () => {
                  setGender(3);
                },
              },
              {
                text: 'Hủy',
                onPress: () => {
                  console.log('Cancel');
                },
              },
            ]);
          }}>
          <InputWithIcon
            icon={require('../../../assets/images/icons/input_field_icons/aquarius.png')}
            placeholder={'Giới tính'}
            value={gender === 1 ? 'Nam' : gender === 2 ? 'Nữ' : 'Khác'}
            editable={false}
            setValue={setGender}
          />
        </Pressable>
        {isEditing && (
          <Text
            style={[textStyles.secondary, marginStyles.mt4, marginStyles.mh24]}>
            Chạm vào icon để chọn giới tính
          </Text>
        )}
        <Pressable
          style={styles.button}
          onPress={() => {
            if (isEditing) {
              setLoading(true);
              const info = {
                fullName: name,
                dob,
                gender,
                address,
              };
              updateUser({
                // @ts-ignore
                id: user._id,
                email: email,
                info,
              })
                .then(res => {
                  console.log(res);
                  if ('data' in res) {
                    // @ts-ignore
                    if (res.data.status === 'success') {
                      dispatch(setCurrentUser(res.data.user));
                      setLoading(false);
                      Alert.alert(
                        'Thành công',
                        'Cập nhật thông tin thành công',
                      );
                    } else {
                      setLoading(false);
                      // @ts-ignore
                      Alert.alert('Lỗi', res.data.message);
                    }
                  }
                })
                .catch(err => {
                  console.log(err);
                });
              setIsEditing(!isEditing);
            } else {
              setIsEditing(!isEditing);
            }
          }}>
          <Text style={styles.text}>{isEditing ? 'Lưu' : 'Chỉnh sửa'}</Text>
        </Pressable>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          let formattedDate = date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });
          setOpen(false);
          setDob(formattedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <LoadingModal isVisible={loading} title={'Đang tải thông tin'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  contentContainer: {
    marginTop: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1C2A3A',
    paddingVertical: 14,
    borderRadius: 55,
    marginTop: 16,
    width: '80%',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default EditProfileScreen;
