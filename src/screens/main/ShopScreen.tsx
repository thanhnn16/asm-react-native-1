import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { marginStyles, styles } from "../../assets/styles/MyStyles.tsx";
import { SearchField } from "../../components/InputField.tsx";
import { useFocusEffect } from "@react-navigation/native";
import { getAllProducts, searchProduct } from "../../api/services/productService.ts";
import { ProductResponse } from "../../api/types/productTypes.ts";
import ProductItem from "../../components/item_layouts/ProductItem.tsx";
import { productItem } from "../../components/item_layouts/ProductItem.tsx";
import { LoadingModal } from "../../components/Modal.tsx";

// @ts-ignore
const ShopScreen = ({ navigation, route }) => {
  const [search, setSearch] = useState(route.params === undefined ? "" : route.params.search);

  const [products, setProducts] = useState<ProductResponse[]>([]);

  const [searchResults, setSearchResults] = useState<ProductResponse[]>([]);

  const [types, setTypes] = useState([]);

  const [loading, setLoading] = useState(false);

  const [firstLoad, setFirstLoad] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  const [page, setPage] = useState(1);

  const handlerSearch = () => {
    setLoading(true);
    searchProduct(search).then((res) => {
      const products: ProductResponse[] = res;
      setSearchResults(products);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      if (err.response.status === 404) {
        Alert.alert("Không tìm thấy sản phẩm", "Vui lòng nhập lại tên hoặc loại sản phẩm để tìm kiếm", [
          {
            text: "OK",
            onPress: () => setSearch("")
          }]
        );
      } else {
        Alert.alert("Lỗi", "Vui lòng thử lại", [
          {
            text: "OK",
          }]);
      }
    });
  };

  const loadMoreProducts = () => {
    if (search) {
      return;
    }
    setLoadingMore(true);
    getAllProducts(page + 1).then((res) => {
      const newProducts: ProductResponse[] = res.data;
      if (newProducts.length === 0) {
        setLoadingMore(false);
        return;
      }
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setPage(page + 1);
      setLoadingMore(false);
    }).catch((err) => {
      console.log(err);
      setLoadingMore(false);
      Alert.alert("Lỗi", "Vui lòng thử lại");
    });
  };

  useEffect(() => {
    getAllProducts().then((res) => {
      const products: ProductResponse[] = res.data;
      setProducts(products);
      setFirstLoad(false);
    }).catch((err) => {
      console.log(err);
      setFirstLoad(false);
      Alert.alert("Lỗi", "Vui lòng thử lại");
    });
  }, [types]);

  useFocusEffect(
    useCallback(() => {
      setSearch(route.params === undefined ? "" : route.params.search);
      console.log(search);
      if (search !== "") {
        handlerSearch();
      } else {
        console.log("Empty search");
      }
      return () => {
        console.log("Unfocused");
        //   clear route.params
        route.params = { search: "" };
      };
    }, [route.params === undefined ? "" : route.params.search])
  );

  const renderFooter = () => {
    if (!loadingMore) return null;
    return <LoadingModal isVisible={loadingMore} title="Loading more products..." />;
  };

  return (
    <View style={styles.container}>
      <SearchField search={search} setSearch={setSearch} handleSearch={handlerSearch} />
      <View style={marginStyles.ph24}>
        <View style={marginStyles.mt16} />
        <Text>Tab to select type of products</Text>

        <Text>End of flat list</Text>
      </View>
      <FlatList data={search ? searchResults : products}
                renderItem={({ item }) => <ProductItem {...item} />}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                style={productItem.flatListStyle}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                numColumns={2}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
      />
      <LoadingModal isVisible={loading} title={`Đang tìm kiếm ${search}`} />
      <LoadingModal isVisible={firstLoad} title={"Đang tải"} />
    </View>
  );
};

export default ShopScreen;
