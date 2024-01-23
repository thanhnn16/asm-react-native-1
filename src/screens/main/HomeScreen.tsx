import React, { useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { alignStyles, customWidth, marginStyles, styles, textStyles } from "../../assets/styles/MyStyles.tsx";
import { SearchField } from "../../components/InputField.tsx";

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView
      style={[styles.container, customWidth.w100]}>
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
    </SafeAreaView>
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
  }
});

export default HomeScreen;
