// /app/(tabs)/index.js
import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global.styles";

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Dark Themed Home</Text>
    </View>
  );
};

export default HomeScreen;
