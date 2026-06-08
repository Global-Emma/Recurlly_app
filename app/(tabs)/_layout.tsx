import "@/global.css"
import { Tabs } from "expo-router";
import { tabs } from "@/constants/data"
import { colors, components } from "@/constants/theme"
import { View } from "react-native";
import clsx from "clsx";
import { Image } from 'expo-image'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar

const TabIcon = ({focused, icon}: TabIconProps)=>{
    return (
        <View className={"size-12 items-center justify-center"}>
            <View className={clsx("size-12 items-center justify-center rounded-full", focused && "bg-accent")}>
                <Image source={icon} className="size-6" />
            </View>
        </View>
    )
}

const TabLayout = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tabs screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom,tabBar.horizontalInset ),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: 'center',
                }
            }}>

            {tabs.map((tab)=>{
                return (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            title: tab.title,
                            tabBarIcon: ({focused})=>{
                                return <TabIcon focused={focused} icon={tab.icon} />
                            }}
                        }
                    />
                )
            })}

  </Tabs>
          )};

export default TabLayout;
