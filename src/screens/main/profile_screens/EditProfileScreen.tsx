import React, {useState} from 'react';
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
import {profileStyles} from '../../../assets/styles/MyStyles.tsx';
import ImagePicker from 'react-native-image-crop-picker';
// import api, { API_URL, avatarUrl, setAuthToken } from "../../../api/apiConfig.ts";
import DatePicker from 'react-native-date-picker';
import {LoadingModal} from '../../../components/Modal.tsx';

const EditProfileScreen = ({route}) => {
  const uid = route.params.uid;
  console.log('uid: ', uid);
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getUser(uid)
  //     .then(res => {
  //       const user = res.user;
  //       if (user.dob) {
  //         let formattedDate = user.dob.split('T')[0];
  //         setDob(formattedDate);
  //       } else {
  //         setDob('');
  //       }
  //       setName(user.full_name);
  //       setEmail(user.email || '');
  //       setAddress(user.address || '');
  //       setGender(user.gender || '');
  //       // if (user.avatar) {
  //       //   setAvatar(avatarUrl(user.avatar));
  //       // }
  //       setIsLoading(false);
  //     })
  //     .catch(err => {
  //       setIsLoading(false);
  //       Alert.alert('Lỗi', 'Không thể tải thông tin người dùng');
  //       console.log('Error:', err);
  //     });
  // }, []);

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

        <Pressable
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
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert('Giới tính', 'Chọn giới tính của bạn', [
              {
                text: 'Nam',
                onPress: () => {
                  setGender('male');
                },
              },
              {
                text: 'Nữ',
                onPress: () => {
                  setGender('female');
                },
              },
              {
                text: 'Khác',
                onPress: () => {
                  setGender('other');
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
            value={
              gender === 'male' ? 'Nam' : gender === 'female' ? 'Nữ' : 'Khác'
            }
            setValue={setGender}
            editable={false}
          />
        </Pressable>
        <Pressable
          style={styles.button}
          // onPress={() => {
          //   if (isEditing) {
          //     updateUser({
          //       uid: uid,
          //       full_name: name,
          //       email: email,
          //       address: address,
          //       dob: dob,
          //       gender: gender,
          //     })
          //       .then(res => {
          //         Alert.alert('Thành công', 'Cập nhật thông tin thành công');
          //         setIsEditing(!isEditing);
          //       })
          //       .catch(err => {
          //         Alert.alert('Lỗi', 'Cập nhật thông tin thất bại');
          //         console.log('Update user error: ', err);
          //       });
          //   } else {
          //     setIsEditing(!isEditing);
          //   }
          // }}
        >
          <Text style={styles.text}>{isEditing ? 'Lưu' : 'Chỉnh sửa'}</Text>
        </Pressable>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          let formattedDate = date.toISOString().split('T')[0];
          setOpen(false);
          setDob(formattedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <LoadingModal isVisible={isLoading} title={'Đang tải thông tin'} />
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
