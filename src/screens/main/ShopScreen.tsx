import React, {useEffect, useState} from 'react';
import {Alert, Pressable, ScrollView, Text, View} from 'react-native';
import {
  buttonType,
  marginStyles,
  styles,
  textStyles,
} from '../../assets/styles/MyStyles.tsx';
import {SearchField} from '../../components/InputField.tsx';

import {LoadingModal} from '../../components/Modal.tsx';
import {Product} from '../../api/products/product.type.ts';
import ProductItem, {
  productItem,
} from '../../components/item_layouts/ProductItem.tsx';
import {
  useGetProductByTypeQuery,
  useGetProductTypesQuery,
} from '../../api/products/productTypes/productType.service.ts';
import {ProductType} from '../../api/products/productTypes/productType.type.ts';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useGetProductsQuery} from '../../api/products/product.service.ts';

const ShopScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [types, setTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getProductsData = useGetProductsQuery(page);
  const getProductTypesData = useGetProductTypesQuery();
  const getProductByType = useGetProductByTypeQuery(selectedType);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });
  const animatedSearchStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 100], [1, 0], 'clamp');
    const scale = interpolate(scrollY.value, [0, 100], [1, 0.8], 'clamp');
    const height = interpolate(scrollY.value, [0, 100], [50, 0], 'clamp');
    return {
      opacity,
      transform: [{scale}],
      height,
    };
  });

  const handlerSearch = () => {
    setLoading(true);
    setLoading(false);
    if (false) {
      Alert.alert(
        'Không tìm thấy sản phẩm',
        'Vui lòng nhập lại tên hoặc loại sản phẩm để tìm kiếm',
        [
          {
            text: 'OK',
            onPress: () => setSearch(''),
          },
        ],
      );
    } else {
      Alert.alert('Lỗi', 'Vui lòng thử lại', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  // const loadMoreProducts = async () => {
  //   if (search || selectedType !== '') {
  //     return;
  //   }
  //   setLoadingMore(true);
  //   const {data, error, isFetching} = useGetProductsQuery();
  //   if (res.data === undefined) {
  //     return;
  //   }
  //   const data = res.data;
  //   if (selectedType === '') {
  //     setProducts(prevProducts => [...prevProducts, ...data.products]);
  //   } else {
  //     setProducts(data.products);
  //   }
  //   setLoadingMore(false);
  // };

  useEffect(() => {
    if (getProductsData.data) {
      const data = getProductsData.data;
      setTotalPages(data.pages);
      const newProducts = data.products;
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setLoadingMore(false);
    }
  }, [getProductsData.data]);

  useEffect(() => {
    if (getProductTypesData.data) {
      const data = getProductTypesData.data;
      setTypes(data);
    }
  }, [getProductTypesData.data]);

  useEffect(() => {
    const res = getProductByType.data;
    if (res) {
      setProducts(res);
    } else {
      setProducts([]);
    }
  }, [getProductByType.data]);

  useEffect(() => {
    if (selectedType === '') {
      setProducts(getProductsData.data?.products || []);
    }
  }, [selectedType]);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedSearchStyle}>
        <SearchField
          search={search}
          setSearch={setSearch}
          handleSearch={handlerSearch}
        />
      </Animated.View>
      <View style={marginStyles.ph24}>
        <View style={marginStyles.mt16} />
        <ScrollView
          horizontal={true}
          style={marginStyles.mb16}
          showsHorizontalScrollIndicator={false}>
          <Pressable
            style={
              selectedType === ''
                ? buttonType.selectedContainer
                : buttonType.container
            }
            key={0}
            onPress={() => {
              setProducts([]);
              setPage(1);
              setSelectedType('');
            }}>
            <Text
              style={
                selectedType === '' ? buttonType.selectedText : buttonType.text
              }>
              Tất cả
            </Text>
          </Pressable>
          {types.map(type => (
            <Pressable
              key={type._id}
              style={
                selectedType === type._id
                  ? buttonType.selectedContainer
                  : buttonType.container
              }
              onPress={() => {
                setSelectedType(type._id);
              }}>
              <Text
                style={
                  selectedType === type._id
                    ? buttonType.selectedText
                    : buttonType.text
                }>
                {type.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Animated.FlatList
        data={search ? products : products}
        renderItem={({item}) => (
          <ProductItem {...item} navigation={navigation} />
        )}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        style={productItem.flatListStyle}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        onEndReached={() => {
          if (selectedType === '') {
            if (page < totalPages) {
              setLoadingMore(true);
              setPage(currentPage => currentPage + 1);
            }
          }
        }}
        onEndReachedThreshold={0.5}
        bounces={true}
        onScroll={scrollHandler}
        scrollEventThrottle={5}
      />

      <LoadingModal isVisible={loading} title={`Đang tìm kiếm ${search}`} />

      {loadingMore ? (
        <Text style={[marginStyles.mt16, textStyles.center]}>
          Đang tải thêm...
        </Text>
      ) : null}
    </View>
  );
};

export default ShopScreen;
