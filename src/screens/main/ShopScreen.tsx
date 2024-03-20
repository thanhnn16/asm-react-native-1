import React, {useState} from 'react';
import {View} from 'react-native';
import {marginStyles, styles} from '../../assets/styles/MyStyles.tsx';
import {SearchField} from '../../components/InputField.tsx';
// import {
//   getAllProducts,
//   getProductsByCategory,
//   getProductTypes,
//   searchProduct
// } from "../../api/services/productService.ts";
// import { ProductResponse, ProductType } from "../../api/types/productTypes.ts";
import {LoadingModal} from '../../components/Modal.tsx';

const ShopScreen = ({navigation, route}) => {
  const [search, setSearch] = useState(
    route.params === undefined ? '' : route.params.search,
  );

  // const [products, setProducts] = useState<ProductResponse[]>([]);

  // const [searchResults, setSearchResults] = useState<ProductResponse[]>([]);

  // const [types, setTypes] = useState<ProductType[]>([]);

  const [loading, setLoading] = useState(false);

  const [firstLoad, setFirstLoad] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  const [page, setPage] = useState(1);

  const [selectedType, setSelectedType] = useState(0);

  // const handlerSearch = () => {
  //   setLoading(true);
  //   searchProduct(search)
  //     .then(res => {
  //       const products: ProductResponse[] = res;
  //       setSearchResults(products);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //       if (err.response.status === 404) {
  //         Alert.alert(
  //           'Không tìm thấy sản phẩm',
  //           'Vui lòng nhập lại tên hoặc loại sản phẩm để tìm kiếm',
  //           [
  //             {
  //               text: 'OK',
  //               onPress: () => setSearch(''),
  //             },
  //           ],
  //         );
  //       } else {
  //         Alert.alert('Lỗi', 'Vui lòng thử lại', [
  //           {
  //             text: 'OK',
  //           },
  //         ]);
  //       }
  //     });
  // };

  // const loadMoreProducts = () => {
  //   if (search || selectedType) {
  //     return;
  //   }
  //   setLoadingMore(true);
  //   getAllProducts(page + 1)
  //     .then(res => {
  //       // @ts-ignore
  //       const newProducts: ProductResponse[] = res.data;
  //       if (newProducts.length === 0) {
  //         setLoadingMore(false);
  //         return;
  //       }
  //       setProducts(prevProducts => [...prevProducts, ...newProducts]);
  //       setPage(page + 1);
  //       setLoadingMore(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       setLoadingMore(false);
  //       Alert.alert('Lỗi', 'Vui lòng thử lại');
  //     });
  // };

  // useEffect(() => {
  //   if (selectedType === 0) {
  //     getAllProducts()
  //       .then(res => {
  //         // @ts-ignore
  //         const products: ProductResponse[] = res.data;
  //         setProducts(products);
  //         setFirstLoad(false);
  //       })
  //       .catch(err => {
  //         setFirstLoad(false);
  //         Alert.alert('Lỗi', 'Vui lòng thử lại');
  //       });
  //   } else {
  //     getProductsByCategory(String(selectedType))
  //       .then(res => {
  //         const products: ProductResponse[] = res;
  //         setProducts(products);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         setFirstLoad(false);
  //         Alert.alert('Lỗi', 'Vui lòng thử lại');
  //       });
  //   }
  // }, [selectedType]);

  // useFocusEffect(
  //   useCallback(() => {
  //     setSearch(route.params === undefined ? '' : route.params.search);
  //     if (search !== '') {
  //       handlerSearch();
  //     } else {
  //     }
  //     return () => {
  //       route.params = {search: ''};
  //     };
  //   }, [route.params === undefined ? '' : route.params.search]),
  // );

  // useEffect(() => {
  //   getProductTypes().then(res => {
  //     setTypes(res);
  //   });
  // }, []);

  const renderFooter = () => {
    if (!loadingMore) {
      return null;
    }
    return (
      <LoadingModal isVisible={loadingMore} title="Đang tải thêm sản phẩm..." />
    );
  };

  // @ts-ignore
  return (
    <View style={styles.container}>
      <SearchField
        search={search}
        setSearch={setSearch}
        // handleSearch={handlerSearch}
        handleSearch={() => {
          console.log('Search');
        }}
      />
      <View style={marginStyles.ph24}>
        <View style={marginStyles.mt16} />
        {/*<ScrollView*/}
        {/*  horizontal={true}*/}
        {/*  style={marginStyles.mb16}*/}
        {/*  showsHorizontalScrollIndicator={false}>*/}
        {/*  <Pressable*/}
        {/*    style={*/}
        {/*      selectedType === 0*/}
        {/*        ? buttonType.selectedContainer*/}
        {/*        : buttonType.container*/}
        {/*    }*/}
        {/*    key={0}*/}
        {/*    onPress={() => {*/}
        {/*      setSelectedType(0);*/}
        {/*    }}>*/}
        {/*    <Text*/}
        {/*      style={*/}
        {/*        selectedType === 0 ? buttonType.selectedText : buttonType.text*/}
        {/*      }>*/}
        {/*      Tất cả*/}
        {/*    </Text>*/}
        {/*  </Pressable>*/}
        {/*  {types.map(type => (*/}
        {/*    <Pressable*/}
        {/*      key={type.id}*/}
        {/*      style={*/}
        {/*        selectedType === type.id*/}
        {/*          ? buttonType.selectedContainer*/}
        {/*          : buttonType.container*/}
        {/*      }*/}
        {/*      onPress={() => {*/}
        {/*        setSelectedType(type.id);*/}
        {/*      }}>*/}
        {/*      <Text*/}
        {/*        style={*/}
        {/*          selectedType === type.id*/}
        {/*            ? buttonType.selectedText*/}
        {/*            : buttonType.text*/}
        {/*        }>*/}
        {/*        {type.name}*/}
        {/*      </Text>*/}
        {/*    </Pressable>*/}
        {/*  ))}*/}
        {/*</ScrollView>*/}
      </View>
      {/*<FlatList*/}
      {/*  data={search ? searchResults : products}*/}
      {/*  renderItem={({item}) => (*/}
      {/*    <ProductItem {...item} navigation={navigation} />*/}
      {/*  )}*/}
      {/*  keyExtractor={item => String(item.id)}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*  style={productItem.flatListStyle}*/}
      {/*  columnWrapperStyle={{justifyContent: 'space-between'}}*/}
      {/*  numColumns={2}*/}
      {/*  onEndReached={loadMoreProducts}*/}
      {/*  onEndReachedThreshold={0.5}*/}
      {/*  ListFooterComponent={renderFooter}*/}
      {/*/>*/}
      <LoadingModal isVisible={loading} title={`Đang tìm kiếm ${search}`} />
      <LoadingModal isVisible={firstLoad} title={'Đang tải'} />
    </View>
  );
};

export default ShopScreen;
