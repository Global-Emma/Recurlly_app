import { Text, View } from "react-native";
import {Link} from "expo-router";
import { styled } from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Settings = ()=>{
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Settings</Text>
            <Link href={"/(auth)/sign-up"}>Create an Account</Link>
        </SafeAreaView>
    )
}

export default Settings