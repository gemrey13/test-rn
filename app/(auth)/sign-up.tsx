import {Text, View} from "react-native";
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>Hello Sign Up!</Text>
            <Link href={"/(auth)/sign-in"}>Sign in!</Link>
        </View>
    )
};

export default SignUp;