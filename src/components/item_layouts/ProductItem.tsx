import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from '../../api/products/product.type.ts';

// @ts-ignore
const ProductItem = React.memo(
  ({navigation, ...item}: Product & {navigation: any}) => {
    const image =
      item.images && item.images.length > 0
        ? {uri: item.images[0]}
        : require('../../assets/images/logo.png');

    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(Number(item.price));

    return (
      <Pressable
        key={item._id}
        onPress={() => {
          console.log('Product id: ', item._id);
          navigation.navigate('ProductDetail', {product: item._id});
        }}
        style={productItem.container}>
        <Image
          style={productItem.image}
          source={image}
          defaultSource={require('../../assets/images/logo.png')}
        />
        <View style={productItem.infoContainer}>
          <Text
            style={productItem.name}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {item.name}
          </Text>
          <View style={productItem.priceContainer}>
            <Image
              source={require('../../assets/images/icons/dollar-square.png')}
              style={productItem.priceIcon}
            />
            <Text style={productItem.price}>{formattedPrice}</Text>
          </View>
        </View>
      </Pressable>
    );
  },
);

export const productItem = StyleSheet.create({
  flatListStyle: {
    paddingHorizontal: 8,
  },
  container: {
    width: '46%',
    paddingBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderWidth: 0.4,
    borderColor: '#E5E7EB',
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    objectFit: 'cover',
  },
  infoContainer: {
    padding: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4B5563',
    textAlign: 'left',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  priceIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
  price: {
    fontSize: 16,
    color: '#6B7280',
  },
});

export default ProductItem;
