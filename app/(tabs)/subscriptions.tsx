import { Text, View } from "react-native";
import {Link} from "expo-router";
import { styled } from "nativewind";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = ()=>{
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Subscribe</Text>
            <Link href={"/(auth)/sign-up"}>Subscribe now</Link>
        </SafeAreaView>
    )
}

export default Subscriptions