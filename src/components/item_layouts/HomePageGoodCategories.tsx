import React from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { alignStyles, marginStyles, textStyles } from "../../assets/styles/MyStyles.tsx";

const HomePageGoodCategories = () => {
  return (
    <View style={[{  backgroundColor: "transparent", justifyContent: 'space-evenly' }, marginStyles.mt12, alignStyles.row, alignStyles.center]}>
      {goodCategories.map((item) => (
        <HomePageGoodCategoriesItem
          id={item.id}
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </View>
  );
};

const HomePageGoodCategoriesItem = ({ id, image, title }: HomePageGoodCategoriesProps) => {
  return (
    <Pressable
      key={id}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={() => {
        console.log("ID pressed: " + id);
      }}
    >
      <View style={[alignStyles.center]}>
        <Image
          style={{ width: 62, height: 62, borderRadius: 8, objectFit: "contain" }}
          source={image}
        />
        <Text style={[textStyles.center, textStyles.bold, marginStyles.mt4, textStyles.h7, textStyles.secondary]}>{title}</Text>
      </View>
    </Pressable>
  );
};

type HomePageGoodCategoriesProps = {
  id: number;
  image: ImageSourcePropType;
  title: string;
  onClick?: () => void;
};
const goodCategories = [
  {
    id: 1,
    image: require("../../assets/images/homepage/maylanh.png"),
    title: "Máy lạnh"
  },
  {
    id: 2,
    image: require("../../assets/images/homepage/maygiat.png"),
    title: "Máy giặt"
  },
  {
    id: 3,
    image: require("../../assets/images/homepage/tulanh.png"),
    title: "Tủ lạnh"
  },
  {
    id: 4,
    image: require("../../assets/images/homepage/khac.png"),
    title: "Khác"
  }
];

export default HomePageGoodCategories;
