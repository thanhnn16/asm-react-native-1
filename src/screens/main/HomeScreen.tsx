import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { alignStyles, customWidth, marginStyles, styles, textStyles } from "../../assets/styles/MyStyles.tsx";
import { SearchField } from "../../components/InputField.tsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomePageGoodCategories from "../../components/item_layouts/HomePageGoodCategories.tsx";

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  return (
    <View
      style={[
        styles.container,
        customWidth.w100,
        { paddingTop: insets.top },
        { paddingBottom: insets.bottom}
      ]}>
      <View style={[homeStyles.headerContainer]}>
        <View style={[alignStyles.left, { flexDirection: "column" }]}>

          <Text style={[textStyles.h6, textStyles.secondary]}>Địa điểm</Text>
          <Pressable
            onPress={() => {
              console.log("Pressed");
            }}
          >
            <View style={[alignStyles.row, marginStyles.mt4]}>
              <Image
                style={[homeStyles.locationIcon]}
                source={require("../../assets/images/icons/homepage/location.png")}
              />

              <Text style={[textStyles.h6, textStyles.black, textStyles.bold]}>Gò Vấp, HCM</Text>

              <Image
                style={[homeStyles.arrowIcon]}
                source={require("../../assets/images/icons/homepage/arrow-down.png")}
              />
            </View>
          </Pressable>
        </View>
        <Image
          style={[homeStyles.image]}
          source={require("../../assets/images/icons/homepage/has_notification.png")}
        />
      </View>

      <SearchField search={search} setSearch={setSearch} />

      <View style={[marginStyles.mt8, marginStyles.mh24]}>
        <FlatList
          pagingEnabled={true}

          data={
          [
            {
              id: 1,
              image: require("../../assets/images/banner/1.png")
            },
            {
              id: 2,
              image: require("../../assets/images/banner/2.png")
            },
            {
              id: 3,
              image: require("../../assets/images/banner/3.png")
            },
            {
              id: 4,
              image: require("../../assets/images/banner/4.png")
            },
          ]
        } keyExtractor={(item) => item.id.toString()
        } renderItem={
          ({ item }) => (
            <View style={alignStyles.center}>
              <Image
                style={[homeStyles.bannerImage]}
                source={item.image}
              />
            </View>
          )
        } horizontal={true} showsHorizontalScrollIndicator={false} />
      </View>

      <View style={[marginStyles.mt16, marginStyles.mh24]}>
        <View style={[alignStyles.rowSpaceBetween]}>
          <Text style={[textStyles.h5, textStyles.black, textStyles.bold]}>Danh mục hàng hoá</Text>
          <Pressable><Text style={[textStyles.h6, textStyles.secondary]}>Xem tất cả</Text></Pressable>
        </View>
        <HomePageGoodCategories />
      </View>

      <View style={[marginStyles.mt24, marginStyles.mh24]}>
        <View style={[alignStyles.rowSpaceBetween]}>
          <Text style={[textStyles.h5, textStyles.black, textStyles.bold]}>Danh mục dịch vụ</Text>
          <Pressable><Text style={[textStyles.h6, textStyles.secondary]}>Xem tất cả</Text></Pressable>
        </View>
        <HomePageGoodCategories />
      </View>

    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 34,
    height: 34
  },
  locationIcon: {
    width: 18,
    height: 20,
    objectFit: "fill",
    marginEnd: 8
  },
  arrowIcon: {
    width: 14,
    height: 14,
    marginStart: 8,
    objectFit: "contain"
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 16
  },
  bannerImage: {
    ...customWidth.screenWidth,
    height: 140,
    objectFit: "contain",
  },
});

export default HomeScreen;
