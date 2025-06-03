// src/app/index.tsx
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import { products } from "../../constants/Products";
import { darkTheme } from "../../styles/theme";
import useColorScheme from "../../utils/useColorScheme";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  //   const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const theme = darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
