// /layouts/TabLayout.js
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { darkTheme } from "../../constants/theme";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: darkTheme.tabBar,
          borderTopColor: "#222", // subtle top border
        },
        tabBarActiveTintColor: darkTheme.activeTint,
        tabBarInactiveTintColor: darkTheme.inactiveTint,
        headerStyle: {
          backgroundColor: darkTheme.background,
        },
        headerTitleStyle: {
          color: darkTheme.text,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
