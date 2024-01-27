import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
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
            background={item.background}
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
  background: string;
  onPress: () => void;
}

const ServiceCategoryItem: React.FC<ServiceCategoryItemProps> = ({
                                                                   title,
                                                                   price,
                                                                   isLTR,
                                                                   background,
                                                                   onPress
                                                                 }) => {
  return (
    <View style={[styles.serviceCategoryItemContainer, { backgroundColor: background }]}>
      <Pressable onPress={onPress}>
        <View style={[alignStyles.row, alignStyles.center]}>
          <View style={[alignStyles.center, { flex: 1 }]}>
            <Text style={[textStyles.h6, textStyles.bold, textStyles.white]}>{title}</Text>
            <Text style={[textStyles.h6, textStyles.white]}>{price}</Text>
          </View>
          <Image
            style={[styles.serviceCategoryItemIcon]}
            source={require("../../../src/assets/images/icons/homepage/has_notification.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceCategoryItemContainer: {
    borderRadius: 8,
    marginVertical: 8,
    ...customWidth.screenWidthM24,
    height: 110,
  },
  serviceCategoryItemIcon: {
    width: 24,
    height: 24
  },
  serviceCategoriesContainer: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }
});

const data = [
  {
    id: 1,
    title: "Dịch vụ 1",
    price: "100.000đ",
    isLTR: true,
    background: "#FFC107"
  },
  {
    id: 2,
    title: "Dịch vụ 2",
    price: "100.000đ",
    isLTR: false,
    background: "#FF5722"
  },
  {
    id: 3,
    title: "Dịch vụ 3",
    price: "100.000đ",
    isLTR: true,
    background: "#FFC107"
  },
  {
    id: 4,
    title: "Dịch vụ 4",
    price: "100.000đ",
    isLTR: false,
    background: "#FF5722"
  }
];

export default HomepaceServiceCategories;
