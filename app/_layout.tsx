import { Stack } from "expo-router";
import "@/global.css"

export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        {/* This ensures the tabs group is recognized as the main entry point */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* This keeps the auth group available but secondary */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
  );
}