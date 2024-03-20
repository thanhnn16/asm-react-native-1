import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {marginStyles, styles} from '../../../assets/styles/MyStyles.tsx';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useEffect, useState} from 'react';
import {getFavoriteProducts} from '../../../utils/FavoriteController.ts';
import {log} from 'react-native-bootsplash/dist/typescript/generate';
import {LoadingModal} from '../../../components/Modal.tsx';

const Tab = createMaterialTopTabNavigator();

const FavoritesScreen = ({navigation, route}) => {
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

const ProductFavorites = ({navigation, route}) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchFavoriteProducts = async () => {
  //     try {
  //       const favoriteIds = await getFavoriteProducts();
  //       let products = [];
  //       (favoriteIds.map(id => showProduct(Number(id)).then(res => {
  //         console.log('fetching: ', id);
  //         products.push(res);
  //       })));
  //       setFavoriteProducts(products);
  //       console.log('done');
  //     } catch (error) {
  //       console.error("Error fetching favorite products:", error);
  //     }
  //   };
  //   fetchFavoriteProducts().then(() => setIsLoading(false));
  // }, []);

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
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
