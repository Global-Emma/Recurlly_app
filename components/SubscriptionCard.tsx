import {Pressable, Text, View} from "react-native";
import {Image} from "expo-image";
import {formatCurrency, formatStatusLabel, formatSubscriptionDateTime} from "@/lib/utils";
import clsx from "clsx";


const SubscriptionCard = ({
                              name,
                              price,
                              currency,
                              billing,
                              icon,
                              color,
                              category,
                              plan,
                              paymentMethod,
                              renewalDate,
                              startDate,
                              status,
                              expanded,
                              onPress
                          }: SubscriptionCardProps) => {
    return (
        <Pressable onPress={onPress}
                   className={clsx("rounded-2xl", "border", "border-border", "p-4", expanded ? "bg-subscription" : "bg-card")}
                   style={!expanded && color ? {backgroundColor: color} : undefined}>
            <View className={"flex-row items-center py-2"}>
                <View className={"min-w-0 flex-1 flex-row items-center gap-3"}>
                    <Image
                        source={icon}
                        className={"size-16 rounded-lg"}
                    />
                    <View className={"min-w-0 flex-1"}>
                        <Text numberOfLines={1} className={"mb-1 text-lg font-sans-bold text-primary"}>{name}</Text>
                        <Text numberOfLines={1} ellipsizeMode={"tail"} className={"sub-meta"}>
                            {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
                        </Text>
                    </View>
                </View>
                <View className={"ml-3 shrink-0 items-end"}>
                    <Text
                        className={"mb-1 text-lg font-sans-bold text-primary"}>{formatCurrency(price, currency)}</Text>
                    <Text className={"text-sm font-sans-medium text-muted-foreground"}>{billing}</Text>
                </View>
            </View>

            {expanded && (
                <View className={"mt-6 gap-4"}>
                    <View className={"gap-6"}>
                        <View className={"flex-row items-center justify-between gap-3"}>
                            <view className={"min-w-0 flex-1 flex-row items-center gap-2"}>
                                <Text
                                    className={"shrink-0 text-base font-sans-medium text-muted-foreground"}>Payment:</Text>
                                <Text numberOfLines={1} ellipsizeMode={"tail"}
                                      className={"flex-1 font-sans-bold text-primary"}>
                                    {paymentMethod?.trim()}
                                </Text>
                            </view>
                        </View>
                        <View className={"flex-row items-center justify-between gap-3"}>
                            <view className={"min-w-0 flex-1 flex-row items-center gap-2"}>
                                <Text
                                    className={"shrink-0 text-base font-sans-medium text-muted-foreground"}>Category:</Text>
                                <Text numberOfLines={1} ellipsizeMode={"tail"}
                                      className={"flex-1 font-sans-bold text-primary"}>
                                    {category?.trim() || plan?.trim()}
                                </Text>
                            </view>
                        </View>
                        <View className={"flex-row items-center justify-between gap-3"}>
                            <view className={"min-w-0 flex-1 flex-row items-center gap-2"}>
                                <Text
                                    className={"shrink-0 text-base font-sans-medium text-muted-foreground"}>Started:</Text>
                                <Text numberOfLines={1} ellipsizeMode={"tail"}
                                      className={"flex-1 font-sans-bold text-primary"}>
                                    {startDate ? formatSubscriptionDateTime(startDate) : ''}
                                </Text>
                            </view>
                        </View>
                        <View className={"flex-row items-center justify-between gap-3"}>
                            <view className={"min-w-0 flex-1 flex-row items-center gap-2"}>
                                <Text
                                    className={"shrink-0 text-base font-sans-medium text-muted-foreground"}>Renewal
                                    date:</Text>
                                <Text numberOfLines={1} ellipsizeMode={"tail"}
                                      className={"flex-1 font-sans-bold text-primary"}>
                                    {renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}
                                </Text>
                            </view>
                        </View>
                        <View className={"flex-row items-center justify-between gap-3"}>
                            <view className={"min-w-0 flex-1 flex-row items-center gap-2"}>
                                <Text
                                    className={"shrink-0 text-base font-sans-medium text-muted-foreground"}>Status:</Text>
                                <Text numberOfLines={1} ellipsizeMode={"tail"}
                                      className={"flex-1 font-sans-bold text-primary"}>
                                    {status ? formatStatusLabel(status) : ''}
                                </Text>
                            </view>
                        </View>
                    </View>
                </View>
            )}
        </Pressable>
    )
}

export default SubscriptionCard