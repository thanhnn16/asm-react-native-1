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
  View
} from "react-native";
import React, { useEffect, useState } from "react";
import { showProduct } from "../../api/services/productService.ts";
import { marginStyles, styles } from "../../assets/styles/MyStyles.tsx";
import ImageView from "react-native-image-viewing";
import ImageList from "../../components/ImageList.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadingModal } from "../../components/Modal.tsx";
import {
  addProductToFavorites,
  getFavoriteProducts,
  removeProductFromFavorites
} from "../../utils/FavoriteController.ts";

// @ts-ignore
const ProductDetail = ({ navigation, route }) => {
  const screenWidth = Dimensions.get("window").width;
  const productId = route.params.product;
  const [currentImageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState();
  const [visible, setIsVisible] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [isFavorite, setIsFavorite] = useState(false);

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(Number(product.price));

  console.log('Route recieved: ', route.params.product);

  const onSelect = (images, index) => {
    setImageIndex(index);
    setImages(images);
    setIsVisible(true);
  };

  useEffect(() => {
    showProduct(productId).then((res) => {
      if (res === null) {
        setIsLoading(false);
        Alert.alert("Lỗi", "Không tìm thấy sản phẩm");
        return;
      } else {
        getFavoriteProducts().then((favoriteIds) => {
          if (favoriteIds.includes(productId)) {
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
          }
        });
        const product = res;
        setProduct(product);
        if (product.product_images.length > 0) {
          res.product_images.map((image) => {
            const uri = image.images;
            const imageObject = {
              uri: uri
            };
            setProductImages((productImages) => [...productImages, imageObject]);
          });
        } else {
          setProductImages([
            {
              uri: "https://th.bing.com/th/id/OIG4.rlOdtWSBfQVcm7FvZRwD?w=1024&h=1024&rs=1&pid=ImgDetMain"
            }
          ]);
        }
      }
      setIsLoading(false);

    }).catch((err) => {
      setIsLoading(false);
      Alert.alert("Lỗi", "Không thể tải dữ liệu sản phẩm");
      console.log(err);
    });
    return () => {
      // setProductImages([]);
      // setIsLoading(true);
    };
  }, [productId]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{
        width: screenWidth - 24, height: 250, backgroundColor: "white",
        marginHorizontal: 12,
        marginTop: 12,
        borderRadius: 8
      }]}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={productImages}
          renderItem={({ item, index }) => (
            <Pressable style={{
              width: screenWidth - 24,
              height: 250,
              borderRadius: 8

            }}
                       onPress={() => {
                         onSelect(productImages, index);
                       }}>
              <Image
                source={{ uri: item.uri }}
                defaultSource={require("../../assets/images/logo.png")}
                style={{
                  width: "100%",
                  height: 250,
                  objectFit: "fill",
                  borderRadius: 8
                }} />
            </Pressable>
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          pagingEnabled={true}
        />
      </View>

      <View style={prodDetail.infoContainer}>
        <Text style={prodDetail.name}>
          {product.name}
        </Text>
        <View style={{
          height: 1,
          backgroundColor: "#E5E7EB",
          marginVertical: 8
        }} />
        <Text style={prodDetail.price}>
          {formattedPrice}
        </Text>
        <Text style={prodDetail.price}>
          Tình trạng: {product.status}
        </Text>

      </View>
      <ScrollView>
        <View style={marginStyles.mh24}>
          <Text style={prodDetail.title}>Mô tả sản phẩm</Text>
          <Text style={prodDetail.price}>
            {product.description}
          </Text>
          <Text style={prodDetail.title}>Thông tin bảo hành</Text>
          <Text style={prodDetail.price}>
            Sản phẩm được bảo hành 1 năm từ ngày mua hàng. Bảo hành theo hóa đơn mua hàng.
          </Text>
        </View>
        <View style={marginStyles.mb32} />
      </ScrollView>
      <View style={prodDetail.footerContainer}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            padding: 12,
            alignItems: "center",
            borderRadius: 8
          }}
          onPress={async () => {
            console.log("is favarite", isFavorite);
            if (isFavorite) {
              console.log("deleting");
              await removeProductFromFavorites(String(product.id));
              setIsFavorite(false);
            } else {
              await addProductToFavorites(String(product.id));
              setIsFavorite(true);
            }
          }}
        >
          <Image
            source={isFavorite ? require("../../assets/images/icons/heart-filled.png") : require("../../assets/images/icons/heart.png")}
            defaultSource={require("../../assets/images/icons/heart.png")}
            style={{
              width: 24, height: 24, objectFit: "contain"
            }}
          />
        </Pressable>
        <Pressable
          style={{
            flex: 4,
            backgroundColor: "#374151",
            padding: 14,
            borderRadius: 16,
            alignItems: "center"
          }}
          onPress={() => {
            Alert.alert("Đang phát triển");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
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
      <LoadingModal isVisible={isLoading} title={"Đang tải dữ liệu"} />
    </SafeAreaView>
  );
};

export const prodDetail = StyleSheet.create({
  infoContainer: {
    marginTop: 16,
    marginHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "white",
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.25
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2A37"
  },
  price: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 4
  },
  title: {
    fontSize: 18,
    color: "#1F2A37",
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 4
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.25
  }
});

export default ProductDetail;
