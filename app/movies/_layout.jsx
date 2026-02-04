import { Stack } from "expo-router";

export default function MoviesLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center", headerBackTitle: "Back to List" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details/[mediaType]/[id]" options={{ title: "Details" }} />
    </Stack>
  );
}


