// src/app/_layout.tsx
import { Stack } from 'expo-router';
import useColorScheme from '../utils/useColorScheme';
import { lightTheme, darkTheme } from '../styles/theme';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
