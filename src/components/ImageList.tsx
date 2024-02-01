import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";

type Props = {
  images: string[];
  onPress: (index: number) => void;
  shift?: number;
};

const IMAGE_WIDTH = 320;
const IMAGE_HEIGH = 200;

const ImageList = ({ images, shift = 0, onPress }: Props) => (
  <ScrollView
    horizontal
    style={styles.root}
    showsHorizontalScrollIndicator={false}
    decelerationRate="fast"
    contentContainerStyle={styles.container}
    pagingEnabled={true}
  >
    {images.map((imageUrl, index) => (
      <TouchableOpacity
        style={styles.button}
        key={`${imageUrl}_${index}`}
        activeOpacity={0.8}
        onPress={() => onPress(index)}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  root: { flexGrow: 0 },
  container: {
    flex: 0,
    paddingLeft: 4,
    marginBottom: 4
  },
  button: {
    marginRight: 10
  },
  image: {
    height: IMAGE_HEIGH,
    width: IMAGE_WIDTH,
    objectFit: "fill",
    borderRadius: 10,
    borderWidth: 1,
  }
});

export default ImageList;
