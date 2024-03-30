// @ts-ignore
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  bottomBooking,
  marginStyles,
  styles,
} from '../../assets/styles/MyStyles.tsx';
import ImageView from 'react-native-image-viewing';
import {LoadingModal} from '../../components/Modal.tsx';
import {useGetProductQuery} from '../../api/products/product.service.ts';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../../api/products/product.type.ts';
import {RootState} from '../../store/store.ts';
import {
  addProductFavorite,
  removeProductFavorite,
} from '../../store/favorites/productFavorite.slice.ts';

// @ts-ignore
const ProductDetail = ({route}) => {
  const screenWidth = Dimensions.get('window').width;
  const productId = route.params.product;
  const [currentImageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState();
  const [visible, setIsVisible] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [product, setProduct] = useState<Product | null>({
    _id: '',
    description: '',
    images: [],
    name: '',
    price: 0,
    productTypeId: '',
  });

  const isProductFavorite = useSelector((state: RootState) =>
    state.productFavorite.includes(productId),
  );

  const [isFavorite, setIsFavorite] = useState(isProductFavorite);

  const dispatch = useDispatch();

  const {data, error, isFetching} = useGetProductQuery(productId);

  const heartScale = useSharedValue(1);
  const heartOpacity = useSharedValue(1);

  const heartAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: heartScale.value}],
      opacity: heartOpacity.value,
    };
  });

  const onHeartPress = () => {
    heartScale.value = withTiming(1.5, {duration: 200}, () => {
      heartScale.value = withTiming(1, {duration: 200});
    });
    heartOpacity.value = withTiming(0, {duration: 200}, () => {
      heartOpacity.value = withTiming(1, {duration: 200});
    });
  };

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(Number(product?.price));

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  useEffect(() => {
    if (data) {
      setProduct(data);
      const images = data.images.map(image => {
        return {
          uri: image,
        };
      });
      // @ts-ignore
      setProductImages(images);
    }
  }, [data]);

  useEffect(() => {
    setIsFavorite(isProductFavorite);
  }, [product, isProductFavorite]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          {
            width: screenWidth - 24,
            height: 250,
            backgroundColor: 'white',
            marginHorizontal: 12,
            marginTop: 12,
            borderRadius: 8,
          },
        ]}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={productImages}
          renderItem={({item, index}) => (
            <Pressable
              style={{
                width: screenWidth - 24,
                height: 250,
                borderRadius: 8,
              }}
              onPress={() => {
                onSelect(productImages, index);
              }}>
              <Image
                source={{uri: item.uri}}
                defaultSource={require('../../assets/images/logo.png')}
                style={{
                  width: '100%',
                  height: 250,
                  objectFit: 'fill',
                  borderRadius: 8,
                }}
              />
            </Pressable>
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          pagingEnabled={true}
        />
      </View>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={true}>
        <View style={prodDetail.infoContainer}>
          <Text style={prodDetail.name}>{product.name}</Text>
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E7EB',
              marginVertical: 8,
            }}
          />
          <Text style={prodDetail.price}>Giá: {formattedPrice}</Text>
          <Text style={prodDetail.price}>Tình trạng: còn hàng</Text>
        </View>
        <View style={[marginStyles.mh24]}>
          <Text style={prodDetail.title}>Mô tả sản phẩm</Text>
          <Text style={prodDetail.price}>{product.description}</Text>
          <Text style={prodDetail.title}>Thông tin bảo hành</Text>
          <Text style={prodDetail.price}>
            Sản phẩm được bảo hành 1 năm từ ngày mua hàng. Bảo hành theo hóa đơn
            mua hàng.
          </Text>
        </View>
        <View style={{height: 280}} />
      </ScrollView>
      <View style={prodDetail.footerContainer}>
        <Pressable
          style={{
            backgroundColor: '#FFF',
            width: 48,
          }}
          onPress={async () => {
            if (isFavorite) {
              dispatch(removeProductFavorite(product));
              setIsFavorite(false);
            } else {
              setIsFavorite(true);
              dispatch(addProductFavorite(product));
              onHeartPress();
            }
          }}>
          <Animated.Image
            source={
              isFavorite
                ? require('../../assets/images/icons/heart-filled.png')
                : require('../../assets/images/icons/heart.png')
            }
            defaultSource={require('../../assets/images/icons/heart.png')}
            style={
              isFavorite
                ? [
                    heartAnimationStyle,
                    {width: 24, height: 24, objectFit: 'contain'},
                  ]
                : {width: 24, height: 24, objectFit: 'contain'}
            }
          />
        </Pressable>
        <Pressable
          style={[bottomBooking.buttonContainer, {width: screenWidth - 96}]}
          onPress={() => {
            Alert.alert('Đang phát triển');
          }}>
          <Text style={bottomBooking.buttonText}>Mua ngay</Text>
        </Pressable>
      </View>
      <ImageView
        images={productImages}
        imageIndex={currentImageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <LoadingModal isVisible={isFetching} title={'Đang tải dữ liệu'} />
    </SafeAreaView>
  );
};

export const prodDetail = StyleSheet.create({
  infoContainer: {
    marginTop: 16,
    marginHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2A37',
  },
  price: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: '#1F2A37',
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    height: 78,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
});

export default ProductDetail;
