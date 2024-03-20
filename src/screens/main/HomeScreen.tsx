import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  alignStyles,
  customWidth,
  marginStyles,
  styles,
  textStyles,
} from '../../assets/styles/MyStyles.tsx';
import {SearchField} from '../../components/InputField.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomePageGoodCategories from '../../components/item_layouts/HomePageGoodCategories.tsx';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import RootStackParamList from '../../navigation/NavigationTypes.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomepageServiceCategories from '../../components/item_layouts/HomepageServiceCategories.tsx';

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [isShowBanner, setIsShowBanner] = useState(true);

  const handleSearch = () => {
    navigation.navigate('ShopScreen', {search: search});
    setSearch('');
  };

  useFocusEffect(
    useCallback(() => {
      const fetchBannerStatus = async () => {
        const value = await AsyncStorage.getItem('isShowBanner');
        setIsShowBanner(value !== 'false');
      };
      fetchBannerStatus().then();
    }, []),
  );
  return (
    <View
      style={[
        styles.container,
        customWidth.w100,
        {paddingTop: insets.top},
        {paddingBottom: insets.bottom},
      ]}>
      <View style={[homeStyles.headerContainer]}>
        <View style={[alignStyles.left, {flexDirection: 'column'}]}>
          <Text style={[textStyles.h6, textStyles.secondary]}>Khu vực</Text>
          <Pressable
            onPress={() => {
              console.log('Pressed');
            }}>
            <View style={[alignStyles.row, marginStyles.mt4]}>
              <Image
                style={[homeStyles.locationIcon]}
                source={require('../../assets/images/icons/homepage/location.png')}
              />
              <Text style={[textStyles.h6, textStyles.black, textStyles.bold]}>
                Gò Vấp, HCM
              </Text>
              <Image
                style={[homeStyles.arrowIcon]}
                source={require('../../assets/images/icons/homepage/arrow-down.png')}
              />
            </View>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          <Image
            style={[homeStyles.image]}
            source={require('../../assets/images/icons/homepage/has_notification.png')}
          />
        </Pressable>
      </View>

      <SearchField
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <ScrollView>
        {isShowBanner && (
          <View style={[marginStyles.mt8, {position: 'relative'}]}>
            <FlatList
              pagingEnabled={true}
              data={[
                {
                  id: 1,
                  image: require('../../assets/images/banner/1.png'),
                },
                {
                  id: 2,
                  image: require('../../assets/images/banner/2.png'),
                },
                {
                  id: 3,
                  image: require('../../assets/images/banner/3.png'),
                },
                {
                  id: 4,
                  image: require('../../assets/images/banner/4.png'),
                },
              ]}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View key={item.id}>
                  <Image style={[homeStyles.bannerImage]} source={item.image} />
                </View>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <Pressable
              style={homeStyles.closeContainer}
              onPress={() => {
                AsyncStorage.setItem('isShowBanner', 'false').then(() => {
                  setIsShowBanner(false);
                });
              }}>
              <Image
                style={homeStyles.closeImage}
                source={require('../../assets/images/banner/close.png')}
              />
            </Pressable>
          </View>
        )}

        <View style={[marginStyles.mt16, marginStyles.mh24]}>
          <View style={[alignStyles.rowSpaceBetween]}>
            <Text style={[textStyles.h5, textStyles.black, textStyles.bold]}>
              Sản phẩm bán chạy
            </Text>
            <Pressable>
              <Text style={[textStyles.h6, textStyles.secondary]}>
                Xem tất cả
              </Text>
            </Pressable>
          </View>
          <HomePageGoodCategories />
        </View>

        <View style={[marginStyles.mt24, marginStyles.mh24, marginStyles.mb64]}>
          <View style={[alignStyles.rowSpaceBetween]}>
            <Text style={[textStyles.h5, textStyles.black, textStyles.bold]}>
              Dịch vụ nổi bật
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('BookAppointment');
              }}>
              <Text style={[textStyles.h6, textStyles.secondary]}>
                Xem tất cả
              </Text>
            </Pressable>
          </View>
          <HomepageServiceCategories />
        </View>
      </ScrollView>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 34,
    height: 34,
  },
  locationIcon: {
    width: 18,
    height: 20,
    objectFit: 'fill',
    marginEnd: 8,
  },
  arrowIcon: {
    width: 14,
    height: 14,
    marginStart: 8,
    objectFit: 'contain',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  bannerImage: {
    ...customWidth.screenWidth,
    height: 164,
    objectFit: 'contain',
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: 24,
    zIndex: 5,
  },
  closeImage: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;
