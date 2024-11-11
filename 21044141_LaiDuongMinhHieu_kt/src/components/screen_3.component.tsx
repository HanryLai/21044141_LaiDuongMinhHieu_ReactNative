import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";

export const Screen_3 = ({ navigation, route }) => {
    // const route = useRoute();
    const navigationHook = useNavigation();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios
            .get("https://67089ae28e86a8d9e42f653c.mockapi.io/api/product/" + route.params.id)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                console.log("data", data);
                setProduct(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <View style={{ paddingHorizontal: 12, flex: 1 }}>
            <Image
                style={{
                    width: "100%",
                    height: 400,
                    borderRadius: 12,
                }}
                source={{ uri: product.image }}
            />
            <Text
                style={{
                    fontSize: 28,
                }}
            >
                {product.title}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontStyle: "italic",
                    }}
                >
                    15% OFF I{" "}
                    <Text
                        style={{
                            color: "#e94141",
                            fontSize: 20,
                        }}
                    >
                        {product.price}$
                    </Text>
                </Text>
                <Text style={{ textDecorationLine: "line-through" }}>449$</Text>
            </View>
            <Text
                style={{
                    fontSize: 28,
                    marginVertical: 20,
                    fontStyle: "italic",
                }}
            >
                Description
            </Text>
            <Text>{product.description}</Text>
            <View
                style={{
                    position: "absolute",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    bottom: 20,
                    width: "100%",
                }}
            >
                <Image
                    style={{
                        marginLeft: "auto",
                        width: 42,
                        height: 42,
                    }}
                    source={require("../../assets/img/tym_cart.png")}
                />
                <TouchableOpacity
                    onPress={() => navigationHook.navigate("add_screen")}
                    style={{
                        backgroundColor: "#e94141",
                        width: "60%",
                        paddingVertical: 8,
                        marginLeft: "auto",
                        borderRadius: 16,
                    }}
                >
                    <Text
                        style={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: 20,
                        }}
                    >
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
