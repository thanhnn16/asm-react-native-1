import React, {useEffect, useState} from 'react';
import {Alert, Pressable, ScrollView, Text, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from '../../api/products/product.service.ts';

// @ts-ignore
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
  const searchProducts = useSearchProductsQuery(search);

  const scrollY = useSharedValue(0);
  const prevScrollY = useSharedValue(0);
  const initialScrollY = useSharedValue(0);
  const isScrollingUp = useSharedValue(false);
  const isScrolledUp = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const currentScrollY = event.contentOffset.y;
      const isCurrentlyScrollingUp = currentScrollY < prevScrollY.value;
      if (
        isCurrentlyScrollingUp &&
        initialScrollY.value - currentScrollY > 10
      ) {
        isScrolledUp.value = true;
      } else if (
        !isCurrentlyScrollingUp &&
        currentScrollY - initialScrollY.value > 10
      ) {
        isScrolledUp.value = false;
      }
      isScrollingUp.value = isCurrentlyScrollingUp;
      prevScrollY.value = currentScrollY;
      scrollY.value = currentScrollY;
    },
    onBeginDrag: event => {
      initialScrollY.value = event.contentOffset.y;
    },
  });

  const animatedSearchStyle = useAnimatedStyle(() => {
    const opacity = isScrolledUp.value
      ? withTiming(1, {duration: 500})
      : withTiming(interpolate(scrollY.value, [300, 350], [1, 0], 'clamp'), {
          duration: 500,
        });
    const scale = isScrolledUp.value
      ? withTiming(1, {duration: 500})
      : withTiming(interpolate(scrollY.value, [300, 350], [1, 0.5], 'clamp'), {
          duration: 500,
        });
    const height = isScrolledUp.value
      ? withTiming(120, {duration: 500})
      : withTiming(interpolate(scrollY.value, [290, 390], [120, 0], 'clamp'), {
          duration: 500,
        });

    return {
      opacity,
      transform: [{scale}],
      height,
    };
  });

  const handlerSearch = () => {
    const {data, isFetching} = searchProducts;
    setLoading(isFetching);
    if (data) {
      setProducts(data);
      setSearch('');
    } else if (!data) {
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
  }, [getProductsData.data?.products, selectedType]);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedSearchStyle}>
        <SearchField
          search={search}
          setSearch={setSearch}
          handleSearch={handlerSearch}
        />
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
                  selectedType === ''
                    ? buttonType.selectedText
                    : buttonType.text
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
      </Animated.View>

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
