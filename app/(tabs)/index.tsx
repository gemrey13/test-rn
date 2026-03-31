import { Text } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-5xl font-sans-bold text-primary ">Home</Text>

            <Link href={"/onboarding"} className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Go to onboarding!</Link>
            <Link href={"/(auth)/sign-in"} className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Sign in!</Link>
            <Link href={"/(auth)/sign-up"} className="mt-4 rounded font-sans-bold bg-primary text-white p-4">Sign up!</Link>
        </SafeAreaView>
    );
}