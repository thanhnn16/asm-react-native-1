import React from "react";
import { FlatList, Image, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { alignStyles, customWidth, marginStyles, textStyles } from "../../assets/styles/MyStyles.tsx";


const HomepaceServiceCategories: React.FC = () => {
  return (
    <View style={[alignStyles.row, alignStyles.center, styles.serviceCategoriesContainer]}>
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({ item }) => (
          <ServiceCategoryItem
            id={item.id}
            title={item.title}
            price={item.price}
            isLTR={item.isLTR}
            backgroundImage={item.backgroundImage}
            onPress={() => {
              console.log("Pressed");
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

type ServiceCategoryItemProps = {
  id: number;
  title: string;
  price: string;
  isLTR: boolean;
  backgroundImage: ImageSourcePropType;
  onPress: () => void;
}

const ServiceCategoryItem: React.FC<ServiceCategoryItemProps> = ({
                                                                   title,
                                                                   price,
                                                                   isLTR,
                                                                   backgroundImage,
                                                                   onPress
                                                                 }) => {
  return (
    <View style={[styles.serviceCategoryItemContainer]}>
      <ImageBackground source={backgroundImage} resizeMode="contain" style={[styles.serviceCategoryItemContainer]}>
        <Pressable onPress={onPress} style={styles.contentContainer}>
          <View>
            <View>
              <Text style={[textStyles.h6, textStyles.bold, textStyles.white, isLTR ? styles.textLTR : styles.textRTL]}>{title}</Text>
            </View>
            <View style={styles.divider} />
            <View style={[isLTR ? alignStyles.left : alignStyles.right, alignStyles.row]}>
              <Image
                style={[styles.serviceCategoryItemIcon]}
                source={require("../../../src/assets/images/homepage/dollar-square.png")}
              />
              <Text style={[textStyles.h6, textStyles.white, marginStyles.mh4]}>{price}</Text>
            </View>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceCategoryItemContainer: {
    borderRadius: 8,
    marginVertical: 8,
    ...customWidth.screenWidthM24,
    height: 110,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 0.5
  },
  contentContainer: {
    marginTop: 8,
    marginHorizontal: 12,
  },
  serviceCategoryItemIcon: {
    width: 24,
    height: 24
  },
  serviceCategoriesContainer: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 4,
  },
  textLTR: {
    textAlign: "left"
  },
  textRTL: {
    textAlign: "right"
  },
});

const data = [
  {
    id: 1,
    title: "Tháo & lắp Máy lạnh",
    price: "100.000đ",
    isLTR: true,
    backgroundImage: require("../../../src/assets/images/homepage/services/thao_lap.png"),
  },
  {
    id: 2,
    title: "Vệ sinh máy lạnh",
    price: "100.000đ",
    isLTR: false,
    backgroundImage: require("../../../src/assets/images/homepage/services/ve_sinh.png"),
  },
  {
    id: 3,
    title: "Tháo & lắp Máy lạnh",
    price: "100.000đ",
    isLTR: true,
    backgroundImage: require("../../../src/assets/images/homepage/services/thao_lap.png"),
  },
  {
    id: 4,
    title: "Vệ sinh máy lạnh",
    price: "100.000đ",
    isLTR: false,
    backgroundImage: require("../../../src/assets/images/homepage/services/ve_sinh.png"),
  }
];

export default HomepaceServiceCategories;