// src/components/ProductCard.tsx
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { darkTheme, lightTheme } from "../styles/theme";
import useColorScheme from "../utils/useColorScheme";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const colorScheme = useColorScheme();
  const theme = darkTheme ;

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: theme.text }]}>{product.title}</Text>
      <Text style={[styles.price, { color: theme.text }]}>
        ${product.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    aspectRatio: 1, // or 2/3 or 3/4 depending on your images
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default ProductCard;
