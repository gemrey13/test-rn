import {Text, View} from "react-native";
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <View>
            <Text>Hello Sign In!</Text>
            <Link href={"/(auth)/sign-up"}>Sign up!</Link>
        </View>
    )
};

export default SignIn;