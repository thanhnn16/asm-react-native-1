import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../../../assets/styles/MyStyles.tsx';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoadingModal} from '../../../components/Modal.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store.ts';
import {useGetProductsByIdsQuery} from '../../../api/products/product.service.ts';
import {useEffect} from 'react';

const Tab = createMaterialTopTabNavigator();

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FavoritesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="ServicesFavorites"
          component={ServicesFavorites}
          options={{
            title: 'Dịch vụ',
          }}
        />
        <Tab.Screen
          name="ProductFavorites"
          component={ProductFavorites}
          options={{
            title: 'Sản phẩm',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const ProductFavorites = () => {
  const favoriteProducts = useSelector(
    (state: RootState) => state.productFavorite,
  );
  console.log(favoriteProducts);

  const {data, error, isLoading} = useGetProductsByIdsQuery(favoriteProducts);
  console.log(data, error, isLoading);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      {data && data.length > 0 ? (
        <Text>{data.length}</Text>
      ) : (
        <Text>Chưa có sản phẩm yêu thích nào</Text>
      )}
      <LoadingModal isVisible={isLoading} title={'Đang tải dữ liệu'} />
    </View>
  );
};

const ServicesFavorites = () => {
  return (
    <View style={styles.container}>
      <Text>Chưa có dịch vụ yêu thích nào</Text>
    </View>
  );
};

export default FavoritesScreen;
