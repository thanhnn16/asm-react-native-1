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
import {marginStyles, styles} from '../../assets/styles/MyStyles.tsx';
import ImageView from 'react-native-image-viewing';
import {LoadingModal} from '../../components/Modal.tsx';
import {useGetProductQuery} from '../../api/products/product.service.ts';

// @ts-ignore
const ProductDetail = ({route}) => {
  const screenWidth = Dimensions.get('window').width;
  const productId = route.params.product;
  const [currentImageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState();
  const [visible, setIsVisible] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [product, setProduct] = useState({});

  const [isFavorite, setIsFavorite] = useState(false);

  const {data, error, isFetching} = useGetProductQuery(productId);

  // const formattedPrice = new Intl.NumberFormat('vi-VN', {
  //   style: 'currency',
  //   currency: 'VND',
  // }).format(Number(product.price));

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
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

      <View style={prodDetail.infoContainer}>
        <Text style={prodDetail.name}>{product.name}</Text>
        <View
          style={{
            height: 1,
            backgroundColor: '#E5E7EB',
            marginVertical: 8,
          }}
        />
        <Text style={prodDetail.price}>Gia</Text>
        <Text style={prodDetail.price}>Tình trạng: </Text>
      </View>
      <ScrollView>
        <View style={marginStyles.mh24}>
          <Text style={prodDetail.title}>Mô tả sản phẩm</Text>
          <Text style={prodDetail.price}>{product.description}</Text>
          <Text style={prodDetail.title}>Thông tin bảo hành</Text>
          <Text style={prodDetail.price}>
            Sản phẩm được bảo hành 1 năm từ ngày mua hàng. Bảo hành theo hóa đơn
            mua hàng.
          </Text>
        </View>
        <View style={marginStyles.mb32} />
      </ScrollView>
      <View style={prodDetail.footerContainer}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: '#FFF',
            padding: 12,
            alignItems: 'center',
            borderRadius: 8,
          }}
          onPress={async () => {
            console.log('is favarite', isFavorite);
            if (isFavorite) {
              console.log('deleting');
              setIsFavorite(false);
            } else {
              setIsFavorite(true);
            }
          }}>
          <Image
            source={
              isFavorite
                ? require('../../assets/images/icons/heart-filled.png')
                : require('../../assets/images/icons/heart.png')
            }
            defaultSource={require('../../assets/images/icons/heart.png')}
            style={{
              width: 24,
              height: 24,
              objectFit: 'contain',
            }}
          />
        </Pressable>
        <Pressable
          style={{
            flex: 4,
            backgroundColor: '#374151',
            padding: 14,
            borderRadius: 16,
            alignItems: 'center',
          }}
          onPress={() => {
            Alert.alert('Đang phát triển');
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Mua ngay
          </Text>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
});

export default ProductDetail;
