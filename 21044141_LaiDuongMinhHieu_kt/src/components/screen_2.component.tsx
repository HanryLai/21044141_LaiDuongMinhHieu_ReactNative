import { Text, View } from "react-native";

export const Screen_2 = () => {
    return (
        <View
            style={{
                marginTop: 100,
            }}
        >
            <Text
                style={{
                    color: "#e94141",
                    fontSize: 28,
                    fontWeight: "bold",
                }}
            >
                The world’s Best Bike
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: "auto",
                    marginTop: 20,
                }}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#e94141",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                    }}
                >
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 18,
                        }}
                    >
                        All
                    </Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#e94141",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                    }}
                >
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 18,
                        }}
                    >
                        Roadbike
                    </Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#e94141",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                    }}
                >
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 18,
                        }}
                    >
                        Mountain
                    </Text>
                </View>
            </View>
        </View>
    );
};
