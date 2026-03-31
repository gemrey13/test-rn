import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>

            <Link href={"/(auth)/sign-in"}>Sign in!</Link>
            <Link href={"/(auth)/sign-up"}>Sign up!</Link>
        </View>
    );
}