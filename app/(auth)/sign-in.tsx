import {Text, View} from "react-native";
import {Link} from "expo-router";

const SignIn = ()=>{
    return (
        <View>
            <Text>SignIn</Text>
            <Link href={"/(auth)/sign-up"}>Create an Account Now</Link>
        </View>
    )
}

export default SignIn