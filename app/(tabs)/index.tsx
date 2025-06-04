// src/app/index.tsx
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import { products } from "../../constants/Products";
import { darkTheme } from "../../styles/theme";
import useColorScheme from "../../utils/useColorScheme";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const theme = darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <ProductCard product={item} />
          </View>
        )}
        numColumns={3} // 👈 This enables the grid layout
        columnWrapperStyle={styles.row} // Optional: adds spacing between rows
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    justifyContent: "space-between",
    // marginBottom: 10,
  },
  itemWrapper: {
    flex: 1,
    // marginHorizontal: 5,
  },
  listContent: {
    // paddingBottom: 20,
  },
});

export default HomeScreen;
