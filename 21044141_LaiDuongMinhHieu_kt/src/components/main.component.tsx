import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const MainComponent = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text
                style={{
                    marginTop: 100,
                    marginBottom: 100,
                    fontStyle: "italic",
                    fontSize: 16,
                    margin: "auto",
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                }}
            >
                A premium online store for {"\n"} sporter and their stylish choice
            </Text>
            <View
                style={{
                    width: "90%",
                    paddingVertical: 12,
                    backgroundColor: "#f7e5e4",
                    margin: "auto",
                    borderRadius: 32,
                }}
            >
                <View
                    style={{
                        width: "80%",
                        borderWidth: 1,
                        borderColor: "yellow",
                        margin: "auto",
                    }}
                >
                    <Image
                        style={{
                            width: 320,
                            height: 300,
                            margin: "auto",
                        }}
                        source={require("../../assets/img/xe.png")}
                    />
                </View>
            </View>

            <Text
                style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: 32,
                    marginTop: 24,
                }}
            >
                POWER BIKE {"\n"} SHOP
            </Text>

            <TouchableOpacity
                style={{
                    width: "70%",
                    backgroundColor: "#e94141",
                    paddingVertical: 12,
                    marginTop: 32,
                    margin: "auto",
                    borderRadius: 32,
                }}
                onPress={() => {
                    navigation.navigate("screen_2");
                }}
            >
                <Text style={{ color: "#fff", textAlign: "center", fontSize: 32 }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
};
